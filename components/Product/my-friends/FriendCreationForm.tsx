import Form from "@/components/Global/FormComponents/Form";
import { getClientProfile } from "@/utils/getClientProfile";
import { createClient } from "@/utils/supabase/client";
import { FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Input from "@/components/Global/FormComponents/Input";
import Button from "@/components/Global/Button";
import { useRouter } from "next/navigation";
import { useClipboard } from "@/hooks/useClipboard";
import { shareSocials } from "@/lib/shareSocials";
import { useState, useEffect } from "react";
import { Tables } from "@/types/database.types";

function FriendCreationForm({ closeModal }: { closeModal: () => void }) {
  const router = useRouter();
  const [writeText, hasCopied] = useClipboard();
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const socials = shareSocials(
    "Let's connect on FriendsCodes, so we can redeem each other's referral codes and enjoy the rewards together!",
    `${window.origin}/invitation?friend=${profile?.user_name}`,
  );

  useEffect(() => {
    async function setProfileState() {
      const { profile } = await getClientProfile();
      setProfile(profile);
    }
    setProfileState();
  }, []);

  const addFriend = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>,
  ) => {
    const { user } = await getClientProfile();

    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("id")
      .or(
        `user_name.ilike.${values.friend.trim()},email.ilike.${values.friend.trim()}`,
      )
      .single();

    if (!error && user) {
      //Prevent that user can add themselve
      if(data.id == user.id){
        actions.setFieldError("friend", "Can't add yourself as a friend! 🤭")
        return;
      } 
    
      const { error: creationError } = await supabase
        .from("friends")
        .insert({ friend_id: data.id, user_id: user?.id });
      if (!creationError) {
        closeModal();
        router.refresh();
      } else {
        if (creationError?.code == "23505") {
          actions.setFieldError("friend", "You are already friends!");
        }
        console.log(creationError);
      }
    } else {
      if (error?.code == "PGRST116") {
        actions.setFieldError("friend", "Couldn't find that user! 😯");
      } else {
        actions.setFieldError("friend", "An error occured!");
      }
    }
  };

  return (
    <Form
      onSubmit={addFriend}
      initialValues={{ friend: "" }}
      validationSchema={Yup.object().shape({
        friend: Yup.string().required("Email or username required"),
      })}
    >
      <div className="rounded-2xl border-1 border-[#ffffff20] bg-[#333350] p-3">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a]">
            <Image
              src={"/icons/add-user.svg"}
              width={22}
              height={22}
              alt="20"
            />
          </div>
          <div className="text-left">
            <p className="text-[17px] font-semibold text-white">
              Search your friend
            </p>
            <p className="text-[14px] text-[#9496A1]">
              Search by email or username.
            </p>
          </div>
        </div>
        <Input
          type="text"
          name="friend"
          className="border-[2.4px] border-dashed border-[#5c6484] pr-9 text-white"
          placeholder="Add username or email"
          autoComplete="off"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map(({ company, href }) => {
            return (
              <Button
                key={company}
                variant={"outline"}
                size={"sm"}
                className="flex size-[40px] items-center justify-center rounded-full p-[unset]"
                onClick={() => window.open(href, "_blank")}
                type="button"
              >
                <Image
                  src={`/company-logos/${company}.svg`}
                  width={20}
                  height={20}
                  alt=""
                />
              </Button>
            );
          })}
        </div>
      </div>
      <div className="mt-5 flex gap-3 xs:flex-col-reverse">
        <Button
          type="button"
          variant={"secondary"}
          className="flex grow-[1] basis-0 justify-center gap-2"
          onClick={async () => {
            const { profile } = await getClientProfile();
            await writeText(
              `${window.origin}/invitation?friend=${profile?.user_name}`,
            );
          }}
        >
          <Image src={"/icons/link.svg"} width={20} height={20} alt="" />
          {hasCopied ? "Copied!" : "Use invitation link"}
        </Button>
        <Button className="grow-[1] basis-0" type="submit">
          Add friend
        </Button>
      </div>
    </Form>
  );
}

export default FriendCreationForm;

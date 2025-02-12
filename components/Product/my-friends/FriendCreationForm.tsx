import Form from "@/components/Global/FormComponents/Form";
import { getClientProfile } from "@/utils/getClientProfile";
import { createClient } from "@/utils/supabase/client";
import { FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Input from "@/components/Global/FormComponents/Input";
import Button from "@/components/Global/Button";
import { useRouter } from "next/navigation";

function FriendCreationForm({ closeModal }: { closeModal: () => void }) {
  const router = useRouter();
  const addFriend = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>,
  ) => {
    const { user } = await getClientProfile();

    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("id")
      .or(`user_name.ilike.${values.friend},email.ilike.${values.friend}`)
      .single();

    if (!error && user) {
      console.log(data.id);
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
      }
      console.log(error);
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
      <div className="rounded-xl border-1 border-[#ffffff20] bg-[#333350] p-3">
        <div className="mb-3 flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-lg border-1 border-[#ffffff1b] bg-[#47476a]">
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
      </div>
      <div className="mt-5 flex gap-3 xs:flex-col-reverse">
        <Button
          type="button"
          variant={"secondary"}
          className="flex justify-center gap-2"
          onClick={async () => {
            const { profile } = await getClientProfile();
            await navigator.clipboard.writeText(`${window.origin}/invitation?friend=${profile?.user_name}`)
          }}
        >
          <Image src={"/icons/link.svg"} width={20} height={20} alt="" />
          Use invitation link
        </Button>
        <Button className="flex-grow" type="submit">
          Add friend
        </Button>
      </div>
    </Form>
  );
}

export default FriendCreationForm;

import RegistrationForm from "@/components/Global/auth/RegistrationForm";

function signup() {
  return (
    <div className="flex h-screen w-full justify-center pt-[15vh] xs:pt-[6vh]">
      <div className="mx-[3%] xs:mx-[5%]">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default signup;

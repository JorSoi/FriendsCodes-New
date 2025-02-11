import NavBar from "@/components/Landing/NavBar";

function page() {
  return (
    <div className="justify-center flex pt-[25vh]">
      <NavBar />
      <div className="w-full max-w-[880px]">
        <h2 className="text-3xl font-semibold text-white">
          Terms and Conditions
        </h2>
        <p>Lorem ipsum dolor sit amet consecetur blablabla ...</p>
      </div>
    </div>
  );
}

export default page;

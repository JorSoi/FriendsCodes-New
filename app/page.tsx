import NavBar from "@/Components/Landing/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div id="how-it-works" className="w-full h-20 mt-[100vh] bg-red-400">How it works</div>
      <div id="about" className="w-full h-20 mt-[100vh] bg-red-400">about</div>
      <div id="blog" className="w-full h-20 mt-[100vh] bg-red-400">blog</div>
    </>
   
  
  );
}

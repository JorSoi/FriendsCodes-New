import CodeContainer from "@/components/Global/CodeContainer";
import Tab from "@/components/Product/Tab";

async function Page() {

  return (
    <div className="mx-[3%] flex flex-col items-center justify-center gap-5">
      <Tab />
      <CodeContainer>
      <div className="grid grid-cols-4 gap-3 lg:grid-cols-4 md:grid-cols-3 md:gap-2 sm:grid-cols-2">
      {[1,2,3,4,5,6,7,8,9].map((e) => {
        return <div key={e} className="w-full h-[120px] bg-[#ffffff10] animate-pulse rounded-lg"></div>
      })}
    </div>
      </CodeContainer>
    </div>
  );
}

export default Page;

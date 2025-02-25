import CodeContainer from "@/components/Global/CodeContainer";
import Tab from "@/components/Product/Tab";

async function Page() {
  return (
    <div className="mx-[3%] flex flex-col items-center justify-center gap-5">
      <Tab />
      <CodeContainer>
        <div className="grid grid-cols-5 gap-3 lg:grid-cols-4 md:grid-cols-3 md:gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
            return (
              <div
                key={e}
                className="flex h-[120px] w-full animate-pulse flex-col items-center justify-center gap-3 rounded-lg bg-[#ffffff10]"
              >
                <div className="size-12 animate-pulse rounded-2xl bg-[#ffffff10]"></div>
                <div className="h-4 w-[50%] animate-pulse rounded-md bg-[#ffffff10]"></div>
              </div>
            );
          })}
        </div>
      </CodeContainer>
    </div>
  );
}

export default Page;

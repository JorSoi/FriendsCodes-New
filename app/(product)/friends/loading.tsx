import CodeContainer from "@/components/Global/CodeContainer";
import Tab from "@/components/Product/Tab";

async function Page() {
  return (
    <div className="mx-[3%] flex flex-col items-center justify-center gap-5">
      <Tab />
      <CodeContainer>
        <div className="grid grid-cols-4 gap-3 lg:grid-cols-4 md:grid-cols-3 md:gap-2 sm:grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((e) => {
            return (
              <div
                key={e}
                className="flex h-[120px] w-full animate-pulse flex-col justify-between rounded-lg bg-[#ffffff10] p-3"
              >
                <div className="grid animate-pulse grid-cols-4 flex-wrap justify-items-center gap-2">
                  {[1, 2, 3, 4].map((e) => {
                    return (
                      <div
                        key={e}
                        className="h-9 w-full rounded-lg bg-[#ffffff10]"
                      ></div>
                    );
                  })}
                </div>
                <div className="w-full animate-pulse space-y-2">
                  <div className="h-4 w-full rounded-md bg-[#ffffff10]"></div>
                  <div className="h-4 w-[40%] rounded-md bg-[#ffffff10]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </CodeContainer>
    </div>
  );
}

export default Page;

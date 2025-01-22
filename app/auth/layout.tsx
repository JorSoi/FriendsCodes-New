// This layout component only counts for auth pages and ensures that all forms have the identical layout setting. Thus, its just here for positioning/layout purposes.

function layout({children} : {children : React.ReactNode}) {
    return (
        <div className="flex h-screen w-full justify-center pt-[15vh] xs:pt-[6vh]">
        <div className="mx-[3%] xs:mx-[5%]">
            <div className="pb-[15vh]">
                {children}
            </div>
        </div>
      </div>
    );
}

export default layout;
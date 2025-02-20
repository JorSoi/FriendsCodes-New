function EmptyState({profileName} : {profileName : string | null}) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
        <div className="flex size-[50px] items-center justify-center rounded-2xl border-1 border-[#ffffff10] bg-[#47476a] p-[10px] text-2xl">
          😰
        </div>
        <h1 className="mt-6 text-xl font-bold">
          {profileName} has not added any referrals yet!
        </h1>
        <p className="mt-2 max-w-[500px] text-[#a1a3ae]">
            Looks empty in here! Best time to remind {profileName} about adding referrals to their profile.
        </p>
      </div>
    );
}

export default EmptyState;
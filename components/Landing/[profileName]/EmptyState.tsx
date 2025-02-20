function EmptyState({profileName} : {profileName : string}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex size-[50px] items-center justify-center rounded-2xl border-1 border-[#ffffff10] bg-[#47476a] p-[10px] text-2xl">
        🤔
      </div>
      <h1 className="pt-6 text-xl font-bold">
        Hmm... never heard of &quot;{profileName}&quot;
      </h1>
      <p className="mt-2 max-w-[500px] text-[#a1a3ae]">
        We sadly couldn&apos;t find this profile. Please check the link again or
        tell the one who shared it with you.
      </p>
    </div>
  );
}

export default EmptyState;

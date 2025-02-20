import AddItemButton from "../AddItemButton";

function EmptyCodes() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <AddItemButton className="relative max-w-[200px]" />

        <h1 className="pt-6 text-xl font-bold">Add any referral code!</h1>
        <p className="mb-6 mt-2 max-w-[400px] space-y-2 text-[#a1a3ae]">
          Select any store, Paste your referral code or link, Share your profile
          and earn referrals! ✅ 💸 🔥
        </p>
      </div>
    </div>
  );
}

export default EmptyCodes;

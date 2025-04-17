import { Tables } from "@/types/database.types";
import { UserCodeWithRelations } from "@/types/general.types";
import { compareDesc } from "date-fns";

// Sort usercodes to display pinned referrals first and the rest after
const orderUserCodes = (usercodes: UserCodeWithRelations[] | null) => {
  const pinnedCodes = (
    usercodes?.filter((code) => !!code.pinned_at) || []
  ).sort((a: Tables<"user_codes">, b: Tables<"user_codes">) =>
    compareDesc(new Date(a.pinned_at!), new Date(b.pinned_at!)),
  );
  const remainingCodes = usercodes?.filter(
    (userCodes) => !!!userCodes.pinned_at,
  );

  return [...(pinnedCodes || []), ...(remainingCodes || [])];
};

export default orderUserCodes;

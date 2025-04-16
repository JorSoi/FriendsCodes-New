// Returns correct root URL based on what env the code is built on. For anything outside of dev env we rely on vercel's own env variable to keep it as dynamic as possible.
const getEnvRootURL = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    // For preview deployments
    return `https://staging.friendscodes.app`;
  } else {
    // For production
    return "https://friendscodes.app";
  }
};

export default getEnvRootURL;

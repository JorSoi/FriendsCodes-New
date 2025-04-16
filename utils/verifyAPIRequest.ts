// Checks if API request contains Authorization header with correct auth_token. Wrapped in try catch statement can stop the entire API request when throwing an error.
const verifyAPIRequest = (req: Request) : {verified: boolean, details: string}=> {
  if (!process.env.API_ACCESS_TOKEN)
    return {
      verified: false,
      details: "Server configuration error. Can't find API Token.",
    };

  const authHeader = req.headers.get("authorization");
  const verified =
    authHeader &&
    authHeader.startsWith("Bearer ") &&
    authHeader.split(" ")[1] === process.env.API_ACCESS_TOKEN;

  if (!verified) {
    let errorDetails = [];

    if (!authHeader) {
      errorDetails.push("Missing authorization header");
    } else if (!authHeader.startsWith("Bearer ")) {
      errorDetails.push("Incorrect auth format. Doesn't start with 'Bearer '");
    } else if (authHeader?.split(" ")[1] !== process.env.API_ACCESS_TOKEN) {
      errorDetails.push("Incorrect API Access Token.");
    }

    return {
      verified: false,
      details: errorDetails.join(", "),
    };
  }

  return {
    verified: true,
    details: "Verification Successful!",
  };
};

export default verifyAPIRequest;
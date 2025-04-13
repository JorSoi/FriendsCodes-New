// Checks if API request contains Authorization header with correct auth_token. Wrapped in try catch statement can stop the entire API request when throwing an error.
const verifyAPIRequest = (req: Request) => {
    const authHeader = req.headers.get("authorization");
    const verified =
      authHeader &&
      authHeader.startsWith("Bearer ") &&
      authHeader.split(" ")[1] === process.env.API_ACCESS_TOKEN;
  
    if (!verified) {
      throw new Error("Unauthorized");
    }
  };

export default verifyAPIRequest;
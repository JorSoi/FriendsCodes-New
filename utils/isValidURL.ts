export function isValidURL(referralValue: string): boolean {
    try {
      const url = new URL(
        referralValue.startsWith("http")
          ? referralValue
          : `https://${referralValue}`,
      );
      // Check if the protocol is either http or https
      if (!/^https?:$/.test(url.protocol)) {
        return false;
      }
      // Check if the hostname is a valid domain structure
      const hostname = url.hostname;
      // Regex to validate domain structure (excludes localhost, IPs, etc.)
      const hostnameRegex = /^(?!\d+$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return hostnameRegex.test(hostname);
    } catch {
      return false;
    }
  }
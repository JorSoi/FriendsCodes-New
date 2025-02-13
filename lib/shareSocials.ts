export const shareSocials = (text: string, url: string) : {company: string, href: string}[] => [
    {
      company: "reddit",
      href: `https://reddit.com/submit?url=${url}&title=${text}`,
    },
    {
      company: "facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u&quote=${text}: ${url}`,
    },
    {
      company: "telegram",
      href: `https://telegram.me/share/url?url=${url}&text=${text}`,
    },
    {
      company: "whatsapp",
      href: `whatsapp://send?text=${text}: ${url}`,
    },
    {
      company: "twitter",
      href: `http://twitter.com/share?text=${text}&url=${url}&hashtags=referralCodes, referral,redeem`,
    },
  ] 
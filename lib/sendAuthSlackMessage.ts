"use server";

import getEnvRootURL from "@/utils/getEnvRootURL";
import { WebClient } from "@slack/web-api";

export const sendAuthSlackMessage = async (
  username: string,
  method: "social" | "email",
) => {
  const slack = new WebClient(process.env.SLACK_APP_TOKEN);

  await slack.chat.postMessage({
    channel: "C08JPHQUEAD",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `We've got a new user!🎉`,
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `<${getEnvRootURL()}/${username}|${username}> just registered via *${method}*`,
        },
      },
    ],
  });
};

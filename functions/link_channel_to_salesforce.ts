import type { SlackFunctionHandler } from "deno-slack-sdk/types.ts";
import type { LinkChannelToSalesforceFunction } from "../manifest.ts";
import { setSettings } from "../backend/storage.ts";

const link_channel_to_salesforce: SlackFunctionHandler<
  typeof LinkChannelToSalesforceFunction.definition
> = async (
  { inputs, env, token },
) => {
  await setSettings(token, {
    channel_id: inputs.channel_id,
    session_id: inputs.session_id,
    subdomain: inputs.subdomain,
    last_polled: new Date().getTime(),
  });

  return await {
    outputs: {},
  };
};

export default link_channel_to_salesforce;

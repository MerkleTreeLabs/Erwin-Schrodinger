import { WebhookClient } from "discord.js";
import { BasePluginType } from "knub";
import { Queue } from "../../Queue";
import { Webhooks } from "../../data/Webhooks";
import { z } from "zod";

export const zInternalPosterConfig = z.strictObject({});

export interface InternalPosterPluginType extends BasePluginType {
  config: z.infer<typeof zInternalPosterConfig>;
  state: {
    queue: Queue;
    webhooks: Webhooks;
    missingPermissions: boolean;
    webhookClientCache: Map<string, WebhookClient | null>;
  };
}

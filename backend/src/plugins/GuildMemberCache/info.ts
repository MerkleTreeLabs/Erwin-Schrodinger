import { ZeppelinPluginInfo } from "../../types";
import { zGuildMemberCacheConfig } from "./types.js";

export const guildMemberCachePluginInfo: ZeppelinPluginInfo = {
  prettyName: "Guild member cache",
  showInDocs: false,
  configSchema: zGuildMemberCacheConfig,
};

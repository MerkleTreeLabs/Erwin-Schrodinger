import { ZeppelinPluginInfo } from "../../types";
import { zGuildInfoSaverConfig } from "./types.js";

export const guildInfoSaverPluginInfo: ZeppelinPluginInfo = {
  prettyName: "Guild info saver",
  showInDocs: false,
  configSchema: zGuildInfoSaverConfig,
};

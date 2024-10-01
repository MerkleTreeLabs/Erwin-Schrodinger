import { ZeppelinPluginInfo } from "../../types";
import { zMessageSaverConfig } from "./types.js";

export const messageSaverPluginInfo: ZeppelinPluginInfo = {
  prettyName: "Message saver",
  showInDocs: false,
  configSchema: zMessageSaverConfig,
};

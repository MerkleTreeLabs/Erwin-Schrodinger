import { ZeppelinPluginInfo } from "../../types";
import { zGuildConfigReloaderPlugin } from "./types.js";

export const guildConfigReloaderPluginInfo: ZeppelinPluginInfo = {
  prettyName: "Guild config reloader",
  showInDocs: false,
  configSchema: zGuildConfigReloaderPlugin,
};

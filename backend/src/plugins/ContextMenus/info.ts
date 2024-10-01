import { ZeppelinPluginInfo } from "../../types";
import { zContextMenusConfig } from "./types.js";

export const contextMenuPluginInfo: ZeppelinPluginInfo = {
  showInDocs: false,
  configSchema: zContextMenusConfig,
  prettyName: "Context menu",
};

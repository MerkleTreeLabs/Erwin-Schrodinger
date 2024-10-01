import { ZeppelinPluginInfo } from "../../types";
import { zRoleManagerConfig } from "./types.js";

export const roleManagerPluginInfo: ZeppelinPluginInfo = {
  prettyName: "Role manager",
  showInDocs: false,
  configSchema: zRoleManagerConfig,
};

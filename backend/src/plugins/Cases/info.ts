import { ZeppelinPluginInfo } from "../../types";
import { trimPluginDescription } from "../../utils";
import { zCasesConfig } from "./types.js";

export const casesPluginInfo: ZeppelinPluginInfo = {
  showInDocs: true,
  prettyName: "Cases",
  configSchema: zCasesConfig,
  description: trimPluginDescription(`
    This plugin contains basic configuration for cases created by other plugins
  `),
};

import { ZeppelinPluginInfo } from "../../types";
import { zInternalPosterConfig } from "./types.js";


export const internalPosterPluginInfo: ZeppelinPluginInfo = {
  prettyName: "Internal poster",
  showInDocs: false,
  configSchema: zInternalPosterConfig,
};

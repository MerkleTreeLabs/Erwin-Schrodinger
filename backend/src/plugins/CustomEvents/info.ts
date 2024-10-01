import { ZeppelinPluginInfo } from "../../types";
import { zCustomEventsConfig } from "./types.js";

export const customEventsPluginInfo: ZeppelinPluginInfo = {
  prettyName: "Custom events",
  showInDocs: false,
  configSchema: zCustomEventsConfig,
};

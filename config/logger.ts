import pino from "pino";
import pretty from "pino-pretty";

export const logger = pino({
  level: "trace",
  prettifier: pretty,
});

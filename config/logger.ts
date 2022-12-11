import Pino from "pino";

const transport = Pino.transport({
  target: "pino-pretty",
  options: { colorize: true },
});

export const logger = Pino({ level: "trace" }, transport);

import Pino from "pino";

const transport = Pino.transport({
  target: "pino-pretty",
  options: { colorize: true },
});

const logger = Pino({ level: "trace" }, transport);

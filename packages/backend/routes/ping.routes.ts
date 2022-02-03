import type { FastifyPluginAsync } from "fastify";
import { PingResponse } from "../schema/ping.schema";
import { pong } from "../services/ping.service";
import { methods } from "../utils/methods";

const routes: FastifyPluginAsync = async (app) => {
  const { get } = methods(app);

  get("/ping", { response: PingResponse }, async () => {
    return pong();
  });
};

export default routes;

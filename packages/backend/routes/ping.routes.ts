import type { FastifyPluginAsync } from "fastify";
import { PingResponse } from "../schema/ping.schema";
import { pong } from "../services/ping.service";
import { route } from "../utils/route";

const routes: FastifyPluginAsync = async (app) => {
  route(app, "get", "/ping", { response: PingResponse }, async () => {
    return pong();
  });
};

export default routes;

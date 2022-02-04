import { rest } from "msw";

export const pingResponse = "pong!";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_BASE_URL}/ping`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.body(pingResponse));
  }),
];

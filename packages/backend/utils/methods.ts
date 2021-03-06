import { Static, TSchema } from "@sinclair/typebox";
import { FastifyInstance } from "fastify";

export const methods = (app: FastifyInstance) => ({
  get: route(app, "get"),
  post: route(app, "post"),
  put: route(app, "put"),
  delete: route(app, "delete"),
});

const route =
  (app: FastifyInstance, method: "get" | "post" | "put" | "delete") =>
  <
    ReqBodySchema extends TSchema,
    ReqQuerySchema extends TSchema,
    ReqParamsSchema extends TSchema,
    ReqHeadersSchema extends TSchema,
    ResSchema extends TSchema
  >(
    path: string,
    schema: {
      request?: {
        body?: ReqBodySchema;
        querystring?: ReqQuerySchema;
        params?: ReqParamsSchema;
        headers?: ReqHeadersSchema;
      };
      response?: ResSchema;
    },
    handler: (request: {
      body: Static<ReqBodySchema>;
      query: Static<ReqQuerySchema>;
      params: Static<ReqParamsSchema>;
      headers: Static<ReqHeadersSchema>;
    }) => Promise<Result<ResSchema>>
  ) => {
    app[method](
      path,
      {
        schema: {
          ...schema.request,
          response: schema.response ? { 200: schema.response } : undefined,
        },
      },
      async (request, reply) => {
        const result = await handler(request);
        if (hasStatusCode(result)) {
          reply.status(result.statusCode).send(result.body);
        } else {
          reply.status(method === "post" ? 201 : 200).send(result);
        }
      }
    );
  };

const hasStatusCode = <ResSchema extends TSchema>(
  result: Result<ResSchema>
): result is ResultWithStatusCode<ResSchema> => {
  return !!(result as any)?.statusCode;
};

type Result<ResSchema extends TSchema> =
  | Static<ResSchema>
  | ResultWithStatusCode<ResSchema>;
type ResultWithStatusCode<ResSchema extends TSchema> = {
  statusCode: number;
  body: Static<ResSchema>;
};

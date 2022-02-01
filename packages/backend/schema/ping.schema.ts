import { Static, Type } from "@sinclair/typebox";

export const PingResponse = Type.String();

export type PingResponse = Static<typeof PingResponse>;

import { Socket } from "socket.io";

import type Response from "./response";
import { ClientToServerEventMap, ServerToClientEventMap } from "../types";

export type TypedSocket = Socket<ClientToServerEventMap, ServerToClientEventMap>;

export type ClientToServerCallback<P, R> = (payload: P, cb: (res: Response<R>) => void, socket?: TypedSocket) => void;
export type ServerToClientCallback<P, R> = (payload: Response<P>, cb: (res: R) => void) => void;

import { Server } from "socket.io";
import { TypedServerSocket } from "../common/socket.types";
import { ClientToServerEventMap, ServerToClientEventMap } from "../types";
import type Response from "./response";


export type ClientToServerCallback<P, R> = (payload: P, cb?: (res: Response<R>) => void, socket?: TypedServerSocket, io?: Server<ClientToServerEventMap, ServerToClientEventMap>) => void;
export type ServerToClientCallback<P, R> = (payload: Response<P>, cb?: (res: R) => void) => void;

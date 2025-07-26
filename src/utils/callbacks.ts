import { TypedServerSocket } from "../common/socket.types";
import type Response from "./response";


export type ClientToServerCallback<P, R> = (payload: P, cb?: (res: Response<R>) => void, socket?: TypedServerSocket) => void;
export type ServerToClientCallback<P, R> = (payload: Response<P>, cb?: (res: R) => void) => void;

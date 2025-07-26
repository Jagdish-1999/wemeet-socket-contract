import { Socket as ServerSocket } from "socket.io";
import { Socket as ClientSocket } from "socket.io-client";
import { ClientToServerEventMap, ServerToClientEventMap } from "../types";

export type TypedServerSocket = ServerSocket<ClientToServerEventMap, ServerToClientEventMap>;
export type TypedClientSocket = ClientSocket<ServerToClientEventMap, ClientToServerEventMap>;

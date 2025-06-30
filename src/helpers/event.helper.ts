
import { ClientToServerEventMap } from "../types/event.map";
import { ClientToServerCallback } from "../utils/callbacks";

export type ServiceHandler<E extends keyof ClientToServerEventMap> = (
    payload: ClientToServerEventMap[E] extends ClientToServerCallback<infer P, any> ? P: never
) => ClientToServerEventMap[E] extends ClientToServerCallback<any, infer D> ? Promise<D> : never;

import { Web3UpdateProps } from "./types";

export const Web3ActionTypes = {
  WEB3_UPDATE: "WEB3_UPDATE",
};

export type Web3Action = ReturnType<typeof update>
export function update(payload: Web3UpdateProps) {
  return {
    type: Web3ActionTypes.WEB3_UPDATE,
    payload
  }
};
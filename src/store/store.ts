import { getAllUniverses } from "../repository/indexDb";
import type { TaleGridStore } from "./types";

export let store: TaleGridStore;

export function initializeStore(): void {
  store = createNewStore();
}

function createNewStore(): TaleGridStore {
  return {
    getAllUniverses: async () => {
      const universes = await getAllUniverses();
      return universes;
    },
  };
}

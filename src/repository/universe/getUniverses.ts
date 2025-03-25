import { db } from "../../db/db";
import type { Universe } from "../../types/universe";

export async function getUniverses(): Promise<Universe[]> {
  return new Promise((resolve, reject) => {
    const readTransaction = db.transaction("universes", "readonly");
    const universesObjectStore = readTransaction.objectStore("universes");
    const getAllRequest = universesObjectStore.getAll();
    getAllRequest.onsuccess = () => {
      resolve(convertIndexDbUniversesToUniverses(getAllRequest.result));
    };
    getAllRequest.onerror = () => {
      reject(getAllRequest.error);
    };
  });
}

function convertIndexDbUniversesToUniverses(universe: any[]): Universe[] {
  return universe.map((universe) => convertIndexDbUniverseToUniverse(universe));
}

function convertIndexDbUniverseToUniverse(universe: any): Universe {
  return {
    id: universe.id,
    name: universe.name,
  };
}

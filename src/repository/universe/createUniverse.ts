import { db } from "../../db/db";
import type { Universe } from "../../types/universe";

export async function createUniverse(
  newUniverseName: string
): Promise<Universe> {
  return new Promise((resolve, reject) => {
    const createUniverseTransaction = db.transaction("universes", "readwrite");
    const universesStore = createUniverseTransaction.objectStore("universes");
    const newUniverse = {
      name: newUniverseName,
      id: crypto.randomUUID(),
    };
    const addRequest = universesStore.add(newUniverse);
    addRequest.onsuccess = () => {
      resolve(newUniverse);
    };
    addRequest.onerror = () => {
      reject(addRequest.error);
    };
  });
}

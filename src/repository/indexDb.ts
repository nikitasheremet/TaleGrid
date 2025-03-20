import { db } from "../db/db";

export async function getAllUniverses(): Promise<string[]> {
  const universes = await new Promise<string[]>((resolve, reject) => {
    const transaction = db.transaction("universes", "readonly");
    const objectStore = transaction.objectStore("universes");
    const request = objectStore.getAll();
    request.onsuccess = () => {
      resolve(request.result.map((universe: any) => universe.name));
    };
    request.onerror = () => {
      reject(request.error);
    };
  });

  return universes;
}

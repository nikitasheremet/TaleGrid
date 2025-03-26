import { createUniverse } from "../../repository/universe/createUniverse";
import type { Universe } from "../../types/universe";

export async function addNewUniverse(
  newUniverseName: string
): Promise<Universe> {
  return await createUniverse(newUniverseName);
}

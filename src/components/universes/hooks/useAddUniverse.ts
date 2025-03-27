import { ref } from "vue";
import type { Universe } from "../../../types/universe";
import { addNewUniverse } from "../../../service/universe/addNewUniverse";

export function useAddUniverse(
  addUniverseCallback: (newUniverse: Universe) => void
) {
  const newUniverseName = ref("");
  async function addUniverse(): Promise<void> {
    const addedUniverse = await addNewUniverse(newUniverseName.value);
    addUniverseCallback(addedUniverse);
  }
  return {
    newUniverseName,
    addUniverse,
  };
}

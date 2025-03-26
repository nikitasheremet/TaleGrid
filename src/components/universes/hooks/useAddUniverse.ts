import { ref } from "vue";
import type { Universe } from "../../../types/universe";
import { addNewUniverse } from "../../../service/universe/addNewUniverse";

export function useAddUniverse() {
  const newUniverseName = ref("");
  async function addUniverse(): Promise<Universe> {
    return await addNewUniverse(newUniverseName.value);
  }
  return {
    newUniverseName,
    addUniverse,
  };
}

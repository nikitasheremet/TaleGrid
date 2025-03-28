import { onMounted, ref } from "vue";
import type { Universe } from "../../../types/universe";
import { getAllUniverses } from "../../../service/universe/getAllUniverses";

export function useGetUniverses() {
  console.log("in useGetUniverses");
  const existingUniverses = ref<Universe[]>([]);
  const error = ref<Error | undefined>(undefined);

  onMounted(async () => {
    try {
      const universes = await getAllUniverses();
      existingUniverses.value = universes;
    } catch (err) {
      if (err instanceof Error) {
        error.value = err;
      }
    }
  });

  return {
    existingUniverses,
    error,
  };
}

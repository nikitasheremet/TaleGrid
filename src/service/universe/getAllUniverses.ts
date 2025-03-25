import { getUniverses } from "../../repository/universe/getUniverses";
import type { Universe } from "../../types/universe";

export async function getAllUniverses(): Promise<Universe[]> {
  return await getUniverses();
}

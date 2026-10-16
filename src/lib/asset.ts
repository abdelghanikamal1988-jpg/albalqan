export const ASSET_BASE_PATH = "/albalqan";

export function asset(path: string) {
  if (!path.startsWith("/")) return path;
  return `${ASSET_BASE_PATH}${path}`;
}

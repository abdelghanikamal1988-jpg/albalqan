export const ASSET_BASE_PATH = "/albalqan";

export function asset(path: string) {
  if (!path.startsWith("/") || path.startsWith(`${ASSET_BASE_PATH}/`)) {
    return path;
  }

  return `${ASSET_BASE_PATH}${path}`;
}

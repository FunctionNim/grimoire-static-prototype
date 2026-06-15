export function contextHref(path: "/sophia" | "/watcher", nodeId?: string) {
  if (!nodeId) return path;
  return `${path}?node=${encodeURIComponent(nodeId)}`;
}

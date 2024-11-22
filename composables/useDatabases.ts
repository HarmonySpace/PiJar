const database = new Map<string, string>();
database.set("main", "673d69050014807c7271");

export function useDatabaseId(databaseName: string): string {
  const databaseId = database.get(databaseName);
  if (!databaseId) {
    throw new Error(`Database ID for ${databaseName} not found`);
  }
  return databaseId;
}

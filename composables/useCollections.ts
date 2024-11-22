const collections = new Map<string, string>();
collections.set("accounts", "673d6a24000461cc94b3");
collections.set("transactions", "673d6d230001d135bce6");

export function useCollectionId(collectionName: string): string {
  const collectionId = collections.get(collectionName);
  if (!collectionId) {
    throw new Error(`Collection ID for ${collectionName} not found`);
  }
  return collectionId;
}

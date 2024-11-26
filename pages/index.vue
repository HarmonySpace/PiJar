<script setup lang="ts">
definePageMeta({
  middleware: ["unauthenticated"],
});

const appwrite = useAppwriteStore();

const documents = ref();
const connection = ref({
  db: "",
  accounts: "",
});

try {
  connection.value.db = useDatabaseId("main");
  connection.value.accounts = useCollectionId("accounts");
  const response = await appwrite.db.listDocuments(
    connection.value.db,
    connection.value.accounts,
    [],
  );
  if (response.documents.length > 0) {
    documents.value = response.documents;
  }
} catch (err) {
  documents.value = "No hay registros";
  console.log(err);
}

const logout = async () => {
  try {
    await appwrite.acc.deleteSession(appwrite.userSession.$id);
    return navigateTo("/login");
  } catch (err) {
    console.error("Error logging out:", err);
    return navigateTo("/login");
  }
};
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center bg-neutral-950">
    <div class="w-11/12 flex justify-center items-center">
      <section class="w-full flex items-center justify-center gap-8">
        <div
          v-for="document in documents"
          :key="document.$id"
          class="w-full flex flex-col flex-1 basis-60 bg-finn-800 rounded-3xl p-8"
        >
          <div class="w-full flex flex-col">
            <h1 class="text-3xl text-finn-200">
              {{ document.name }}
            </h1>
            <p class="text-xl text-finn-200">
              {{ document.description }}
            </p>
          </div>
          <div class="w-full flex gap-4 jsutify-between">
            <p class="flex-1 text-md text-finn-200">
              {{ document.color }}
            </p>
            <p class="flex-1 text-md text-finn-200">
              {{ document.icon }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["unauthenticated"],
});
const { account, database } = useAppwrite();
const user = ref();
const sessions = ref();
const userSession = ref();
const result = ref();
const connection = ref({
  db: "",
  accounts: "",
});
try {
  user.value = await account.get();
  sessions.value = await account.listSessions();
  userSession.value = sessions.value.sessions.find(
    (sess: any) => sess.userId === user.value.$id,
  );
  connection.value.db = useDatabaseId("main");
  connection.value.accounts = useCollectionId("accounts");
  result.value = await database.listDocuments(
    connection.value.db,
    connection.value.accounts,
    [],
  );
} catch (err) {
  console.log(err);
}

const logout = async () => {
  await account.deleteSession(userSession.value.$id);
  return navigateTo("/login");
};
</script>

<template>
  <div>
    <h1>Hello world</h1>
    <button @click="logout()">Logout</button>
  </div>
</template>

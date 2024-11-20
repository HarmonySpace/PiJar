<script setup lang="ts">
definePageMeta({
  middleware: ["unauthenticated"],
});
//const client = useSupabaseClient();
//const supabase = useSupabaseClient().auth;
const loginOut = async () => {
  console.log("logout");
  //const { error } = await supabase.signOut();
  //return navigateTo("/login");
};
//const { data: accounts } = await useAsyncData(async () => {
//  console.log("accounts");
//  //const { data, error } = await client.from("accounts").select("*");
//  //return data;
//});
</script>

<template>
  <div>
    <h1>Hello world</h1>
    <button @click="loginOut()">Logout</button>
    <h2>accounts?</h2>
  </div>
</template>

<script setup lang="ts">
const auth = useSupabaseClient().auth;
const credentials = ref({
  email: "",
  password: "",
});
const login = async () => {
  const { error } = await auth.signInWithPassword(credentials.value);
  if (error) {
    console.log(error);
  } else {
    return navigateTo("/");
  }
};
const handleEmail = (value: string) => {
  credentials.value.email = value;
};
const handlePassword = (value: string) => {
  credentials.value.password = value;
};
</script>

<template>
  <div
    class="w-full min-h-screen flex justify-center md:justify-between items-center"
  >
    <div
      class="basis-4/6 w-full h-screen bg-gradient-to-tr to-finn-500 via-medium-purple-950 from-neutral-950 rounded-e-[2rem]"
    ></div>
    <div
      class="w-10/12 sm:basis-2/6 h-full flex flex-col items-center justify-center"
    >
      <div class="max-w-md space-y-8">
        <div class="w-full flex flex-col items-center justify-center">
          <p class="text-center text-xl text-finn-500">Oink!</p>
          <h1 class="text-center text-6xl text-finn-100">Login</h1>
          <br />
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" @submit.prevent="login">
              <InputTextFields
                id="credentials_email"
                label="Correo electrónico"
                type="email"
                required
                placeholder="ejemplo@dominio.com"
                @update="(value: string) => handleEmail(value)"
              />
              <InputTextFields
                v-model="credentials.email"
                id="credentials_name"
                label="Contraseña"
                type="password"
                required
                placeholder="oink123"
                @update="(value: string) => handlePassword(value)"
              />
              <div>
                <ButtonText class="w-full" text="Acceder" variant="outlined" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

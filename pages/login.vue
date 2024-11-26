<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ["authenticated"],
});

const appwrite = useAppwriteStore();

const email = ref("");
const password = ref("");

const handleEmail = (value: string) => {
  email.value = value;
};
const handlePassword = (value: string) => {
  password.value = value;
};

const login = async () => {
  await appwrite.acc.createEmailPasswordSession(email.value, password.value);
  return navigateTo("/");
};
</script>

<template>
  <NuxtLayout name="login">
    <template #title>Acceder</template>
    <template #form>
      <form class="space-y-6" @submit.prevent="login()">
        <InputTextFields
          id="credentials_email"
          label="Correo electrónico"
          type="email"
          required
          placeholder="ejemplo@dominio.com"
          @update="(value: string) => handleEmail(value)"
        />
        <InputTextFields
          id="credentials_password"
          label="Contraseña"
          type="password"
          required
          placeholder="oink123"
          @update="(value: string) => handlePassword(value)"
        />
        <div class="w-full">
          <ButtonText class="mt-8 w-full" text="Acceder" variant="outlined" />
        </div>
        <div class="w-full">
          <p class="text-center text-xl text-finn-500">
            ¿No tienes cuenta?
            <a href="/register" class="text-finn-100 hover:text-finn-200"
              >Registrate</a
            >
          </p>
        </div>
      </form>
    </template>
  </NuxtLayout>
</template>

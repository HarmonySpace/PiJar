<script setup lang="ts">
import { ID } from "appwrite";
definePageMeta({
  layout: false,
});
const appwrite = useAppwriteStore();
const alert = ref({
  title: "Error",
  message: "Las credenciales no coinciden",
  state: false,
});
const user = ref({
  email: "",
  password: "",
  password2: "",
});

const handleEmail = (value: string) => {
  user.value.email = value;
};
const handlePassword = (value: string) => {
  user.value.password = value;
};
const handlepassword2 = (value: string) => {
  user.value.password2 = value;
};

const submit = async () => {
  const credentials = ref(false);
  credentials.value = confirmPassword();
  alert.value.state = !credentials.value;
  if (alert.value.state) {
    alert.value.message = "La contraseña no coincide";
  }
  await register();
};
const register = async () => {
  await appwrite.acc.create(ID.unique(), user.value.email, user.value.password);
  return navigateTo("/login");
};
const confirmPassword = () => {
  return user.value.password === user.value.password2 ? true : false;
};
</script>

<template>
  <NuxtLayout
    name="login"
    bg_banner="bg-gradient-to-tr to-medium-purple-500 via-finn-950 from-neutral-950"
  >
    <template #title>Registrarse</template>
    <template #form>
      <form class="space-y-6" @submit.prevent="submit()">
        <InputTextFields
          id="user_email"
          label="Correo electrónico"
          type="email"
          required
          placeholder="ejemplo@dominio.com"
          @update="(value: string) => handleEmail(value)"
        />
        <InputTextFields
          id="user_password"
          label="Contraseña"
          type="password"
          required
          placeholder="oink1234"
          @update="(value: string) => handlePassword(value)"
        />
        <InputTextFields
          id="user_password2"
          label="Confirmar contraseña"
          type="password"
          required
          placeholder="oink1234"
          @update="(value: string) => handlepassword2(value)"
        />
        <div>
          <ButtonText
            class="mt-8 w-full"
            text="Registrarse"
            variant="outlined"
          />
        </div>
        <div class="w-full">
          <p class="text-center text-xl text-finn-500">
            ¿Ya tienes cuenta?
            <a href="/login" class="text-finn-100 hover:text-finn-200"
              >Inicia sesión</a
            >
          </p>
        </div>
      </form>
      <AlertMessage
        :show="alert.state"
        @close="alert.state = false"
        class="absolute bottom-10 right-10"
      >
        <template #title>{{ alert.title }}</template>
        <template #default>
          <p class="text-center text-xl text-finn-500">
            {{ alert.message }}
          </p>
        </template>
      </AlertMessage>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
const auth = useSupabaseClient().auth;
const credentials = ref({
  email: "",
  password: "",
  passwordConfirm: "",
});
const alert = ref({
  title: "Error",
  message: "Error, las credenciales no coinciden",
  state: true,
});
const correctPassword = ref(false);
const register = async () => {
  if (correctPassword.value) {
    const { error } = await auth.signUp(credentials.value);
    if (error) {
      console.log(error);
    } else {
      return navigateTo("/");
    }
  } else {
    console.log("Passwords do not match");
  }
};
const handleEmail = (value: string) => {
  credentials.value.email = value;
};
const handlePassword = (value: string) => {
  credentials.value.password = value;
};
const handlePasswordConfirm = (value: string) => {
  credentials.value.passwordConfirm = value;
  if (credentials.value.password !== credentials.value.passwordConfirm) {
    console.log("Passwords do not match");
  } else {
    correctPassword.value = true;
  }
};
</script>

<template>
  <NuxtLayout
    name="login"
    bg_banner="bg-gradient-to-tr to-medium-purple-500 via-finn-950 from-neutral-950"
  >
    <template #title>Registrarse</template>
    <template #form>
      <form class="space-y-6" @submit.prevent="register()">
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
        <InputTextFields
          id="credentials_password"
          label="Confirmar contraseña"
          type="password"
          required
          placeholder="oink123"
          @update="(value: string) => handlePasswordConfirm(value)"
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
      <AlertMessage :show="alert.state">
        <template #title>{{ alert.title }}</template>
        <template #icon>
          <CircleAlert />
        </template>
        <template>
          <p class="text-center text-xl text-finn-500">
            {{ alert.message }}
          </p>
        </template>
      </AlertMessage>
    </template>
  </NuxtLayout>
</template>

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const appwrite = useAppwriteStore();

  try {
    const response = await appwrite.getUser();
    if (response.status) {
      return navigateTo("/");
    } else {
      console.error("User has not active status");
    }
  } catch (e: any) {
    if (e.code === 401) {
      console.error("Unauthenticated", e);
    }
  }
});

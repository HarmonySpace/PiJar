export default defineNuxtRouteMiddleware(async (to, _from) => {
  const appwrite = useAppwriteStore();

  try {
    const response = await appwrite.getUser();
    if (!response.status) {
      console.error("User has not active status");
      return navigateTo("/login");
    }
  } catch (e: any) {
    if (e.code === 401) {
      console.error("Unauthenticated", e);
      return navigateTo("/login");
    }
  }
});

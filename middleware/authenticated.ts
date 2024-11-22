export default defineNuxtRouteMiddleware(async (to, _from) => {
  try {
    const { account } = useAppwrite();
    const user = await account.get();
    if (user) {
      return navigateTo("/");
    }
  } catch (error) {
    console.log(error);
  }
});

export default defineStore(
  "user",
  () => {
    const accessToken = ref("");
    const refreshToken = ref("");

    const { baseURL } = useRuntimeConfig().public;

    async function signin(username: string, password: string) {
      const { data, error } = await useFetch<{
        access: string;
        refresh: string;
      }>("/api/token/", {
        method: "POST",
        body: {
          username,
          password,
        },
        baseURL,
      });
      if (data.value) {
        accessToken.value = data.value.access;
        refreshToken.value = data.value.refresh;
        console.log(accessToken.value);
      }
      return { data, error };
    }

    function signOut() {
      accessToken.value = "";
      refreshToken.value = "";
    }

    const isSignedIn = computed(() => accessToken.value !== "");

    return {
      accessToken,
      refreshToken,
      isSignedIn,
      signin,
      signOut,
    };
  },
  {
    persist: true,
  }
);

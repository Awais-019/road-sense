<script lang="ts" setup>
  import useUserStore from "~/stores/user";

  const userStore = useUserStore();

  function handleSignOut() {
    userStore.signOut();
    navigateTo("/signin");
  }
</script>

<template>
  <header class="bg-secondary text-white font-medium text-lg">
    <div class="max-w-8xl mx-auto py-4">
      <nav>
        <ul class="flex gap-4">
          <li class="font-bold text-2xl">
            <nuxt-link to="/"> Road Sense </nuxt-link>
          </li>
          <li class="ml-auto">
            <nuxt-link to="/accidents">Accident Records</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/live">Live Stream</nuxt-link>
          </li>
          <li class="ml-auto">
            <button @click="handleSignOut">Sign out</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>

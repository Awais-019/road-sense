<script lang="ts" setup>
  definePageMeta({
    middleware: ["auth"],
  });
</script>

<template>
  <div class="flex items-center justify-center mt-8">
    <video
      id="video"
      width="80%"
      height="80%"
      autoplay
      muted
      loop
      playsinline
      ref="video"
      src="http://127.0.0.1:8000/stream_video/"
    ></video>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
  const { id } = useRoute().params;

  const { baseURL } = useRuntimeConfig().public;

  const accident = ref<{
    id: number;
    location: string;
    date_time: string;
    deaths: number;
    injuries: number;
    video_url: string;
  } | null>(null);

  onMounted(async () => {
    const { data } = await useFetch<{
      id: number;
      location: string;
      date_time: string;
      deaths: number;
      injuries: number;
      video_url: string;
    }>(`/accidents/${id}`, {
      baseURL,
    });

    if (data.value) {
      accident.value = data.value;
    }
  });
</script>

<template>
  <section class="max-w-8xl mx-auto" v-if="accident">
    <h1 class="text-3xl font-bold text-primary text-center mt-2">
      Accident Record
    </h1>
    <div class="mt-3 flex gap-12">
      <div>
        <h2 class="text-2xl font-semibold">Location</h2>
        <span>{{ accident.location }}</span>
      </div>
      <div>
        <h2 class="text-2xl font-semibold">No. of Deaths</h2>
        <span>{{ accident.deaths }}</span>
      </div>
      <div>
        <h2 class="text-2xl font-semibold">No. of Injuries</h2>
        <span>{{ accident.injuries }}</span>
      </div>
    </div>
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
        :src="accident.video_url"
      ></video>
    </div>
    <Map />
  </section>
</template>

<style scoped></style>

<script setup lang="ts">
  const { baseURL } = useRuntimeConfig().public;

  const accidents = ref<
    {
      id: number;
      location: string;
      date_time: string;
      deaths: number;
      injuries: number;
      video_url: string;
    }[]
  >([]);

  onMounted(async () => {
    const { data, error } = await useFetch<
      {
        id: number;
        location: string;
        date_time: string;
        deaths: number;
        injuries: number;
        video_url: string;
      }[]
    >("/accidents/", {
      baseURL,
    });

    if (data.value) {
      accidents.value = data.value;
    }
  });
</script>

<template>
  <section v-if="accidents.length > 0" class="max-w-8xl mx-auto">
    <table
      class="border-collapse border-platinum caption-bottom w-full align-top text-left table-fixed"
    >
      <thead>
        <tr class="border-solid border-b border-flash_white">
          <th class="py-2">ID</th>
          <th class="py-2">Location</th>
          <th class="py-2">Deaths</th>
          <th class="py-2">Injuries</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="accident in accidents"
          :key="accident.id"
          class="border-b border-flash_white"
        >
          <td class="py-2">{{ accident.id }}</td>
          <td class="py-2">
            <nuxt-link
              :to="`/accidents/${accident.id}`"
              class="hover:underline"
            >
              {{ accident.location }}
            </nuxt-link>
          </td>
          <td class="py-2">{{ accident.deaths }}</td>
          <td class="py-2 truncate">{{ accident.injuries }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped></style>

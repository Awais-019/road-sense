<script lang="ts" setup></script>

<template>
  <div>
    <HeroSection />
    <div class="bg-secondary p-4">
      <h2 class="text-4xl font-bold text-center text-white">Our Features</h2>
      <div
        class="flex items-center justify-center mt-4 gap-4 font-medium text-lg"
      >
        <div class="bg-white text-secondary p-4 rounded-lg">
          Live Monitoring
          <p class="mt-2">
            <span class="text-xs">Live monitoring of roads</span>
          </p>
        </div>
        <div class="bg-primary text-white p-4 rounded-lg">
          Accident Detection
          <p class="mt-2">
            <span class="text-xs">Real time detection</span>
          </p>
        </div>
        <div class="bg-accent text-primary p-4 rounded-lg">
          Accident Records
          <p class="mt-2">
            <span class="text-xs">Accident records</span>
          </p>
        </div>
        <div class="bg-light_blue text-white p-4 rounded-lg">
          Alerting Authorities
          <p class="mt-2">
            <span class="text-xs">Alerting authorities</span>
          </p>
        </div>
      </div>
      <div class="mt-8 max-w-3xl mx-auto">
        <img src="~/assets/images/stats.png" alt="stats" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
  import mapboxgl, { Map, Marker } from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";

  const { mapBoxToken } = useRuntimeConfig().public;
  let map: Map | null = null;

  function addMarker() {
    new Marker().setLngLat([73.094085, 30.64381]).addTo(map!);
  }

  onMounted(() => {
    mapboxgl.accessToken = mapBoxToken;
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/swadon/ckkvdmhh735l418mhd4re0bse",
      zoom: 2,
      scrollZoom: true,
    });
    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );
    map.addControl(new mapboxgl.FullscreenControl(), "bottom-right");
    addMarker();
  });
</script>

<template>
  <div id="map" class="h-[420px] w-full mb-8 mt-2 rounded-2xl"></div>
</template>

<style scoped></style>

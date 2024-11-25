<script setup>

defineProps({
  serviceName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="card">
    <aside>
      <h5 class="serviceName">{{ serviceName }}</h5>
      <p class="description">{{ description }}</p>
    </aside>
  </section>

</template>

<style scoped>
section.card {
  border: 3px solid darkslategray;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.3rem;
  color: white;
  background-color: darkslategray;

  &:hover {
    border-color: white;
    cursor: pointer;
  }

  @media screen and (width >= 600px) {
    width: 300px;
    height: 250px;
  }
}
</style>
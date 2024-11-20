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
    <h5 class="serviceName">{{serviceName}}</h5>
    <p class="description">{{description}}</p>
    </aside>
  </section>

</template>

<style scoped>
section.card {
  width: 300px;
  height: 300px;
  border: 3px solid darkslategray;
  border-radius: 10px;
  padding: 4rem;
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
}
</style>
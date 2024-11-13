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
    <p class="serviceName">{{serviceName}}</p>
    <p class="description">{{description}}</p>
    </aside>
  </section>

</template>

<style scoped>
section.card {
  display: flex;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 6px;
  text-align: center;

  &:hover {
    border-color: black;
    cursor: pointer;
  }
}
</style>
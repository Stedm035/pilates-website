<script setup>
defineProps({
  offerName: {
    type: String,
    required: true
  },
  price: {
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
  <section class="price-card">
    <aside>
      <h5 class="offerName">{{ offerName }}</h5>
      <h3 class="price">{{ price }}</h3>
      <p class="description">{{description}}</p>

    </aside>
  </section>

</template>

<style scoped>
section.price-card {
  border: 3px solid darkslategray;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem 2.5rem 2rem 2.5rem;
  text-align: left;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.3rem;
  color: darkslategray;
  background-color: white;

  &:hover {
    border-color: grey;
    cursor: pointer;
  }

  @media screen and (width >= 600px) {
    width: 300px;
    height: 250px;
  }
}


</style>
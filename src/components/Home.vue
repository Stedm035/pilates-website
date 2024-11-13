<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
import Card from "./Card.vue";
</script>

<template>
  <primary-template>
    <img class="hero-image" src="\Users\lucys\WebstormProjects\pilates-website\src\components\heroimg.jpg"
         alt="Hero Image"/>

    <div class="Welcome">
      <h1>Welcome to Core Vitality</h1>
      <h3>At Core Vitality, we believe in mindful movement to empower women. Step into our studio and start your
        journey today.</h3>
      <div class="button">
        <button type="button">Book Your Class</button>
      </div>
    </div>

    <div class="cards">
      <card
          service-name="Service 1"
          description="Service 1 Description"
      />

      <card
          service-name="Service 2"
          description="Service 2 Description"
      />

      <card
          service-name="Service 3"
          description="Service 3 Description"
      />
    </div>
  </primary-template>
</template>

<style scoped>
/* Mobile first styling */
div.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem;

  /* Override at given width & up */
  @media screen and (width >= 600px) {
    flex-direction: row;
    justify-content: center;
    margin: 2rem;
  }
}

img.hero-image {
  width: 100%;
}

.button {
  justify-self: center;
}

button {
  border-radius: 15px;
  padding: 15px 32px;
  text-align: center;
  color: ghostwhite;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 2px 2px 2rem 2px;
  cursor: pointer;
  background-color: darkslategray;
}
</style>
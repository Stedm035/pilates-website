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

    <div class="container">
      <img class="intro-image" src="\Users\lucys\WebstormProjects\pilates-website\src\components\img2.jpg" alt="Intro Image"/>
    <div class="intro">
      <h3>This is your moment, transform yourself.</h3>
      <h4>Achieve your goals your way by reconnecting to your healthiest self. Our introductory membership makes it easy to get started!</h4>
      <div class="button2">
        <button type="button">About Us</button>
      </div>
    </div>
    </div>

    <div class="cards">
      <card
          service-name="Personal Training"
          description="Empowering individuals to achieve their fitness goals with personalized training, expert guidance, and unwavering support."
      />

      <card
          service-name="Group Fitness Classes"
          description="Transforming fitness into fun and community with dynamic group classes, expert coaching, and lasting motivation."
      />

      <card
          service-name="Pilates Instructor Training"
          description="Guiding aspiring instructors to master Pilates with comprehensive training, expert mentorship, and confident teaching skills."
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
  margin: 2rem 2rem 6rem 2rem;


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
  border: none;
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

/* Mobile first styling */
.container {
  border-bottom: 3px solid darkslategray;
  border-top: 3px solid darkslategray;
  padding: 6rem 4rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img.intro-image {
    width: 45%;
    height: 100%
  }

  div.button2 {
    margin-left: 40%;
  }

  /* Override at given width & up */
  @media screen and (width >= 600px) {
    flex-direction: row;
    justify-content: center;
    margin: 2rem;
  }
}


</style>
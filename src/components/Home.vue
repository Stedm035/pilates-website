<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
import Card from "./Card.vue";
import Introduction from "./Introduction.vue";
import Welcome from "./Welcome.vue";
</script>

<template>
  <primary-template>
    <img src="../assets/posing-woman.jpg" alt="Hero Image"/>

    <welcome/>

    <introduction/>


    <div class="cards">
      <card
          service-name="Personal Training"
          description="Empowering individuals to achieve their fitness goals with personalized training, guidance, and unwavering support."
      />

      <card
          service-name="Group Fitness Classes"
          description="Transforming fitness into fun and community with dynamic group classes, expert coaching, and lasting motivation."
      />

      <card
          service-name="Pilates Instructor Training"
          description="Guiding aspiring instructors to master Pilates with comprehensive training, mentorship, and teaching."
      />
    </div>

    <div class="container">
      <p>"I've been attending Pilates classes here for six months, and it's been life-changing! Not only have I improved
        my flexibility and core strength, but I also feel more balanced and energized throughout the day. The
        instructors are so knowledgeable and make every session fun and challenging. This studio is hands down the best
        decision I've made for my health and well-being!"</p>
      <h5>-Jessica R., Happy Client</h5>
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
  margin: 2rem 2rem 4rem 2rem;


  /* Override at given width & up */
  @media screen and (width >= 600px) {
    flex-direction: row;
    justify-content: center;
    margin: 2rem 2rem 3rem 2rem;
  }
}

img {
  width: 100%;
}


.container {
  border-bottom: 3px solid darkslategray;
  border-top: 3px solid darkslategray;
  padding: 3rem;
  margin: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15pt;
  text-align: center;
  color: darkslategrey;
}

h5 {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-align: center;
}
</style>
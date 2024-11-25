<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
import Classes from "./Classes.vue";
</script>

<template>
  <primary-template>
    <img src="../assets/highfive.jpg" alt="Hero Image"/>

    <div class="about">
      <h2>Fitness that Inspires</h2>
      <h4>Working out can seem like another box to “tick off” your to-do list. Our supportive community is
        results-oriented, focusing on your outer and inner strength.</h4>
      <p>We empower you to be the best version of yourself through achievable workouts, uplifting support, and expert
        teachers guiding you every step of the way. Our classes are set up to give you variety and a custom experience.
        Whether you prefer our Group Classes, Personal Training, or want to learn more through our Pilates Teacher
        Training, there is something for anyone looking for transformation.</p>
    </div>

    <classes/>



  </primary-template>
</template>

<style scoped>

div.about{
  margin: 0 5rem 1rem 5rem;
}


h2 {
  font-size: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-justify: inter-word;
  text-align: center;
}

h4 {
  font-size: 23px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-align: center;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15pt;
  text-align: center;
  color: darkslategrey;
}

</style>
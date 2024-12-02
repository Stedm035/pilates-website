<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
import Classes from "./Classes.vue";
import TeamOne from "./TeamOne.vue";
import TeamTwo from "./TeamTwo.vue";
import TeamThree from "./TeamThree.vue";
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

    <h3>Meet the Team</h3>

    <TeamOne/>

    <TeamTwo/>

    <TeamThree/>

    <div class="end">
      <p>Interested in becoming a Pilates teacher, too?
        Check out our Pilates Teacher Training to get started.</p>
      <div class="button">
        <router-link :to="{ name: 'Pricing' }">
          <button type="button">Sign Up Here</button>
        </router-link>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>

div.about {
  margin: 0 5rem 1rem 5rem;
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
  margin: 1.5rem 1rem 2rem 1rem;
  cursor: pointer;
  background-color: darkslategray;
}

div.button {
  justify-self: center;
}

h2 {
  font-size: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-justify: inter-word;
  text-align: center;
}

h3 {
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
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
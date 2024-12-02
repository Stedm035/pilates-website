<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
</script>
<template>
  <primary-template>

    <div class="pricing-intro">
      <h3>Build a Fitness Foundation in our Welcoming Community</h3>
      <p>We offer a variety of small group classes that’ll energize you and transform your fitness in a safe, uplifting
        space. Get ready to be challenged and cheered on every step of the way! For the best results, we recommend
        attending a class 3-4 times a week. </p>
    </div>

    <h4>Find the Right Plan For You</h4>

    <div class="end">
    <p>Student and senior rates available! Email corevitlaityfitness@gmail.com for details. Want to sign up for a
      single class? Check out our schedule to view and purchase drop-in classes.</p>
    <p> Please note: all class packages are non-refundable. </p>
    </div>
  </primary-template>
</template>

<style scoped>
div.pricing-intro {
  margin: 0 2.5rem 1rem 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.end{
  margin: 0 2.5rem 1rem 2.5rem;
  padding: 2rem;
  border-top: 3px solid darkslategray;
}

h3 {
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-justify: inter-word;
  text-align: center;
}

h4 {
  font-size: 32px;
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
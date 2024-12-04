<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
import PriceCard from "./PriceCard.vue";
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

    <div class="new-client">
      <h5>New Client Offers</h5>
    </div>

    <div class="first-cards">
      <price-card
          offer-name="Intro Unlimited Month Mat Pilates & Fitness"
          price="$89.00"
          description="Mat Pilates & Fitness – unlimited classes, starts on first visit, ends after 1 month, in-person only."
      />

      <price-card
          offer-name="Intro Apparatus 6 pack"
          price="$109.00"
          description="6 in-person visits for $109 – starts on first visit, ends after 1 month, in-person and livestreams"
      />
    </div>

    <div class="new-client">
      <h5>All Plans</h5>
    </div>

    <div class="second-cards">
      <price-card
          offer-name="Auto Renew Monthly Mat Pilates & Fitness Classes"
          price="$139.00"
          description="3-month commitment, auto-renews, includes video library, livestream, and 1 guest pass."
      />
      <price-card
          offer-name="Auto Renew Monthly Apparatus Membership"
          price="$239.00"
          description="3-month commitment, auto-renews, starts on first visit, includes video library and 1 guest pass."
      />
      <price-card
          offer-name="4 Mat Pilates & Fitness Class Pack"
          price="$100.00"
          description="6 in-person visits for $109 – starts on first visit, ends after 1 month, in-person and livestreams"
      />
      <price-card
          offer-name="8 Mat Pilates & Fitness Class Pack"
          price="$176.00"
          description="6 in-person visits for $109 – starts on first visit, ends after 1 month, in-person and livestreams"
      />
      <price-card
          offer-name="4 Apparatus Class Pack"
          price="$148.00"
          description="6 in-person visits for $109 – starts on first visit, ends after 1 month, in-person and livestreams"
      />
      <price-card
          offer-name="8 Apparatus Class Pack"
          price="$256.00"
          description="6 in-person visits for $109 – starts on first visit, ends after 1 month, in-person and livestreams"
      />

    </div>

    <div class="end">
      <p>Student and senior rates available! Email corevitlaityfitness@gmail.com for details. Want to sign up for a
        single class? Check out our schedule to view and purchase drop-in classes.</p>
      <p> Please note: all class packages are non-refundable. </p>
    </div>
  </primary-template>
</template>

<style scoped>
div.pricing-intro {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.new-client {
  margin: 0 2.5rem 0 2.5rem;
}

/* Mobile first styling */
div.first-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 2rem 4rem 2rem;


  /* Override at given width & up */
  @media screen and (width >= 600px) {
    flex-direction: row;
    justify-content: left;
    margin: 2rem 2rem 3rem 2rem;
  }
}

div.end {
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

h5 {
  font-size: 28px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategray;
  text-align: left;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15pt;
  text-align: center;
  color: darkslategrey;
}

</style>
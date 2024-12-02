<script setup>

</script>

<template>
  <section class="teamtwo">
    <div class="image1">
      <img src="../assets/asianwoman.jpg" alt="Intro One"/>
    </div>

    <div class="Team1">
      <h4>Grace Lee</h4>
      <h6>HITT and Spin Instructor</h6>
      <p>Grace is a dynamic fitness instructor known for her innovative approach to combining HIIT, Spin, and
        Pilates. With a focus on building strength, endurance, and flexibility, Grace’s classes offer the perfect
        balance of high-energy cardio and mindful movement. Her personalized teaching style empowers participants of all
        levels to push their limits while fostering a strong mind-body connection.</p>
    </div>
  </section>
</template>

<style scoped>
section.teamtwo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2.5rem 2.5rem 2.5rem;
  padding: 2rem;

  img {
    width: 100%;
  }

  /* Tablet and up */
  @media screen and (width >= 600px) {
    flex-direction: row;

    div {
      flex-basis: 50%;
    }
  }
}

h4 {
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-align: left;
}

h6 {
  font-size: 21px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-align: left;
}

p{
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  color: darkslategrey;
}

</style>
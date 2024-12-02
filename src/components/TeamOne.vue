<script setup>

</script>

<template>
  <section class="teamone">

    <div class="image1">
      <img src="../assets/blondewoman.jpg" alt="Intro One"/>
    </div>

    <div class="Team1">
      <h4>Sophia Harper</h4>
      <h6>Yoga and Barre Instructor</h6>
      <p>Sophia is a certified Pilates instructor with over a decade of experience in helping people achieve balance and
        strength. Her classes emphasize core stability and alignment, blending traditional Pilates with contemporary
        modifications.</p>
    </div>

  </section>
</template>

<style scoped>
section.teamone {
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
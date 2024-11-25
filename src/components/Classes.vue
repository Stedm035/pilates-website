<script setup>

</script>

<template>
  <section class="classes">
    <div>
      <img src="../assets/classroom-students.jpg" alt="Intro Image"/>
    </div>

    <div class="classes">
      <h3>Our Classes</h3>
      <h4>Discover energizing classes designed for all levels, focusing on strength, flexibility, and mind-body
        connection.</h4>
      <ul>
        <li>Mat Pilates</li>
        <li>Reformer Pilates</li>
        <li>Power Barre</li>
        <li>Yoga</li>
        <li>HITT</li>
        <li>Spinning</li>
      </ul>

    </div>

  </section>

</template>

<style scoped>
section.classes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.5rem;
  border-bottom: 3px solid darkslategray;
  border-top: 3px solid darkslategray;
  padding: 3rem;

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

h3 {
  font-size: 36px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-justify: inter-word;
  text-align: left;
}

h4 {
  font-size: 23px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-align: left;
}

ul {
  font-size: 19px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  color: darkslategrey;
}

</style>
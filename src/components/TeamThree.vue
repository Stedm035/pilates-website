<script setup>

</script>

<template>
  <section class="teamthree">
    <div class="image1">
      <img src="../assets/grouppicture.jpg" alt="Intro One"/>
    </div>

    <div class="Team1">
      <h4>Sophia Harper, Grace Lee, and Victoria Bennett</h4>
      <h6>Mat Pilates and Reformer Pilates Instructors</h6>
      <p>Our Pilates classes are led by a team of skilled instructors—Grace Lee, Victoria Bennett, and Sophia Harper—who
        specialize in both mat and reformer Pilates. Whether you're seeking a dynamic workout or a restorative session,
        our instructors are here to guide you every step of the way with their unique expertise and passion for mindful
        movement.</p>
    </div>
  </section>
</template>

<style scoped>
section.teamthree {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2.5rem 2.5rem 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;

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
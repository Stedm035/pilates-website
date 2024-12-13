<script setup>

</script>

<template>
  <section class="introduction">
    <div>
      <img src="../assets/women-sitting.jpg" alt="Intro Image"/>
    </div>

    <div class="intro">
      <h3>This is your moment, transform yourself.</h3>
      <h4>Achieve your goals your way by reconnecting to your healthiest self. Our introductory membership makes it
        easy to get started!</h4>

      <div class="Button">
        <router-link :to="{ name: 'About' }">
          <button type="button">About Us</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.introduction {
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

div.intro {
  margin-left: 1rem;
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
  cursor: pointer;
  background-color: darkslategray;
  margin-top: 1.5rem;
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


</style>
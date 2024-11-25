<script setup>

</script>

<template>
  <section class="welcome">

    <div class="welcome">
      <h1>Welcome to Core Vitality</h1>
      <h3>At Core Vitality, we believe in movement to empower women. Step into our studio and start your
        journey today.</h3>
      <div class="button">
        <router-link :to="{ name: 'Schedule' }">
          <button type="button">Book Your Class</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2.5rem 1rem 2.5rem;
}

/* Tablet and up */
@media screen and (width >= 600px) {
  flex-direction: row; }

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

h1 {
  font-size: 70px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-align: center;
}

h3 {
  font-size: 36px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-justify: inter-word;
  text-align: center;
}
</style>
<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
</script>

<template>
  <primary-template>

    <div class="schedule-intro">
      <h2>Schedule</h2>
      <p>This is our most up-to-date schedule; this will continue to update and change as we grow. Any questions can be
        directed to corevitality@gmail.com.</p>
    </div>

    <div class="monday">
      <h4>Monday</h4>
      <p>9:00-10:00am// Pilates Mat with Victoria</p>
      <p>10:00-11:00am// Yoga with Sohpia</p>
      <p>2:00-3:00pm// Spin with Grace</p>
      <p>5:00-6:00am// Pilates Reformer with Victoria</p>
    </div>

    <div class="tuesday">
      <h4>Tuesday</h4>
      <p>8:00-9:00am// Pilates Reformer with Sohpia</p>
      <p>9:00-10:00am// Pilates Mat with Victoria</p>
      <p>11:00-12:00pm// Barre with Sohpia</p>
      <p>2:00-3:00pm// HITT with Grace</p>
      <p>5:00-6:00pm// Pilates Reformer with Victoria</p>
    </div>

    <div class="wednesday">
      <h4>Wednesday</h4>
      <p>8:00-9:00am// Pilates Mat with Victoria</p>
      <p>10:00-11:00am// Yoga with Sohpia</p>
      <p>2:00-3:00pm// Spin with Grace</p>
      <p>5:00-6:00pm// Pilates Reformer with Victoria</p>
    </div>

    <div class="thursday">
      <h4>Thursday</h4>
      <p>8:00-9:00am// Pilates Reformer with Sohpia</p>
      <p>9:00-10:00am// Pilates Mat with Victoria</p>
      <p>11:00-12:00pm// Barre with Sohpia</p>
      <p>2:00-3:00pm// HITT with Grace</p>
      <p>5:00-6:00pm// Pilates Reformer with Victoria</p>
    </div>

    <div class="friday">
      <h4>Friday</h4>
      <p>8:00-9:00am// Pilates Reformer with Grace</p>
      <p>9:00-10:00am// Yoga with Sohpia</p>
      <p>2:00-3:00pm// Pilates Mat with Victoria</p>
      <p>5:00-6:00pm// Spin with Grace</p>
    </div>

    <div class="saturday">
      <h4>Saturday</h4>
      <p>8:00-9:00am// Pilates Reformer with Grace</p>
      <p>9:00-10:00am// Barre with Sohpia</p>
      <p>2:00-3:00pm// Pilates Mat with Victoria</p>
      <p>5:00-6:00pm// HITT with Grace</p>
    </div>

    <div class="sunday">
      <h4>Sunday</h4>
      <p>8:00-9:00am// Pilates Reformer with Victoria</p>
      <p>10:00-11:00am// Yoga with Sohpia</p>
      <p>2:00-3:00pm// Spin with Grace</p>
    </div>

    <div class="end">
      <p>Interested in beginning classes with us?
        Check out our Pricing Page to get started.</p>
      <div class="button">
        <router-link :to="{ name: 'Pricing' }">
          <button type="button">Sign Up Here</button>
        </router-link>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>

div.schedule-intro{
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.monday {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.tuesday {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.wednesday {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.thursday {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.friday {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.saturday {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.sunday {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

div.end{
  margin: 2.5rem 2.5rem 0 2.5rem;
  p{
    text-align: center;
  }
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

h4 {
  font-size: 32px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-align: left;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15pt;
  text-align: left;
  color: darkslategrey;
}
</style>
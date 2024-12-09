<script setup>

import PrimaryTemplate from "../../PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="contact-intro">
      <h2>Contact Us</h2>
      <p>Drop us a message via the form on this page or email us directly at corevitality@gmail.com or reach us by phone
        at 612-900-8101</p>
    </div>

    <div class="container">

      <form action="Contact.vue">

        <label for="f-name">First Name</label>
        <input type="text" id="f-name" name="firstname" placeholder="Your name..">

        <label for="l-name">Last Name</label>
        <input type="text" id="l-name" name="lastname" placeholder="Your last name..">

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="usa">United States</option>
        </select>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

        <input type="submit" value="Submit">

      </form>
    </div>
  </primary-template>
</template>

<style scoped>
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: darkslategray;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 2rem;
  margin-top: 2rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

div.contact-intro {
  margin: 0 2.5rem 0 2.5rem;
  padding: 2rem;
  border-bottom: 3px solid darkslategray;
}

h2 {
  font-size: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: darkslategrey;
  text-justify: inter-word;
  text-align: center;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15pt;
  text-align: center;
  color: darkslategrey;
}
</style>
<script setup>

</script>

<template>
  <section class="primary-template">
    <header>
      <div class="nav">
        <router-link :to="{name: 'About'}">About</router-link>
        <router-link :to="{name: 'Pricing'}">Pricing</router-link>
        <router-link :to="{name: 'Schedule'}">Schedule</router-link>
        <router-link :to="{name: 'Contact'}">Contact Us</router-link>
      </div>

    </header>

    <section class="main">
      <slot></slot>
    </section>

    <footer>
      <div class="left-footer">
        <img src="" alt="Logo"/>
        <p>Core Vitality Pilates and Fitness</p>
        <p>310 Dahlia Street, Ste 312,</p>
        <p>Saint Paul, MN 55114</p>
        <a href="">612-900-8101</a>
      </div>
      <div class="right-footer">
        <p>QUICK LINKS</p>
        <router-link :to="{name: 'About'}">About</router-link>
        <router-link :to="{name: 'Pricing'}">Pricing</router-link>
        <router-link :to="{name: 'Schedule'}">Schedule</router-link>
        <router-link :to="{name: 'Contact'}">Contact Us</router-link>
      </div>
    </footer>
  </section>
</template>

<style scoped>
section.primary-template {
  /* Mobile First */

  .nav {
    padding: 10px;

    a {
      color: white;
      margin: 4px;
      padding: 10px;
      text-decoration: none;
      display: inline-block;

      &.router-link-active {
        font-weight: bold;
      }
    }
  }

  .nav a:hover {
    text-decoration: underline;
  }

  header {
    .nav {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: right;
      font-size: 20px;
      text-transform: uppercase;

    }
  }

  header {
    position: sticky;
    top: 0;
    z-index: 999;
  }

  header, footer {
    background-color: darkslategray;
    color: white;
  }

  /* Mobile First */

  footer {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;

    /* Override at given width & up */
    @media screen and (width >= 600px) {
      flex-direction: row;
    }

    a {
      color: white;
    }

    a:hover {
      font-weight: bold;
    }
  }

  div.left-footer {
    margin-bottom: 1rem;

    /* Override at given width & up */
    @media screen and (width >= 600px) {
      text-align: left;
    }
  }

  div.right-footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    margin-bottom: 1rem;

    p {
      font-weight: bold;
    }

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    /* Override at given width & up */
    @media screen and (width >= 600px) {
      text-align: right;
    }
  }

  section.main {
    max-width: 100%;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    /* Desktop */
    @media screen and (width > 1000px) {
      display: flex;
      flex-direction: column;

    }
  }
}

</style>
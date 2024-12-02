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
        <router-link :to="{ name: 'Home' }">
        <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.6678 19.2857 19.6162C19.2857 21 17.5714 21 17.5714 21H13L10.75 19.75" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.42864 15.0036L8.5715 16.8486C8.5715 16.8486 4.71436 17.6678 4.71436 19.6162C4.71436 21 6.42864 21 6.42864 21H8.50007L10.7501 19.75L13.5001 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 15.9261C3 15.9261 5.14286 15.4649 6.42857 15.0036C7.71429 8.54595 11.5714 9.00721 12 9.00721C12.4286 9.00721 16.2857 8.54595 17.5714 15.0036C18.8571 15.4649 21 15.9261 21 15.9261" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </router-link>
        <p>Core Vitality Pilates and Fitness</p>
        <p>310 Dahlia Street, Ste 312,</p>
        <p>Saint Paul, MN 55114</p>
        <a href="">612-900-8101</a>

        <div class="media-icons">
        </div>

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
<script setup>

</script>

<template>
  <section class="primary-template">
    <header>
      <div class="nav">
        <div class="logo">
          <a href="/">
            <img src="\Users\lucys\WebstormProjects\pilates-website\src\assets\logo.png" alt="logo">
          </a>
        </div>
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
            <path
                d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.6678 19.2857 19.6162C19.2857 21 17.5714 21 17.5714 21H13L10.75 19.75"
                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M9.42864 15.0036L8.5715 16.8486C8.5715 16.8486 4.71436 17.6678 4.71436 19.6162C4.71436 21 6.42864 21 6.42864 21H8.50007L10.7501 19.75L13.5001 18"
                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M3 15.9261C3 15.9261 5.14286 15.4649 6.42857 15.0036C7.71429 8.54595 11.5714 9.00721 12 9.00721C12.4286 9.00721 16.2857 8.54595 17.5714 15.0036C18.8571 15.4649 21 15.9261 21 15.9261"
                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
        <p>Core Vitality Pilates and Fitness</p>
        <p>310 Dahlia Street, Ste 312,</p>
        <p>Saint Paul, MN 55114</p>
        <a href="">612-900-8101</a>

        <div class="media-icons">
          <router-link :to="{ name }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="48px"
                 height="48px" fill-rule="nonzero">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                 stroke-linejoin="miter"
                 stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                 font-size="none" style="mix-blend-mode: normal">
                <g transform="scale(10.66667,10.66667)">
                  <path
                      d="M11.666,2.005c-5.046,0.165 -9.292,4.246 -9.641,9.283c-0.369,5.329 3.442,9.832 8.481,10.589v-7.227h-1.614c-0.726,0 -1.314,-0.588 -1.314,-1.314v0c0,-0.726 0.588,-1.314 1.314,-1.314h1.613v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c0.357,0 0.662,0.008 0.921,0.021c0.636,0.031 1.129,0.561 1.129,1.198v0c0,0.663 -0.537,1.2 -1.2,1.2h-0.442c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h1.87c0.591,0 1.043,0.527 0.953,1.111l-0.108,0.701c-0.073,0.47 -0.477,0.817 -0.953,0.817h-1.762v7.247c4.883,-0.663 8.648,-4.837 8.648,-9.899c0,-5.634 -4.659,-10.179 -10.334,-9.995z"></path>
                </g>
              </g>
            </svg>
          </router-link>
          <router-link :to="{ name }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="48px"
                 height="48px" fill-rule="nonzero">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                 stroke-linejoin="miter"
                 stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                 font-size="none" style="mix-blend-mode: normal">
                <g transform="scale(10.66667,10.66667)">
                  <path
                      d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
                </g>
              </g>
            </svg>
          </router-link>
          <router-link :to="{ name }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="48px"
                 height="48px" fill-rule="nonzero">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                 stroke-linejoin="miter"
                 stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                 font-size="none" style="mix-blend-mode: normal">
                <g transform="scale(10.66667,10.66667)">
                  <path
                      d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM7.738,17v0c-0.697,0 -1.262,-0.565 -1.262,-1.262v-4.477c0.001,-0.696 0.566,-1.261 1.262,-1.261v0c0.697,0 1.262,0.565 1.262,1.262v4.477c0,0.696 -0.565,1.261 -1.262,1.261zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM16.779,17v0c-0.674,0 -1.221,-0.547 -1.221,-1.221v-2.605c0,-1.058 -0.651,-1.174 -0.895,-1.174c-0.244,0 -1.058,0.035 -1.058,1.174v2.605c0,0.674 -0.547,1.221 -1.221,1.221h-0.081c-0.674,0 -1.221,-0.547 -1.221,-1.221v-4.517c0,-0.697 0.565,-1.262 1.262,-1.262v0c0.697,0 1.262,0.565 1.262,1.262c0,0 0.282,-1.262 2.198,-1.262c1.219,0 2.196,0.977 2.196,3.174v2.605c0,0.674 -0.547,1.221 -1.221,1.221z"></path>
                </g>
              </g>
            </svg>
          </router-link>
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

  div.logo img {
    width: 30px;
    height: 30px;
  }

  div.logo a {
    float: left;


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

  div.media-icons {
    margin-top: 1rem;
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
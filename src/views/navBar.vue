<template>
     <nav>
        <ul class="desk-nav">
        <div class="nav-right">
          <li><router-link to="/">logo Ayoub</router-link></li>
        </div>
        <div class="nav-center">
          <li><router-link to="/blog">Blogs</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </div>
        <div class="nav-left">
            <!-- <li><router-link to="/shop">Shop</router-link></li> -->
            <li><router-link  target="_blank" to="/github"><img class="icon" src="github.png" alt=""></router-link></li>
            <li><router-link  target="_blank" to="/twitter"><img src="twitter-sign.png" alt="" class="icon"></router-link></li>
            <li><router-link  target="_blank" to="/linkedin"><img src="linkedin.png" alt="" class="icon"></router-link></li>
        </div>
        <!-- Mobile Humbarger -->
        <div class="humbarger " ref="humbarger" @click="humbarger()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </ul>
        <div class="mobile" ref="mobile">
          <ul class="mobile-list">
            <li><router-link to="/blog">Blogs</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
          <ul class="mobile-reseau">
             <li><router-link  target="_blank" to="/github"><img class="icon" src="github.png" alt=""></router-link></li>
            <li><router-link  target="_blank" to="/twitter"><img src="twitter-sign.png" alt="" class="icon"></router-link></li>
            <li><router-link  target="_blank" to="/linkedin"><img src="linkedin.png" alt="" class="icon"></router-link></li>
          </ul>
        </div>
    </nav>

</template>

<script scoped>

export default {
  methods: {
    humbarger () {
      const mobile = this.$refs.mobile
      const humbarger = this.$refs.humbarger
      humbarger.classList.toggle('open')
      if (mobile.classList.contains('fad-in')) {
        mobile.classList.remove('fad-in')
        document.body.classList.remove('noscroll')
        mobile.classList.add('fad-out')
      } else {
        mobile.classList.add('fad-in')
        document.body.classList.add('noscroll')
        mobile.classList.remove('fad-out')
      }
    }
  }
}
</script>

<style scoped src='../assets/navBar.css'>

</style>

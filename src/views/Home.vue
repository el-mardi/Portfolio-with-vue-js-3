<template>

  <div class="home ">
    <div class="hero container">
      <div class="hero-img">
        <img class="ImgProfil" src="user.jpg" alt="">
      </div>
      <div class="hero-text">
        <h2 class="hero-title">Hi, I'm Ayoub, a FullStack developper Laravel-Vuejs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque quas autem animi pariatur dignissimos ipsam, officiis rem non totam. Beatae natus odit nostrum illo, fuga quidem voluptatem sit atque.
        </p>
          <button to="/profil" class="btn btn-primary" >Learn More</button>
      </div>
    </div>
    <section class="box-1 container-sm">
      <div class="container-sm">
        <h1> I can help you with </h1>
      </div>
      <div class="helping container-sm">
        <div class="help fix-bugs">
          <h3>fix bugs</h3>
          <img src="icon-api.svg" alt="">
      </div>
      <div class="help design-ui">
          <h3>design ui</h3>
          <img src="icon-api.svg" alt="">
      </div>
      <div class="help design-full-app">
          <h3>full app</h3>
          <img src="icon-api.svg" alt="">
      </div>
      <div class="help backend">
          <h3>backend</h3>
          <img src="icon-api.svg" alt="">
      </div>
      </div>
    </section>
    <section class="box-2  container">
      <h1 class="container-sm">Librairies, Technologies and FrameWorks I use </h1>
      <div class="technologies">
        <ul class="liste">
          <li>Html5</li>
          <li>Css3</li>
          <li>Bootstrap5</li>
          <li>JavaScript</li>
          <li>Jquery</li>
          <li>Ajax</li>
          <li>VueJS3</li>
          <li>Laravel8</li>
        </ul>
      </div>
    </section>
    <section class="lastest-blogs">
      <div>
        <h1>Lastest Blog</h1>
      </div>
      <div class="last-blog container">
        <div class="article">
            <div class="title">
              <img class="article-img" src="image-product-2.jpg" alt="">
            </div>
          <div class="content">
            <h2>The title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quod ratione deserunt,
              vitae nobis eos. Voluptatibus minima pariatur harum voluptatum beatae reprehenderit ad,
              consectetur magni quod, esse ab deserunt repellat.
            </p>
            <span> 01-01-2021 </span>
          </div>
        </div>
        <div class="article">
         <div class="title">
              <img class="article-img" src="image-product-2.jpg" alt="">
            </div>
          <div class="content">
            <h2>The title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quod ratione deserunt,
              vitae nobis eos. Voluptatibus minima pariatur harum voluptatum beatae reprehenderit ad,
              consectetur magni quod, esse ab deserunt repellat.
            </p>
            <span> 01-01-2021 </span>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>

<style scoped src='../assets/home.css'>
</style>

<template>
    <div class="blog container">
        <div class="articles">
            <h2>check all my articles</h2>
        </div>
        <section>
        <Article v-for="(article, i) in articles" :key="i" :Title="article.Title" :src="article.src" :text="article.text"/>
         <div class="article">
            <h1 class="title">The title of article</h1>
            <div class="content">
                <video src="video.mp4" controls muted></video>
                <p class="">
                    <!-- <img src="image-product-2.jpg" alt=""> -->
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate earum similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta asperiores consequatur maxime, earum repudiandae.
                    <router-link to="#" class="btn btn-blog">Learn More..</router-link>
                </p>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
import Article from '@/components/article.vue'
export default {
  components: {
    Article
  },
  data () {
    return {
      articles: {
        1: {
          Title: 'The third title',
          src: 'image-confetti.jpg',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate  earum   similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta  asperiores   consequatur maxime, earum repudiandae.',
          link: ''
        },
        2: {
          Title: 'The first title',
          src: 'image-product-1.jpg',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate   earum similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta   asperiores consequatur maxime, earum repudiandae.',
          link: ''
        },
        3: {
          Title: 'The second title',
          src: 'image-product-2.jpg',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate earum   similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta asperiores   consequatur maxime, earum repudiandae.',
          link: ''
        }
      }
    }
  }

}
</script>

<style scoped src='../assets/blog.css'>

</style>

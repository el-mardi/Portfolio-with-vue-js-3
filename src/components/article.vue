<template>
    <div class="article">
        <h1 class="title">{{Title}}</h1>
        <div class="content">
            <img :src="src" alt="">
            <p class="">
                {{text}}
                <router-link to="#" class="btn btn-blog">Learn More..</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['Title', 'src', 'text', 'link']
}
</script>

<style scoped src='../assets/article.css'>

</style>

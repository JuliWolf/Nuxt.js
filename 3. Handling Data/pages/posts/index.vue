<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  // asyncData(context, callback) {
  //   // Срабатывает на стороне сервера при первом рендеринге
  //   // console.log('asyncData is executed!')
  //   // console.log(context)
  //   setTimeout(() => {
  //     // Если первым аргументов передается ошибка, то nuxt перенаправит на страницу ошибки
  //     callback(null, {
  //       loadedPosts: [
  //         {
  //           id: '1',
  //           title: "First Post",
  //           previewText: "This is our first post!",
  //           thumbnail:
  //             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //         },
  //           {
  //           id: '2',
  //           title: "Second Post",
  //           previewText: "This is our second post!",
  //           thumbnail:
  //             "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //         }
  //       ]
  //     })
  //   }, 1500)
  // },
  // created(){
  //   this.$store.dispatch('setPosts', this.loadedPosts);
  // },
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

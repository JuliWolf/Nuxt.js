<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>

export default {
  components: {
    PostList
  },
  // data() {
  //   return {
  //     loadedPosts: [
  //       {
  //         id: '1',
  //         title: "First Post",
  //         previewText: "This is our first post!",
  //         thumbnail:
  //           "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //       },
  //         {
  //         id: '2',
  //         title: "Second Post",
  //         previewText: "This is our second post!",
  //         thumbnail:
  //           "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //       }
  //     ]
  //   };
  // },

  // Executed before give to client
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: '1',
  //             title: "First Post",
  //             previewText: "This is our first post!",
  //             thumbnail:
  //               "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //           },
  //             {
  //             id: '2',
  //             title: "Second Post",
  //             previewText: "This is our second post!",
  //             thumbnail:
  //               "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //           }
  //         ]
  //       })
  //       // reject(new Error())
  //     }, 1000);
  //   }).then(res => {
  //     return res;
  //   })
  //   .catch(e => {
  //     context.error(new Error());
  //   })
  // },

  // Special method to get some data
  // fetch(context) {
  //   if(context.store.state.loadedPosts.length > 0){
  //     return null;
  //   }
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: '1',
  //             title: "First Post",
  //             previewText: "This is our first post!",
  //             thumbnail:
  //               "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //           },
  //             {
  //             id: '2',
  //             title: "Second Post",
  //             previewText: "This is our second post!",
  //             thumbnail:
  //               "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //           }
  //         ]
  //       })
  //       // reject(new Error())
  //     }, 1000);
  //   }).then(res => {
  //     context.store.dispatch('setPosts', res.loadedPosts)
  //   })
  //   .catch(e => {
  //     context.error(new Error());
  //   })
  // },
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <section class="post-list">
    <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://i1.wp.com/www.cloudsecuretech.com/wp-content/uploads/2017/03/Depositphotos_138324842_original.jpg?fit=1500%2C1001&ssl=1"
        title="Hello there!"
        previewText="This is my fist post!"
      />
      <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://i1.wp.com/www.cloudsecuretech.com/wp-content/uploads/2017/03/Depositphotos_138324842_original.jpg?fit=1500%2C1001&ssl=1"
        title="Hello there second time!"
        previewText="This is my second post!"
      />

      <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://i1.wp.com/www.cloudsecuretech.com/wp-content/uploads/2017/03/Depositphotos_138324842_original.jpg?fit=1500%2C1001&ssl=1"
        title="Hi there!"
        previewText="This is my third post!"
      />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PostPreview
  }
}
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url('~assets/images/main-page-background.jpg');
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

  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }


</style>


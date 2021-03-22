<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  data(){
    return {
      loadedPost: {
        author: 'Julia',
        title: 'My awesome Post',
        content: 'Super amazing',
        thumbnail: "https://i1.wp.com/www.cloudsecuretech.com/wp-content/uploads/2017/03/Depositphotos_138324842_original.jpg?fit=1500%2C1001&ssl=1"
      }
    }
  },
  components: {
    AdminPostForm
  },
  layout: 'admin'
}
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>

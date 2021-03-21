<template>
  <div class="container">
    <!-- Send new request -->
    <a href="/users">Users</a>


    <!-- No new request -->
    <nuxt-link to="/users">Users</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'users'
}
</script>


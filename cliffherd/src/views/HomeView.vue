<template>
  <div class="home">
    <Index />
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/IndexPage.vue'

export default {
  name: 'HomeView',
  components: {
    Index
  }
}
</script>

<template>
  <div class="comics">
    <HelloWorld msg="Comics page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'comics',
  components: {
    HelloWorld
  }
}
</script>
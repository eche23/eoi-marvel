<template>
  <div class="characters">
    <HelloWorld msg="Characters page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'characters',
  components: {
    HelloWorld
  }
}
</script>
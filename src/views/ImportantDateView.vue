<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">      
      <h3>Important Dates</h3><br/>
      Abstract/Full paper submission: <b>April 15, 2025</b><br />
      Paper notification: <b>April 24, 2025</b><br />
      Camera-ready paper due date: <b>April 27, 2025</b><br />
      Conference Dates: <b>May 9-10, 2025</b><br />
    </div>
  </Content>
</template>

<style scoped>
.context {
  height: auto;
  min-height: 40vh;
  padding: 2rem 3rem;
}
</style>

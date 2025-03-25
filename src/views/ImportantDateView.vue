<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">      
      <h3>Important Dates</h3><br/>
      Full paper submission: <b>30 March, 2025</b><br/>
      Paper notification: <b>06 April, 2025</b><br/>
      Camera-ready paper due date: <b>20 April, 2025</b><br/>
      Conference Dates: <b>9-10 May, 2025</b><br/>
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

<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <!-- <h2>TBD...</h2> -->
      <section>
        <p>先鋒國際研發大樓 3樓 會議廳</p>
        <p>Pioneer International R&D Building, PB</p>
        <img src="https://academic.ntut.edu.tw/media/f1ldkj5z/campusmap_eng.jpg" style="max-width: 100%;"/>
      </section>

    </div>
  </Content>
</template>

<style scoped>
.context {
  height: auto;
  min-height: 40vh;
  padding: 2rem 3rem;
  padding-bottom: 16rem;
}
</style>

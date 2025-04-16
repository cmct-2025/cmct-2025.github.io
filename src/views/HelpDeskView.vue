<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <h3>Help Desk</h3><br />
      <section>
        All questions about CMCT 2025 should be emailed to:
        <ul>

          <li>Workshop Email: <a href="mailto:cmct.workshop@gmail.com">cmct.workshop@gmail.com</a></li>
          <li>Contact Person: Professor Chuan-Ming Liu, Department of Computer Science and Information Engineering, National Taipei University of Technology
          </li>
          tel:(02)27712171 ext 4251<br/>
          Email: <a href="mailto:cmliu@ntut.edu.tw">cmliu@ntut.edu.tw</a>
        </ul>
      </section><br />
      
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

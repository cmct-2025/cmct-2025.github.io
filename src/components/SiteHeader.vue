<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Content from '../layout/Content.vue';

const isSticky = ref(false);
const headerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!headerRef.value) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = !entry.isIntersecting; // 當 header 不可見時變成 sticky
    },
    { root: null, threshold: 0 }
  );

  observer.observe(headerRef.value);
});
</script>

<template>
  <header class="header">
    <!-- 原始位置的 Header (用於觀察) -->
    <div ref="headerRef" class="original-header">
      <div class="container background-image"></div>
    </div>
    
    <!-- 滑動超過後變 Sticky 的 Header -->
    <!-- <div :class="['sticky-header', 'is-sticky']"> -->
    <div :class="['sticky-header', {'is-sticky': isSticky}]">
      <Content :align="'center'">
        <div class="link-list">
          <router-link class="link" to="/">CMCT 2024</router-link>
          <router-link class="link" to="/about">Important Dates</router-link>
          <router-link class="link" to="/about">Call for Papers</router-link>
          <!-- <router-link class="link" to="/about">Paper Submission</router-link>
          <router-link class="link" to="/about">Special Issues</router-link>
          <router-link class="link" to="/about">Accepted Papers</router-link>
          <router-link class="link" to="/about">Program</router-link>
          <router-link class="link" to="/about">Keynote Speakers</router-link>
          <router-link class="link" to="/about">Committees</router-link>
          <router-link class="link" to="/about">Registration</router-link>
          <router-link class="link" to="/about">Venue and Accommodation</router-link>
          <router-link class="link" to="/about">Help Desk</router-link> -->
        </div>


      </Content>
    </div>


  </header>
</template>

<style scoped lang="scss">
/* 原始 Header 樣式 */
.header {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  .original-header {
    position: relative;
    width: 100%;
    background-color: #42b883;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 120px;

    .background-image {
      background-image: url('../assets/banner2025.png');
      background-size: cover;
      background-position: center top;
      width: 100%;
      padding-bottom: 37%;
      display: flex;
      align-items: center;
      justify-content: center;

      
    }
  }
  
  /* Sticky Header 樣式 (當滾動超過原始位置才顯示) */
  .sticky-header {
    position: relative;
    width: calc(100% - var(--scrollbar-width, 0px)); /* 避免遮住 scrollbar */
    background-color: rgba(14, 35, 58, 0.9);
    color: white;
    z-index: 1;
    padding: 1rem 0;
    transition: 0.16s ease-in-out;
    &:hover {
      background-color: rgba(14, 35, 58, 1);
    }
    &.is-sticky {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100; /* 降低層級，避免遮住 scrollbar */
    }
    .link-list {
      padding: 0 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
  }
}


</style>

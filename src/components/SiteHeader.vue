<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Content from '../layout/Content.vue';

const isSticky = ref(false);
const headerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!headerRef.value) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const targetElement = entry.target as HTMLElement; // 斷言 target 是 HTMLElement
      isSticky.value = (targetElement.offsetWidth >= 1024) && !entry.isIntersecting; // 當 header 不可見時變成 sticky
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
      <div class="container background-image">
        <div class="inner">

          <div class="title">
            <div class="icon"></div>
            <div class="text">The 42<sup>nd</sup> Workshop on Combinatorial Mathematics and Computation Theory
              <p class="venue">May 9-10, 2025 @Taipei Tech, Taiwan</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 滑動超過後變 Sticky 的 Header -->
    <!-- <div :class="['sticky-header', 'is-sticky']"> -->
    <div :class="['sticky-header', { 'is-sticky': isSticky }]">
      <Content :align="'center'">
        <div class="link-list">
          <router-link class="link" to="/">CMCT 2025</router-link>
          <router-link class="link" to="/committees">Committees</router-link>
          <router-link class="link" to="/important-date-view">Important Dates</router-link>
          <router-link class="link" to="/call-for-papers">Call for Papers</router-link>
          <router-link class="link" to="/paper-sumission">Paper Submission</router-link>
          <router-link class="link" to="/accepted-papers">Accepted Papers</router-link>
          <router-link class="link" to="/program">Program</router-link>
          <router-link class="link" to="/keynote-speakers">Keynote Speakers</router-link>
          <router-link class="link" to="/registration">Registration</router-link>
          <router-link class="link" to="/venue">Venue and Accommodation</router-link>
          <router-link class="link" to="/help-desk">Help Desk</router-link>
          <!-- 
          <router-link class="link" to="/about">Special Issues</router-link>-->
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
    // margin-top: 120px;

    .background-image {
      background-image: url('../assets/banner.jpg');
      background-size: cover;
      background-position: center top;
      width: 100%;
      padding-bottom: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &>.inner {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        align-items: center;
        justify-content: center;

        &>.title {
          max-width: 1200px;
          width: 100%;
          background-color: rgba(145, 145, 145, 0.5);
          display: flex;
          justify-content: center;
          gap: 1rem;
          align-items: center;
          padding: 1rem;

          .text {
            color: #f1f1f1;
            text-align: right;
            font-family: bold;
            font-size: 4rem;
            text-shadow: 1px 1px 3px rgb(0, 0, 0);

            .venue {
              font-size: 2rem;
              color: #f1f1f1;
              text-shadow: 2px 2px 4px rgb(0, 0, 0);

            }
            @media screen and (max-width: 1280px) {
              font-size: 2rem;
              .venue {
                font-size: 1rem;
              }
            }

            @media screen and (max-width: 768px) {
              font-size: 1.5rem;
            }

            @media screen and (max-width: 420px) {
              font-size: 1.2rem;
              .venue {
                font-size: 0.8rem;
              }
            }

          }

          @media screen and (max-width: 1280px) {
            & {
              max-width: 800px;
            }
          }

          .icon {
            min-width: 120px;
            height: 128px;
            background-image: url('../assets/cmct2025.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;

            @media screen and (max-width: 768px) {
              min-width: 100px;
              height: 60px;
            }
          }

        }
      }

    }
  }

  /* Sticky Header 樣式 (當滾動超過原始位置才顯示) */
  .sticky-header {
    position: relative;
    width: calc(100% - var(--scrollbar-width, 0px));
    /* 避免遮住 scrollbar */
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
      z-index: 100;
      /* 降低層級，避免遮住 scrollbar */
    }

    .link-list {
      padding: 0 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem 2rem;

      &>.link {
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.75);
        font-size: 14px;

        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }

    @media screen and (max-width: 768px) {
      .link-list {
        gap: 10px;

        &>.link {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

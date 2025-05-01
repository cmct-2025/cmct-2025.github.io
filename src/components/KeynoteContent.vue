<script setup lang="ts">

defineProps<{
  engName: string
  chtName: string
  staffTitle: string
  affiliation: string
  email: string
  biography: string
  speechTitle: string
  abstractContent: string
  imgSrc?: URL
  square?: boolean
}>()

</script>

<template>
  <h3>Keynote Speaker</h3>
  <section>
    <div class="basic-info">
      <div :class="['photo', { 'square': square }]" :style="{ backgroundImage: `url(${imgSrc})` }" v-if="imgSrc">
        <!-- <img src="../assets/keynote.webp" /> -->
      </div>
      <div class="detail">

        <b class="lg">{{ chtName }} 教授/ Prof. {{ engName }}</b><br />
        <!-- <b>Title :</b> -->
        {{ staffTitle }}<br />
        <!-- <b>Affiliation :</b> -->
        {{ affiliation }}<br />
        <!-- <b>E-mail :</b> -->
        {{ email }}<br />
      </div>
    </div>
  </section><br /><br />
  <section class="content">
    <b>Short Bio</b>
    <div class="divider" style="width: 100%;height: 0.5px;background-color: rgb(187 155 155 / 18%);margin: 1.5rem 0px;">
    </div>
    {{ biography }}
  </section><br /><br />
  <div class="divider" style="width: 100%; height: 0.5px; background-color: darkgrey; margin: 1.5rem 0;"></div>

  <h3>Title of the speech</h3>

  <section class="content">
    <p>{{ speechTitle }}</p>

    <b>Abstract</b>
    <div class="divider" style="width: 100%;height: 0.5px;background-color: rgb(187 155 155 / 18%);margin: 1.5rem 0px;">
    </div>
    {{ abstractContent }}

  </section><br /><br /><br />


</template>

<style lang="scss" scoped>
.content {
  line-height: 1.8rem;
  letter-spacing: 0.02rem;
}

.basic-info {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;

  b.lg {
    font-size: 1.6rem;
    padding-bottom: 1rem;
    display: block;
  }

  .photo {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    flex-basis: 240px;
    height: 280px;

    &.square {
      background-size: contain;
    }
  }

  .detail {
    line-height: 2rem;
    word-break: break-all;
    flex: 1;
  }



  @media screen and (max-width:950px) {


    .detail {
      // flex-basis: calc(100% - 240px - 1rem);
    }
  }

  @media screen and (max-width:640px) {
    .photo {
      background-size: contain;
      flex-basis: 100%;
      height: 380px;

    }

    .detail {
      flex-basis: 100%;
    }
  }

}
</style>

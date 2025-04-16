<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <h3>Registration</h3><br />
      <section>
        🔔 研討會出席註冊通知｜Conference Registration Notice
        <ul>
          親愛的與會者您好，<br />
          為確保活動順利進行，敬請所有參與者完成出席註冊，請透過以下連結填寫報名表：<br />

          👉 <a
            href="https://docs.google.com/forms/d/1-hbRx6Xj_lItUPJOYgwRhnuJp-olDWVJT05xCGY4Cjc/edit?hl=zh-tw#settings"
            target="_blank">link</a><br /><br />

          📅 報名截止時間：2025年4月27日（星期日）晚間11:59（台北時間）<br />

          感謝您的配合，期待在研討會中與您相見！<br /><br />

          <div class="divider" style="width: 100%; height: 0.5px; background-color: darkgrey; margin: 1.5rem 0;"></div>

          Dear participants, <br />
          To ensure the smooth operation of the event, all attendees are required to complete the registration for
          attendance via the link below: <br />
          👉 <a
            href="https://docs.google.com/forms/d/1-hbRx6Xj_lItUPJOYgwRhnuJp-olDWVJT05xCGY4Cjc/edit?hl=zh-tw#settings"
            target="_blank">link</a><br /><br />
          📅 Registration deadline: April 27th, 2025 (Sunday) at 11:59 PM (Taipei time)<br />

          Thank you for your cooperation, and we look forward to seeing you at the conference!<br /><br /><br /><br />
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

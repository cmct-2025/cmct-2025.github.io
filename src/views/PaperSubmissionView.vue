<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <h3>Paper Submission</h3><br />
      <section>
        <!-- <h4>Submission Guideline</h4> -->

        <!-- All papers must be original and not simultaneously submitted to another journal or conference.<br /> -->
        <p>
          本研討會接受論文摘要(1頁)或全文(含文獻至多6頁)投稿，論文格式請依研討會網站提供的樣版撰寫；<br/>最佳論文於全文投稿論文中選出。論文投稿請透過 Microsoft CMT 會議系統進行，投稿過程則可能需要註冊建立一個帳戶。<br/><br/>
          The conference accepts submissions in the form of either a one-page abstract or a full paper (up to six pages, including references). <br/>The paper format should follow the template provided on the conference website. The Best Paper Award will be selected from the full paper submissions. Papers should be submitted through the Microsoft CMT conference system, and the submission process may require registration to create an account.

        </p>
        Submission link: <b><a href="https://cmt3.research.microsoft.com/CMCT2025" target="_blank">https://cmt3.research.microsoft.com/CMCT2025</a></b><br />
        Help on submission: <a href="https://drive.google.com/file/d/1xeDQ_RBGhy2gwFwjudZqQ1WIC8CxXUhQ/view?usp=sharing" target="_blank">link</a><br />
        Templates, sample files: <a
          href="https://drive.google.com/drive/folders/1-uJpkkvIbmP1hxGBnCQsZ5GXMH49iurY?usp=drive_link"
          target="_blank">Templates</a><br />
        <!-- <p>
        </p><br/> -->
        <!-- <p><b>The maximum length of the submission (including references, but excluding the optional appendix) is 6
            pages. Proofs omitted due to space constraints must be placed in an appendix to be read by the program
            committee members at their discretion. Submissions that deviate from these guidelines risk being rejected
            without consideration of their merits. Submission will be through the Microsoft CMT system. The submission
            process may require registration to create a CMT account prior to submission.</b><br /><br />
          <i>The <a href="https://cmt3.research.microsoft.com" target="_blank">Microsoft CMT service</a> was used for
            managing the
            peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore
            all expenses, including costs for Azure cloud services as well as for software development and support.</i>
        </p> -->
      </section><br />
      <!-- <h2>TBD...</h2> -->

    </div>
  </Content>
</template>

<style scoped>
.context {
  height: auto;
  min-height: 40vh;
  padding: 2rem 3rem;
  word-wrap: break-word;
}
</style>

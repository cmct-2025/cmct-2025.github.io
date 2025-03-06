<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <h3>Paper Submission</h3><br />
      <section>
        <h4>Submission Guideline</h4>

        All papers must be original and not simultaneously submitted to another journal or conference.<br />
        Submission link: <b><a href="https://cmt3.research.microsoft.com/CMCT2025" target="_blank">https://cmt3.research.microsoft.com/CMCT2025</a></b><br />
        Help on submission: <a href="https://drive.google.com/file/d/1xeDQ_RBGhy2gwFwjudZqQ1WIC8CxXUhQ/view?usp=sharing" target="_blank">link</a><br />
        Templates, sample files: <a
          href="https://drive.google.com/drive/folders/1-uJpkkvIbmP1hxGBnCQsZ5GXMH49iurY?usp=drive_link"
          target="_blank">Templates</a><br />
        <p><b>The maximum length of the submission (including references, but excluding the optional appendix) is 6
            pages. Proofs omitted due to space constraints must be placed in an appendix to be read by the program
            committee members at their discretion. Submissions that deviate from these guidelines risk being rejected
            without consideration of their merits. Submission will be through the Microsoft CMT system. The submission
            process may require registration to create a CMT account prior to submission.</b><br /><br />
          <i>The <a href="https://cmt3.research.microsoft.com" target="_blank">Microsoft CMT service</a> was used for
            managing the
            peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore
            all expenses, including costs for Azure cloud services as well as for software development and support.</i>
        </p>
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
}
</style>

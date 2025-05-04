<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <!-- <h2>TBD...</h2> -->
      <section>
        <p>先鋒國際研發大樓 3 樓會議廳（303 教室）</p>
        <p>Pioneer International R&D Building, PB</p>
        <img src="/src/assets/ntut_map.png" style="max-width: 100%;" />
      </section><br><br>
      <section class="traffic">
        <b>【交通方式說明】</b>
        <ul>
          <li>捷運<br>

            搭乘捷運藍線【板南線】或橘線【中和新蘆線】，於「忠孝新生站」下車，從3號出口出站後步行約1分鐘，即可抵達「先鋒國際研發大樓」。
          </li><br>
          <li>公車<br>

            臺北科技大學站：可搭乘212、212直達車、232、262、299、605等路線。<br>
            忠孝新生路口站：可搭乘72、109、115、214、222、226、280、290、505、642、665、668、672及松江新生幹線等路線。</li>
          <li>火車／高鐵<br>

            從臺北車站或高鐵臺北站轉乘捷運板南線，於「忠孝新生站」下車，從3號出口步行約1分鐘即可到達會場。
          </li><br>
          <li>自行開車<br>

            國道一號：由建國北路／松江路交流道下（靠左走建國北路高架橋），於忠孝東路出口下匝道，右轉忠孝東路後行駛約100公尺即可抵達。 <br>

            國道三號：從新店交流道接木柵交流道下，沿辛亥路轉建國南路直行至忠孝東路口即達。
          </li><br>
          <b>⚠ 特別提醒：校園內停車位有限，亦不提供免費停車服務，建議多加利用大眾運輸工具。
          </b>
        </ul>
      </section><br><br>
      <section>
        <b>【停車資訊參考】</b>
        <ul>
          <li>北科先鋒大樓地下停車場<br>

            地址：台北市大安區忠孝東路三段46號 B1-B4<br>

            <!-- 收費：每小時50元，當日最高220元<br> -->

            備註：活動現場專用，入口請由忠孝東路三段44巷進入<br>

          </li><br>
          <li>永吉豐停車場（和苑三井花園飯店）<br>

            地址：台北市大安區忠孝東路三段30號 B1 <br>

            <!-- 收費：每小時60元，當日最高250元 <br> -->

            距離：步行約1分鐘 <br>
          </li><br>
          <li>日月亭億光停車場<br>

            地址：台北市大安區忠孝東路三段1號 B1-B3 <br>

            <!-- 收費：每小時40元，每日最高200元 <br> -->

            距離：步行約7分鐘 <br>
          </li><br>
          <li>台灣聯通北科大停車場<br>

            地址：台北市中正區市民大道三段65號<br>

            <!-- 收費：第一小時30元，之後每30分鐘15元，每日最高160元<br> -->

            距離：步行約8分鐘 <br>
          </li><br>

        </ul>
      </section>

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

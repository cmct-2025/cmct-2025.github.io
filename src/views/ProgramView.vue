<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">

      <h3>Program</h3>

      <h4>2025年 5月 9日(星期五)</h4>

      <section>
        <div class="section-flex">
          <div class="table-flex">

            <table>
              <thead>
                <tr>
                  <th>時間</th>
                  <th>活動</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:30~10:00</td>
                  <td>報 到</td>
                </tr>
                <tr>
                  <td>10:00~10:20</td>
                  <td>開幕</td>
                </tr>
                <tr>
                  <td>10:30~11:20</td>
                  <td>專 題 演 講<br>演講者：國立中山大學資訊工程學系 楊昌彪 特聘教授</td>
                </tr>
                <tr>
                  <td>11:20~12:10</td>
                  <td>學會最佳論文分享 (I)<br>最佳期刊論文 國立清華大學 廖崇碩 特聘教授<br>最佳碩士論文 李怡萱 臺灣大學</td>
                </tr>
                <tr>
                  <td>12:10~13:20</td>
                  <td>午餐</td>
                </tr>
                <tr>
                  <td>13:20~14:10</td>
                  <td>專 題 演 講<br>演講者：國立中央大學資訊工程學系 江振瑞 教授</td>
                </tr>
                <tr>
                  <td>14:10~15:10</td>
                  <td>學會最佳論文分享(II)<br>最佳碩士論文 陳郁涵 成功大學<br>最佳碩士論文 許珮萱 中央大學<br>最佳碩士論文 程至榮 政治大學</td>
                </tr>
                <tr>
                  <td>15:10~15:30</td>
                  <td>coffee break</td>
                </tr>
                <tr>
                  <td>15:30~17:30</td>
                  <td>
                    <div class="sessions">
                      <div class="session-column">
                        <b class="label">Session D</b>
                        <span>Data Mining and Prediction</span>
                      </div>
                      <div class="session-column">
                        <b class="label">Session G</b>
                        <span>Graphs Algorithms</span>
                      </div>
                      <div class="session-column">
                        <b class="label">Session S</b>
                        <span>Scheduling</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <h4>2025年 5月 10日(星期六)</h4>
            <table>
              <thead>
                <tr>
                  <th>時間</th>
                  <th>活動</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8:50~9:20</td>
                  <td>報 到</td>
                </tr>
                <tr>
                  <td>9:20~10:10</td>
                  <td>專 題 演 講<br>演講者：國立暨南國際大學資訊工程學系 阮夙姿 特聘教授</td>
                </tr>
                <tr>
                  <td>10:10~10:30</td>
                  <td>coffee break</td>
                </tr>
                <tr>
                  <td>10:30~12:10</td>
                  <td>
                    <div class="sessions">
                      <div class="session-column">
                        <b class="label">Session B</b>
                        <span>Best paper candidates</span>
                      </div>
                      <div class="session-column">
                        <b class="label">Session O</b>
                        <span>Optimization</span>
                      </div>
                      <div class="session-column">
                        <b class="label">Session A</b>
                        <span>Applications</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>12:10~12:30</td>
                  <td>閉幕 (最佳論文獎頒獎)</td>
                </tr>
                <tr>
                  <td>12:30</td>
                  <td>午餐 賦歸</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  </Content>
</template>

<style lang="scss" scoped>
.context {
  height: auto;
  min-height: 40vh;
  padding: 2rem 3rem;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  table,
  th,
  td {
    text-align: center;
    border: 1px solid black;
  }

  th,
  td {
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  .sessions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    width: 100%;


    .label {
      background-color: rgb(181, 180, 190);
      display: block;
    }
  }

  .session-column {
    border: 1px solid black;
    text-align: center;
    // height: 150px;
    /* Adjust this value to fix height */
    box-sizing: border-box;
    /* Prevent content from overflowing */
  }

  @media screen and (max-width:800px) {
    .sessions {
      display: flex;
      flex-direction: column;
    }
  }

  .section-flex {
    display: flex;
    gap: 2rem;

    .table-flex {
      flex: 1;
      max-width: 800px;
    }
  }
}
</style>

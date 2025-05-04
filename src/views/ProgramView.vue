<script setup lang="ts">
import Content from '../layout/Content.vue';
import { ref } from 'vue';
const curInd = ref(0);
const items = ref(["5/9", "5/10"]);
</script>

<template>
  <Content :align="'left'">
    <div class="context">

      <h3>Program</h3>
      <div class="list">
        <span @click="() => { curInd = ind }" :class="['button', { 'active': curInd == ind }]"
          v-for="(item, ind) in items" :key="ind">{{ item }}</span>
      </div>

      <section>
        <div class="section-flex">
          <div class="table-flex">
            <template v-if="curInd == 0">
              <h4>2025年 5月 9日(星期五)</h4>
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
                    <td><b>報 到</b></td>
                  </tr>
                  <tr>
                    <td>10:00~10:20</td>
                    <td><b>開幕</b></td>
                  </tr>
                  <tr>
                    <td>10:30~11:20</td>
                    <td><b>專 題 演 講</b><br>演講者：國立中山大學資訊工程學系 楊昌彪 特聘教授<br>三樓會議廳 (303室)</td>
                  </tr>
                  <tr>
                    <td>11:20~12:10</td>
                    <td><b>學會最佳論文分享 (I)</b><br>最佳期刊論文 國立清華大學 廖崇碩 特聘教授<br>最佳碩士論文 李怡萱 臺灣大學<br>三樓會議廳 (303室)</td>
                  </tr>
                  <tr>
                    <td>12:10~13:20</td>
                    <td><b>午餐</b></td>
                  </tr>
                  <tr>
                    <td>13:20~14:10</td>
                    <td><b>專 題 演 講</b><br>演講者：國立中央大學資訊工程學系 江振瑞 教授<br>三樓會議廳 (303室)</td>
                  </tr>
                  <tr>
                    <td>14:10~15:10</td>
                    <td><b>學會最佳論文分享(II)</b><br>最佳碩士論文 陳郁涵 成功大學<br>最佳碩士論文 許珮萱 中央大學<br>最佳碩士論文 程至榮 政治大學<br>三樓會議廳 (303室)
                    </td>
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
                          <span>Data Mining and Prediction</span><br>三樓會議廳 (303室)
                        </div>
                        <div class="session-column">
                          <b class="label">Session G</b>
                          <span>Graphs Algorithms</span><br>四樓會議廳 (402室)
                        </div>
                        <div class="session-column">
                          <b class="label">Session S</b>
                          <span>Scheduling</span><br>四樓會議廳 (401室)
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>Session D - Data Mining and Prediction</h3>
              <ul>
                <li>自動編碼器結合圖注意力網路用於推薦系統</li>
                <li>用動態圖分析社群之間的關係與變化</li>
                <li>Implementation of an LSTM-based Numerical Computation AIoT System for Household Electricity
                  Monitoring</li>
                <li>scGHSOM: A Hierarchical Framework for Single-Cell Data Clustering and Visualization</li>
                <li>The Prediction of the Best Contract in Competitive Bridge Bidding</li>
                <li>基於時空角度的多平面建模之人體動作預測</li>
              </ul>

              <h3>Session G - Graphs Algorithms</h3>
              <ul>
                <li>超級支配集合問題之正確演算法</li>
                <li>The integer {2}-domination number of grids</li>
                <li>Finding ultrametric minimum-diameter spanning trees</li>
                <li>The Construction Schemes for Arc Fault-Tolerance Joinable Hamiltonian Directed Graphs</li>
                <li>Dicke State-Enhanced Grover's Algorithm for Solving the NP-Complete Dominating Set Problem</li>
              </ul>

              <h3>Session S - Scheduling</h3>
              <ul>
                <li>The Littlestone Dimension of Fully Symmetric Boolean Concepts</li>
                <li>A Note for Scheduling Jobs with Two Criticality Levels</li>
                <li>An Integer-Linear Programming Approach for Solving the Dormitory Assignment Problem</li>
                <li>Gray code for ultrametric furthest pairs</li>
                <li>Existence of Pure-Strategy Nash Equilibria in a Two-Party Policy Competition Game: Extending to the
                  General Case</li>
              </ul>
            </template>
            <template v-else>

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
                    <td>9:20~10:10</td>
                    <td><b>專 題 演 講</b><br>演講者：國立暨南國際大學資訊工程學系 阮夙姿 特聘教授<br>三樓會議廳 (303室)</td>
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
                          <span>Best paper candidates</span><br>三樓會議廳 (303室)
                        </div>
                        <div class="session-column">
                          <b class="label">Session O</b>
                          <span>Optimization</span><br>四樓會議廳 (402室)
                        </div>
                        <div class="session-column">
                          <b class="label">Session A</b>
                          <span>Applications</span><br>四樓會議廳 (401室)
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>12:10~12:30</td>
                    <td><b>閉 幕(最佳論文獎頒獎)</b><br>三樓會議廳 (303室)</td>
                  </tr>
                  <tr>
                    <td>12:30</td>
                    <td><b>午餐 賦歸</b></td>
                  </tr>
                </tbody>
              </table>
              <h3>Session B - Best paper candidates</h3>
              <ul>
                <li>Triadic Propagation Linear Threshold Model for Rumor Minimization</li>
                <li>異質資料庫整合之研究-以A政府機關為例</li>
                <li>基於幾何圖神經網路與蛋白質語言模型的抗原表位預測</li>
                <li>The Most and Longest Common Increasing Interval Subsequence Problems</li>
                <li>Bit-Vector Approaches for Solving the Increasing Subsequence Problems with Sliding Windows</li>
              </ul>



              <h3>Session O - Optimization</h3>
              <ul>
                <li>剝洋蔥式的無線充電板佈署演算法</li>
                <li>REST API 序列生成之 API 資源依賴分析與優化</li>
                <li>Algorithmic Approach to Multi-Camera-Based Automatic Scoring in Badminton</li>
                <li>Hi-CMFR: A Non-Deep-Learning Enhancement Method for Sparse Single-cell Hi-C Data</li>
                <li>以深度強化學習優化無人機回程網路中多類型服務切片的資源分配</li>
              </ul>

              <h3>Session A - Applications</h3>
              <ul>
                <li>A Literature Survey on Single Layer and Hierarchical Correlation Clustering</li>
                <li>基於隱私保護集合交集建構通用隱私資料清理架構</li>
                <li>利用學習索引進行高維度近似近鄰查詢處理</li>
                <li>醫療物聯網閘道器中的半量子金鑰分發與認證協議</li>
                <li>Verifying Quantum Circuits with Level-Synchronized Tree Automata</li>
              </ul>
            </template>
          </div>
        </div>


      </section>

      <!-- <section>
        
      </section> -->

    </div>
  </Content>
</template>

<style lang="scss" scoped>
.context {
  height: auto;
  min-height: 40vh;
  padding: 2rem 3rem;

  .list {
    display: flex;
    gap: 0.2rem;

    span {
      padding: 0.3rem 1.2rem;
      background-color: rgba(181, 181, 241, 0.87);
      cursor: pointer;
      transition: 0.16s ease-in-out;

      &.active,
      &:hover {
        background-color: rgba(123, 123, 241, 1);
      }
    }
  }

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

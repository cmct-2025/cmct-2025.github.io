<script setup lang="ts">
import { ref } from 'vue'

import Content from '../layout/Content.vue';
const papers = ref([{ id: 9, title: "超級支配集合問題之正確演算法", },
{ id: 10, title: "用動態圖分析社群之間的關係與變化", },
{ id: 11, title: "異質資料庫整合之研究-以A政府機關為例", },
{ id: 12, title: "基於幾何圖神經網路與蛋白質語言模型的抗原表位預測", },
{ id: 13, title: "The Littlestone Dimension of Fully Symmetric Boolean Concepts", },
{ id: 14, title: "The Most and Longest Common Increasing Interval Subsequence Problems", },
{ id: 15, title: "Bit-Vector Approaches for Solving the Increasing Subsequence Problems with Sliding indows", },
{ id: 16, title: "剝洋蔥式的無線充電板佈署演算法", },
{ id: 17, title: "The integer {2}-domination number of grids", },
{ id: 18, title: "Finding ultrametric minimum-diameter spanning trees", },
{ id: 19, title: "REST API 序列生成之 API 資源依賴分析與優化", },
{ id: 20, title: "基於隱私保護集合交集建構通用隱私資料清理架構", },
{ id: 22, title: "Implementation of an LSTM-based Numerical Computation AIoT System for Household Electricity Monitoring", },
{ id: 23, title: "scGHSOM: A Hierarchical Framework for Single-Cell Data Clustering and Visualization", },
{ id: 24, title: "A Literature Survey on Single Layer and Hierarchical Correlation Clustering", },
{ id: 25, title: "A Note for Scheduling Jobs with Two Criticality Levels", },
{ id: 26, title: "Algorithmic Approach to Multi-Camera-Based Automatic Scoring in Badminton", },
{ id: 27, title: "The Construction Schemes for Arc Fault-Tolerance Joinable Hamiltonian Directed Graphs", },
{ id: 28, title: "The Prediction of the Best Contract in Competitive  Bridge Bidding", },
{ id: 29, title: "An Integer-Linear Programming Approach for Solving the Dormitory Assignment Problem", },
{ id: 30, title: "Hi-CMFR: A Non-Deep-Learning Enhancement Method for Sparse Single-cell Hi-C Data", },
{ id: 31, title: "基於時空角度的多平面建模之人體動作預測", },
{ id: 32, title: "利用學習索引進行高維度近似近鄰查詢處理", },
{ id: 33, title: "醫療物聯網閘道器中的半量子金鑰分發與認證協議", },
{ id: 34, title: "Dicke State-Enhanced Grover's Algorithm for Solving the NP-Complete Dominating Set Problem", },
{ id: 35, title: "Gray code for ultrametric furthest pairs", },
{ id: 36, title: "Existence of Pure-Strategy Nash Equilibria in a Two-Party Policy Competition Game: Extending to the General Case (Abstract)", },
{ id: 37, title: "以深度強化學習優化無人機回程網路中多類型服務切片的資源分配", },
])
</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <h3>Accepted Papers</h3>
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in papers" :key="item.id">
              <td data-label="ID">{{ item.id }}</td>
              <td data-label="Title">{{ item.title }}</td>
            </tr>
          </tbody>
        </table>
      </section><br /><br />
      <section>
        請於 2025 年 4 月30 日（星期日）晚間 11:59（台北時間）前完成出席註冊： <a href="https://docs.google.com/forms/d/1-hbRx6Xj_lItUPJOYgwRhnuJp-olDWVJT05xCGY4Cjc/edit?hl=zh-tw#settings" target="_blank">link</a>，<br />
        亦請於指定期限(2025年4月30日晚間11:59)前至投稿系統上傳最終摘要稿件，以利大會彙整： <a href="https://cmt3.research.microsoft.com/CMCT2025/Submission/Index" target="_blank">link</a>。<br />

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

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  word-break: break-word;
}

th {
  background-color: #f2f2f2;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th:first-child,
td:first-child {
  width: 50px;
  /* 或者改成更小例如 40px */
}

@media (max-width: 600px) {

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    margin-bottom: 1rem;
  }

  td {
    border: none;
    position: relative;
    padding-left: 50%;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 10px;
    top: 8px;
    font-weight: bold;
    white-space: nowrap;
  }


}
</style>

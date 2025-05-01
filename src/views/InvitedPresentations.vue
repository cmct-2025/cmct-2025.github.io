<script setup lang="ts">

import Content from '../layout/Content.vue';


</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <h3>Invited Presentations</h3><br />
      <ul>
        <li>
          <b>最佳期刊論文分享</b><br />
          <div>
            Polynomial-time Combinatorial Algorithm for General Max–Min Fair Allocation, Algorithmica 86(2): 485-504,
            2024.<br />
            廖崇碩 特聘教授 / 清華大學
          </div>
        </li><br /><br />

        <li>
          <b>最佳碩士論文分享</b><br />
          <ul>
            <li>
              <div>
                表面化學反應網路的模擬能力 (On the Simulation Power of Surface Chemical Reaction Networks)
                <br />
                李怡萱 / 臺灣大學
              </div><br />
            </li>
            <li>
              <div>
                在摺疊式超立方體中建構三棵完全獨立生成樹 (Constructing Three Completely Independent Spanning Trees in Folded Hypercubes)
                <br />
                陳郁涵 / 成功大學
              </div><br />
            </li>
            <li>
              <div>
                多機器人在樹結構上最小化最大延遲巡邏調度 (Multi-Robot Patrol-Scheduling with Min-Max Latency on trees)
                <br />
                許珮萱 / 中央大學
              </div><br />
            </li>
            <li>
              <div>
                解碼PC1的力量_一種快速準確並基於共變異的Hi-C資料A/B染色體區室辨別方法 (Decoding the Power of PC1: A Fast and Accurate
                Covariance‑Based
                Method for A/B Compartment Identification in Hi-C Data)
                <br />
                程至榮 / 政治大學
              </div>
            </li>
          </ul>




        </li>
      </ul>
    </div>
  </Content>
</template>

<style lang="scss" scoped>
.context {
  white-space: break-spaces;
  height: auto;
  min-height: 100vh;
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

}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

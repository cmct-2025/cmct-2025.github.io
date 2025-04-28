<script setup lang="ts">
import { ref } from 'vue'

import Content from '../layout/Content.vue';
import KeynoteContent from '../components/KeynoteContent.vue';
const currentInd = ref(0);
const items = ref([
  {
    engName: "Chang-Biau Yang",
    chtName: "楊昌彪",
    staffTitle: "Distinguished Processor",
    affiliation: "National Sun Yat-sen University (國立中山大學)",
    email: "cbyang@cse.nsysu.edu.tw",
    biography: "Chang-Biau Yang received his B.S. degree in Electronic Engineering from National Chiao Tung University, Hsinchu, Taiwan, in 1982, and his M.S. and Ph.D. degrees in Computer Science from National Tsing Hua University, Hsinchu, Taiwan, in 1984 and 1988, respectively. In 1990, he joined National Sun Yat-sen University as a faculty member. He has been the chairman of the Department of Computer Science and Engineering from 2001 to 2004, the deputy dean of Academic Affairs from 2007 to 2008, and the Director of Office of Library and Information Services from 2009 to 2011. From 2011 to 2023, he served as the Chairman of the Collegiate Programming Examination (CPE) Committee under the Association of Taiwan Computer Programming Contest (TCPC), and from 2019 to 2022, as the Chairman of the Association of Taiwan Computer Programming Contest (TCPC). Through his dedicated efforts in CPE, he significantly contributed to enhancing the programming skills of computer science students across Taiwanese universities. He got the Best Service Award from the IEEE Tainan Section in 2014, and the Outstanding Professor Award from the Chinese Institute of Engineers in 2019. He is currently a distinguished professor in the Department of Computer Science and Engineering at National Sun Yat-sen University in Taiwan since 2019. His research interests include computer algorithms, bioinformatics and parallel processing. Especially, he was devoted to the study of the sequence-related problems with wide applications on bioinformatics.",
    speechTitle: "The Longest Increasing Subsequence Problem and Its Variants",
    abstractContent: `
In this talk, we explore a rich spectrum of sequence analysis problems that extend and generalize the classic Longest Increasing Subsequence (LIS) problem. Given a sequence of distinct numerical elements, the LIS problem aims to find a subsequence that is strictly increasing and has the maximum possible length. For example, given the sequence (3, 5, 2, 1, 9, 7), one LIS answer is (3, 5, 9), another is (3, 5, 7), both of which have a length of 3. This problem was first introduced by Schensted in 1961 and has since been widely studied.

Recently, various extensions of the LIS problem have been proposed to better reflect real-world scenarios. For instance, in stock market analysis, the overall trend may be upward, but occasional small declines are common. To model such behavior, the longest almost increasing subsequence (LaIS) was proposed, which allows small decreases in an increasing sequence. In agriculture or climate analysis, crop yields or temperature may exhibit periodic trends. To capture this, variants such as LIS/LaIS with sliding windows have been introduced. In stock market analysis, one might also be interested in identifying multiple segments of rising and falling trends. Thus, the longest wave subsequence (LWS) has been proposed. For more detailed stock price behavior, one may consider both the lowest and highest prices in each day, treating each data point as an interval instead of a single value. This leads to the longest increasing interval subsequence problem (LIIS).

We will introduce the following problems:
Longest Increasing Subsequence (LIS)
Longest Almost Increasing Subsequence (LaIS)
Almost Order Preserving Matching
Longest Wave Subsequence
Longest Almost Wave Subsequence
Longest Increasing Interval Subsequence
LIS with Sliding Windows
LaIS with Sliding Windows

In addition, we will also explore two-sequence problems, where the goal is not only to satisfy the above structural constraints but also to ensure that corresponding elements from both sequences match. Examples include longest common increasing subsequence (LCIS), longest common wave subsequence (LCWS), and etc.`,
    imgSrc: new URL("/src/assets/Chang-Biau-Yang.jpg", import.meta.url)
  }, {
    engName: "Jehn-Ruey Jiang",
    chtName: "江振瑞",
    staffTitle: "Professor",
    affiliation: "National Central University (國立中央大學)",
    email: "jrjiang@g.ncu.edu.tw",
    biography: "Professor Jehn-Ruey Jiang is currently with the Department of Computer Science and Information Engineering at National Central University, where he leads the Advanced Computing And Networking(ACAN) Laboratory, which focuses on advanced technologies about computing and networking.He has been actively involved in the Quantum Annealing and Digital Annealing R& D Promotion projects.His current research interests include GPU - based quantum - inspired computing, gate - based quantum algorithms, quantum annealing algorithms, quantum Internet, quantum machine learning, and quantum computing applications.",
    speechTitle: "From Quantum Bits to Quantum Algorithms (從量子位元到量子演算法)",
    abstractContent: "Quantum computer operates on quantum bits (qubits), leveraging the properties of quantum superposition, quantum entanglement, quantum interference, and quantum tunneling to perform computations. On contrast, classical computers uses classical bits, which can only exist in a state of 0 or 1. Unlike classical bits, a qubit can exist in a superposition of both 0 and 1 simultaneously. It behaves like a particle exhibiting wave-particle duality, and its quantum wavefunction collapses to a definite state when measured. Because the number of representable states in a quantum computer grows exponentially with the number of qubits, quantum computers can achieve what is known as quantum supremacy, surpassing classical computers in computational power and solving problems that are infeasible for classical machines. Several notable quantum algorithms have already been developed, including Shor’s algorithm and Grover’s algorithm, which are based on quantum gates, as well as quantum annealing algorithms, which use the concept of quantum annealing to solve optimization problems. This talk will cover various aspects of quantum computing, starting with a comparison between the macroscopic perspective of classical physics and the microscopic perspective of quantum mechanics. It will then introduce the concept of qubits and conclude with an overview of several quantum algorithms.",
    imgSrc: new URL("/src/assets/keynote.webp", import.meta.url)
  }, {
    engName: "Justie Su- Tzu Juan",
    chtName: "阮夙姿",
    staffTitle: "Distinguished Professor and Chair",
    affiliation: "National Chi Nan University (國立暨南國際大學)",
    email: "jsjuan@ncnu.edu.tw",
    biography: "Justie Su-Tzu Juan received her B.S. degree in applied mathematics from Department of Mathematics, Fu Jen Catholic University in 1993, her M.S. and Ph.D. degrees in applied mathematics from National Chiao Tung University, R.O.C. in 1996 and 2000, respectively. She is currently a distinguished professor and chair of the department of computer science and information engineering, National Chi Nan University, R.O.C. Her research interests include graph theory, algorithms, combinatorial optimization, and information security.",
    speechTitle: "Visual Secret Sharing Scheme Based on Polarization",
    abstractContent: `
Visual Secret Sharing (VSS) is an encryption technique designed to encrypt a secret image into multiple shares, which can then be stacked together to allow the human visual system to directly recognize the original image. In traditional VSS schemes, black pixels represent 1 and white pixels represent 0, with decryption typically regarded as equivalent to a logical OR operation.
In 1997, a VSS scheme based on the polarization of light waves was introduced. This approach leverages the property that light can pass through a unidirectional polarizer but is blocked when passing through two perpendicular polarizers. The scheme was intended to perform decryption equivalent to a logical XOR operation. However, it could not adequately handle cases involving the decryption of more than two shares.
To address this limitation, we proposed a new interpretation of VSS based on the polarization of light, called P-VSS, in 2023. Building on this foundation, we have conducted further related research, which will be presented and discussed in this talk.
`,
    // imgSrc: new URL("/src/assets/ncnu-csie.png", import.meta.url),
    square: true
  },

])


</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <div class="list">
        <span @click="() => { currentInd = ind }" :class="['button', { 'active': currentInd == ind }]"
          v-for="(item, ind) in items" :key="ind">{{ item.chtName
          }} 教授/ Prof.{{ item.engName }}</span>
      </div>
      <Transition name="slide-fade" mode="out-in">
        <div :key="currentInd">
          <KeynoteContent v-bind="items[currentInd]" />
        </div>
      </Transition>



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

<script setup lang="ts">
import { ref } from 'vue'

import Content from '../layout/Content.vue';
import KeynoteContent from '../components/KeynoteContent.vue';
const currentInd = ref(0);
const items = ref([
  {
    engName: "Jehn-Ruey Jiang",
    chtName: "江振瑞",
    staffTitle: "Professor",
    affiliation: "National Central University (國立中央大學)",
    email: "jrjiang@g.ncu.edu.tw",
    biography: "Professor Jehn-Ruey Jiang is currently with the Department of Computer Science and Information Engineering at National Central University, where he leads the Advanced Computing And Networking(ACAN) Laboratory, which focuses on advanced technologies about computing and networking.He has been actively involved in the Quantum Annealing and Digital Annealing R& D Promotion projects.His current research interests include GPU - based quantum - inspired computing, gate - based quantum algorithms, quantum annealing algorithms, quantum Internet, quantum machine learning, and quantum computing applications.",
    speechTitle: "From Quantum Bits to Quantum Algorithms (從量子位元到量子演算法)",
    abstractContent: "Quantum computer operates on quantum bits (qubits), leveraging the properties of quantum superposition, quantum entanglement, quantum interference, and quantum tunneling to perform computations. On contrast, classical computers uses classical bits, which can only exist in a state of 0 or 1. Unlike classical bits, a qubit can exist in a superposition of both 0 and 1 simultaneously. It behaves like a particle exhibiting wave-particle duality, and its quantum wavefunction collapses to a definite state when measured. Because the number of representable states in a quantum computer grows exponentially with the number of qubits, quantum computers can achieve what is known as quantum supremacy, surpassing classical computers in computational power and solving problems that are infeasible for classical machines. Several notable quantum algorithms have already been developed, including Shor’s algorithm and Grover’s algorithm, which are based on quantum gates, as well as quantum annealing algorithms, which use the concept of quantum annealing to solve optimization problems. This talk will cover various aspects of quantum computing, starting with a comparison between the macroscopic perspective of classical physics and the microscopic perspective of quantum mechanics. It will then introduce the concept of qubits and conclude with an overview of several quantum algorithms.",
    imgSrc: "/src/assets/keynote.webp"
  },
  {
    engName: "Jehn-Ruey Jiang",
    chtName: "江振瑞123",
    staffTitle: "Professor",
    affiliation: "National Central University (國立中央大學)",
    email: "jrjiang@g.ncu.edu.tw",
    biography: "Professor Jehn-Ruey Jiang is currently with the Department of Computer Science and Information Engineering at National Central University, where he leads the Advanced Computing And Networking(ACAN) Laboratory, which focuses on advanced technologies about computing and networking.He has been actively involved in the Quantum Annealing and Digital Annealing R& D Promotion projects.His current research interests include GPU - based quantum - inspired computing, gate - based quantum algorithms, quantum annealing algorithms, quantum Internet, quantum machine learning, and quantum computing applications.",
    speechTitle: "From Quantum Bits to Quantum Algorithms (從量子位元到量子演算法)",
    abstractContent: "Quantum computer operates on quantum bits (qubits), leveraging the properties of quantum superposition, quantum entanglement, quantum interference, and quantum tunneling to perform computations. On contrast, classical computers uses classical bits, which can only exist in a state of 0 or 1. Unlike classical bits, a qubit can exist in a superposition of both 0 and 1 simultaneously. It behaves like a particle exhibiting wave-particle duality, and its quantum wavefunction collapses to a definite state when measured. Because the number of representable states in a quantum computer grows exponentially with the number of qubits, quantum computers can achieve what is known as quantum supremacy, surpassing classical computers in computational power and solving problems that are infeasible for classical machines. Several notable quantum algorithms have already been developed, including Shor’s algorithm and Grover’s algorithm, which are based on quantum gates, as well as quantum annealing algorithms, which use the concept of quantum annealing to solve optimization problems. This talk will cover various aspects of quantum computing, starting with a comparison between the macroscopic perspective of classical physics and the microscopic perspective of quantum mechanics. It will then introduce the concept of qubits and conclude with an overview of several quantum algorithms.",
    imgSrc: "/src/assets/aact.png"
  }
])


</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <!-- <div class="list">
        <span @click="() => { currentInd = ind }" :class="['button', { 'active': currentInd == ind }]"
          v-for="(item, ind) in items" :key="ind">{{ item.chtName
          }}/ {{ item.engName }}</span>
      </div> -->
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

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.4s;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}
</style>

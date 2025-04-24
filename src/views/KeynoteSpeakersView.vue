<script setup lang="ts">
import Content from '../layout/Content.vue';

</script>

<template>
  <Content :align="'left'">
    <div class="context">
      <h3>Keynote Speaker</h3>
      <section>
        <div class="basic-info">
          <div class="photo">
            <!-- <img src="../assets/keynote.webp" /> -->
          </div>
          <div class="detail">

            <b>Jehn-Ruey Jiang/江振瑞</b><br />
            <b>Title :</b>  Professor<br />
            <b>Affiliation :</b>  National Central University (國立中央大學)<br />
            <b>E-mail :</b> jrjiang@g.ncu.edu.tw<br />
          </div>
        </div>
      </section><br /><br />
      <section class="content">
        <b>Short Bio</b>
        <div class="divider" style="width: 100%;height: 0.5px;background-color: rgb(187 155 155 / 18%);margin: 1.5rem 0px;"></div>

        Professor Jehn-Ruey Jiang is currently with the Department of Computer Science and Information Engineering at
        National Central University, where he leads the Advanced Computing And Networking (ACAN) Laboratory, which
        focuses on advanced technologies about computing and networking. He has been actively involved in the Quantum
        Annealing and Digital Annealing R&D Promotion projects. His current research interests include GPU-based
        quantum-inspired computing, gate-based quantum algorithms, quantum annealing algorithms, quantum Internet,
        quantum machine learning, and quantum computing applications.

      </section><br /><br />
      <div class="divider" style="width: 100%; height: 0.5px; background-color: darkgrey; margin: 1.5rem 0;"></div>

      <h3>Title of the speech</h3>
      
      <section class="content">
        <p>From Quantum Bits to Quantum Algorithms (從量子位元到量子演算法)</p>
          
        <b>Abstract</b>
        <div class="divider" style="width: 100%;height: 0.5px;background-color: rgb(187 155 155 / 18%);margin: 1.5rem 0px;"></div>

        Quantum computer operates on quantum bits (qubits), leveraging the properties of quantum superposition, quantum
        entanglement, quantum interference, and quantum tunneling to perform computations. On contrast, classical
        computers uses classical bits, which can only exist in a state of 0 or 1. Unlike classical bits, a qubit can
        exist in a superposition of both 0 and 1 simultaneously. It behaves like a particle exhibiting wave-particle
        duality, and its quantum wavefunction collapses to a definite state when measured. Because the number of
        representable states in a quantum computer grows exponentially with the number of qubits, quantum computers can
        achieve what is known as quantum supremacy, surpassing classical computers in computational power and solving
        problems that are infeasible for classical machines. Several notable quantum algorithms have already been
        developed, including Shor’s algorithm and Grover’s algorithm, which are based on quantum gates, as well as
        quantum annealing algorithms, which use the concept of quantum annealing to solve optimization problems. This
        talk will cover various aspects of quantum computing, starting with a comparison between the macroscopic
        perspective of classical physics and the microscopic perspective of quantum mechanics. It will then introduce
        the concept of qubits and conclude with an overview of several quantum algorithms.

      </section><br /><br /><br />


    </div>
  </Content>
</template>

<style lang="scss" scoped>
.context {
  height: auto;
  min-height: 100vh;
  padding: 2rem 3rem;

}

.content {
  line-height: 1.8rem;
  letter-spacing: 0.02rem;
}

.basic-info {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;

  .photo {
    background-image: url(/src/assets/keynote.webp);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    flex-basis: 330px;
    height: 340px;
  }

  .detail {
    line-height: 2rem;
    word-break: break-all;
  }

 

  @media screen and (max-width:950px) {
    .photo {  
      flex-basis: 30%;
      height: 300px;
    }
    .detail {
      flex-basis: calc(70% - 1rem);
    }
  }

  @media screen and (max-width:640px) {
    .photo {  
      flex-basis: 100%;
      height: 360px;
    }
    .detail {
      flex-basis: 100%;
    }
  }
  
}
</style>

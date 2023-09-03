<script setup>

import Tilt from 'vanilla-tilt-vue'

const icons = [
  {
    name: 'angular',
    icon: 'co-angular',
  },
  {
    name: 'vue',
    icon: 'co-vue-js',
  },
  {
    name: 'React',
    icon: 'co-react',
  },
  {
    name: 'Sass',
    icon: 'co-sass-alt'  
  }
]

</script>

<template>

  <h1>Projects</h1>

  <div class="project__cards">
    <Tilt parallax="true" class="card" v-for="icon in icons" :key="icon.name">
        <div class="project_cards__content">
          <v-icon :name="icon.icon" />
          <h2>{{ icon.name }}</h2>
        </div>
    </Tilt>
  </div>

</template>

<style scoped>

.project__cards{
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.project_cards__content {
    width: 100%;
}
.card{
  width: 130px;
  aspect-ratio: 1/1;
  background: #9ec8ca;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.card svg{
  width: 50%;
  aspect-ratio: 1/1;
  height: unset;
}

.card h2{
  margin: 5px 0 0 0;
}

</style>

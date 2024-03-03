<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
        <main :key="route.name" class="flex justify-start flex-col gap-14 px-5 pt-20 pb-10"> 
          <component :is="Component"></component>
        </main>
      </transition>
    </router-view>
</template>
  
  <script setup>  
  </script>
  
  <style>
    :root {
      --page-width: 1300px;
      --body-bg: #2d2d2d;
      --body-color: #e7e7e7;
    }
    
    * {
      font-family: 'Poppins', 'Arial Narrow', Arial, sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  
    body {
      background-color: var(--body-bg);
      color: var(--body-color);
      min-height: 100vh;
      height: 100%;
      position: relative;
    }
  
    main {
      max-width: var(--page-width);
      width: 100%;
      margin: auto;
    }
  
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s;
    }
    
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

  </style>
  
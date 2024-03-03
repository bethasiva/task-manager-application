<template>
  <header>
    <h1 class="text-5xl font-medium text-left">My Tasks</h1>
  </header>
  <router-link class="text-2xl font-medium rounded-md border-2 border-white px-5 py-3 w-max" to="/">Go Home</router-link>    
  <TaskList />
</template>

<script setup>
  import TaskList from '@/components/TaskList.vue';
</script>

<script>
export default {
  name: 'TasksView'
}
</script>


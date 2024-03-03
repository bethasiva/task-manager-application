<template>
    <header>
        <router-link class="text-2xl font-medium rounded-md border-2 border-white px-5 py-3" to="/tasks">Go To Tasks</router-link>
    </header>
</template>
  
<script>
export default {
    name: 'HomeView'
    }
</script>

<style scoped>
    header a {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

  
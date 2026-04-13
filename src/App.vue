<template>
  <div id="app-layout">
    <NavBar />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
.main-content {
  padding-top: 80px; 
  min-height: 100vh;
  background: #f8fafc; 
}
</style>
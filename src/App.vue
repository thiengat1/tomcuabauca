<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
Header,Footer,Content
  }
}
</script>

<style>
#app {
 background: #fff;
 width: 80%;
 height: auto;
 margin: 50px auto;
 border: 10px solid blue;
 
}
body{
 background-image: url('./assets/bg.jpg');
 background-size: cover;
}
</style>

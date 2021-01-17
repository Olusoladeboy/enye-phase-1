<template>
  <div id="app">
    <img alt="Enye logo" class="img-fluid" src="http://345451-1068034-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/556x300.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <notifications group="foo" />
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
    mounted() {
    let externalIcon = document.createElement('link')
    externalIcon.setAttribute('rel', 'icon')
    externalIcon.setAttribute('href', 'http://345451-1068034-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/cropped-300x300_Africa-32x32.jpg')
    document.head.appendChild(externalIcon)
    let externalStyle = document.createElement('link')
    externalStyle.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css')
    externalStyle.setAttribute('rel', 'stylesheet')
    externalStyle.setAttribute('integrity', 'sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1')
    externalStyle.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(externalStyle)
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js')
    document.head.appendChild(externalScript)

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

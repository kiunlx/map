<template>
  <div id="app">
    <div class="search">
      <div class="left first">
        <input type="text" class="left" placeholder="搜地点、查公交、找路线"/>
        <div class="secound left"></div>
      </div>
      <div class="left three" @click="mapClick()"></div>
    </div>
    <about></about>
    
  </div>
</template>
<script>
import About from '@/components/About'
export default {
  name:'app',
  components:{
    About
  },
  methods:{
    mapClick(){
      alert(123);
    }
  }
}
</script>

<style>
*{padding:0;margin:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:1000px;
}
.search{
  position: absolute;
  width:425px;
  height: 38px;
  background-color: #fff;
  z-index: 100000;
  left: 20px;
  top: 20px;
}
.first{
  width:368px;
  height: 100%;
}
.first input{
  width:323px;
  height: 100%;
  border:0;
  text-indent: 10px;
  outline: none;
  
}
.secound{
  width:44px;
  height:34px;
  margin-top:2px;
  background:url('../static/image/1.png');
  background-position: 5px -2px;
  border-left:1px solid #dddddd;
}
.three{
  width:57px;
  height:38px;
  background:url('../static/image/1.png') blue;
  background-position: -1px -76px;
}
.three:hover{
  cursor:pointer;
}
.left{
  float: left;
}
.right{
  float: right;
}
</style>

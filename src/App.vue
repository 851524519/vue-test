<template>
  <div id="app">
    <router-view />
    <div id="loading">
      <img src="./assets/loading/loaddingShow.png" class="animation" />
    </div>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
#loading {
  display: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}

img.animation {
  width: 120px;
  height: 120px;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

.animation {
  -webkit-transform: rotate(360deg);
  animation: rotation 3s linear infinite;
  -moz-animation: rotation 3s linear infinite;
  -webkit-animation: rotation 3s linear infinite;
  -o-animation: rotation 3s linear infinite;
}
</style>

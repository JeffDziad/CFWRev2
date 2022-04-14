<template>
  <v-app style="background-color: #343D3F;">
    <v-main>
      <div id="overlay">
        <navigation-desktop :resized="resized" v-show="!mobile_mode"></navigation-desktop>
        <navigation-mobile :resized="resized" v-show="mobile_mode"></navigation-mobile>
        <br>
        <br>
        <transition  mode="out-in" enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutLeft">
          <router-view/>
        </transition>
      </div>
      <video v-show="!mobile_mode" class="bg_video" autoplay="autoplay" loop muted playsinline preload :poster="bg_poster">
        <source type="video/mp4" :src="bg_video">
      </video>
      <video v-show="mobile_mode" class="bg_video" style="object-fit: cover;" autoplay="autoplay" loop muted playsinline preload :poster="bg_poster">
        <source type="video/mp4" :src="bg_video">
      </video>
    </v-main>
  </v-app>
</template>

<script>

import NavigationDesktop from "@/components/NavigationDesktop";
import NavigationMobile from "@/components/NavigationMobile";
export default {
  name: 'App',
  components: {NavigationMobile, NavigationDesktop},
  data: () => ({
    bg_poster: require('./assets/bg_poster.png'),
    bg_video: require('./assets/bg_video.mp4'),
    sunset_long_src: require('./assets/sunset_bg_long.png'),
    mobile_mode: false,
    resized: 0,
  }),
  methods: {
    window_resize() {
      this.resized = innerWidth;
      this.mobile_mode = innerWidth < 1235;
    }
  },
  created() {
    window.addEventListener('resize', this.window_resize);
    this.window_resize();
  },
  destroyed() {
    window.removeEventListener('resize', this.window_resize);
  },
};
</script>

<style>
#overlay {
  position: relative;
  z-index: 2;
  padding-bottom: 20px;
}
.bg_video {
  -webkit-box-shadow: 0px 5px 32px 14px #000000;
  box-shadow: 0px 5px 32px 14px #000000;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 0;
  object-fit: fill;
}
</style>
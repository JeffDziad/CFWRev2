<template>
  <div style="padding: 0;">
<!--    <transition mode="in-out" enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutLeft">-->
<!--      <v-img max-width="800" :src="canoe" style="position: relative; z-index: 0; margin-top: -90px;"></v-img>-->
<!--    </transition>-->

    <div id="logo_subtitle">
      <svg viewBox="0 0 107 25" style="position: relative;">
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="5%" stop-color="#00A5FF"/>
            <stop offset="100%" stop-color="#0040FF"/>
          </linearGradient>
          <pattern id="wave" x="0" y="3" width="400" height="100" patternUnits="userSpaceOnUse">
            <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-60z" fill="url(#gradient)">
              <animateTransform attributeName="transform" type="translate" begin="0s" dur="2.5s" from="0,0" to="40,0" repeatCount="indefinite"></animateTransform>
            </path>
          </pattern>
        </defs>
        <text>
          <tspan text-anchor="middle" x="53.5" y="15" font-size="7"  fill="url(#wave)" fill-opacity="1">A fun-filled and relaxing get-a-way</tspan>
          <tspan text-anchor="middle" x="53.5" y="15" font-size="7" fill="url(#gradient)" fill-opacity="0.3">A fun-filled and relaxing get-a-way</tspan>
        </text>
        <text>
          <tspan text-anchor="middle" x="53.5" y="22" font-size="7" fill="url(#wave)" fill-opacity="1">on the shore of Fence Lake</tspan>
          <tspan text-anchor="middle" x="53.5" y="22" font-size="7" fill="url(#gradient)" fill-opacity="0.3">on the shore of Fence Lake</tspan>
        </text>
      </svg>
    </div>
    <torch-svg v-show="enable_svg"></torch-svg>
  </div>


</template>

<script>
import TorchSvg from "@/components/TorchSvg";
export default {
  props: ['enable_svg'],
  name: "Logo_Subtitle",
  components: {TorchSvg},
  data: function() {
    return {
      canoe: require('../assets/canoe.png'),
    }
  }
}
</script>

<style scoped>
#logo_subtitle {
  position: relative;
  z-index: 2;
  max-width: 600px;
  top: 117px;
}
</style>
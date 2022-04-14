<template>
  <div>
    <canvas ref="logo_canvas" id="logo_canvas"></canvas>
    <router-link to="/">
      <v-img eager id="logo" ref="logo" :src="logo_src" width="500" @click="$emit('logo_clicked', null);"></v-img>
    </router-link>
  </div>
</template>

<script>

class Wave {
  constructor(y, color) {
    this.y = y;
    this.color = color;
    this.increment = 0;
  }
  draw(canvas, ctx) {
    ctx.beginPath();
    ctx.moveTo(-1, this.y);
    for(let i = -1; i < canvas.width + 1; i++) {
      ctx.lineTo(i, this.y + Math.sin(i * 0.03 + this.increment) * 15 * Math.sin(this.increment));
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = this.color;
    ctx.stroke();
    this.increment += 0.005;
  }
}

export default {
  name: "Logo",
  data: function() {
    return {
      logo_src: require('@/assets/text_logo.png'),
      logo_ctx: null,
      logo_waves: []
    }
  },
  methods: {
    animate_logo() {
      let canvas = this.$refs.logo_canvas;
      let c = this.logo_ctx;
      c.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = 0; x < this.logo_waves.length; x++) {
        let wave = this.logo_waves[x];
        wave.draw(canvas, c);
      }
      requestAnimationFrame(this.animate_logo);
    }
  },
  mounted() {
    this.logo_ctx = this.$refs.logo_canvas.getContext('2d');

    this.logo_waves.push(new Wave(130, 'rgba(163, 0, 0, 1)'));
    this.logo_waves.push(new Wave(128, 'rgba(163, 0, 0, 0.75)'));
    this.logo_waves.push(new Wave(126, 'rgba(163, 0, 0, 0.50)'));

    this.logo_waves.push(new Wave(124, 'rgba(255, 169, 10, 1)'));
    this.logo_waves.push(new Wave(122, 'rgba(255, 169, 10, 0.75)'));
    this.logo_waves.push(new Wave(120, 'rgba(255, 169, 10, 0.50)'));

    this.logo_waves.push(new Wave(118, 'rgba(245, 208, 0, 1)'));
    this.logo_waves.push(new Wave(116, 'rgba(245, 208, 0, 0.75)'));
    this.logo_waves.push(new Wave(114, 'rgba(245, 208, 0, 0.50)'));

    this.animate_logo();
  },
}
</script>

<style scoped>
#logo_canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 5;
}
#logo {
  transition: all 2s;
  position: relative;
  z-index: 5;
}
#logo:hover {
  size: 20px;
}
</style>
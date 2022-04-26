<template>
  <div id="bar" ref="scrollbar"></div>
</template>

<script>
export default {
  props: [],
  name: "Scrollbar",
  data: function() {
    return {
      resizeObserver: null,
      totalPageHeight: 0,
    }
  },
  methods: {
    resizeObserved(entries) {
      this.totalPageHeight = entries[0].target.clientHeight - window.innerHeight;
      this.scrollEvent();
    },
    scrollEvent() {
      this.$refs.scrollbar.style.height = Math.abs(100 - (window.pageYOffset/this.totalPageHeight) * 100) + '%';
    }
  },
  created() {
    this.resizeObserver = new ResizeObserver(this.resizeObserved);
    this.resizeObserver.observe(document.body);
    window.addEventListener('scroll', this.scrollEvent);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollEvent);
  }
}
</script>

<style scoped>
#bar {
  position: fixed;
  background: linear-gradient(to top, rgba(146,0,0,1) 0%, rgba(241,113,5,1) 50%, rgba(230,194,41,1) 100%);
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  z-index: 0;
}
</style>
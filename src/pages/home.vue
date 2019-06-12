<template>
  <dl class="home layout">
    <dt>
      <canvas ref="canvas" :height="height" :width="width"></canvas>
    </dt>
    <dd>
      <div>设置列表</div>
      <ul>
        <li>
          <span>画笔</span>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  data () {
    return {
      width: this.$store.state.rem * 3,
      height: this.$store.state.rem * 3,
      o2d: ''
    }
  },
  mounted () {
    // 获取画笔
    this.o2d = this.$refs.canvas.getContext('2d')
    this.o2d.beginPath()
    // 画笔宽度
    this.o2d.lineWidth = 2
    // 画笔颜色 可以是 rgba值  颜色单词 16进制色值
    this.o2d.strokeStyle = 'red'
    // this.o2d.arc(this.width / 2 + 2, this.width / 2 + 2, this.width/ 2, 0, Math.PI*2)
    // this.o2d.stroke()
  }
}
</script>

<style lang="less">
  .home {
    .layouts.flexBox;
    canvas {
      margin: 0 auto;
    }
    dd {
      width: 4rem;
      height: 3rem;
      overflow-y: scroll;
      ul {
        font-size: 0.18rem;
        line-height: 0.2rem;
      }
    }
  }
</style>

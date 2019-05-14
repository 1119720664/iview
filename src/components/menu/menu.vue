<template>
  <div>
      <Menu :active-name="activeName">
        <MenuItem name="/menu">首页</MenuItem>
        <MenuItem name="/home" to="/home">Home</MenuItem>
        <MenuItem name="/about" to="/about">About</MenuItem>
      </Menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: this.$route.path
      }
    },
    methods: {
      handleSelect(name) {
        this.$router.push(name)
      }
    },
    watch: {
      "$route"() {
        this.activeName = this.$route.path
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

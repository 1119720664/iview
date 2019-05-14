<template>
  <div>
    <Row>
      <Col span="18" offset="1">
        {{content}}
        <div style="width:100%;height:1px"></div>
      </Col>
      <Col span="3">
        <Card>
          <div style="height:200px;border:1px solid red"></div>
        </Card>
      </Col>
    </Row>
    <Button @click="handleSetData">填充内容</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  /*解决异步数据加载显示空白的问题*/
  export default {
    name: "handleSetData",
    data() {
      return {
        content: ''
      }
    },
    methods: {
      handleSetData() {
        this.content = "1234567890"
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

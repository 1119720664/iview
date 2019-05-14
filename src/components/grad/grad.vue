<template>
  <div>
    <Row :gutter="32">
      <Col span="8">
        <Card style="height:600px">内容一</Card>
      </Col>
      <Col span="8">
        <Row :gutter="16">
        <Col span="16">
        <Card>内容二</Card>
        </Col>
        <Col span="8">
        <Card>内容三</Card>
        </Col>
      </Row>
      </Col>
      <Col span="8">
        <Card>
          <div style="height:200px;text-align: center;color:red">Affix123456</div>
        </Card>
        <Affix>
          <Card>
            <div style="height:200px;text-align: center;color:red">Affix</div>
          </Card>
        </Affix>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  /*推荐gutter的值是16+8*n的值*/
  /*Affix的使用方法,offset-top距离顶部多少开始悬停*/
</script>

<style lang="scss" rel="stylesheet/scss">
  body {
   /* height: 5000px;*/ /*页面滚动*/
  }
</style>

<template>
  <div>
    <Row>
      <Col :xs="24" :sm="6">
         <Card>
           <div style="height:200px;border:1px solid red">123</div>
         </Card>
      </Col>
      <Col :xs="24" :sm="18">
        <Card>
          <div style="height:600px;border:1px solid green">456</div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  //xs<786px sm>=768px md>992px lg>=1200
  export default {

  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

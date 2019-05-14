<template>
  <div style="padding:32px 64px">
    <h1>服务端分页及自定义序号</h1>
    <Table :columns="columns" :data="data" :loading="loading" border size="small">
    </Table>
    <div style="text-align: center;margin:16px 0">
      <Page
        :total="total"
        :current.sync="current"
        show-sizer
        @on-change="getData"
        @on-page-size-change="handleChangeSize"
      >
      </Page>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from "../../libs/iviewUtils"
  export default {
    created(){
      this.getData()
    },
    data(){
      return {
        columns: [
          {
            type: "index",
            width: 60,
            align: "center",
            indexMethod: (row) => {
              return (row._index + 1) + this.size * this.current - this.size
            }
          },
          {
            title: "姓名",
            key: "name"
          }
        ],
        data: [],
        loading: false,
        total: 0,
        current: 1,
        size: 10
      }
    },
    methods: {
      getData() {
        if (this.loading) return
        this.loading = true
        $.ajax({
          methods: "get",
          url: `/data/list/${this.current}/${this.size}`
        }).then(res => {
          this.data = res.data.data.list;
          this.total = res.data.data.total
          this.loading = false
        })
      },
      handleChangeSize(val){
        this.size = val
        this.$nextTick(() => {
          this.getData()
          /*当current从新等于1的时候在刷新数据*/
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

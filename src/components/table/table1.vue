<template>
  <div style="padding:32px 64px">
    <h1>服务端分页排序、过滤</h1>
    <Table
      :columns="column"
      :data="data"
      :loading="loading"
      border
      size="small"
      @on-sort-change="handleSortChange"
      @on-filter-change="handleFilterChange"
    >
    </Table>
    <div style="text-align: center;margin: 16px 0">
      <Page :total="total" :current.sync="current" @on-change="getData"></Page>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from "../../libs/iviewUtils"

  export default {
    name: "Table1",
    data() {
      return {
        total: 0,
        current: 1,
        loading: false,
        sortType: "normal",      //normal || asc || desc
        filterType: undefined,   //undefined || 1 || 2
        editIndex: -1,
        editValue: '',
        column: [
          {
            title: '号码',
            key: 'number',
            sortable: 'custom'
          },
          {
            title: "等级",
            key: "status",
            render: (h, {row}) => {
              if (row.status === 1) {
                return h('Tag', {
                  props: {
                    color: "green"
                  }
                }, '等级 1')
              } else if (row.status === 2) {
                return h('Tag', {
                  props: {
                    color: "red"
                  }
                }, '等级 2')
              }
            },
            filters: [
              {
                label: "级别 1",
                value: 1
              },
              {
                label: "级别 2",
                value: 2
              }
            ],
            filterMultiple: false, /*单选还是多选的判定问题*/
            /* filterMethod(value, row){
             if (value === 1) {
             return row.status === 1
             } else if (value === 2) {
             return row.status === 2
             }
             }*/
            filterRemote(value) {
              this.filterType = value[0]
            }
          }
        ],
        data: []
      }
    },
    methods: {
      handleSortChange({columns, key, order}) {
        console.log(order)
        this.sortType = order;
        this.current = 1;
        this.getData()
      },
      handleFilterChange() {
        this.current = 1;
        this.getData()
      },
      getData() {
        if (this.loading) return
        this.loading = true;
        $.ajax({
          methods: "get",
          url: `/data/list/${this.current}/${this.sortType}/${this.filterType}`
        }).then(res => {
          setTimeout(() => {
            this.data = res.data.data.list
            this.total = res.data.data.total
            this.loading = false;
          }, 1000)
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

<template>
  <div style="padding:32px 64px">
    <h1>初始化应用程序,并持久化处理</h1>
    <Table :columns="columns" :data="data" border @on-sort-change="handleSortChange">

    </Table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Table4",
    data(){
      const sortKey = localStorage.getItem("table-demo-key")
      const sortType = localStorage.getItem("table-demo-order")

      let date_sort_type;

      if (sortKey) {
        if (sortKey === "date") {
          date_sort_type = sortType
        } else {
          date_sort_type = "normal"
        }
      } else {
        age_sort_type = "asc"
      }

      let age_sort_type;
      if (sortKey && sortKey === "age") {
        date_sort_type = sortType
      } else {
        date_sort_type = "normal"
      }
      return {
        columns: [
          {
            title: "Date",
            key: "date",
            sortable: true,
            sortType: date_sort_type
          },
          {
            title: "Name",
            key: "name"
          },
          {
            title: "Age",
            key: "age",
            sortable: true,
            sortType: age_sort_type
          },
          {
            title: "Address",
            key: "address"
          }
        ],
        data: [
          {
            name: "John Brown",
            age: 24,
            address: "address1",
            date: "2016-10-03"
          },
          {
            name: "John Brown1",
            age: 24,
            address: "address1",
            date: "2016-10-03"
          },
          {
            name: "John Brown2",
            age: 24,
            address: "address1",
            date: "2016-10-03"
          },
          {
            name: "John Brown3",
            age: 24,
            address: "address1",
            date: "2016-10-03"
          }
        ]
      }
    },
    methods: {
      handleSortChange({key, order}) {
        localStorage.setItem("table-demo-key", key)
        localStorage.setItem("table-demo-order", order)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

<template>
  <div style="padding:32px 64px">
    <h1>初始化应用程序,并持久化处理</h1>
    <Table :columns="columns" :data="data" border @on-filter-change="handleFilterChange">

    </Table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Table4",
    data(){
      const filterAge = localStorage.getItem("table-demo-filter-age");
      const filterAddress = localStorage.getItem("table-demo-filter-address")

      let filterAgeValue = [2];
      let filterAddressValue = ['London', "Sydney"]

      if (filterAge) filterAgeValue = filterAge
      if (filterAddress) filterAddressValue = filterAddress

      return {
        columns: [
          {
            title: "Date",
            key: "date"
          },
          {
            title: "Name",
            key: "name"
          },
          {
            title: "Age",
            key: "age",
            filter: [
              {
                label: 'Greater than 25',
                value: 1
              },
              {
                label: 'Less than 25',
                value: 2
              }
            ],
            filterMultiple: false,
            filterMethod(value, row) {
              if (value === 1) {
                return row.age > 25
              } else if (value === 2) {
                return row.age < 25
              }
            },
            filteredValue: filterAgeValue
          },
          {
            title: "Address",
            key: "address",
            filters: [
              {
                label: "New York",
                value: "New York"
              },
              {
                label: "London",
                value: "London"
              },
              {
                label: "Sydney",
                value: "Sydney"
              }
            ],
            filterMethod(value, row){
              return row.address.indexOf(value) > -1
            },
            filteredValue: filterAddressValue
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
      handleFilterChange(col) {
        const filterChecked = col._filterChecked;
        const key = col.key;
        localStorage.setItem(`table-demo-filter-${key}`, filterChecked)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

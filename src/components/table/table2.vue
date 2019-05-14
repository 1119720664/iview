<template>
  <div style="padding:32px 64px">
    <h1>可编辑的单元格</h1>
    <Table
      :columns="columns"
      :data="data"
      border
      size="small"
    >
    </Table>
    <div style="margin-top: 200px"></div>
    <Table
      :columns="columns1"
      :data="data"
      border
      size="small"
    >
    </Table>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "Table2",
    data() {
      return {
        editIndex: -1,
        editValue: '',
        editIndex1: -1,
        editName: "",
        editAge: "",
        editAddress: "",
        columns: [
          {
            title: "姓名",
            key: "name",
            render: (h, {row, index}) => {
              let edit;
              let control;
              if (this.editIndex === index) {
                edit = [
                  h('Input', {
                      props: {
                        value: row.name
                      },
                      on: {
                        input: (val) => {
                          this.editValue = val
                        }
                      }
                    }
                  )
                ];
                control = [
                  h('Icon', {
                    style: {
                      cursor: "pointer",
                      margin: "8px"
                    },
                    props: {
                      type: "md-checkmark",
                      size: 16,
                      color: "#19be6b"
                    },
                    on: {
                      click: () => {
                        this.data[index].name = this.editValue
                        this.editIndex = -1
                      }
                    }
                  }),
                  h('Icon', {
                    style: {
                      cursor: "pointer",
                      margin: "8px",
                    },
                    props: {
                      type: "md-close",
                      size: 16,
                      color: "ed4014"
                    },
                    on: {
                      click: () => {
                        this.editIndex = -1
                      }
                    }
                  })
                ]
              } else {
                edit = row.name;
                control = [
                  h('Icon', {
                    style: {
                      cursor: 'pointer'
                    },
                    props: {
                      type: 'ios-create-outline',
                      size: 16
                    },
                    on: {
                      click: () => {
                        this.editIndex = index;
                        this.editValue = row.name
                      }
                    }
                  })]
              }
              console.log(control)
              return h("Row", [
                h('Col', {
                  props: {
                    span: 18
                  }
                }, edit),
                h('Col', {
                  props: {
                    span: 6
                  }
                }, control)
              ])
            }
          },
          {
            title: "年龄",
            key: "age"
          },
          {
            title: "地址",
            key: "address"
          }
        ],
        columns1: [
          {
            title: "姓名",
            key: "name",
            render: (h, {row, index}) => {
              let edit;
              if (this.editIndex1 === index) {
                edit = [h("Input", {
                  props: {
                    value: row.name
                  },
                  on: {
                    input: (val) => {
                      this.editName = val
                    }
                  }
                })]
              } else {
                edit = row.name
              }
              return h("div", [edit])
            }
          },
          {
            title: "年龄",
            key: "age",
            render: (h, {row, index}) => {
              let edit;
              if (this.editIndex1 === index) {
                edit = [h("Input", {
                  props: {
                    value: row.age
                  },
                  on: {
                    input: (val) => {
                      this.editAge = val
                    }
                  }
                })]
              } else {
                edit = row.age
              }
              return h("div", [edit])
            }
          },
          {
            title: "地址",
            key: "address",
            render: (h, {row, index}) => {
              let edit;
              if (this.editIndex1 === index) {
                edit = [h("Input", {
                  props: {
                    value: row.address
                  },
                  on: {
                    input: (val) => {
                      this.editAddress = val
                    }
                  }
                })]
              } else {
                edit = row.address
              }
              return h("div", [edit])
            }
          },
          {
            title: "操作",
            render: (h, {row, index}) => {
              if (this.editIndex1 === index) {
                return [
                  h("Button", {
                    props: {
                      type: "success"
                    },
                    on: {
                      click: () => {
                        this.data[index].name = this.editName;
                        this.data[index].age = this.editAge;
                        this.data[index].address = this.editAddress;
                        this.editIndex1 = -1
                      }
                    }
                  }, "保存"),
                  h("Button", {
                    props: {
                      type: "error"
                    },
                    style: {
                      marginLeft: "6px"
                    },
                    on: {
                      click: () => {
                        this.editIndex = -1
                      }
                    }
                  },"取消")
                ]
              } else {
                return h('Button', {
                  on: {
                    click: () => {
                      this.editName = row.name;
                      this.editAge = row.age;
                      this.editAddress = row.address;
                      this.editIndex1 = index;
                    }
                  }
                }, "修改")
              }
            }
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
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

<template>
  <div style="padding:32px 64px">
    <h1>在外部进行表格搜索、过滤、新建、隐藏</h1>
    <br/>
    <Form inline :label-width="80">
      <FormItem label="主机名称:">
        <Input v-model="form.name" placeholder="请输入" style="width:200px"/>
      </FormItem>
      <FormItem label="使用状态:">
        <Select v-model="form.status" placeholder="请选择" style="width:200px">
          <Option :value="1">运行中</Option>
          <Option :value="2">异常</Option>
        </Select>
      </FormItem>
      <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
      <Button type="primary" @click="getData" style="margin-right:8px">查询</Button>
      <Button type="primary" @click="handleReset" style="margin-right:8px">重置</Button>
    </Form>
    <CheckboxGroup v-model="showColumn">
      <Checkbox :label="0">主机名称</Checkbox>
      <Checkbox :label="1">Ip 地址</Checkbox>
      <Checkbox :label="2">使用状态</Checkbox>
      <Checkbox :label="3">最后修改时间</Checkbox>
    </CheckboxGroup>
    <Button type="primary" icon="md-add" @click="openCreate=true">新建</Button>
    <br/><br/>
    <Table :columns="filterColumns" :data="data" :loading="loading" size="small"></Table>
    <Modal v-model="openCreate" title="新建主机">
      <Form>
        <FormItem>
          <Input v-model="create.name" placeholder="主机名称"/>
        </FormItem>
        <FormItem>
          <Input v-model="create.ip" placeholder="IP 地址"/>
        </FormItem>
        <FormItem>
          <Select v-model="create.status" placeholder="使用状态">
            <Option :value="1">运行中</Option>
            <Option :value="2">异常</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Date-picker size="small" type="date" placeholder="选择日期"></Date-picker>
        </FormItem>
      </Form>
      <Button slot="footer" type="primary" @click="handleCreate">创建</Button>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from "../../libs/iviewUtils"

  export default {
    name: "Table3",
    data() {
      return {
        columns: [
          {
            title: "主机名称",
            key: "name"
          },
          {
            title: "IP 地址",
            key: "ip"
          },
          {
            title: "使用状态",
            key: "status",
            render: (h, {row}) => {
              if (row.status === 1) {
                return h("Badge", {
                  props: {
                    status: "processing",
                    text: "运行中"
                  }
                })
              } else if (row.status === 2) {
                return h("Badge", {
                  props: {
                    status: "error",
                    text: "异常"
                  }
                })
              }
            }
          },
          {
            title: "最后修改时间",
            key: "date",
            render: (h, {row}) => {
              return h("Time", {
                props: {
                  time: parseInt(row.date),
                  type: "datetime"
                }
              })
            }
          }
        ],
        data: [],
        loading: false,
        form: {
          name: "",
          status: ""
        },
        openCreate: false,
        create: {
          name: "",
          ip: "",
          status: "",
          date: ""
        },
        isCreate: false, /*是否在提交数据的过程中*/
        showColumn: [0, 1, 2, 3]
      }
    },
    computed: {
      filterColumns() {
        const columns = [...this.columns];
        const filterColumns = [];
        this.showColumn.sort().forEach(item => {
          filterColumns.push(columns[item])
        })
        return filterColumns
      }
    },
    methods: {
      getData() {
        if (this.loading) return
        this.loading = true

        let url = "/host/list";

        if (this.form.name) {
          url += `/name/${this.form.name}`
        }
        if (this.form.status) {
          url += `/status/${this.form.status}`
        }
        $.ajax({
          methods: "get",
          url,
        }).then(res => {
          setTimeout(() => {
            this.data = res.data.data.list
            this.loading = false
          }, 1000)
        })
      },
      handleReset() {
        this.form.name = ""
        this.form.status = ""
        this.getData()
      },
      handleCreate() {
        if (this.isCreate) return
        const name = this.create.name
        const ip = this.create.ip
        const status = this.create.status
        let date = this.create.date
        if (name === '') {
          this.$Message.error("请输入主机的名称")
          return
        }
        if (ip === '') {
          this.$Message.error("请输入IP地址")
          return
        }
        if (status === '') {
          this.$Message.error("请输入使用状态")
          return
        }
        if (date === '') {
          this.$Message.error("请输入日期")
          return
        } else {
          date = (new Date(date)).getTime();
        }

        this.isCreate = true
        $.ajax({
          methods: "post",
          url: "/host/create",
          data: {name, ip, status, date}
        }).then(res => {
          if (res.data.data.status === "success") {
            const newData = {
              name,
              ip,
              status,
              date
            }
            this.data = [newData].concat(this.data);
            this.isCreate = false
            this.openCreate = false
          }
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

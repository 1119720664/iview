<template>
  <div>
    <Row>
      <i-col span="4" offset="1">
        <img src="http://v1.iviewui.com/dist/fe8d29da1225d943e30f9ee1bddce78f.png" alt="logo" class="logo"/>
      </i-col>
      <i-col span="14">
        <Menu mode="horizontal" :active-name="activeName">
          <MenuItem name="/app" to="/app">应用分析</MenuItem>
          <MenuItem name="/push" to="/push">推送营销</MenuItem>
          <MenuItem name="/dev" to="/dev">开发助手</MenuItem>
          <MenuItem name="/manage" to="/manage">应用管理</MenuItem>
        </Menu>
      </i-col>
      <i-col span="4">
        <Row>
          <i-col span="8">
            <Dropdown>
              <Avatar class="avatar" src="http://v1.iviewui.com/dist/fe8d29da1225d943e30f9ee1bddce78f.png"></Avatar>
              <DropdownMenu slot="list">
                <DropdownItem>我的主页</DropdownItem>
                <DropdownItem>我的收藏</DropdownItem>
                <DropdownItem>
                  设置
                  <Badge status="error"></Badge>
                </DropdownItem>
                <DropdownItem divided>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </i-col>
          <i-col span="8">
            <Dropdown  style="display: flex;align-items: center;justify-content: center;height:60px">
              <Badge :count="count" :offset="[20,4]">
                <Icon type="md-notifications-outline" size="36"/>
              </Badge>
              <DropdownMenu slot="list">
                 <Tabs value="notification">
                   <TabPane label="通知" name="notification">
                     <div>通知内容</div>
                   </TabPane>
                   <TabPane label="关注" name="follow">
                     <div>关注内容</div>
                   </TabPane>
                   <TabPane label="系统" name="system">
                     <div>系统内容</div>
                   </TabPane>
                 </Tabs>
              </DropdownMenu>
            </Dropdown>
          </i-col>
          <i-col span="8">
            <Icon style="height:60px;line-height: 60px;text-align: center;width:100%" type="md-color-palette" size="24" @click="ShowOpenTheme"></Icon>
          </i-col>
        </Row>
      </i-col>
    </Row>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Mhead",
    /*  created(){
     this.activeName = this.$route.path     //这里组件不销毁,所以不能使用created,必须是用watch
     },*/
    data() {
      return {
        activeName: this.$route.path === "/layout" ? "/app" : this.$route.path,
        count: 2
      }
    },
    methods: {
      ShowOpenTheme(){
          this.$emit("ShowOpenTheme")
      }
    },
    watch: {
      "$route"() {
        this.activeName = this.$route.path === "/layout" ? "/app" : this.$route.path
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .logo {
    width: 160px;
    height: 60px
  }

  .avatar {
    width: 60px;
    height: 60px !important;
  }
</style>

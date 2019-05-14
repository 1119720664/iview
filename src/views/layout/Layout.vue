<template>
  <Layout>
    <m-head class="header" @ShowOpenTheme="ShowOpenTheme"></m-head>
    <Layout>
      <Sider class="sider" width="240" collapsible v-model="isCollapsed">
        <Menu class="sider-menu" theme="dark" active-name="option2">
          <MenuItem name="option1">
            <Icon type="ios-search"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="option2">
            <Icon type="ios-apps"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="option3">
            <Icon type="ios-bookmark"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
    </Layout>
    <Drawer title="选择配色" v-model="OpenTheme"></Drawer>
  </Layout>
</template>

<script type="text/ecmascript-6">
  import MHead from "./head.vue"
  export default{
    name: "AppLayout",
    data(){
      return {
        OpenTheme: false,
        isCollapsed: false
      }
    },
    methods: {
      ShowOpenTheme(){
        this.OpenTheme = true
      }
    },
    components: {
      MHead
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .header {
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .sider {
    position: fixed !important;
    height: 100%;
    left: 0;
    width:240px;
    background:darkblue;
    overflow: auto;
    z-index: 1;
  }

  .sider-menu {
    margin-top: 60px !important;
  }
  /*动态class的使用*/
</style>

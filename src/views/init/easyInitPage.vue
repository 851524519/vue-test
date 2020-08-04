<template>
  <div style="width: 100%;">
    12345
    <a-modal v-model="modalShow" width="60%" @cancel="closeDialog">
      <div class="init__page">
        <div class="title">初始化配置</div>
        <div class="word__style">填写的IP地址为接入到此一体机的宽带/专线IP，支持填写多个；点击确定后，系统会自动将所填写IP作为防火墙初始全通策略模式设置好，保障网络畅通</div>
        <div class="line"></div>
        <div style="display: flex;justify-content: center" class="input__con">
          <div class="ip__style">输入公司宽带/专线IP ：</div>
          <div style="display: flex;flex-direction: column">
            <a-input placeholder="请输入" style="width: 180px;margin: 0 30px 10px 0;height: 28px" v-for="(item,i) in ipList" :key="i" v-model="item.val"/>
          </div>
          <a-button @click="addIp" icon="plus" style="background: #E6F7FF;color: #0093EA">新增</a-button>
        </div>
        <div class="lineT"></div>
        <a-button type="primary" @click="goMainPage" style="width: 160px;margin-bottom: 20px">确定</a-button>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'EasyInitPage',
  // props: {
  //   modalShow: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data () {
    return {
      ipList: [{
        val: ''
      }],
      ipName: '',
      modalShow: true
    }
  },
  created () {
  },
  methods: {
    addIp () {
      var input = {}
      input.val = ''
      this.ipList.push(input)
    },
    goMainPage () {
      // 校验ip
      const regIp = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/
      for (let i = 0; i < this.ipList.length; i++) {
        if (!regIp.test(this.ipList[i].val)) {
          this.$message.error('您输入的ip有误')
        }
      }
      this.$emit('save', this.ipList)
      // showLoading()
      // Vue.ls.set(HAVE_HAT_MENU, false)
      // window.location.href = '/'
      // generatorDynamicRouter().then(routers => {
      //   this.$store.commit('SET_ROUTERS', routers)
      //   setTimeout(function () { hideLoading() }, 7000)
      // })
    },
    closeDialog () {
      this.modalShow = false
    }
  }
}
</script>
<style>
  .input__con span {
    color: #0093EA
  }
</style>
<style scoped>
  .init__page{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    background: #FFFFFF;
    min-height: 600px
  }
.line{
  width:100%;
  height:2px;
  background:rgba(235,240,247,1);
  margin: 0 0 40px 0;
}
.lineT{
  width:100%;
  height:2px;
  background:rgba(235,240,247,1);
  margin: 325px 0 16px 0;
}
  .title{
    margin: 50px 0 0 0;
    width:100px;
    height:20px;
    font-size:20px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(40,61,96,1);
    line-height:20px;
  }
  .word__style{
    margin: 16px 0 40px 0;
    height:12px;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(106,122,150,1);
    line-height:12px;
  }
  .ip__style{
    padding: 5px 0 0 0;
    height:16px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:900;
    color:rgba(40,61,96,1);
    line-height:16px;
  }
</style>

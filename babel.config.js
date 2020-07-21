/**
 * Author: fanqiang
 * Date: 2020/7/20
 * Des: lazy load ant-design-vue  antd的懒加载配置
 */


module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    "@vue/app"
  ],
  plugins: [
        [
          "import",
          // lazy load ant-design-vue
          { 
            libraryName: "ant-design-vue",
            libraryDirectory: "es", 
            style: 'css' 
          } 
        ]
      ]
}

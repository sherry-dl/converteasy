// app.js
App({
  onLaunch() {
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'convert-easy-9gy01nt7e03d9579', // 你的云托管环境ID
        traceUser: true,
      });
    }
  },
  
  globalData: {
    useCloudContainer: true, // 标记使用云调用方式
  }
});
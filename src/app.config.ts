// 动态设置 pages
// 获取页面路径
const getPages = () => {
  const path = ['pages/index/index'];
  return path;
};

export default {
  pages: getPages(),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
};

import Taro from '@tarojs/taro';
import api from '@/services/index';

const { login } = api;
export default {
  namespace: 'global',
  state: {
    // 用户信息
    userInfo: {},
  },

  effects: {
    *getUserInfo(_, { call }) {
      const userInfo = yield call(Taro.login, { lang: 'zh_CH' });
      const c = yield call(login, 'GET', { bb: 1 });
      console.log(userInfo, c);
    },

    reducers: {
      setState(state, { payload }) {
        return {
          ...state,
          ...payload,
        };
      },
    },
  },
};

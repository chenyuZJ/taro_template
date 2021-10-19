import { createLogger } from 'redux-logger';
import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;
let registered;

const createApp = opt => {
  // redux日志
  opt.onAction = [];
  if (opt.enableLog) {
    opt.onAction.push(createLogger());
  }
  app = create(opt);
  app.use(createLoading({}));

  // 注入model
  if (!registered) {
    opt.models.forEach(model => {
      return app.model(model);
    });
  }
  registered = true;
  app.start();

  // 设置store
  console.log(app);
  store = app._store;
  app.getStore = () => {
    return store;
  };
  app.use({
    onError(err) {
      console.log(err);
    },
  });

  // 设置dispatch
  const { dispatch } = store;
  app.dispatch = dispatch;

  return app;
};

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};

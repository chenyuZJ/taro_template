import { useEffect } from 'react';
import { Provider } from 'react-redux';
import dva from '@/utils/dva';
import models from '@/models/index';
import './app.scss';
// import Taro from '@tarojs/taro';

// 集成 dva
const dvaApp = dva.createApp({
  initialState: {},
  models,
});
const store = dvaApp.getStore();

const App: React.FC = ({ children }): JSX.Element => {
  useEffect(() => {
    console.log('首次进来');
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default App;

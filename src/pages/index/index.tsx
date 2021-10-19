import { useCallback } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useDispatch } from 'react-redux';
import { useEnv, useModal, useToast } from 'taro-hooks';
import { IndexProps } from './index.interface';
import './index.scss';

const Index: React.FC<IndexProps> = (props): JSX.Element => {
  console.log(props, 1111);
  const dispatch = useDispatch();
  const env = useEnv();
  const [show] = useModal({
    title: 'Taro Hooks!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
    mask: true,
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(() => {
    show({ content: '不如给一个star⭐️!' }).then(() => {
      dispatch({
        type: 'global/getUserInfo',
      });
      showToast({ title: '点击了支持!' });
    });
  }, [show, dispatch, showToast]);

  return (
    <View className="wrapper">
      <Text className="title">为Taro而设计的Hooks Library</Text>
      <Text className="desc">
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近30+Hooks! 并结合ahook适配Taro!
      </Text>
      <View className="list">
        <Text className="label">运行环境</Text>
        <Text className="note">{env}</Text>
      </View>
      <Button className="button" onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
};
export default Index;

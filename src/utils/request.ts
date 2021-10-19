import Taro from '@tarojs/taro';
import { apiPrefix } from './config';

const HTTP_SUCCESS_CODE = [200, 0];
const HTTP_ERR_CODE = {
  400: '错误请求',
  401: '请求未经授权，请重新登录',
  403: '服务器拒绝访问',
  404: '请求失败，未找到指定资源',
  405: '请求的方法已被禁用',
  406: '服务器不接受该请求',
  407: '请求需要代理授权',
  408: '请求超时',
  409: '服务器在完成请求时发生冲突',
  410: '服务器已永久删除请求的资源',
  411: '服务器不接受不含有效内容长度标头字段的请求',
  412: '服务器未满足前提条件',
  413: '请求实体过大',
  414: '请求的 URI 过长',
  415: '不支持的媒体类型',
  416: '请求范围不符合要求',
  417: '请求的标头字段不满足服务器要求',
  500: '服务器内部出错',
  501: '服务器无法识别请求方法',
  502: '网关错误',
  503: '服务器目前无法使用',
  504: '网络超时，请在有网的环境下重试',
  505: 'HTTP版本不支持该请求',
};

interface requestProps {
  url: string;
  data?: object;
  method?: any;
  loadingCopy: string;
}
/**
 * 网络请求
 * @param {*} url 路径
 * @param {*} method 请求类型
 * @param {*} data 请求参数
 * @param {*} loadingCopy loading 文字
 * @returns
 */
const Request = ({ url, method, data = {}, loadingCopy = '加载中' }: requestProps) => {
  loadingCopy && Taro.showLoading({ title: loadingCopy });
  return new Promise((resolve, reject) => {
    const cloneData = JSON.parse(JSON.stringify(data));
    Taro.request({
      url: `${apiPrefix}${url}`,
      method,
      data: cloneData,
      header: {
        'Content-Type': 'application/json',
      },
      complete: () => {
        loadingCopy && Taro.hideLoading();
      },
    }).then(
      res => {
        if (res.statusCode !== 200) return;
        resolve(res?.data ?? res);
      },
      err => {
        const error = JSON.parse(JSON.stringify(err));
        const { statusCode } = error;
        Taro.showToast({ title: HTTP_ERR_CODE[statusCode] || '服务器错误' });
        console.error('---抛出异常---', error);
        reject(error);
      }
    );
  });
};

export const checkResponse = (res, msgKey: string = 'msg') => {
  const { status, code } = res || {};
  const ret = HTTP_SUCCESS_CODE.includes(status) || HTTP_SUCCESS_CODE.includes(code);
  if (!ret) {
    Taro.showToast({ title: res[msgKey] || '服务器错误' });
    return false;
  }
  return ret;
};

export default Request;

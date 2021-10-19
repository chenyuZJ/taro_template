module.exports = {
  processors: [],
  plugins: [],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'], // 这是官方推荐的方式
  rules: {
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
  },
};

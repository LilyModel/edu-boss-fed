/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-02-10 14:29:02
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-10 21:00:54
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

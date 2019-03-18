(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{446:function(n,e,t){"use strict";t.r(e);var o=t(6),l=t.n(o),s=t(5),i=t.n(s),r=t(2),a=t.n(r),c=t(4),u=t.n(c),d=function(n){function e(){var n,o,s,r;i()(this,e);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return o=s=a()(this,(n=e.__proto__||l()(e)).call.apply(n,[this].concat(u))),s.document=function(){return{document:t(489),className:"keyboard-page"}},r=o,a()(s,r)}return u()(e,n),e}(t(736).a);e.default=d},489:function(n,e){n.exports="# 虚拟键盘 Keyboard\n\n\n\n## 平铺键盘 Keyboard\n```jsx\nimport { Cell, Select, Keyboard } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      type: 'number',\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title=\"键盘类型\">\n          <Select\n            value={this.state.type}\n            dataSource={[\n              { value: 'number', label: '数字键盘' },\n              { value: 'price', label: '金额键盘' },\n              { value: 'idcard', label: '身份证键盘' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                type: selected.map(item => item.value)[0],\n              });\n            }}\n          />\n        </Cell>\n        <Keyboard type={this.state.type} onKeyClick={(key) => console.log(key)} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 键盘触发器 KeyboardPicker\n```jsx\nimport { Cell, Button, KeyboardPicker, Input } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: false,\n      value: '',\n    };\n  }\n\n  toggle() {\n    this.setState({ visible: !this.state.visible });\n  }\n\n  onKeyClick(key) {\n    console.log(key);\n    if (['close', 'ok'].indexOf(key) > -1) {\n      this.toggle();\n      return;\n    }\n\n    const value = this.state.value;\n    const newValue = (key === 'delete')\n      ? value.slice(0, value.length - 1)\n      : value + key;\n\n    if (newValue !== value) {\n      this.setState({ value: newValue });\n    }\n  }\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle()}>{visible ? '关闭' : '开启'}</Button>\n          }\n        >\n          拾取器触发方式\n        </Cell>\n\n        <KeyboardPicker\n          visible={visible}\n          onKeyClick={(key) => this.onKeyClick(key)}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| type | string | 'number' | 键盘类型，可选值 `number`、`price`、`idcard` |\n| onKeyClick | (key?: string) => void | - | 点击按键时触发的回调函数 |\n\n### 仅 KeyboardPicker 支持的属性\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否展示 |\n"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{297:function(n,e,r){"use strict";r.r(e);var t=r(6),o=r.n(t),a=r(5),c=r.n(a),i=r(2),s=r.n(i),l=r(4),d=r.n(l),u=function(n){function e(){var n,t,a,i;c()(this,e);for(var l=arguments.length,d=Array(l),u=0;u<l;u++)d[u]=arguments[u];return t=a=s()(this,(n=e.__proto__||o()(e)).call.apply(n,[this].concat(d))),a.document=function(){return{document:r(482),className:"notice-bar-page"}},i=t,s()(a,i)}return d()(e,n),e}(r(464).a);e.default=u},460:function(n,e,r){},464:function(n,e,r){"use strict";var t=r(6),o=r.n(t),a=r(5),c=r.n(a),i=r(7),s=r.n(i),l=r(2),d=r.n(l),u=r(4),m=r.n(u),p=r(0),N=r.n(p),f=r(461),h=r.n(f),g=r(463),v=r.n(g),b=(r(462),r(460),function(n){function e(){return c()(this,e),d()(this,(e.__proto__||o()(e)).apply(this,arguments))}return m()(e,n),s()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,r=n.className;if("string"==typeof e){var t=new h.a.Renderer;t.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},t.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!v.a.getLanguage(e))?v.a.highlight(e,n).value:n)+"</code></pre>"};var o=h()(e,{renderer:t});return N.a.createElement("div",{className:r,dangerouslySetInnerHTML:{__html:o}})}return N.a.createElement("span",null)}}]),e}(p.Component));e.a=b},482:function(n,e){n.exports="# 通告栏 NoticeBar\n\n\n\n## 基本用法\n```jsx\nimport { NoticeBar, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar>普通</NoticeBar>\n        <NoticeBar theme=\"danger\">自定义主题</NoticeBar>\n        <NoticeBar icon={<Icon type=\"wrong-round\" />}>自定义图标</NoticeBar>\n        <NoticeBar scrollable>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 特定场景\n```jsx\nimport { NoticeBar  } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar hasArrow onClick={() => alert('click this notice!')}>链接样式的</NoticeBar>\n        <NoticeBar closable>可关闭的</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'warning' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| icon | ReactNode | - | 设置图标 |\n| scrollable | boolean | false | 是否开启自动滚动轮播 |\n| closable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n"}}]);
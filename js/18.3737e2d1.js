(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{296:function(n,e,t){"use strict";t.r(e);var r=t(6),a=t.n(r),o=t(5),c=t.n(o),i=t(2),l=t.n(i),s=t(4),u=t.n(s),d=function(n){function e(){var n,r,o,i;c()(this,e);for(var s=arguments.length,u=Array(s),d=0;d<s;d++)u[d]=arguments[d];return r=o=l()(this,(n=e.__proto__||a()(e)).call.apply(n,[this].concat(u))),o.document=function(){return{document:t(481),className:"panel-page"}},i=r,l()(o,i)}return u()(e,n),e}(t(464).a);e.default=d},460:function(n,e,t){},464:function(n,e,t){"use strict";var r=t(6),a=t.n(r),o=t(5),c=t.n(o),i=t(7),l=t.n(i),s=t(2),u=t.n(s),d=t(4),m=t.n(d),p=t(0),f=t.n(p),h=t(461),v=t.n(h),g=t(463),_=t.n(g),N=(t(462),t(460),function(n){function e(){return c()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return m()(e,n),l()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var r=new v.a.Renderer;r.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},r.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!_.a.getLanguage(e))?_.a.highlight(e,n).value:n)+"</code></pre>"};var a=v()(e,{renderer:r});return f.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:a}})}return f.a.createElement("span",null)}}]),e}(p.Component));e.a=N},481:function(n,e){n.exports='# 面板 Panel\n\n\n\n## 基本用法\n```jsx\nimport { Panel } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Panel\n          title="标题"\n          more={<a href="#" onClick={() => alert(\'click more\')}>更多</a>}\n        >\n          <div className="box">内容</div>\n        </Panel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| title | ReactNode | - | 标题渲染 |\n| more | ReactNode | - | 更多渲染 |\n'}}]);
function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequire5634;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequire5634=r),r.register("dRo73",(function(t,n){var o,i;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("dRo73").register(JSON.parse('{"kh1xT":"index.bad914e3.js","32sng":"font2.f1c387c4.jpg","9yGhT":"index.21b42353.css"}'));var s;s=new URL(r("dRo73").resolve("32sng"),import.meta.url).toString();class l{constructor(e,t,n){this.type=e,this.value=t,this.options=n}}const a=[new class extends l{constructor(e,t){super("title",e,t)}}("Конструктор сайтов на JS!",{tag:"h2",styles:{background:"linear-gradient(to right, #DE3163, #40E0D0)",color:"#fff","text-align":"center",padding:"1.5rem"}}),new class extends l{constructor(e,t){super("image",e,t)}}(t(s),{styles:{display:"flex","justify-content":"center",padding:"2rem 0"},imageStyles:{width:"500px",heigth:"auto"},alt:"Это картинка"}),new class extends l{constructor(e,t){super("columns",e,t)}}(["Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aut molestiae velit doloremque ea ipsam.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aut molestiae velit doloremque ea ipsam.","Lorem ipsum dolor sit amet consectetur adipisicing elit."],{styles:{background:"linear-gradient(to bottom, #DE3163, #40E0D0)",color:"#fff",padding:"2rem 0"}}),new class extends l{constructor(e,t){super("text",e,t)}}('Lorem ipsum dolor sit, amet consectetur adipisicing elit. <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazNvVEJtMHNhUWp6cXd1aDBKMnk3RGZhbW5Td3xBQ3Jtc0tsYWExUWtYN18ydmt6UnpjMWJueG5IbWlDVXktcVlja190UTdKM3E4QUFYangzRmEyRUVrR3pIRE02cS15TVdUVUNJVG9XSUEzZm4wOGdGQmlLX1JRQVF2R3E5Q3hEeUk2VDh1WXB1SjItRjM5aEJfSQ&q=https%3A%2F%2Ft.me%2Fjs_by_vladilen%2F329&v=0ViiJ8qTCFM" target="_blank">link</a> Quos dolores voluptates fugit consequuntur delectus iusto veniam iste expedita molestias. Maiores quia repellendus quod tenetur ex eaque dolor nam soluta debitis!',{styles:{background:"linear-gradient(to left, #DE3163, #40E0D0)","font-weight":"bold",padding:"1rem"}})];function u(e,t=""){return`<div class="row" style="${t}">${e}</div>`}function c(e){return`<div class="col-sm">${e}</div>`}function d(e={}){return Object.keys(e).map((t=>`${t}: ${e[t]}`)).join(";")}const p={title:function(e){const{tag:t="h1",styles:n}=e.options;return u(c(`<${t}>${e.value}</${t}>`),d(n))},text:function(e){return u(c(`<p>${e.value}</p>`),d(e.options.styles))},columns:function(e){return u(e.value.map(c).join(""),d(e.options.styles))},image:function(e){const{imageStyles:t,alt:n="",styles:o}=e.options;return u(`<img src="${e.value}" alt="${n}" style="${d(t)}" />`,d(o))}},f=document.querySelector("#site");a.forEach((e=>{const t=p[e.type];t&&f.insertAdjacentHTML("beforeend",t(e))}));
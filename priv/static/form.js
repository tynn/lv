π=(t,e,n)=>{function l(t){let e="Android SDK API level";return t?e+" - "+t:e}function s(t){var s;let r;document.title=l(t);let o=t.replace(/:/g,"/");o.endsWith("/")&&(o=o.substring(0,o.length-1)),o.endsWith("/+")&&(o=o.substring(0,o.length-2)),o.startsWith("/")||(o="/"+o);let u=document.getElementById("url");u.innerText=e+o+"@svg",u.href=o+"@svg",(u=document.getElementById("badge")).href=o;let d=u.firstElementChild;return d.src=n,d.alt="API level loading",s=o,(r=new XMLHttpRequest).onload=()=>{let t=200==r.status?r.responseText:"unknown";d.alt="API level "+t,d.src=s+"@svg"},r.open("GET",s+"@txt",!0),r.send(),o}history.replaceState(t,l(t),""),window.onpopstate=t=>s(t.state),document.forms[0].onsubmit=t=>{let e=document.forms[0][0].value;return history.pushState(e,document.title,s(e)),!1}};
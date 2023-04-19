document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("img, video"),n=0;Array.from(e).forEach((function(o,r){o.onload=function(){n++,percents.innerHTML=(100*n/e.length).toFixed(1),n===e.length&&(preloader.classList.add("preloader--hide"),percents.innerHTML=100)}}))}));
//# sourceMappingURL=index.ae33b769.js.map

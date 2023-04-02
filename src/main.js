function renderBusuanzi(){
    if(busuanziConfig()){
        var sc = document.createElement("script");
        sc.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
        sc.async = "async";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(sc, s);
        console.info("[mangodoc-busuanzi] enable busuanzi success!")
    }else{
        console.info("[mangodoc-busuanzi] not enable busuanzi!")
    }
}
function busuanziConfig(){
    return window.$mangodoc.busuanzi;
}
export default {
    afterEach(html,next){
        // console.info("demo afterEach:"+html);
        if(busuanziConfig()){
            var busuanzi = `<div style="text-align:center;color:gray;font-size:10px;margin-top:10px;">已有<span class="busuanzi-value" id="busuanzi_value_site_uv"></span>人访问 <span id="busuanzi_container_site_pv">总访问量<span id="busuanzi_value_site_pv"></span>次</span></div>`;
            html += busuanzi;
        }
        next(html);
    },
    doneEach(){
        renderBusuanzi();
    }
}
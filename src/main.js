class Test{
    constructor(obj){
        this.warp=document.createElement("div");
        this.warp.className="warp";
        document.body.append(this.warp);
        this.cont=obj.cont;
        this.init();
    }
    init(){
        this.createtitle();
        this.addEvent();
    }
    createtitle(){
        var tit=document.createElement("div");
        tit.className="tit";
        [...this.cont].forEach((item,index)=>{
            var span=document.createElement("span");
            span.innerHTML=item.let;
            tit.append(span);
        });
         this.warp.append(tit);
        return tit;
    }
    createcontent(){
        var content=document.createElement("div");
        content.className="content";
        content.innerHTML=this.cont[0]["text"];
        this.warp.append(content);
        return content;
    }
    addEvent(){
        let span=document.querySelectorAll("span");
        let tent=this.createcontent();
        for(let i=0;i<span.length;i++){
            span[i].addEventListener("click",(event)=>{
               tent.innerHTML=this.cont[i]["text"];
            },false)
        }
    }
}
let test=new Test({
    cont:[{"id":1,"let":"水果","text":["草莓","香蕉","苹果"]},{"id":2,"let":"蔬菜","text":["豆角","茄子","土豆"]},{"id":3,"let":"零食","text":["饼干","虾条","薯片"]}]
})
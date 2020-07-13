let cnt =10;
let sco=0;
let flag=true;
let res =document.getElementById("result");
setInterval(() => {
    if(cnt>0){
        cnt--;
        res.textContent="スコア:"+sco+"|時間:"+cnt+"秒";
    }else{
        flag=false;
        res.style.color="red";
        res.textContent="スコア:"+sco+"|終了";
    }
}, 1000);
let mog = new Array(3);
for(let i=0;i<mog.length;i++){
    mog[i]=new Array(3);
}
let mogX=Math.floor(Math.random()*3);
let mogY=Math.floor(Math.random()*3);
for (let  i=0;i<mog.length;i++){
    
    for(let j=0;j<3;j++){
        mog[i][j]=document.getElementById(i +"-"+ j);
        mog[i][j].addEventListener("click",()=>{
            if(mogY==i&&mogX==j&&flag){
                console.log(i +"-"+ j+"ヒット");  
　　　　　　　mog[mogY][mogX].src="img/rejiB.png";
setTimeout(()=>{

    mog[mogY][mogX].src="img/umi.png";
    mogX=Math.floor(Math.random()*3);
    mogY=Math.floor(Math.random()*3);
    mog[mogY][mogX].src="img/rejiA.png";
    sco++
    res.textContent="スコア:"+sco+"|時間:"+cnt+"秒";
},250);
            }
        });
        
    }
}
mog[mogY][mogX].src="img/rejiA.png";


let flag = 0;
function incWidth(){
    if(flag==0){
        document.getElementById('side').style.width = '20rem'
        flag=1;
    }else{
        document.getElementById('side').style.width = '0rem'
        flag=0;
    }
}
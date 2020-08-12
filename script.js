function bai1(){
    let a= parseInt(document.getElementById('soA').value);
    let b= parseInt(document.getElementById('soB').value);
    if(a%b==0) alert('So a chia het cho b');
    else alert('So a khong chia het cho b');
}

function bai2(){
    let a= parseInt(document.getElementById('tuoi').value);
    if(a>14) alert('Hoc sinh du tuoi hoc lop 10');
    else alert('Hoc sinh khong du tuoi hoc lop 10');
}

function bai3(){
    let a= parseInt(document.getElementById('num').value);
    if(a>0) alert('So do lon hon 0');
    else alert('So do khong lon hon 0');
}

function bai4(){
    let a= parseInt(document.getElementById('num1').value);
    let b= parseInt(document.getElementById('num2').value);
    let c= parseInt(document.getElementById('num3').value);
    if(b>a) a= b;
    if(c>a) a= c;
    alert('So lon nhat la: '+ a);
}

function bai5(){
    let a= parseInt(document.getElementById('giuaKy').value);
    let b= parseInt(document.getElementById('cuoiKy').value);
    a= 0.3*a + 0.7*b;
    if(a<6){
        if(a<4){
            if(a<2) alert('Loai F');
            else alert('Loai E');
        }
        else alert('Loai D');
    }
    else{
        if(a<9){
            if(a<8) alert('Loai C');
            else alert('Loai B');
        }
        else alert('Loai A');
    }
}

function bai6(){
    let a= parseInt(document.getElementById('doanhSo').value);
    if(a>2){
        if(a>3) a= 0.45 + (a-3)*0.25;
        else a= 0.25 + (a-2)*0.2;
    }
    else{
        if(a>1) a= 0.1 + (a-1)*0.15;
        else a= a*0.1;
    }
    alert('Hoa hong nhan duoc la: ' + a + ' trieu');
}

function bai7(){
    let a= parseInt(document.getElementById('soDien').value);
    if(a>20){
        if(a>30) a= 6 + (a-30)*0.4;
        else a= 3 + (a-20)*0.3;
    }
    else{
        if(a>10) a= 1 + (a-10)*0.2;
        else a= 0.1*a;
    }
    alert('So tien phai dong la: '+a+' trieu');
}
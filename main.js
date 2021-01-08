//Bài 1
document.getElementById("timSo").addEventListener("click",function(){
    var sum = 0;
    for(var i = 1; sum <= 10000; i++ ){
        sum += i;
    }
    console.log(i-1);
    document.getElementById("ketQuaTim").innerHTML = "Số dương nhỏ nhất thỏa là : " + (i-1);
    document.getElementById("ketQuaTim").style.display = "block";
})

// Bài 2
function tinhTong(x, n) {
    var tong = 0;
    for (var i = 1; i <= n; i++) {
        tong = tong + Math.pow(x, i);
    }
    return tong;
}

document.getElementById("tinhTong").addEventListener("click", function () {
    var x = document.getElementById("soX").value;
    var n = document.getElementById("soN").value;
    if (x === "") {
        alert("Vui lòng nhập x");
        return;
    }
    if (n < 1 || n === "") {
        alert("Nhập n không hợp lệ");
        return;
    }
    x = parseInt(x);
    n = parseInt(n);
    var tong = 0;
    tong = tinhTong(x, n);
    document.getElementById("hienThiTong").innerHTML = "S(n) = " + tong;
    document.getElementById("hienThiTong").style.display = "block";
})

// Bài 3
function tinhGT(a) {
    var gt = 1;
    for (var k = 1; k <= a; k++) {
        gt = gt * k;
    }
    return gt;
}
document.getElementById("tinhGiaiThua").addEventListener("click", function () {
    var n_bai3 = document.getElementById("bai3_n").value;
    if (n_bai3 === "" || n_bai3 < 0) {
        alert("Nhập n không hợp lệ");
        return;
    }
    n_bai3 = parseInt(n_bai3);

    var giaiThua = 0;
    giaiThua = tinhGT(n_bai3);
    document.getElementById("hienThiGiaiThua").innerHTML = n_bai3 + "! =  " + giaiThua;
    document.getElementById("hienThiGiaiThua").style.display = "block";
})

//Bài 4 

document.getElementById("inThe").addEventListener("click", function () {
    console.log("ok");
    
    
    
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log("chan : " + i)
            var kq = document.createElement("div"); 
            kq.style.height = "20px";
            kq.style.backgroundColor = "blue";    
            document.getElementById("ketQuaIn").appendChild(kq);
            document.getElementById("ketQuaIn").style.display = "block";
             
        }
        else {
            console.log("le : " + i)
            var kq = document.createElement("div");
            kq.style.height = "20px"; 
            kq.style.backgroundColor = "red";    
            document.getElementById("ketQuaIn").appendChild(kq);
            document.getElementById("ketQuaIn").style.display = "block";
             

        }
    }
    // document.getElementById("ketQuaIn").innerHTML = content;
    // document.getElementById("ketQuaIn").style.display = "block";

})
const time=document.querySelector('.clock');

const tick=()=>{
    const now=new Date();

    
    const h=now.getHours();

    const m=now.getMinutes();

    const s=now.getSeconds();

    const y=now.getUTCDate();
    
    const z=now.getUTCFullYear();

    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tues";
    weekdays[3] = "Wed";
    weekdays[4] = "Thur";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "Dec"
];
    var r = weekdays[now.getDay()];
    var d = monthNames[now.getUTCMonth()];

    const html=`
    <span>${z}</span>
    <span>${d}</span>
    <span>${y}</span>
    <span>${r}</span>
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
    `;
    time.innerHTML=html;
};

setInterval(tick,1000);

// Addition of two numbers
function add(){
    var a=Number(document.getElementById("first").value);
    var b=Number(document.getElementById("second").value);
    var c=a+b;
    document.getElementById("answer").value=c;
}
function sub(){
    var a=Number(document.getElementById("first1").value);
    var b=Number(document.getElementById("second1").value);
    var c=a-b;
    document.getElementById("answer1").value=c;
}
function mul(){
    var a=Number(document.getElementById("first2").value);
    var b=Number(document.getElementById("second2").value);
    var c=a*b;
    document.getElementById("answer2").value=c;
}
//Area of triangle

function Area(){
    var a=Number(document.getElementById("height").value);
    var b=Number(document.getElementById("base").value);
    var c=(a*b)/2;
    document.getElementById("area").value=c;
}

//Celsius and Fahrenheit

function fahr(){
    var cels=Number(document.getElementById("celsius").value);
    var res=((cels * 9) /5 ) + 32;
    document.getElementById("Fahrenheit").value=res;
}

function celsius(){
    var fah=Number(document.getElementById("fahrenheit1").value);
    var res=((fah - 32) *5/ 9);
    document.getElementById("celsius1").value=res;
}

//Even or odd
const res=document.querySelector('.result');
function check(){
    var num=Number(document.getElementById("chknumber").value);
    if(num%2==0){
       const even=`Even`;
       res.innerHTML=even;


    }else{
        const odd=`Odd`;
        res.innerHTML=odd;
    }
}
//Largest Number
const larges=document.querySelector('.large');
function larg(){
    var num=[25,30,75,12,95,8,4];
    largest=num[0];
    for(i=0;i<=num.length;i++){
        if(largest<num[i]){
            largest=num[i];
        }
    }
    larges.innerHTML=largest;
   
}

//sin value
function sin(){
    const value=Number(document.getElementById("sin").value);

    const sinres=document.querySelector('.sinvalue');
    
    sinres.innerHTML=Math.sin(value);
}

//Sqrt value
function sqrtfn(){
    const value=Number(document.getElementById("sqr").value);

    const sqrres=document.querySelector('.sqrRes');

    sqrres.innerHTML=Math.sqrt(value);
}

//Power value
function powerfn(){
 const num=Number(document.getElementById("num").value);

 const power=Number(document.getElementById("power").value);

 const powerres=document.querySelector('.powResult');

powerres.innerHTML=Math.pow(num,power);
}



//ciel function

function ciel(){
    const a=Number(document.getElementById("a").value);

    document.getElementById("cielresult").innerHTML = Math.ceil(a);
}

function flr(){
    const b=Number(document.getElementById("b").value);

    document.getElementById("flresult").innerHTML = Math.floor(b);
}


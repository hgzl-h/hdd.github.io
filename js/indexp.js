var time=0;
var pinyin1 = document.getElementById("pinyin1");
var pinyin2 = document.getElementById("pinyin2");
var pinyin3 = document.getElementById("pinyin3");
var pinyin4 = document.getElementById("pinyin4");

var jeskson1 = document.getElementById("jeskson1");
var jeskson2 = document.getElementById("jeskson2");
var jeskson3 = document.getElementById("jeskson3");
var jeskson4 = document.getElementById("jeskson4");

var dadaEnglish = document.getElementById("dadaEnglish");

var button = document.getElementById("button");
var random = Math.random();

var p1 = [
    "xīn",
    "gōng",
    "dà",
    "wàn",
    "nián",
    "shēn",
    "xīn",
    "gōng"
];

var p2 = [
    "nián",
    "xǐ",
    "jí",
    "shì",
    "nián",
    "tǐ",
    "xiǎng",
    "hè"
];

var p3 = [
    "kuài",
    "fā",
    "dà",
    "rú",
    "yǒu",
    "jiàn",
    "shì",
    "xīn"
];

var p4 = [
    "lè",
    "cái",
    "lì",
    "yì",
    "yú",
    "kāng",
    "chéng",
    "xǐ"
];

var dadasC1 = [
    "新",
    "恭",
    "大",
    "万",
    "年",
    "身",
    "心",
    "恭"
];

var dadasC2 = [
    "年",
    "喜",
    "吉",
    "事",
    "年",
    "体",
    "想",
    "贺"
];

var dadasC3 = [
    "快",
    "发",
    "大",
    "如",
    "有",
    "健",
    "事",
    "新"
];

var dadasC4 = [
    "乐",
    "财",
    "利",
    "意",
    "鱼",
    "康",
    "成",
    "禧"
];
var dadasE = [
    "(新年快乐)",
    "(祝贺你的成功)",
    "(吉星高照)",
    "(愿一万件事都按你的愿望去做吗)",
    "(每一年都比你需要的多)",
    "(祝您身体健康)",
    "(愿你心想事成)",
    "(恭贺新禧)"
];
pinyin1.textContent = p1[Math.floor(random * p1.length)];
pinyin2.textContent = p2[Math.floor(random * p2.length)];
pinyin3.textContent = p3[Math.floor(random * p3.length)];
pinyin4.textContent = p4[Math.floor(random * p4.length)];
jeskson1.textContent = dadasC1[Math.floor(random * dadasC1.length)];
jeskson2.textContent = dadasC2[Math.floor(random * dadasC2.length)];
jeskson3.textContent = dadasC3[Math.floor(random * dadasC3.length)];
jeskson4.textContent = dadasC4[Math.floor(random * dadasC4.length)];
dadaEnglish.textContent = dadasE[Math.floor(random * dadasE.length)];
var onClick = function() {
    var random = Math.random();
    pinyin1.textContent = p1[Math.floor(random * p1.length)];
    pinyin2.textContent = p2[Math.floor(random * p2.length)];
    pinyin3.textContent = p3[Math.floor(random * p3.length)];
    pinyin4.textContent = p4[Math.floor(random * p4.length)];
    jeskson1.textContent = dadasC1[Math.floor(random * dadasC1.length)];
    jeskson2.textContent = dadasC2[Math.floor(random * dadasC2.length)];
    jeskson3.textContent = dadasC3[Math.floor(random * dadasC3.length)];
    jeskson4.textContent = dadasC4[Math.floor(random * dadasC4.length)];
    dadaEnglish.textContent = dadasE[Math.floor(random * dadasE.length)];
    time++;
    console.log(time);
    if(time>=7){
        initVars();
        frame();
        S.init();
        document.body.style.margin='0px';
        document.body.style.background='#000';
        document.body.style.width='100%';
        document.body.style.height='100%';
        document.body.style.overflow='hidden';
        document.body.style.display='table-cell';
        document.documentElement.style.margin='0px';
        document.documentElement.style.background='#000';
        document.documentElement.style.width='100%';
        document.documentElement.style.height='100%';
        document.documentElement.style.overflow='hidden';
        document.documentElement.style.display='table';
        document.getElementById("pinyin1").style.display='none';
        document.getElementById("pinyin2").style.display='none';
        document.getElementById("pinyin3").style.display='none';
        document.getElementById("pinyin4").style.display='none';
        document.getElementById("bigdiv").style.display='none';
         document.getElementById("dadaEnglish").style.display='none';
         document.getElementById("button").style.display='none';
         document.getElementById("table").style.display='none';
        document.getElementById("canvas").style.hidden='false';
document.getElementById("canvas").style.top='0';
document.getElementById("canvas").style.left='0';  
document.getElementById("canvas").style.position='absotute'; 
time=0;

  }
}

button.addEventListener("click", onClick);
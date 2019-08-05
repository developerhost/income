const reducer = (accumulator, currentValue) => accumulator + currentValue;

function assessment(){
    var a=document.getElementById("income").value;
    var nensyu=[50,50,50,50,50,50,50,150,150,150,150,150,150,150,150,150,150,150,150,150,250,250,250,250,250,250,250,250,250,250,250,250,250,250,350,350,350,350,350,350,350,350,350,350,350,350,350,450,450,450,450,450,450,450,450,450,450,550,550,550,550,550,550,550,550,550,650,650,650,650,650,650,650,750,750,750,750,750,750,850,850,850,850,850,950,950,950,950,1050,1050,1050,1150,1150,1250,1250,1350,1450,1550,1700,1900,2250,parseInt(a)]
    var goukei=nensyu.reduce(reducer); ///配列全部たす
    var heikin=parseInt(goukei)/ parseInt(nensyu.length); ///平均を求める
    console.log(heikin);
    var heiho = []
    nensyu.forEach(function(value){ ///foreach= 配列全部繰り返す
        var aaa=((parseInt(value) - parseInt(heikin))*(parseInt(value) - parseInt(heikin)))
        heiho.push(aaa)
    });//分散


    console.log(heiho);
    console.log((150 - parseInt(heikin)));


    var bunsan=heiho.reduce(reducer);　//配列全部たす
    var bunsan2=parseInt(bunsan)/ parseInt(heiho.length); ///分散を求める
    console.log(bunsan2);


    var hyojun = Math.sqrt(bunsan2); //ルート
    console.log(hyojun);


    var hensachi=((parseInt(a)-heikin)*10)/hyojun;　//ひいて１０かけて、標準偏差で割る
    var hen=hensachi+50 //50足している

    var syoukiri=Math.round(hen * 100) / 100; ///四捨五入

    document.getElementById("result-area").innerHTML="年収"+a+"万円の偏差値は"+syoukiri+"です";//リザルトエリアに出力

    if(syoukiri<40){
        document.getElementById("result-area").style.color=("#666666");
        document.getElementById("comment-area").innerHTML="とても貧乏";
    }else if(syoukiri<45){
        document.getElementById("result-area").style.color=("#888888");
        document.getElementById("comment-area").innerHTML="貧乏"; 
    }else if(syoukiri<55){
        document.getElementById("result-area").style.color=("white");
        document.getElementById("comment-area").innerHTML="普通";
    }else if(syoukiri<60){
        document.getElementById("result-area").style.color=("#FFDDFF");
        document.getElementById("comment-area").innerHTML="かねも";
    }else if(syoukiri<65){
        document.getElementById("result-area").style.color=("#FFAAFF");
        document.getElementById("comment-area").innerHTML="けっこうかねも";
    }else if(syoukiri<70){
        document.getElementById("result-area").style.color=("#FF0000");
        document.getElementById("comment-area").innerHTML="超かねも";
    }else{
        document.getElementById("result-area").style.color=("#ff9900");
        document.getElementById("comment-area").innerHTML="デヴィ夫人";
    }
}

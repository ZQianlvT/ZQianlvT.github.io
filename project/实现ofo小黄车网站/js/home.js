var div_width=100;
var data=0;
for(i=1;i<5;i++){
    $("div#img_bt span:nth-child("+i+")").attr("data",data);
    data-=div_width;
}
$("div#img_bt span").click(function () {
    $("div#img_bt span").css("background","rgba(0, 0, 0, 0.5)");
    $(this).css("background","#f7d408");
    var x=$(this).attr("data");
    $("img#home_bg_img1").animate({left:x+"%"});
})
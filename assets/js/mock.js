    var sebelum = $("#sebelum");
    var sesudah = $("#sesudah");
    
$(document).ready(function(){
    $("#opsiGaya").change(mocking); // Option Change
    sebelum.on("input",mocking); // New Type Change
// Bersihkan textarea
    $("#tombol_sebelum").on("click",function(){
        sebelum.focus();
        sebelum.val("");
        sesudah.val("");
    });
// Salin hasil
    $("#tombol_sesudah").on("click",function(){
        sesudah.select();
        document.execCommand('copy');
    });
});
// Mocking
function mocking(){
    var hasil = "";
    var huruf = sebelum.val().split("");
    var hurufData = ['a','u','e','o'];
    $.each(huruf, function(i,v){
        switch($("#opsiGaya").val()){
            case "0": // micking
                if($.inArray(v,hurufData) >= 0 ){
                    hasil += v.replace(v, "i");
                }else{
                    hasil += v;
                }
                break;
            default: // mOcKiNg
                if(i % 2 != 0){
                    hasil += v.toUpperCase();
                }else{
                    hasil += v;
                }
        }
    });
    sebelum.css("height","5px");
    sebelum.css("height",sebelum.prop("scrollHeight")+5+"px");
    sesudah.css("height","5px");
    sesudah.css("height",sebelum.prop("scrollHeight")+1+"px");
    sesudah.val(hasil);
}
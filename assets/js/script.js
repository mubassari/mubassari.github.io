// Preload
$(window).on('load', function() {
    $('.spinner').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});
    var sebelum = $("#sebelum");
    var sesudah = $("#sesudah");
$(document).ready(function(){
// Scrollspy mulus
    $('body').scrollspy({target: ".navbar", offset: 50});  
    $("#scrollku a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });
// Ganti ke huruf I
    sebelum.on("input",function(){
            var hurufKecil = sebelum.val().split("a").join("i").split("u").join("i").split("e").join("i").split("o").join("i");
            var hurufBesar = hurufKecil.split("A").join("I").split("U").join("I").split("E").join("I").split("O").join("I");
        sebelum.css("height","5px");
        sebelum.css("height",sebelum.prop("scrollHeight")+5+"px");
        sesudah.css("height","5px");
        sesudah.css("height",sebelum.prop("scrollHeight")+1+"px");
        sesudah.val(hurufBesar);
    });
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

// Preload
$(window).on('load', function() {
    $('.spinner').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});
// Akhir Preload

    var sebelum = $("#sebelum");
    var sesudah = $("#sesudah");

$(document).ready(function(){
    
    $(document).ajaxStart(function(){
        $('#tombol').empty();
        $('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span>Memuat</span>').appendTo('#tombol');
    });
    $(document).ajaxComplete(function(){
        $('#tombol').empty();
        $('<span>Unduh</span>').appendTo('#tombol');
    });

    $('#link').keypress(function(e){
        if(e.keyCode==13){
            $("#tombol").click();
        }
    });
    $("#tombol").click(function(){
        $('#info').empty();
        var dataLink = $('#link').val().split("?",1);
        $.ajax({
            url: dataLink+'?__a=1',
            type: 'GET',
            dataType: 'JSON',
            success: function(data){
                var infoMedia = data.graphql.shortcode_media;
                var typeMedia = infoMedia.__typename;
                switch(typeMedia){
                    case 'GraphImage':
                        var imgLink = infoMedia.display_resources[2].src;
                        $('#data-media').empty();
                        $(`<div class="card text-center" style="width: 18rem;">
                        <img src="`+imgLink+`" class="card-img-top">
                        <div class="card-body">
                        <a href="`+imgLink+`" target="_blank" class="btn btn-primary">
                        <i class="fa fa-download"></i>
                        Unduh Gambar</a>
                        </div>
                        </div>`).appendTo('#data-media');
                        break;

                    case 'GraphVideo':
                        var imgLink = infoMedia.display_resources[2].src;
                        var vidLink = infoMedia.video_url;
                        $('#data-media').empty();
                        $(`<div class="card text-center" style="width: 18rem;">
                        <video class="embed-responsive card-img-top" poster="`+imgLink+`" controls>
                        <source src="`+vidLink+`" type="video/mp4">
                        </video>
                        <div class="card-body">
                        <a href="`+vidLink+`" target="_blank" class="btn btn-primary">
                        <i class="fa fa-download"></i>
                        Unduh Video</a>
                        </div>
                        </div>`).appendTo('#data-media');
                        break;
                    case 'GraphSidecar':
                        var sideInfo = infoMedia.edge_sidecar_to_children.edges;
                        
                        $('#data-media').empty();
                        $('<div class="card-columns" id="cardData"></div>').appendTo('#data-media');
                        $.each(sideInfo,function(i,item){
                            var mediaType = sideInfo[i].node.__typename;
                            if (mediaType == 'GraphImage'){
                                var imgLink = sideInfo[i].node.display_resources[2].src;
                                $(`<div class="card text-center">
                                <img src="`+imgLink+`" class="card-img-top">
                                <div class="card-body">
                                <a href="`+imgLink+`" target="_blank" class="btn btn-primary">
                                <i class="fa fa-download"></i>
                                Unduh Gambar</a>
                                </div>
                                </div>`).appendTo('#cardData');
                            } else {
                                var imgLink = sideInfo[i].node.display_resources[2].src;
                                var vidLink = sideInfo[i].node.video_url;
                                $(`<div class="card text-center">
                                <video class="embed-responsive card-img-top" poster="`+imgLink+`" controls>
                                <source src="`+vidLink+`" type="video/mp4">
                                </video>
                                <div class="card-body">
                                <a href="`+vidLink+`" target="_blank" class="btn btn-primary">
                                <i class="fa fa-download"></i>
                                Unduh Video</a>
                                </div>
                                </div>`).appendTo('#cardData');
                            }
                        });
                }
            },
            error: function (data) {
                $('<div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>').appendTo('#info');
            }
        });
    });
// Scrollspy mulus
    $('body').scrollspy({target: ".navbar", offset: 50});  
    $("#navbar a").on('click', function(event) {
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
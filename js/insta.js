$(document).ready(() => {
    $(document).ajaxStart(() => {
        $('#tombol').empty();
        $('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span>Memuat</span>').appendTo('#tombol');
    });
    $(document).ajaxComplete(() => {
        $('#tombol').empty();
        $('<span>Unduh</span>').appendTo('#tombol');
    });

    $('#link').keypress((e) => {
        if (e.keyCode == 13) {
            $("#tombol").click();
        }
    });
    $("#tombol").click(() => {
        $('#info').empty();
        $('#data-media').empty();
        var dataLink = $('#link').val().split("?", 1);
        $.ajax({
            url: dataLink + '?__a=1',
            type: 'GET',
            dataType: 'JSON',
            success: (data) => {
                var infoMedia = data.graphql.shortcode_media;
                var typeMedia = infoMedia.__typename;
                switch (typeMedia) {
                    case 'GraphImage':
                        var imgLink = infoMedia.display_resources;
                        $('<div id="media-detail" class="card text-center" style="width: 18rem;"></div>').appendTo('#data-media');
                        getImage(imgLink);
                        break;
                    case 'GraphVideo':
                        var imgLink = infoMedia.display_url;
                        var vidLink = infoMedia.video_url;
                        $(`<div class="card text-center" style="width: 18rem;">
                        <video class="embed-responsive card-img-top" poster="` + imgLink + `" controls>
                        <source src="` + vidLink + `" type="video/mp4">
                        </video>
                        <div class="card-body">
                        <a href="` + vidLink + `" target="_blank" class="btn btn-primary">
                        <i class="fa fa-download"></i>
                        Unduh Video</a>
                        </div>
                        </div>`).appendTo('#data-media');
                        break;
                    case 'GraphSidecar':
                        var sideInfo = infoMedia.edge_sidecar_to_children.edges;
                        $('<div class="row d-flex justify-content-center" id="cardData"></div>').appendTo('#data-media');
                        $.each(sideInfo, (i, item) => {
                            var mediaType = sideInfo[i].node.__typename;
                            if (mediaType == 'GraphImage') {
                                var imgLink = sideInfo[i].node.display_resources;
                                $('<div id="media-detail" class="card text-center col-md-3 p-0 m-2"></div>').appendTo('#cardData');
                                getImage(imgLink);
                            } else {
                                var imgLink = sideInfo[i].node.display_url;
                                var vidLink = sideInfo[i].node.video_url;
                                $(`<div class="card text-center col-md-3 p-0 m-2">
                                <video class="embed-responsive card-img-top" poster="` + imgLink + `" controls>
                                <source src="` + vidLink + `" type="video/mp4">
                                </video>
                                <div class="card-body">
                                <a href="` + vidLink + `" target="_blank" class="btn btn-primary">
                                <i class="fa fa-download"></i>
                                Unduh Video</a>
                                </div>
                                </div>`).appendTo('#cardData');
                            }
                        });
                }
            },
            error: (err) => {
                $('<div class="alert alert-danger" role="alert"><strong>GALAT</strong> - Harap periksa kembali tautan Anda!</div>').appendTo('#info');
            }
        });
    });
});
function getImage(media) {
    $(`<img src="` + media[0].src + `" class="card-img-top">
        <div class="card-body">
            <a href="` + media[2].src + `" target="_blank" class="btn btn-primary" download>
                <i class="fa fa-download"></i>Unduh Gambar</a>
        </div>`).appendTo('#media-detail');
}
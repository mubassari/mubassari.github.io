var sebelum = $("#sebelum");
var sesudah = $("#sesudah");
$(document).ready(() => {
    $("#opsiGaya").change(mocking); // Option Change
    sebelum.on("input", mocking); // New Type Change
    // Bersihkan textarea
    $("#tombol_sebelum").on("click", () => {
        sebelum.focus();
        sebelum.val("");
        sesudah.val("");
    });
    // Salin hasil
    $("#tombol_sesudah").on("click", () => {
        sesudah.select();
        document.execCommand('copy');
    });
});
// Mocking
function mocking() {
    var hasil = "";
    var huruf = sebelum.val().split("");
    $.each(huruf, (i, v) => {
        switch ($("#opsiGaya").val()) {
            case "0": // micking
                var hurufKecil = ['a', 'u', 'e', 'o'];
                var hurufBesar = hurufKecil.map(v => v.toUpperCase());
                if ($.inArray(v, hurufKecil) >= 0) {
                    hasil += v.replace(v, "i");
                } else if ($.inArray(v, hurufBesar) >= 0) {
                    hasil += v.replace(v, "I");
                } else {
                    hasil += v;
                }
                break;
            default: // mOcKiNg
                if (i % 2 != 0) {
                    hasil += v.toUpperCase();
                } else {
                    hasil += v.toLowerCase();
                }
        }
    });
    sebelum.css("height", "5px");
    sebelum.css("height", sebelum.prop("scrollHeight") + 5 + "px");
    sesudah.css("height", "5px");
    sesudah.css("height", sesudah.prop("scrollHeight") + 5 + "px");
    sesudah.val(hasil);
}
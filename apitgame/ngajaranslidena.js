    // Fungsi yang menjadi inti dari script animasi ini
    function ngajaranSlide(slideContainer, duration)
    {
        var currentSlide = $('img:nth-child(1)', slideContainer);
 
        // slide tersebut akan dimodifikasi sedemikian rupa
        $(currentSlide)
        .css({
            opacity: 0 // buat opacity-nya menjadi 0, sehingga tidak terlihat (transparan)
        })
        // appendTo akan membuat anak pertama menjadi anak terakhir,
        // sehingga akan berada dibagian paling depan.
        // namun meskipun berada dipaling depan,
        // tidak akan terlihat karena sudah transparan (step sebelumnya)
        .appendTo(slideContainer)
 
        // animasikan tingkat opacity menjadi 1 (FULL),
        // sehingga pelan-pelan akan terlihat
        .animate({
            opacity: 1
        }, 'normal', function(){
            setTimeout(function(){
                // fungsi akan dijalankan kembali
                // setelah sekian detik sesuai dengan duration
                // sehingga menampilkan efek animasi berulang-ulang
                ngajaranSlide(slideContainer, duration);
            }, duration);
        })
    }
 
    // implementasi
    // jalankan fungsi animasi ketika document sudah di-load (ready)
    $(function(){
        var duration = 1000; // millsecond        
        var slideContainer = $('#slideshow');
        ngajaranSlide(slideContainer, duration);
    });

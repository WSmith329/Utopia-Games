// Product page specific script
var i = 0;

$('.productImage').on('click', function () {
    if (i == 0){
        $('.productImage').animate({width: '100%'}, 1000);
        i = 1;
    }
    else {
        $('.productImage').animate({width: '50%'}, 1000);
        i = 0;
    }
})
$(document).ready(function () {
    getProductList();
    $('.btn').on('click',function(){
        add2Cart($(this)[0].id);
    });
});
function getProductList(){
    var allProduct = loadAllProduct();
    for (var i = 0; i < allProduct.length; i++) {

        $('#add').append('<div class="row text-center"><div class="col-md-1" id="p_name">'+allProduct[i].p_sort+'</div><div class="col-md-3" id="p_name">' +
            allProduct[i].p_name + '</div><div class="col-md-3" id="p_price">' +
            allProduct[i].p_price + '</div><div class="col-md-2" id="p_unit">' +
            allProduct[i].p_unit + '</div> <div class="col-md-3">' +
            '<a class="btn btn-primary btn-sm" id=' + allProduct[i].p_name + ' role="button">' +
            '购买' +
            '</a></div></div>');

    }
}

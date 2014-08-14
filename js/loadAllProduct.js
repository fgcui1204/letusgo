function loadAllProduct() {
    return [
        new Product('水果', '苹果', '10', '千克'),
        new Product('水果', '香蕉', '5', '千克'),
        new Product('饮料', '雪碧', '5', '瓶'),
        new Product('饮料', '可乐', '7', '瓶'),
        new Product('水果', '橙子', '10', '千克'),
        new Product('衣服', '阿迪运动鞋', '1000', '双'),
        new Product('衣服', 'NIKE运动鞋', '1000', '双')
    ];

}
var already_exit_sort = [];
$(document).ready(function () {
    var allProduct = loadAllProduct();
    for (var i = 0; i < allProduct.length; i++) {
        if (isExist(allProduct[i].p_sort)) {
            $('#add').append(' <div class="panel panel-default" id="'+allProduct[i].p_sort+'"><div class="panel-heading"><label id="p_sort">' + allProduct[i].p_sort + '</label></div> <div class="panel-body"><div class="row text-center"><div class="col-md-3" id="p_name">' + allProduct[i].p_name + '</div><div class="col-md-3" id="p_price">' + allProduct[i].p_price + '</div><div class="col-md-3" id="p_unit">' + allProduct[i].p_unit + '</div> <div class="col-md-3"><a class="btn btn-primary btn-sm" role="button">购买</a></div></div></div> </div>');
            already_exit_sort.push(allProduct[i].p_sort);
        } else {
            $('#'+allProduct[i].p_sort+'').append('<div class="panel-body"><div class="row text-center"><div class="col-md-3" id="p_name">' + allProduct[i].p_name + '</div><div class="col-md-3" id="p_price">' + allProduct[i].p_price + '</div><div class="col-md-3" id="p_unit">' + allProduct[i].p_unit + '</div> <div class="col-md-3"><a class="btn btn-primary btn-sm" role="button">购买</a></div></div></div>');
        }
    }


});
function isExist(p_sort) {
    if (already_exit_sort.length===0) {
        return true;
    }
    for (var i = 0; i < already_exit_sort.length; i++) {
        if (p_sort === already_exit_sort[i]) {
            return false;
        }
    }
    return true;
}
function loadAllProduct(){
    return [
        new Product('水果','苹果','10','千克'),
        new Product('水果','香蕉','5','千克'),
        new Product('饮料','雪碧','7','瓶'),

        new Product('水果','橙子','10','千克'),
        new Product('衣服','NIKE运动鞋','1000','双')
    ];

}
$(document).ready(function(){
    var allProduct=loadAllProduct();
    for(var i=0;i<allProduct.length;i++){
        $('#add').append(' <div class="panel-heading"><label id="p_sort">'+allProduct[i].p_sort+'</label></div> <div class="panel-body"><div class="row text-center"><div class="col-md-3" id="p_name">'+allProduct[i].p_name+'</div><div class="col-md-3" id="p_price">'+allProduct[i].p_price+'</div><div class="col-md-3" id="p_unit">'+allProduct[i].p_unit+'</div> <div class="col-md-3"><a class="btn btn-primary btn-sm" role="button">购买</a></div></div></div>');
//        $('#p_sort').text(allProduct[i].p_sort);
//        $('#p_name').text(allProduct[i].p_name);
//        $('#p_price').text(allProduct[i].p_price);
//        $('#p_unit').text(allProduct[i].p_unit);
     }
});
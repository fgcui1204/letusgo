$(document).ready(function(){
    $('#totalCount').text(getTotalCount());
    getOrder();
})
function getOrder(){
    var items=JSON.parse(localStorage.getItem("name"));
    if(items===null){
        items=[];
        $('#order').text("您还没有买过任何商品");
    }
    for (var i = 0; i < items.length; i++) {
       $('#order').append('<div class="row text-center"><div class="col-md-3">'+items[i].Product.p_name+'</div>' +
           '<div class="col-md-3">'+items[i].count+'</div>' +
           '<div class="col-md-3">'+items[i].Product.p_price+'</div> ' +
           '<div class="col-md-3">'+items[i].Product.p_price*items[i].count+'</div></div>');
     }
    $('#order').append('<hr>');
    $('#order').append('<p class="text-right text-danger h4"><label>总计：33元</label></p>');
    $('#order').append('<p class="text-right"><a class="btn btn-primary btn-lg" role="button" href="../order.html">结算</a></p>')
}
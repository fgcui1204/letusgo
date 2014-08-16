$(document).ready(function(){
    $('#totalCount').text(getTotalCount());
    getOrder();
    $('#totalMoney').text(getTotalMoney());
    $('.btn').on('click',removeCart);
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
    $('#order').append('<p class="text-right text-danger h4"><label>总计：<span id="totalMoney"></span>元</label></p>');
    $('#order').append('<p class="text-right" id="ok"><a class="btn btn-primary btn-lg" role="button" href="../#">确定</a></p>')
}
function removeCart(){
    localStorage.removeItem("name");
}
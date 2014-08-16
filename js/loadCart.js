var already_exit_sort = [];

$(document).ready(function () {
    var items=JSON.parse(localStorage.getItem("name"));
    if(items===null){
        items=[];
    }
    for (var i = 0; i < items.length; i++) {
       // console.log(items[i].Product.p_sort);
        if (isExist1(items[i].Product.p_sort)) {
            $('#addCart').append(' <div class="panel panel-default"><div class="panel-heading"><label>'+items[i].Product.p_sort+'</label> </div><div class="panel-body"  id=' + items[i].Product.p_sort + '><div class="row text-center"><div class="col-md-3">'+items[i].Product.p_name+'</div><div class="col-md-3">'+items[i].Product.p_price+'</div> <div class="col-md-3 form-inline num"><button class="btnAdd" name="'+items[i].Product.p_name+'">+</button>&nbsp;<input type="text" name="'+items[i].Product.p_name+'" class="form-control input-sm countInput" value="'+items[i].count+'"/>&nbsp;<button class="btnSub" name="'+items[i].Product.p_name+'">-</button></div><div class="col-md-3 perMoney">'+items[i].Product.p_price*items[i].count+'</div</div></div></div></div>');
            already_exit_sort.push(items[i].Product.p_sort);
        } else {
            $('#' + items[i].Product.p_sort + '').append('<div class="panel-body"  id=' + items[i].Product.p_sort + '><div class="row text-center"><div class="col-md-3">'+items[i].Product.p_name+'</div><div class="col-md-3">'+items[i].Product.p_price+'</div> <div class="col-md-3 form-inline num"><button class="btnAdd" name="'+items[i].Product.p_name+'">+</button>&nbsp;<input type="text" name="'+items[i].Product.p_name+'" class="form-control input-sm countInput" value="'+items[i].count+'"/>&nbsp;<button class="btnSub" name="'+items[i].Product.p_name+'">-</button></div><div class="col-md-3 perMoney">'+items[i].Product.p_price*items[i].count+'</div</div></div></div>');
        }
    }
    $('#addCart').append('<p class="text-right text-danger h4"><label>总计：<span id="totalMoney"></span>元</label></p>' +
        '<p class="text-right"><a class="btn btn-primary btn-lg" role="button" href="../order.html">结算</a></p>');
    $('#totalCount').text(getTotalCount());
    $('#totalMoney').text(getTotalMoney());
    $('.btnAdd').on('click',function(){
        btnInput($(this),'add');
    });
    $('.btnSub').on('click',function(){
        btnInput($(this),'sub');

    });
    $('.countInput').blur(function(){
        btnInput($(this),null);
    });
});
function isExist1(p_sort) {
    if (already_exit_sort.length === 0) {
        return true;
    }
    for (var i = 0; i < already_exit_sort.length; i++) {

        if (p_sort == already_exit_sort[i]) {
            return false;
        }
    }
    return true;
}
function getTotalCount(){
    var items=JSON.parse(localStorage.getItem("name"));
    var totalCount=0;
    if(items===null){
        totalCount=0;
    }else{
        for(var i=0;i<items.length;i++){
            totalCount+=items[i].count;
        }
    }

    return totalCount;
}
function getTotalMoney(){
    var items=JSON.parse(localStorage.getItem("name"));
    var totalMoney=0;
    if(items===null){
        totalCount=0;
    }else {
        for (var i = 0; i < items.length; i++) {
             totalMoney+=items[i].Product.p_price*items[i].count;
        }
    }
    return totalMoney;
}
var perMoney=0;
function btnInput(element,operate){
    var items=JSON.parse(localStorage.getItem("name"));
    var productName=element.attr("name");
    var inputCount=element.closest('.num').find('.countInput');

    if(operate=='add'){
        inputCount.val(parseInt(inputCount.val())+1);
    }else if(operate=='sub'){
        inputCount.val(parseInt(inputCount.val())-1);
    }
    for(var i=0;i<items.length;i++){
        if(items[i].Product.p_name==productName){
            items[i].count=parseInt(inputCount.val());
            perMoney=items[i].Product.p_price*items[i].count;
            if(operate!=null){
                element.closest('.num').closest('.row').find('.perMoney').text(perMoney);
            }else{
                element.closest('.row').find('.perMoney').text(perMoney);
            }
            var str = JSON.stringify(items);
            localStorage.setItem("name",str);

            break;
        }
     }

    $('#totalMoney').text(getTotalMoney());
    $('#totalCount').text(getTotalCount());

}

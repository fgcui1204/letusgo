var already_exit_sort = [];

$(document).ready(function () {
    var items=JSON.parse(localStorage.getItem("name"));
    if(items===null){
        items=[];
    }
    for (var i = 0; i < items.length; i++) {
       // console.log(items[i].Product.p_sort);
        if (isExist1(items[i].Product.p_sort)) {
            $('#addCart').append(' <div class="panel panel-default"><div class="panel-heading"><label>'+items[i].Product.p_sort+'</label> </div><div class="panel-body"  id=' + items[i].Product.p_sort + '><div class="row text-center"><div class="col-md-3">'+items[i].Product.p_name+'</div><div class="col-md-3">'+items[i].Product.p_price+'</div> <div class="col-md-3 form-inline"><button>+</button>&nbsp;<input type="text" class="form-control input-sm" value="'+items[i].count+'"/>&nbsp;<button>-</button></div><div class="col-md-3">'+items[i].Product.p_price*items[i].count+'</div</div></div></div></div>');
            already_exit_sort.push(items[i].Product.p_sort);
        } else {
            $('#' + items[i].Product.p_sort + '').append('<div class="panel-body"><div class="row text-center"><div class="col-md-3">'+items[i].Product.p_name+'</div><div class="col-md-3">'+items[i].Product.p_price+'</div> <div class="col-md-3 form-inline"><button>+</button>&nbsp;<input type="text" class="form-control input-sm" value="'+items[i].count+'"/>&nbsp;<button>-</button></div><div class="col-md-3">'+items[i].Product.p_price*items[i].count+'</div</div></div></div></div>');
        }
    }
    $('#addCart').append('<p class="text-right text-danger h4"><label>总计：33元</label></p>' +
        '<p class="text-right"><a class="btn btn-primary btn-lg" role="button" href="../order.html">结算</a></p>');
    $('#totalCount').text(getTotalCount());
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
//function getTotalMoney(){
//    var items=JSON.parse(localStorage.getItem("name"));
//    for(){
//
//    }
//}
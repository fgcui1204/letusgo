function add2Cart(p_name) {
    var cart_data = JSON.parse(localStorage.getItem("name"));
    if(cart_data===null){
        cart_data=[];
    }
    var cart_item = isExistItem(p_name,cart_data);
    if(cart_item){
        cart_item.count++;
    }else{
        cart_data.push(new cartItem(getItemByName(p_name),1));
    }
    var str = JSON.stringify(cart_data);
    localStorage.setItem("name",str);
}

function  getItemByName(p_name) {

    var allProduct=loadAllProduct();
    var item;
    for(var i=0;i<allProduct.length;i++){
        if(p_name==allProduct[i].p_name){
            item=allProduct[i];

            break;
         }
     }
    return item;
}

function isExistItem(p_name,cart_data) {
    var item;
    for (var i = 0; i < cart_data.length; i++) {
        if (p_name === cart_data[i].Product.p_name) {
            item = cart_data[i];
            break;
        } else {
            item=false;
        }
    }
    return item;
}

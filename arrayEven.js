function fnIsEven_loop(arr){
    for(var i = 0 ; i < arr.length; i ++){
    if(arr[i] % 2 === 0){
        return true;
    }
    }
    return false;
    }
     
    console.log(fnIsEven_loop([1,3,5]));
    console.log(fnIsEven_loop([1,3,5,6]));
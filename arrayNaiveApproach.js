function fnIsGreaterThan100_loop(arr){
    for(var i = 0 ; i < arr.length; i ++){
    if(arr[i] > 100){
        return true;
    }
    }
    return false;
    }
     
    console.log(fnIsGreaterThan100_loop([30,60,90,120]));
    console.log(fnIsGreaterThan100_loop([30,60,90]));

function fnIsGreaterThan100_some(arr){
    return arr.some(function(element){
            return(element> 100);
    });
    }
     
    console.log(fnIsGreaterThan100_some([30,60,90,120]));
    console.log(fnIsGreaterThan100_some([30,60,90]));

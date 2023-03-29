function fnIsEven_some(arr){
    return arr.some(function(element){
            return(element %2 === 0);
    });
    }
     
    console.log(fnIsEven_some([1,3,5]));
    console.log(fnIsEven_some([1,3,5,6]));

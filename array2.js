function fnCheckDatatype_Every(arr, sDatatype){
    return arr.every(function(element){
            return typeof(element) === sDatatype;
        },sDatatype);
    }
     
    console.log(fnCheckDatatype_Every(["Geeks","for","Geeks"],"string"));
    console.log(fnCheckDatatype_Every(["Geeks",4,"Geeks"],"string"));

function fnCheckDatatype_Every(arr, sDatatype){
    for(var i = 0 ; i < arr.length; i++)
    {
    if(typeof(arr[i]) != sDatatype)
    {
        return false;
    }
    }
    return true
    }
     
    console.log(fnCheckDatatype_Every(["Geeks",4,"Geeks"],"string"));
    console.log(fnCheckDatatype_Every(["Geeks","for","Geeks"],"string"));
var groupAnagrams = function(strs) {
    var newArr = [];
strs.forEach((elem) =>{
    key = elem.split('').sort();
    newArr[key] instanceof Array ? newArr[key].push(elem) : newArr[key] = [elem];
});
return Object.keys(newArr).map(function(k){return newArr[k]});
}
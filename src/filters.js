/**
 */
exports.textNum = function(data,num){
    if(data){
        return data.substring(0,num);
    }else{
        return null;
    }
    
}
/*
 */
exports.addTextTag = function(data,txt){
    if(data){
        return txt + '：'+data;
    }else{
        return null;
    }
    
}
exports.numDisplay = function(data){
    if(data){
        return data;
    }else{
        return null;
    }
    
}
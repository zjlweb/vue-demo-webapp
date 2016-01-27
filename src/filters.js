/**格式化时间
 *  @param {string} time 需要格式化的时间
 *  @param {bool} friendly 是否是fromNow
 */
exports.textNum = function(data,num){
    if(data){
        return data.substring(0,num);
    }else{
        return null;
    }
    
}
/**格式化时间
 *  @param {string} time 需要格式化的时间
 *  @param {bool} friendly 是否是fromNow
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
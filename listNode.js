/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var arr = []
    let max = 0;
    for(let i=0;i<s.length;i++){
        if(arr.indexOf(s[i])==-1){
            arr.push(s[i])
        }else{
            arr=arr.splice[arr.indexOf+1,arr.length]
        }
    }
    return arr.length
};

console.log(lengthOfLongestSubstring("aabb"));
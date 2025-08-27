/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let array = 0;
    let read = 0;

    while(read < chars.length){
        let cnt = 0;
        const curChar = chars[read];

        while(read < chars.length && chars[read] === curChar){
            read++;
            cnt++
        }
        chars[array] = curChar;
        array++

        if(cnt > 1){
            const cntStr = cnt.toString();
            for(let i = 0; i < cntStr.length; i++){
                chars[array] = cntStr[i];
                array++;
            }
        }
    }
    return array;
};
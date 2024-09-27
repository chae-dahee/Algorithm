function solution(dartResult) {
    var ans = 0;
    let score = 0;
    let cnt = []
    
    for(let i=0; i<dartResult.length; i++){
    let res = dartResult[i];
        if (!isNaN(res)) {
            score = dartResult[i-1] === '1' ? 10 : Number(res);
        } else {
            switch (res) {
                case "S":
                    cnt.push(score);
                    break;
                case "D":
                    cnt.push(Math.pow(score, 2));
                    break;
                case "T":
                    cnt.push(Math.pow(score, 3));
                    break;
                case "*":
                    cnt[cnt.length - 1] *= 2;
                    if (cnt.length > 1) {
                        cnt[cnt.length - 2] *= 2;
                    }
                    break;
                case "#":
                    cnt[cnt.length - 1] *= -1;
                    break;
            }
        }
    }
    return cnt.reduce((acc, cur)=>acc + cur, 0);
}
function isPrime(num){
    if(num<=1) return false;
    for (let i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    var ans = 0;
    let binary = n.toString(k);
    let arr = binary.split('0');
    
    for(let i=0; i<arr.length; i++){
        if (isPrime(Number(arr[i]))) ans++;
    }
    return ans;
}
function solution(n) {
    let isPrime = Array(n + 1).fill(true);
    
    isPrime[0] = false;
    isPrime[1] = false;
    
    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let j = p * p; j <= n; j += p) {
                isPrime[j] = false;
            }
        }
    }
    
    let primeCount = 0;
    
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primeCount++;
        }
    }
    
    return primeCount;
}
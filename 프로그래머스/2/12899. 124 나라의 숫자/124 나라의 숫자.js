function solution(n) {
    let answer = '';
    const numbers = [4, 1, 2];

    while (n > 0) {
        let remainder = n % 3;
        answer = numbers[remainder] + answer;

        if (remainder === 0) {
            n = Math.floor(n / 3) - 1;
        } else {
            n = Math.floor(n / 3);
        }
    }

    return answer;
}
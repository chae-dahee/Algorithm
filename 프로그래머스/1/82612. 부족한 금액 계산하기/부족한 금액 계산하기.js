function solution(price, money, count) {
    const dist = price * count * (count + 1) / 2 - money;
    return dist >= 0 ? dist : 0;
}
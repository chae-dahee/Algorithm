function solution(cacheSize, cities) {
     let answer = 0;
    const cache = [];

    if (cacheSize === 0) {
        return cities.length * 5;
    }

    cities.map(city => city.toLowerCase()).forEach(city => {
        if (cache.includes(city)) {
            answer += 1;
            cache.splice(cache.indexOf(city), 1);
        } else {
            if (cache.length === cacheSize) {
                cache.shift();
            }
            answer += 5;
        }
        cache.push(city);
    });

    return answer;
}
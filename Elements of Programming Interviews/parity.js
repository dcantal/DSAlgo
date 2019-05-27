function parity(num) {
    let result = 0;
    while(num != 0) {
        result ^= 1;
        num &= (num-1);
    }
    return result;
}

console.log(parity(1010110111010));
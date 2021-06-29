function min(a, b) {
    if (a > b) {
        console.log(`${b}`)
    }
    console.log(a)
}



min = (a, b) => a < b ? a : a > b ? b : "a=b"

console.log(min(2, 2));
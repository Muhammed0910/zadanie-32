//1
function sortArray(array) {
    let tem = 0
    for (let i; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[i]){
                tem = array[i]
                array[j] = array[i]
                array[j] = tem
            }
        }
    }
    return array
}
function sorted(a) {
    uniqueArray = a.filter(function(item, pos) {
        return a.indexOf(item) == pos
    })
    sortArray(uniqueArray)
    console.log(uniqueArray)
}
sorted(1, 2, 3, 4, 5, 6, 1, 31, 2)
//2 ?
//3
function func(a) {
    console.log(a)
    let b = 0
    let x = 0
    for(let i; i < a.length; i++) {
        b = a[i]
        b = b.split('')
        c = b.length - 1
        if(b[0] == '#' && b[c] == '#' && b.indexOf('*') > -1) {
            x = 1
            console.log(true)
            break
        }
    }
    if(x == 0) {
        console.log(false)
    }
}
//4 ?
//5
function times(a, b, c) {
    a = a*3600
    b = b*60
    if(a > b && a > c) {
        console.log(a/3600)
    }
    if(b > a && b > c) {
        console.log(b/60)
    }
    if(c > a && c > b) {
        console.log(c)
    }
}
times(1, 59, 3601)
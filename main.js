// 3. Write a program to solve this logic
// a=['a','f','g','h','l','k']===>[1,6,7,8,12,11]

let a = ['a', 'f', 'g', 'h', 'l', 'k'];
let b = [];
const num = 31;
function alphabet() {
    for (var i = 0; i < a.length; i++) {
        let val = parseInt((a[i].charCodeAt(0) & num) + " ");
        // console.log((a[i].charCodeAt(0) & NUM) + " ");
        b.push(val);
    }
    return b
}
console.log(alphabet(b));
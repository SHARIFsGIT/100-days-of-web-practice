// int a = 1;
// JS dynamic type programming language

let p = { job: 'Web development'}
let q = p;
console.log(p, q);

q = { job: 'Backend development'}
console.log(p, q);

// keep the reference
let p1 = { job: 'Web development'}
let q1 = p1;
q1.job = 'Stack development'
console.log(p1, q1);
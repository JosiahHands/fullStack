const mil = 1000000;
const bil = mil * 1000;
const tril = bil * 1000;
const superMil = mil * mil;
const superBil = bil * bil;
// displays the number being counted
export const countBasic = (num) => {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
    ;
    console.log(' ');
    console.log('COMPUTERS ARE FAST!!!');
    console.log(' ');
};
export const countSlow = (num, slow) => {
    for (let i = 0; i <= num; i++) {
        for (let it = 0; it <= slow; it++) { }
        ;
        console.log(i);
    }
    ;
    console.log(' ');
    console.log('COMPUTERS ARE FAST!!!');
    console.log(' ');
};
// displays the % counted
export const countFancy = (num) => {
    for (let i = 0; i <= num; i++) {
        for (let p = 0; p <= 1.01; p += 0.01) {
            let prc = Number((p * num).toFixed());
            let result = (p * 100).toFixed() + '%';
            if (i === prc) {
                console.log(result);
            }
            ;
        }
        ;
    }
    ;
    console.log(' ');
    console.log('COMPUTERS ARE FAST!!!');
    console.log(' ');
};
// In this program it counts to your input number and with each count it checks if its equal to a %
//# sourceMappingURL=module.js.map
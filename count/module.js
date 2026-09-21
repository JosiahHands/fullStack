const mil = 1000000;
const bil = mil * 1000;
const tril = bil * 1000;
const superMil = mil * mil;
const superBil = bil * bil;
// displays the number being counted
export const countBasic = (num) => {
    console.log(' ');
    console.log('Computers are...');
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
    ;
    console.log('FAST!!!');
    console.log(' ');
};
// displays the % counted
export const countFancy = (num) => {
    console.log(' ');
    console.log('Computers are...');
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
    console.log('FAST!!!');
    console.log(' ');
};
// In this program it counts to your input number and with each count it checks if its equal to a %
//# sourceMappingURL=module.js.map
// Spread and Destructuring Exercise

// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];
// 1b
function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos)

console.log("=======");

// 2a
const jPCharacters = {
    alanGrant: `Sam Niell`,
    ellieSattler: `Laura Dern`,
    ianMalcom: `Jeff Goldblum`
};

// 2b
seeCharacters = (i) => {
    console.log(i.ellieSattler);
}
seeCharacters(jPCharacters);
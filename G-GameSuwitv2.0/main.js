function getPilihanComputer() {
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    else if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getResult(comp, player) {
    if (player == comp) return 'Seri🤝';
    if (player == 'gajah') return (comp == 'orang') ? 'Menang🎉' : 'Kalah😭';
    if (player == 'orang') return (comp == 'semut') ? 'Kalah😭' : 'Menang🎉';
    if (player == 'semut') return (comp == 'orang') ?  'Kalah😭' : 'Menang🎉';
}

const imgComp = document.querySelector(".comp");
const info = document.querySelector(".info");

function putar() {
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const wMulai = new Date().getTime();
    setInterval(
        function(){
            if(new Date().getTime() - wMulai > 1000) {
                clearInterval 
                return 0;
            }
            imgComp.setAttribute('src', `img/${gambar[i++]}.png`);
            if(i == gambar.length)  i = 0;
        }
    ), 100
}

const pilihan = document.querySelectorAll('.pilihan img')
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        console.log(pil);
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const result = getResult(pilihanComputer, pilihanPlayer);
        
        putar();

        setTimeout(
            function() {
                imgComp.setAttribute('src', `img/${pilihanComputer}.png`);
                info.innerHTML = result;
            }, 1000
        );
        
        
        console.log(`Kopumter: ${pilihanComputer}`);
        console.log(`Player: ${pilihanPlayer}`);
        console.log(`Hasil ${result}`);
    })
})





















// useGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = useGajah.className;
//     const result = getResult(pilihanComputer, pilihanPlayer);

//     imgComp.setAttribute('src', `img/${pilihanComputer}.png`);
//     info.innerHTML = result;

//     console.log(`Kopumter: ${pilihanComputer}`);
//     console.log(`Player: ${pilihanPlayer}`);
//     console.log(`Hasil ${result}`)
// })
// useOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = useOrang.className;
//     const result = getResult(pilihanComputer, pilihanPlayer);

//     imgComp.setAttribute('src', `img/${pilihanComputer}.png`);
//     info.innerHTML = result;

//     console.log(`Komputer: ${pilihanComputer}`);
//     console.log(`Player: ${pilihanPlayer}`);
//     console.log(`Hasil ${result}`)
// })
// useSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = useSemut.className;
//     const result = getResult(pilihanComputer, pilihanPlayer);

//     imgComp.setAttribute('src', `img/${pilihanComputer}.png`);
//     info.innerHTML = result;

//     console.log(`Komputer: ${pilihanComputer}`);
//     console.log(`Player: ${pilihanPlayer}`);
//     console.log(`Hasil ${result}`)
// })
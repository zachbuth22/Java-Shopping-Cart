
let Games = []

function AddGame(_name, _genre, _price){
    let newGame = {
        Name: _name,
        Genre: _genre,
        Price: _price
    };

    Games.push(newGame)

    console.log(Games);
}

// Games.forEach((newGame) =>{
//     sum += newGame.Price;
//     console.log(sum)
// })

function sumArray(Games){
    let sum = 0;
    Games.forEach(newGame => {
        sum += newGame._price
    });
    console.log(sum);
    return sum;
}
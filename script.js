const array_cards_name = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
const main_html = document.querySelector("main")

function validadeNumberGame(){
    let number = parseInt(prompt("Insira um número entre 4 e 14 e só pode ser par !"))
    while((isNaN(number) == false && number >= 4 && number <= 14 && number % 2 == 0) == false){
        number = parseInt(prompt("Insira um número entre 4 e 14 e só pode ser pares !"))
    }
    return number
}   

function sortArray(cards){
    let array = []
    for(i = 0; cards != i; i++){
        let random = array_cards_name[Math.floor(Math.random() * array_cards_name.length)]
        if(array.length == 0){
            array.push(random)
        }else{
            let repet = 1
            while(repet >= 1){
                if(array.includes(random) == true){
                    random = array_cards_name[Math.floor(Math.random() * array_cards_name.length)]
                }else{
                    array.push(random)
                    repet = 0
                }
            }
        }        
    }
    return array
}
function createCards(cards){
    let cards_one = sortArray(cards)
    let mix_cards = []
    for(i = 0; cards_one.length > i; i++){
        mix_cards.push(`
        <div onclick='validateCard(this)' class="${cards_one[i]} card" id="card">
            <div class="face" id="front">
                <img src="./imgs/${cards_one[i]}">
            </div>
            <div class="face" id="back">
                <img src="./imgs/back.png">
            </div>
      </div>`)
      mix_cards.push(mix_cards[mix_cards.length - 1])
    }

    let remix = mix_cards.sort((one, two) => Math.random() - 0.5)
    for(i = 0; remix.length > i ; i++){
        main_html.innerHTML += mix_cards[i]
    }
    return cards*2
}

let initial = createCards(validadeNumberGame() / 2)


let one_card;
let two_card;
let acertives_cards = 0

function validateCard(element){
    element.classList.toggle("flip")
    if(one_card == undefined){
        one_card = element.classList[0]
        console.log(one_card)
    }else{
        two_card = element.classList[0]
        if(one_card == two_card){
            acertives_cards += 2
            one_card = undefined
            two_card = undefined
        }else{
            let card_vi = document.querySelectorAll(".flip")
            let time = true
            while(time == true){
                setTimeout(function (){
                    card_vi.forEach(value => {
                        value.classList.toggle("flip")
                    })
                }, 2000)
            }
            
            one_card = undefined
            two_card = undefined
        }
        console.log(two_card)
    }
    
    if(acertives_cards == initial){
        alert("voce ganmhou")
    }
}


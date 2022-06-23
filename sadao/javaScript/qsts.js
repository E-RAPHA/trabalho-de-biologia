var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
let turn = 1
function tradeQST() {
    let interQST = setInterval(() => {
        if (turn == 2) {
            document.getElementById('texto').innerHTML = '2 -qual o nome da anomalia causada em fetos na fase de desenvolvimento pela virose zika'
            document.getElementById('a').innerHTML = 'microcefalia'
            document.getElementById('b').innerHTML = 'hidrocefalia'
            document.getElementById('c').innerHTML = 'acefalia'
            document.getElementById('d').innerHTML = 'glândulas de Tyson'
            document.getElementById('e').innerHTML = 'cefaleia'
        }
        if (turn == 3) {
            document.getElementById('texto').innerHTML = '3 - porque a virose febre amarela recebe "amarela" no nome?'
            document.getElementById('a').innerHTML = 'o virus troca a cor do wallpaper'
            document.getElementById('b').innerHTML = 'porque baixa a imunidade, assim deixando a pele amarelada'
            document.getElementById('c').innerHTML = 'pois esquenta o sangue'
            document.getElementById('d').innerHTML = 'porque afeta o coração, causando menos bombeamentos'
            document.getElementById('e').innerHTML = 'pois atinge principalmente o figado , causando a coloração amarelada na pele'
        }
        if (turn == 4) {
            document.getElementById('texto').innerHTML = '4-qual a virose extinta da terra , que é apenas encontrada em laboratorios?'
            document.getElementById('a').innerHTML = 'turip ip ip ip'
            document.getElementById('b').innerHTML = 'Peste bovina'
            document.getElementById('c').innerHTML = 'leptospirose'
            document.getElementById('d').innerHTML = 'variola'
            document.getElementById('e').innerHTML = 'covid'
        }
        if (turn == 5) {
            document.getElementById('texto').innerHTML = `
            5-Como se denomina o tipo de vírus que ataca bactérias?`
            document.getElementById('a').innerHTML = 'Bactericida'
            document.getElementById('b').innerHTML = 'Bacteriose'
            document.getElementById('c').innerHTML = 'Bacteriófago'
            document.getElementById('d').innerHTML = 'Bacteriano'
            document.getElementById('e').innerHTML = 'Viroloide'
        }
        if (turn == 6) {
            document.getElementById('texto').innerHTML = `
            6-O HIV é um exemplo de vírus envelopado.Marque a alternativa que explica corretamente essa definição.`
            document.getElementById('a').innerHTML = 'São vírus envolvidos por um envelope proteico.'
            document.getElementById('b').innerHTML = 'São vírus envolvidos por uma parede celular.'
            document.getElementById('c').innerHTML = 'São vírus com um grande número de bacterias'
            document.getElementById('d').innerHTML = 'São vírus com um envelope quitinoso.'
            document.getElementById('e').innerHTML = 'São vírus envolvidos por um envelope lipoproteico.'
        }
        if (turn == 7) {
            document.getElementById('texto').innerHTML = `
            7-(UFRN) Todos os vírus são constituídos por:`
            document.getElementById('a').innerHTML = 'Ácidos nucléicos e proteínas.'
            document.getElementById('b').innerHTML = 'Aminoácidos e água.'
            document.getElementById('c').innerHTML = 'RNA e proteínas.'
            document.getElementById('d').innerHTML = 'DNA e RNA .'
            document.getElementById('e').innerHTML = 'DNA e proteínas.'
        }
        if (turn == 8) {
            document.getElementById('texto').innerHTML = `
            8-Marque a alternativa em que todas as doenças citadas são virais:`
            document.getElementById('a').innerHTML = 'AIDS, dengue, malária, gripe'
            document.getElementById('b').innerHTML = 'Herpes, condiloma acuminado, hepatite e mononucleose.'
            document.getElementById('c').innerHTML = 'Febre amarela, dengue, AIDS e botulismo'
            document.getElementById('d').innerHTML = 'Catapora, rubéola, caxumba, tétano'
            document.getElementById('e').innerHTML = 'Leishmaniose, AIDS, sífilis e tétano.'

        }
        if (turn == 9) {
            document.getElementById('texto').innerHTML = `
            9-qual o tipo do virus que estava contornando a tela?`
            document.getElementById('a').innerHTML = 'adenovírus'
            document.getElementById('b').innerHTML = 'HIV.'
            document.getElementById('c').innerHTML = 'ebola'
            document.getElementById('d').innerHTML = 'bacteriófago'
            document.getElementById('e').innerHTML = 'influenza'

        }
        if (turn == 10) {
            document.getElementById('texto').innerHTML = `
            10-qual o instagram do sadao?`
            document.getElementById('a').innerHTML = 'rapburad'
            document.getElementById('b').innerHTML = 'maitelemes'
            document.getElementById('c').innerHTML = 'pedro_cajazeira'
            document.getElementById('d').innerHTML = 'sadaothi'
            document.getElementById('e').innerHTML = 'vi_dias013'


        }
        if (turn == 11) {
            console.log(q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10);
       
           
            window.alert(`você acertou o total de ${q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10} questoes, vamos ver quem você é...`)
                turn++
       

        }
        if(turn == 12){
            window.location.href = `${dir}/resultados/res${q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10}.html`
        }
    }, 100)
}
tradeQST()

function turip() {
    const pop = window.open("https://www.youtube.com/watch?v=145Qd0aVTEk", " ", "width=400, height=400",);
    pop.focus()
}
function rgado() {
    const pop = window.open("https://www.youtube.com/watch?v=2Fcy22AAOWQ", " ", "width=400, height=400",);
    pop.focus()
}


function a() {
    if (turn == 1) {
        q1 = 0
        console.log('errou')
    }
    if (turn == 2) {
        q2 = 1
        console.log('acertou')
    }
    if (turn == 3) {
        q3 = 0
        console.log('errou')
        document.body.style.backgroundColor = '#deff4d'
    }
    if (turn == 4) {
        q4 = 0
        console.log('errou')
        turip()
    }
    if (turn == 5) {
        q5 = 0
        console.log('errou')
    }
    if (turn == 6) {
        q6 = 0
        console.log('errou')
    }
    if (turn == 7) {
        q7 = 1
        console.log('acertou')
    }
    if (turn == 8) {
        q8 = 0
        console.log('errou')
    }
    if (turn == 9) {
        q9 = 0
        console.log('errou')
    }
    if (turn == 10) {
        q10 = 0
        console.log('errou')
    }

    turn++
}
function b() {
    if (turn == 1) {
        q1 = 1
        console.log('acertou')
    }
    if (turn == 2) {
        q2 = 0
        console.log('errou')
    }
    if (turn == 3) {
        q3 = 0
        console.log('errou')
    }
    if (turn == 4) {
        q4 = 0
        console.log('errou')
        rgado()
    }
    if (turn == 5) {
        q5 = 0
        console.log('errou')
    }
    if (turn == 6) {
        q6 = 0
        console.log('errou')
    }
    if (turn == 7) {
        q7 = 0
        console.log('errou')
    }
    if (turn == 8) {
        q8 = 1
        console.log('acertou')
    }
    if (turn == 9) {
        q9 = 0
        console.log('errou')
    }
    if (turn == 10) {
        q10 = 0
        console.log('errou')
    }

    turn++

}
function c() {
    if (turn == 1) {
        q1 = 0
        console.log('errou')
    }
    if (turn == 2) {
        q2 = 0
        console.log('errou')
    }
    if (turn == 3) {
        q3 = 0
        console.log('errou')
    }
    if (turn == 4) {
        q4 = 0
        console.log('errou')
    }
    if (turn == 5) {
        q5 = 1
        console.log('acertou')
    }
    if (turn == 6) {
        q6 = 0
        console.log('errou')
    }
    if (turn == 7) {
        q7 = 0
        console.log('errou')
    }
    if (turn == 8) {
        q8 = 0
        console.log('errou')
    }
    if (turn == 9) {
        q9 = 0
        console.log('errou')
    }
    if (turn == 10) {
        q10 = 0
        console.log('errou')
    }

    turn++
}
function d() {
    if (turn == 1) {
        q1 = 0
        console.log('errou')
    }
    if (turn == 2) {
        q2 = 0
        console.log('errou')
    }
    if (turn == 3) {
        q3 = 0
        console.log('errou')
    }
    if (turn == 4) {
        q4 = 1
        console.log('acertou', q1, q2, q3, q4)
    }
    if (turn == 5) {
        q5 = 0
        console.log('errou')
    }
    if (turn == 6) {
        q6 = 0
        console.log('errou')
    }
    if (turn == 7) {
        q7 = 0
        console.log('errou')
    }
    if (turn == 8) {
        q8 = 0
        console.log('errou')
    }
    if (turn == 9) {
        q9 = 1
        console.log('acertou')
    }
    if (turn == 10) {
        q10 = 1
        console.log('acertou')
    }
    turn++
}
function e() {
    if (turn == 1) {
        q1 = 0
        console.log('errou')
    }
    if (turn == 2) {
        q2 = 0
        console.log('errou')
    }
    if (turn == 3) {
        q3 = 1
        console.log('acertou')
    }
    if (turn == 4) {
        q4 = 0
        console.log('errou')
    }
    if (turn == 5) {
        q5 = 0
        console.log('errou')
    }
    if (turn == 6) {
        q6 = 1
        console.log('acertou')
    }
    if (turn == 7) {
        q7 = 0
        console.log('errou')
    }
    if (turn == 8) {
        q8 = 0
        console.log('errou')
    }
    if (turn == 9) {
        q9 = 0
        console.log('errou')
    }
    if (turn == 10) {
        q10 = 0
        console.log('errou')
    }
    turn++
}
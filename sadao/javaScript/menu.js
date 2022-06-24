let tLarg = window.innerWidth;
let tAlt = window.innerHeight;

function slides() {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    window.location.href = dir + '/slides/slides.html'
}
function quizIR() {
    movPed()
    movSad()
    movVIt()
    movRAPHA()

}
let rTop = -220
let rLeft = 1720
let rotR = 1
function movRAPHA() {
    let MR = setInterval(() => {
        document.getElementById('rap').style.marginTop = `${rTop}px`
        document.getElementById('rap').style.marginLeft = `${rLeft}px`
        document.getElementById('rap').style.transform = `rotate(${rotR}deg)`
        rotR += 3
        rTop += 1.5
        rLeft -= 5
        if (rLeft <= 630) {

            clearInterval(MR)
            document.getElementById('rap').src = './assets/exp.gif'
            document.getElementById('rap').style.height = '700px'

        }

    }, 20);
}


let vTop = -200
let vLeft = -230
let rotV = 1
function movVIt() {
    let MV = setInterval(() => {
        document.getElementById('vit').style.marginTop = `${vTop}px`
        document.getElementById('vit').style.marginLeft = `${vLeft}px`
        document.getElementById('vit').style.transform = `rotate(${rotV}deg)`
        rotV -= 4
        vTop += 1.5
        vLeft += 4
        if (rLeft <= 630) {

            clearInterval(MV)
            document.getElementById('vit').src = './assets/exp.gif'
            document.getElementById('vit').style.height = '700px'
        }
    }, 20);

}


let sTop = 900
let sLeft = -210
let rotS = 1
function movSad() {
    let MS = setInterval(() => {
        document.getElementById('sad').style.marginTop = `${sTop}px`
        document.getElementById('sad').style.marginLeft = `${sLeft}px`
        document.getElementById('sad').style.transform = `rotate(${rotS}deg)`
        rotS += 5
        sTop -= 4
        sLeft += 4
        if (rLeft <= 630) {

            clearInterval(MS)
            document.getElementById('sad').src = './assets/exp.gif'
            document.getElementById('sad').style.height = '700px'
        }
    }, 20);

}


let pTop = 700
let pLeft = 1620
let rotP = 1
let LoH = 500
let rotLG = 0
function movPed() {
    let MP = setInterval(() => {
        document.getElementById('ped').style.marginTop = `${pTop}px`
        document.getElementById('ped').style.marginLeft = `${pLeft}px`
        document.getElementById('ped').style.transform = `rotate(${rotP}deg)`
        rotP += 4
        pTop -= 3
        pLeft -= 5
        if (rLeft <= 630) {

            clearInterval(MP)
            document.getElementById('ped').src = './assets/exp.gif'
            document.getElementById('ped').style.height = '700px'
            setTimeout(() => {
                document.getElementById('ped').src = ''
                document.getElementById('rap').src = ''
                document.getElementById('sad').src = ''
                document.getElementById('vit').src = ''


            }, 1 * 1000)

            setTimeout(() => {
                document.getElementById('log').src = './assets/vquizlog.png'

            }, 0.5 * 1000)
            setTimeout(() => {
                setInterval(() => {
                    document.getElementById('log').style.height = `${LoH}px`

                    LoH += 4
                }, 10);
            }, 1.5 * 1000)
            setTimeout(() => {
                setInterval(() => {
                    document.getElementById('log').style.transform = `rotate(${rotLG}deg)`
                    rotLG += 3
                }, 10);
            }, 2.3 * 1000)
            setTimeout(() => {
                var loc = window.location.pathname;
                var dir = loc.substring(0, loc.lastIndexOf('/'));
                window.location.href = dir + '/quiz/quiz.html'
            }, 4.3 * 1000)

        }
    }, 20);
}

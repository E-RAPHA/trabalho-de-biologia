

let tLarg = window.innerWidth;
let tAlt = window.innerHeight;

//
var giras1 = 0.5
var mLeft1 = -90
var mTop1 = 0

let velX1 = 3
let velY1 = 4

//
let uepa = 0

function moVIRUS1() {

    let Vinter = setInterval(() => {

        document.getElementById('v1').style.marginLeft = mLeft1 + "px";

        mLeft1 += velX1
        if (mLeft1 >= tLarg || mLeft1 <= -90) {
            velX1 = velX1 * -1
        }

        document.getElementById('v1').style.marginTop = mTop1 + "px";
        mTop1 += velY1
        if (mTop1 >= tAlt || mTop1 <= -130) {
            velY1 = velY1 * -1
            uepa++
            console.log(uepa)
            if(uepa%11==0){
                document.getElementById('v1').src='../assets/virus.png'
            }
            if(uepa%7==0){
                document.getElementById('v1').src='../assets/Virus2.png'
                
            }

            if(uepa%15==0){
                document.getElementById('v1').src='../assets/zoio.gif'
                
            }

        }
        document.getElementById('v1').style.transform = `rotate(${giras1}deg)`
        giras1 += 1.5

        //////////



    }, 20)
}
moVIRUS1();
let velX2 = 5
let velY2 = 3
let mtop2 = 0
let mLeft2 = -20
let flip = 90
let sla = 0
let vazou = 0

function moVirus2() {

    let Vinter2 = setInterval(() => {
        document.getElementById('v2').style.marginTop = mtop2 + "px";
        mtop2 += velY2
        if (mtop2 >= tAlt - 120) {
            velY2 = velY2 = 0
            document.getElementById('v2').style.transform = `rotate(${flip - 90}deg)`
            document.getElementById('v2').style.marginLeft = `${mLeft2}px`
            mLeft2 += velX2
        }
        if (mLeft2 >= tLarg - 120) {
            velX2 = 0
            document.getElementById('v2').style.transform = `rotate(${flip - 180}deg)`
            velY2 = -4
        }
        if (mtop2 <= -40 && mLeft2 >= tLarg - 120) {
            velY2 = 0
            velX2 = 2
            document.getElementById('v2').style.transform = `rotate(${flip + 90}deg)`
            mLeft2 -= 2
            document.getElementById('v2').style.marginLeft = `${mLeft2}px`
            sla = 1
        }

        if (sla == 1) {
            document.getElementById('v2').style.marginLeft = `${mLeft2}px`
            mLeft2 -= 3
        }
        if (mLeft2 <= -1199) {
            clearInterval(Vinter2)
            let vazou = 1
            console.log(vazou)
        }
    }, 20);

}
moVirus2();
let mTop3 = -90
let mLeft3 = 0
let stV3 =0
function moVirus3() {

}





//////////////////////////////////

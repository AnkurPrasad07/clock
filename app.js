const hHand = document.querySelector('.h-hand')
const mHand = document.querySelector('.m-hand')
const sHand = document.querySelector('.s-hand')


setInterval(() => {
    let d = new Date();
    let hTime = d.getHours();
    let mTime = d.getMinutes();
    let sTime = d.getSeconds();
    console.log(hTime + ":" + mTime + ":" + sTime)
    const hRotation = 30* hTime + mTime/2;
    const mRotation = 6* mTime;
    const sRotation = 6* sTime;

    hHand.style.transform = `rotate(${hRotation}deg)`
    mHand.style.transform = `rotate(${mRotation}deg)`
    sHand.style.transform = `rotate(${sRotation}deg)`

}, 1000);
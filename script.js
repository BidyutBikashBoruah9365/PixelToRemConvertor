function convertToRem(){
    const pxInput = document.getElementById("pxInput");
    let pxValue = pxInput.value.slice(0,5)
    pxValue = parseFloat(pxValue)
    console.log(pxValue);
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    console.log(baseFontSize)
    const remValue = pxValue/baseFontSize
    console.log(remValue)
    document.getElementById('remOutput').value = remValue
}
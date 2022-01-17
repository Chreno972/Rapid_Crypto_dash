// help cond
// elemetPriceHtmlListener.style.color = !lastPrice ? || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red'  (+ = vert  - = rouge)
// elemetPriceHtmlListener.innerText = parseFloat(price).toFixed(2); deux chiffres après la virgule

let websocket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr')
let stockNameElement = document.getElementById('stockName')

websocket.onmessage = (event) => {
    let socket = JSON.parse(event.data)
    console.log(socket)
}
let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ccardano%2Ctheta-token%2Cvethor-token%2Cvechain%2Cchainlink%2Ccosmos%2Cmatic-network%2Ckusama%2Cterra-luna%2Csolana%2Cshiba-inu%2Cnear%2Cpolkadot%2Caxie-infinity%2Caave&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h';
// 15000

let crypto_container = document.getElementById("data");
let filtre = document.getElementById("filtre");
let price = 16.


fetch(url)
.then((response) => {
    if (response.ok) {
        return response.json();
    }
})
.then((data) => {
    console.log(data);
    for (let item of data) {
        let percentage = parseFloat(item.price_change_percentage_1h_in_currency.toFixed(2));
        crypto_container.innerHTML += `
        <td class="cols">${item.market_cap_rank}</td>
        <td class="cols" style="text-transform:uppercase"><strong>${item.symbol}</strong></td>
        <td class="cols"><strong>${item.name}</strong></td>
        <td class="cols"><img src="${item.image}" alt="${item.name}_image" /></td>
        <td class="cols">$ ${parseFloat(item.current_price)}</td>
        ${percentage < 0 ? `<td class="cols" style="color:red"><strong>${percentage}%</strong></td>` : `<td class="cols" style="color:green"><strong>${percentage}%</strong></td>`}
        <td class="cols">${item.ath}</td>
        <td class="cols">${item.last_updated}</td>
        <td class="cols">${(price / item.current_price * 100).toFixed(2)}%</td>
        `;
    }
});
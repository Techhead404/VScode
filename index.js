require('dotenv').config();
 const ccxt = require('ccxt');


(async function (){

    const exchange = new ccxt.bittrex ({ 
    'apiKey': process.env.BITTREX_API_KEY,
    'secret': process.env.BITTREX_API_SECRET,
    enableRateLimit: true });
 
    let since = exchange.milliseconds () - 10000000;

    console.log(await exchange.fetchOHLCV('ADA/USD','5m',since,1500));
    //console.log( await exchange.fetchTicker('ADA/USD'));
    
    const priceData = await exchange.fetchOHLCV('ADA/USD','5m',since,1500);


    
    var array1 = []; // better to define using [] instead of new Array();
    var array2 = [];
    var array3 = [];
    var array4 = [];
    var array5 = [];
    var array6 = [];

  for (var i = 0; i < priceData.length; i++) {
    var split = priceData[i].splice(",");  // just split once
    array1.push(split[0]); // before the dot
    array2.push(split[1]);
    array3.push(split[2]);
    array4.push(split[3]);
    array5.push(split[4]);
    array6.push(split[5]); // after the dot
    
}
//console.log("Time", array1);
console.log("Open", array2);
console.log("Close", array3);
//console.log("High", array4);
//console.log("Low", array5);
//console.log("Volume", array6);
    
var array = [ array1,array2,array3,array4,array5,array6];
var csv = array.toString();

let sum = 0;
for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
}
let sum2 = 0;
for (let i = 0; i < array3.length; i++) {
    sum2 += array3[i];
}
let openPrice = (sum/array2.length);
let closePrice = (sum2/array3.length)
let averagePrice = ((openPrice+closePrice)/2);
console.log(openPrice);
console.log(closePrice);
console.log(averagePrice);
    
}) ();
    
        // const orderbook = await exchange.watchOrderBook ('ETH/BTC')
        // console.log (new Date (), orderbook['asks'][0], orderbook['bids'][0])
 


//  const tick = async() => {
//     let{ asset, base, spread, allocation} = config;
//     let market = `${asset}/${base}`;

//     let orders = [await bitx.fetchOpenOrders];
//    orders.forEach(async order => 
//      {await ccxt.cancelOrder(orders.length - 1)
//    }); 

//     const results = await Promise.all([
        
//         axios.get('https://api.coingecko.com/api/v3/simple/price?ids=Cardano&vs_currencies=USD'),
//         axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=USD')
//     ]);
//         const marketPrice = results[0].data.cardano.usd / results[1].data.tether.usd;
//         //const marketPrice = results[0].data.cardano.usd;

//         const sellPrice = marketPrice * (1 + spread);
//         const buyPrice = marketPrice * (1 - spread);
//         const balances = await bitx.fetchOpenOrders;
//         const assetBalance = balances.free[config.asset];
//         const baseBalance = balances.free[config.base];
//         const sellVolume = assetBalance * allocation;
//         const buyVolume = (baseBalance * allocation) / marketPrice;

//         await exchangeClass.createLimitSellOrder (market, sellVolume, sellPrice);
//         await exchangeClass.createLimitBuyOrder(market, buyVolume, buyPrice);

//         console.log(`
//         New tick for ${market}...
//         Created limit sell order for ${sellVolume} @ ${sellPrice}
//         Created limit buy order for ${buyVolume} @ ${buyPrice}`
//         );
//  };
 
//  const run = () => {
//     const exchangeId = 'bittrex',
//      exchangeClass = ccxt[exchangeId],
    
//      bitx = new exchangeClass({
         
//         apiKey: '39ae2b65c8e0421782bb4795fa0a9b6a',
//         secret: '23f9e5c487b0469c91fe7f4271af1595',
//         enableRateLimit: true
        
//     })
//     const config = {
//         asset: 'ADA-USD',
//         base: 'USD-USDT',
//         allocation: 0.1,
//         spread: 0.2,
//         tickInterval: 2000
//        }
    
//      tick(config, exchangeClass);
//      setInterval(tick, config.tickInterval, config, exchangeClass);
//  };
//  run();

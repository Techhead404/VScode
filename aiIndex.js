//import brain from './src';
const brain = import('../brain.js/src')
const ccxt = import('ccxt');


(async function(){
const exchange = new ccxt.bittrex({
    enableRateLimit: true
});
let since = exchange.milliseconds () - 10000000;

const priceData = await exchange.fetchOHLCV('ADA/USD','5m',since,1500);

var timeArray = []; // better to define using [] instead of new Array();
var openArray = [];
var closeArray = [];
var highArray = [];
var lowArray = [];
var volumeArray = [];

for (var i = 0; i < priceData.length; i++) {
var split = priceData[i].splice(",");  // just split once
timeArray.push(split[0]); // before the dot
openArray.push(split[1]);
closeArray.push(split[2]);
highArray.push(split[3]);
lowArray.push(split[4]);
volumeArray.push(split[5]); // after the dot

const net = new brain.NeuralNetwork

const trainData = [
    {input: [openArray[0],closeArray[0]], output: [openArray[1]]},
    {input: [openArray[1],closeArray[1]], output: [openArray[2]]},
    {input: [openArray[2],closeArray[2]], output: [openArray[3]]},
    {input: [openArray[3],closeArray[3]], output: [openArray[4]]},
    {input: [openArray[4],closeArray[4]], output: [openArray[5]]},
    {input: [openArray[5],closeArray[5]], output: [openArray[6]]},
];
net.train(trainData);

console.log(net.run([await exchange.fetchTicker('ADA/USD')]))

}
});
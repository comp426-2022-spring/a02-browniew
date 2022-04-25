import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args['number']

const number = args.number || 1;
if(number == 1) {
    console.log(coinFlip());
}
else {
    const flips =  coinFlips(number);
    console.log(flips);
    console.log(countFlips(flips));
}

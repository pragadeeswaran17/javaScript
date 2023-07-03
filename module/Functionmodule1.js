// modules
import earnMoney from "./Functionmodule2.js";
import { growMoney as grow, giveMoney as give } from "./Functionmodule2.js";

// or

import * as md from "./Functionmodule2.js";


console.log(earnMoney());
console.log(grow());
console.log(give());

//or

console.log(md.default());
console.log(md.growMoney());
console.log(md.giveMoney());

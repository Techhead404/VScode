const timer = require('os');

function systemName(sysName) {
   sysName = timer.platform();
   return sysName;
}
function Uptime() {
  let timeUp = timer.uptime();
  let minTime = Math.floor(timeUp / 60);
  return minTime;
}

if(Uptime() <= 1000.0){
   console.log("The " + systemName() + " has been up for " + Uptime() + " minutes and a system restart is needed to clear the system cache.");
}
else{
   console.log(Uptime() + " Is a ok up time for a " + systemName() + " machine.");
}

console.log(systemName());
console.log(Uptime());
/* These functions progress the lesson through it's four stages */

let statusVar = 'charge';
let battery = document.getElementById('battery');
let bulb = document.getElementById('bulb');
let charge = document.getElementById('charge');
let discharge = document.getElementById('discharge');

battery.onclick = function() {
  if (statusVar === 'charge') {
    document.documentElement.style.cssText = `
      --animationBottom: chargeFlowBottom;
      --animationTop: chargeFlowTop;
      --delay: 0s;
      --lightDelay: 0s;
      `;
    chargeText.style.display = 'none';
    chargingText.style.display = 'grid';
    wires1.style.display = 'grid';
    statusVar = 'charged';
  }
  else if (statusVar === 'charged'){
    document.documentElement.style.cssText = `
      --animationBottom: none;
      --animationTop: none;
      `;
    charge.style.display = 'none';
    discharge.style.display = 'grid';
    wires2.style.display = 'none';
    chargingText.style.display = 'none';
    dischargeText.style.display = 'grid';
    statusVar = 'discharge';
  }
}

bulb.onclick = function() {
    if (statusVar === 'discharge') {
    document.documentElement.style.cssText = `
      --animationBottom: dischargeFlowBottom;
      --animationTop: dischargeFlowTop;
      --animationLight: lightBulb;
      --topDelay: 1s;
      --lightDelay: 1.5s;
      `;
    dischargeText.style.display = 'none';
    dischargingText.style.display = 'grid';
    wires2.style.display = 'grid';
    statusVar = 'discharged';
  }
  else if (statusVar === 'discharged') {
    document.documentElement.style.cssText = `
      --animationBottom: none;
      --animationTop: none;
      --animationLight: none;
      `;
    charge.style.display = 'grid';
    discharge.style.display = 'none';
    wires1.style.display = 'none';
    dischargingText.style.display = 'none';
    chargeText.style.display = 'grid';
    statusVar = 'charge'
  }
}
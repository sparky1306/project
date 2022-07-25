let statusVar = 'charge';
let charge = document.getElementById('charge');
let discharge = document.getElementById('discharge');

charge.onclick = function() {
  if (statusVar === 'charge') {
    document.documentElement.style.cssText = `
      --animationBottom: chargeFlowBottom;
      --animationTop: chargeFlowTop;
      --delay: 0s;
      --lightDelay: 0s;
      `;
    statusVar = 'charged';
  }
  else if (statusVar === 'charged'){
    document.documentElement.style.cssText = `
      --animationBottom: none;
      --animationTop: none;
      `;
    charge.style.display = 'none';
    discharge.style.display = 'block';
    statusVar = 'discharge';
  }
}

discharge.onclick = function() {
    if (statusVar === 'discharge') {
    document.documentElement.style.cssText = `
      --animationBottom: dischargeFlowBottom;
      --animationTop: dischargeFlowTop;
      --animationLight: lightBulb;
      --topDelay: 1s;
      --lightDelay: 1.5s;
      `;
    statusVar = 'discharged';
  }
  else if (statusVar === 'discharged') {
    document.documentElement.style.cssText = `
      --animationBottom: none;
      --animationTop: none;
      --animationLight: none;
      `;
    charge.style.display = 'block';
    discharge.style.display = 'none';
    statusVar = 'charge'
  }
}
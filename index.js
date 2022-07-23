// var boxOne = document.getElementsByClassName('box')[0];

// document.getElementsByClassName('toggleButton')[0].onclick = function() {
//   if(this.innerHTML === 'Play') 
//   { 
//     this.innerHTML = 'Pause';
//     boxOne.classList.add('horizTranslate');
//   } else {
//     this.innerHTML = 'Play';
//     var computedStyle = window.getComputedStyle(boxOne),
//         marginLeft = computedStyle.getPropertyValue('margin-left');
//     boxOne.style.marginLeft = marginLeft;
//     boxOne.classList.remove('horizTranslate');    
//   }  
// }

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
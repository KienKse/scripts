javascript: t=0;
/**
  Simple script to keep clicking on twitch's box bonuses
 */
var loop = setInterval(()=> {
  var bonus = document.querySelector(".tw-button__text");
  if(bonus != null) {
    bonus.click();
  }
}, 10000);
//Stop setInterval
//clearInterval(loop);
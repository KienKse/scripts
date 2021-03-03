javascript: t = 0;
var loop = setInterval(() => {
    var now = new Date(); // today
    // var past = new Date('2021-02-02 ' + $x("//div[@class='message-2qnXI6 cozyMessage-3V1Y8y groupStart-23k01U wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica']")[$x("//div[@class='message-2qnXI6 cozyMessage-3V1Y8y groupStart-23k01U wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica']").length-1].children[0].children[1].children[1].textContent.split("Hoje às ")[1] +':00') // last msg
    var diff = Math.abs(now.getTime() - past.getTime());
    var hours = (diff / (1000 * 60 * 60)).toFixed(2);
    if(hours >= 2) {
      // sent Msgs
      var e = new KeyboardEvent("keydown", {
        bubbles : true,
        cancelable : true,
        char : undefined,
        key : 'Enter',
        shiftKey : false,
        keyCode : 13
      });
      $x("//div[@class='markup-2BOw-j slateTextArea-1Mkdgw fontSize20Padding-18f-TO']")[0].dispatchEvent(e)
    } else {
      console.log("Nope: " + hours);
    }
  }, 10 * 1000 * 60);

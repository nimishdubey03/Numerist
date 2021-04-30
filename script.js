var display = document.getElementById('inputLabel');

function pushBtn(obj) {
  var pushed = obj.innerHTML;
  if (pushed == '=') {
    display.innerHTML = eval(display.innerHTML);
  } else if (pushed == 'AC') {
    display.innerHTML = '0';
  } else if (pushed == 'C') {
    display.innerHTML = display.innerHTML.substring(
      0,
      display.innerHTML.length - 1
    );
  } else if (display.innerHTML.length > 21) {
    return;
  } else {
    if (display.innerHTML == '0') {
      display.innerHTML = pushed;
    } else {
      display.innerHTML += pushed;
    }
  }
}

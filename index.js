function myMove(){
  var element = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame(){
    if(pos == 1000){
      clearInterval(id);
    }else {
      pos++;
      element.style.left = pos + 'px';
    }
  }
}

function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}

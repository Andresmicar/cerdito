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

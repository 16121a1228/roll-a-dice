var target=30;
var p1=0;
var p2=0;
var count=1;
function play()
{
  if(count%2==1)
    {
      var player1=(Math.floor(Math.random()*10)%6)+1;
     document.getElementById("score").value=player1;
      p1 +=player1;
      document.getElementById('in1').value=p1;

    } 

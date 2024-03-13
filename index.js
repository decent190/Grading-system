
function check() {
  var song = new Audio("Audio/free-crowd-cheering-sounds-02-strong-cheering-rhythmic-cheering-116190.mp3")
  var song2 = new Audio("Audio/gospel-choir-heavenly-transition-3-186880.mp3")
  var song3 = new Audio("Audio/sunflower-street-drumloop-85bpm-163900.mp3")
  var song4 = new Audio("Audio/Black-Sherif-Soja-(TrendyBeatz.com).mp3")
  var song5 = new Audio("Audio/DJ_Cora_-_Metro_Beat_Jago.mp3")
     score.value
          if (score.value == ""){
result.innerHTML ="Input Your Score"
      }
     else if (score.value <= 39 && score.value >=0 ) {
             result.innerHTML = "fail😥😭"
             result.style.color= "red"
             song2.play()
          }
            else if(score.value >=40 && score.value < 45 ) {
             result.innerHTML = "pass🙄🙄"
             result.style.color= "black"  
             song.play()
          }
           else if (score.value >=45 && score.value < 50 ) {
             result.innerHTML = "average😚😙"
             result.style.color="yellow"
             song3.play()
          }
           else if (score.value >=50 && score.value < 60 ) {
             result.innerHTML = "credit🤗😜"
             result.style.color= "blue"
             song5.play()
          }
           else if (score.value >=60 && score.value < 70 ) {
             result.innerHTML = "good😎😬"
             result.style.color= "gold"
             song4.play()
          }
           else if (score.value >=70 && score.value <=100 ) {
             result.innerHTML = "excellent🥵🥵"
             result.style.color= "green"
             song.play()
          }
          else{
            result.innerHTML="invalid📌"
            result.style.color="brown"
          }

          score.value = " "
        }
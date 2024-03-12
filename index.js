

function check() {
     score.value
          if (score.value <= 39 && score.value >=0 ) {
             result.innerHTML = "fail"
             result.style.color= "red😥😭"
          }
            else if(score.value >=40 && score.value < 45 ) {
             result.innerHTML = "pass"
             result.style.color= "black🙄🙄"
          }
           else if (score.value >=45 && score.value < 50 ) {
             result.innerHTML = "average😚😙"
             result.style.color="yellow"
          }
           else if (score.value >=50 && score.value < 60 ) {
             result.innerHTML = "credit🤗😜"
             result.style.color= "blue"
          }
           else if (score.value >=60 && score.value < 70 ) {
             result.innerHTML = "good😎😬"
             result.style.color= "gold"
          }
           else if (score.value >=70 && score.value <=100 ) {
             result.innerHTML = "excellent🥵🥵"
             result.style.color= "green"
          }
          else{
            result.innerHTML="invalid"
            result.style.color="brown"
          }

          score.value = " "
        }
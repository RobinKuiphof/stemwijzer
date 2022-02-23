

function updatequestion(button){
    document.getElementById("pro").classList.remove("active")
    document.getElementById("none").classList.remove("active")
    document.getElementById("contra").classList.remove("active")
    
    if(count == 30){
        document.getElementById("form").classList.add("displaynone")
        document.getElementById("gewicht").classList.remove("displaynone")        
    }else{
        document.getElementById("gewicht").classList.add("displaynone")
        document.getElementById("form").classList.remove("displaynone")
        if(answers[count+1] != undefined){
            document.getElementById(answers[count+1]).className = "active button inactive"
        }
        title.innerHTML = subjects[count].title;
        description.innerHTML = subjects[count].statement;
        if(button != 0){
            answers[count] = button.id;
        }
        count++;
    }
  }

  function calcresult(){
    document.getElementById("gewicht").classList.add("displaynone");
    document.getElementById("resultmain").classList.remove("displaynone");

    for(var i =1; i<30; i++){
      for(var x =0; x< (parties.length-1); x++){
        if(answers[i] == subjects[i].parties[x]?.position){
          
          if(results[x] == undefined){
            results[x] = { name: parties[x], score: 0};
          }

          if(document.getElementById(i).checked == true){
            results[x].score = results[x].score + 2;
          }else{
            results[x].score = results[x].score + 1;
          }
        }else{
          if(results[x] == undefined){
            results[x] = { name: parties[x], score: 0};
          }
        }
      }
    }
  }

  function result(){
    var minzetels = 5;
    var result = document.getElementById("result");
    document.getElementById("partijen").classList.add("displaynone");
    document.getElementById("btnsubmit").classList.add("displaynone");

    results.sort((a, b) => {
      return  b.score - a.score;
    });
    
    for(i=0; i<results?.length; i++){
      if(document.getElementById("partijen").value == 'grote'){
        if(results[i]?.name?.size >= minzetels){
          var tr = document.createElement("tr");
          tr.innerHTML = "<td>" +  results[i]?.name?.name + " " + Math.floor(results[i]?.score/30*100) + "% </td>";
          result.appendChild(tr);
        }
      }else if(document.getElementById("partijen").value == 'seculier'){
        console.log(results[i]?.name?.secular);
        if(results[i]?.name?.secular){
          var tr = document.createElement("tr");
          tr.innerHTML = "<td>" +  results[i]?.name?.name + " " + Math.floor(results[i]?.score/30*100) + "% </td>";
          result.appendChild(tr);
        }
      }else{
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" +  results[i]?.name?.name + " " + Math.floor(results[i]?.score/30*100) + "% </td>";
        result.appendChild(tr);
      }
    }
  }

  var results = []
  var answers = []
  let title = document.getElementById("title");
  let description = document.getElementById("beschrijving");
  let count = 0;
  let back = document.getElementById("back")

  updatequestion(0)

  back.onclick = function(){ 
    if(count == 0){
        count == count
    }else if(count < 2){
      count = 0
    }else{
      count = count-2
    }
    updatequestion(0)
  }

  
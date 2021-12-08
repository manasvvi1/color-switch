var InstructionsDiv = document.getElementById("HowToPlay");

function showInstructions(){
  //InstructionsDiv.style.visibility = "visible";
  if(InstructionsDiv.style.visibility == "visible"){
    InstructionsDiv.style.visibility = "hidden";
  }
  else{
    InstructionsDiv.style.visibility = "visible";
  }
}

function handleWarrior(event) {
  event.preventDefault();

  let shaqWarrior = document.querySelector("div#shaqWarrior");
  let height = document.getElementById("height").value;
  const operator = document.querySelector("input[name='operator']:checked").value;

  shaqWarrior.setAttribute("class", "hidden");

  if(height === 'shaq' && operator === 'warrior'){
    shaqWarrior.removeAttribute('class','hidden');
  } else if(){
    
  }
  // the code to get and process form values will go here!
}

window.addEventListener("load", function() {
  const form = document.getElementById("character");
  form.addEventListener("submit", handleWarrior);
});
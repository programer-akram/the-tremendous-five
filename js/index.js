
let nodelist = 0;
document.getElementById('btn-messi').addEventListener('click',function(){

    const button = document.getElementById('btn-messi');
    button.setAttribute('disabled', true);
    nodelist++;
    if (nodelist > 5) {
        alert('Can not add more than Five!!');
    return;
        }
    const selecting = document.getElementById('selected');
    const li1 = document.createElement('li');
    li1.innerText = document.getElementById('messi').innerText;
    selecting.appendChild(li1);
  });
   

document.getElementById('btn-neymar').addEventListener('click',function(){
    const button = document.getElementById('btn-neymar');
    button.setAttribute('disabled', true);

    nodelist++;
    if (nodelist > 5) {
        alert('Can not add more than Five!!');

        return;

    }
   const selecting = document.getElementById('selected');
   const li1 = document.createElement('li');
    li1.innerText = document.getElementById('neymar').innerText;
    selecting.appendChild(li1);
    });
   
document.getElementById('btn-ronaldo').addEventListener('click',function(){
    const button = document.getElementById('btn-ronaldo');
    button.setAttribute('disabled', true);

    nodelist++;
    if (nodelist > 5) {
        alert('Can not add more than Five!!');

        return;
}
    const selecting = document.getElementById('selected');
    const li1 = document.createElement('li');
    li1.innerText = document.getElementById('ronaldo').innerText;
    selecting.appendChild(li1);
 });


   
document.getElementById('btn-meradona').addEventListener('click',function(){
    const button = document.getElementById('btn-meradona');
    button.setAttribute('disabled', true);

    nodelist++;
    if (nodelist > 5) {
        alert('Can not add more than Five!!');

        return;
 }
    const selecting = document.getElementById('selected');
    const li1 = document.createElement('li');
    li1.innerText = document.getElementById('meradona').innerText;
    selecting.appendChild(li1);
   });

document.getElementById('btn-kaka').addEventListener('click',function(){
    const button = document.getElementById('btn-kaka');
    button.setAttribute('disabled', true);

    nodelist++;
    if (nodelist > 5) {
        alert('Can not add more than Five!!');

        return;
    }
    
    const selecting = document.getElementById('selected');
    const li1 = document.createElement('li');
    li1.innerText = document.getElementById('kaka').innerText;
    selecting.appendChild(li1);
 });
   
document.getElementById('btn-pele').addEventListener('click',function(){

    const button = document.getElementById('btn-pele');
    button.setAttribute('disabled', true);

    nodelist++;
    if (nodelist > 5) {
        alert('Can not add more than Five!!');

        return;
 }

   const selecting = document.getElementById('selected');
   const li1 = document.createElement('li');
    li1.innerText = document.getElementById('pele').innerText;
    selecting.appendChild(li1);
});


//  convert string to float
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}


// set value with function
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}







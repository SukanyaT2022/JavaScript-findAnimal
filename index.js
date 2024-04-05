animalArray = [
  // bluebird
  'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D',
  // elephant
  'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D',
  // giraffe
  'https://plus.unsplash.com/premium_photo-1661813434310-98cca4c9135e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmFmZmV8ZW58MHx8MHx8fDA%3D',
  // Rabbit
  'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D',
  // snake
  'https://images.unsplash.com/photo-1585095595205-e68428a9e205?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuYWtlfGVufDB8fDB8fHww',
  // fish
  'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D',
];

imageName = ['bird', 'elephant', 'giraffe', 'rabbit', 'snake', 'fish'];
var i = 0

    // search by name of animal

    // for(i=0;i<animalArray.length; i++ ){
    //     var 
    // }

    


function load(){
    document.getElementById('targetIMG').src = animalArray[i]
}
function nextBtn(){
    i = i + 1;
    i = i % animalArray.length;
    load()
}
function prevBtn(){
    if (i===0){
        i = animalArray.length-1;
        load()
    }
    i = i - 1
}

// search from name
function searchAnimal(){
    var text =   document.getElementById('searchInputBox').value
 
for(j=0;j<imageName.length;j++){

if(imageName[j].toUpperCase()== text.toUpperCase()){
   console.log(j)
i=j
load()
break
}
}
   }

//    find by click button

for (m=0;m<animalArray.length;m++){
    let animalButton = document.createElement('input')
    animalButton.setAttribute('type', 'button')
    animalButton.setAttribute('value', imageName[m])
    document.getElementById('showAllButtons').appendChild(animalButton)
    animalButton.setAttribute('onclick', 'showIMGFromButton("'+imageName[m]+'")')
}
function showIMGFromButton(text){
    //text from line 66
for(z=0;z<animalArray.length;z++){
    if(imageName[z]==text){
        i=z
        load()
        break
    }
}
}






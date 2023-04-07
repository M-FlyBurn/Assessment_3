const colorButton = document.querySelector('#color')
const placeButton = document.querySelector('#place')
const ritualButton = document.querySelector('#ritual')
//===============================FAVORITE COLOR==============================================
const favoriteColor =(evt)=>{
    colorButton.style.backgroundColor ='purple'
    colorButton.style.color= 'white'
}

colorButton.addEventListener('mouseover', favoriteColor)

const changeBack = (evt)=>{
    colorButton.style.backgroundColor = '#EFEA5A'
    colorButton.style.color= 'black'
    }

colorButton.addEventListener('mouseout', changeBack)

//=================================FAVORITE PLACE============================================

const favoritePlace = (evt)=>{
   alert ('Trinidad and Tobago')
}

placeButton.addEventListener('click', favoritePlace)

//===================================FAVORITE RITUAL==========================================

const favoriteRitual =(evt)=>{
    alert('Cooking and Sewing')
}

ritualButton.addEventListener('click', favoriteRitual)
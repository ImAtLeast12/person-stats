/*function changeHeading(ev){
    ev.preventDefault()
    const f = ev.target
    
    const heading = document.querySelector('hi')
    heading.textContent='Clicked!'
}
const personForm = document.querySelector('#peson-form')
personForm.addEventListener('submit',changeHeading)*/


function changeHeading(ev){
    ev.preventDefault()
    //const heading = document.querySelector('h1') 
    
    const input = document.querySelector('input') //find the input box
    const input2 = document.querySelector('#visitorNumber')
    const spam = document.querySelector('#Spam-message')
    spam.textContent = 'Welcome ' + input.value + ' you are our ' +input2.value + ordinalIndicator(input2.value) +' visitor please send in $100.00, to claim a fabulous prize.'
}
//addEventListener('click',changeHeading)
personform.addEventListener("submit",changeHeading)


//So I am going to see if the last numbers where 1st, 2nd, 3rd otherwise it will return th
function ordinalIndicator(visitorNumber){
    var findOrdinal = visitorNumber.slice(-1)
    if(findOrdinal == 1)
        return "st"
    else if (findOrdinal == 2)
        return "nd"
    else if (findOrdinal == 3)
        return "rd"
    else 
        return "th"
}
//so what I want to do is see what is in the text box or INPUT
//then make that be what gets changed
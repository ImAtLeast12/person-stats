
function changeHeading(ev){
    ev.preventDefault()
    //const heading = document.querySelector('h1') 
    const input = document.querySelector('input') //find the input box
    inputText = input.value.toLowerCase
    const input2 = document.querySelector('#visitorNumber')
    const spam = document.querySelector('#Spam-message')
    spam.textContent = 'Welcome ' + input.value + ' you are our ' +input2.value + ordinalIndicator(input2.value) +' visitor please send in $100.00, to claim a fabulous prize.'
    
    try{
        spam.style.color = input.value;
    }
    catch(err){
    }
}
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

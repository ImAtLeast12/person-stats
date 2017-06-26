console.log('It worked!')

function changeHeading(ev){
    debugger
    ev.target.textContent = 'Clickity click'
}

const btn = document.querySelector('button')
btn.addEventListener('click',changeHeading)

const p = document.querySelector('#instructions')
p.addEventListener ('click',changeHeading)
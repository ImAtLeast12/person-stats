function handleSubmit(ev) {
  ev.preventDefault()

  const list = renderList(ev)

  // div.innerHTML = '<p>' + name + ', age ' + age + '</p>'
  // div.innerHTML = `<p style="background-color: ${color}">${name}, age ${age}</p>`
}

function rederItem(item,text){
    const itemD = document.createElement('li')
    itemD.textContent = `${text}: ${item}`
    return itemD
}

function renderColor(color,text){
    const colorD = document.createElement('li')
    colorD.style.backgroundColor = color
    colorD.style.width = '6rem'
    colorD.style.height = '3rem'
    return colorD
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)


function renderList(ev){
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.favoriteColor.value

    const div = document.querySelector('#stats')
    const list = document.createElement('ul')

    div.appendChild(list)

    list.appendChild(rederItem(name,"Name"))
    list.appendChild(rederItem(age,"Age"))
    list.appendChild(renderColor(color,"Favorite color"))

    return list
}

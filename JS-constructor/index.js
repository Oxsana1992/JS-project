const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'Text from JS'},
    {type: 'columns', value: [
        '111111111', 
        '222222222',
        '333333333'
    ]},
    {type: 'image', value: './assets/font.jpg'}
]

const $site = document.querySelector('#site')

model.forEach(block => {
   // console.log(block)
   let html = ''

   if (block.type === 'title') {
    html = title(block)
   } else if (block.type === 'text') {
    html = text(block)
   } else if (block.type === 'columns') {
    html = columns(block)
   } else if (block.type === 'image') {
    html = image(block)
   }

   $site.insertAdjacentHTML('beforeend', html)

})

function title(block) {
    return `
    <div class="row">
     <div class="col-sm">
      <h1>${block.value}</h1>
     </div>
    </div>
    `
}
function text(block) {
    return `
    <div class="row">
     <div class="col-sm">
      <p>${block.value}</p>
     </div>
    </div>
    `
}

function columns(block) {
    // let html = ''
    // block.value.forEach(item => {
    //     html += `
    //    <div class="col-sm">
    //    ${item}
    //    </div>
    //     `
    // }) 
    // return `
    // <div class="row">
    //  ${html}
    // </div>
    // `
    ////or
    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
    <div class="row">
     ${html.join('')}
    </div>
    `
}
function image(block) {
    return `
    <div class="row">
    <img src="${block.value}">
    </div>
    `
}


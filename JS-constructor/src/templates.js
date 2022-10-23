import {row, col, css} from './utils'

function title(block) {
    // return `
    // <div class="row">
    //  <div class="col-sm">
    //   <h1>${block.value}</h1>
    //  </div>
    // </div>
    // `
    // return row(col(`<h1>${block.value}</h1>`))
    // const tag = block.options.tag ?? 'h1'
    // const styles = block.options.styles
    // return row(col(`<${tag}>${block.value}</${tag}>`), styles)
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}
function text(block) {
    // return `
    // <div class="row">
    //  <div class="col-sm">
    //   <p>${block.value}</p>
    //  </div>
    // </div>
    // `
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
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

    // const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    // const html = block.value.map(item => col(item))
    // const html = block.value.map(col)
    // // return `
    // // <div class="row">
    // //  ${html.join('')}
    // // </div>
    // // `
    // return row(html.join(''))

    const html = block.value.map(col).join('')
    return row(html, css(block.options.styles))
}
function image(block) {
    // return `
    // <div class="row">
    // <img src="${block.value}">
    // </div>
    // `
    return row(`<img src="${block.value}">`, css(block.options.styles))
}
export const templates = {
    title: title,
    text: text,
    columns: columns,
    image: image
}
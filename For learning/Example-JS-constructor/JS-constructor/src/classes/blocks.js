import {row, col, css} from '../utils'
// class Block {
//     constructor(type, value, options) {
//         this.type = type
//         this.value = value 
//         this.options = options
//     }
//     toHTML() {
//         throw new Error('Реализация метода toHTML не произошла')
//     }
// }
class Block {
    constructor(value, options) {
        this.value = value 
        this.options = options
    }
    toHTML() {
        throw new Error('Реализация метода toHTML не произошла')
    }
}
// export class TitleBlock extends Block {
//     constructor(value, options) {
//         super('title', value, options)
//     }
export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))  
    }
}
// export class ImageBlock extends Block {
//     constructor(value, options) {
//         super('image', value, options)
//     }
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const {imageStyles: iS, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(iS)}" />`, css(styles))
    }
}
// export class ColumnsBlock extends Block {
//     constructor(value, options) {
//         super('columns', value, options)
//     }
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
    }
}
// export class TextBlock extends Block {
//     constructor(value, options) {
//         super('text', value, options)
//     }
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}
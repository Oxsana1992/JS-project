import image from './assets/font2.jpg'
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

const textcont = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazNvVEJtMHNhUWp6cXd1aDBKMnk3RGZhbW5Td3xBQ3Jtc0tsYWExUWtYN18ydmt6UnpjMWJueG5IbWlDVXktcVlja190UTdKM3E4QUFYangzRmEyRUVrR3pIRE02cS15TVdUVUNJVG9XSUEzZm4wOGdGQmlLX1JRQVF2R3E5Q3hEeUk2VDh1WXB1SjItRjM5aEJfSQ&q=https%3A%2F%2Ft.me%2Fjs_by_vladilen%2F329&v=0ViiJ8qTCFM" target="_blank">link</a> Quos dolores voluptates fugit consequuntur delectus iusto veniam iste expedita molestias. Maiores quia repellendus quod tenetur ex eaque dolor nam soluta debitis!`  

export const model = [
    new TitleBlock('Конструктор сайтов на JS!', {
        tag: 'h2',
        styles: {background: 'linear-gradient(to right, #DE3163, #40E0D0)', color: '#fff', 'text-align': 'center', padding: '1.5rem'}}
        ), 

        new ImageBlock(image, {
        styles: {
            display: 'flex',
            'justify-content': 'center',
            padding: '2rem 0'
        },
        imageStyles: {
            width: '500px',
            heigth: 'auto'
        },
        alt: 'Это картинка'
    }),

    new ColumnsBlock([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aut molestiae velit doloremque ea ipsam.', 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aut molestiae velit doloremque ea ipsam.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #DE3163, #40E0D0)',
            color: '#fff',
            padding: '2rem 0'
        }}),
        
    new TextBlock(textcont, {
        styles: {
            background: 'linear-gradient(to left, #DE3163, #40E0D0)',
            'font-weight': 'bold',
            padding: '1rem'
        }}),
]
const API_URL = 'https://animechan.vercel.app/api/quotes'

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const getData = async() => {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    data.forEach(movie => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card')
    
        const h1 = document.createElement('h1')
        h1.textContent = movie.anime;
        h1.setAttribute('class', 'title')
        
        const blockQuote = document.createElement('div');
        blockQuote.setAttribute('class', 'blockquote')
        const quote = document.createElement('div')
        description = movie.quote;
        quote.textContent = `${description}`
        quote.setAttribute('class', 'quote')

        const credit = document.createElement('div');
        credit.textContent = movie.character;
        credit.setAttribute('class', 'credit');
        
        blockQuote.appendChild(quote)
        blockQuote.appendChild(credit)

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(blockQuote);
    })

}
getData();
 
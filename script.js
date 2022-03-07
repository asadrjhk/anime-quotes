const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = './images/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const getData = async() => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const data = await response.json()

    data.forEach(movie => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card')
    
        const h1 = document.createElement('h1')
        h1.textContent = movie.title
    
        const p = document.createElement('p')
        description = movie.description.substring(0, 300)
        p.textContent = `${description}...`
    
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p);
    })

}
getData();
 
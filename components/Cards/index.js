// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function createCard(name, imgURL, title) {
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = title

    const author = document.createElement('div')
    author.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const img = document.createElement('img')
    img.src = imgURL

    const authName = document.createElement('span')
    authName.textContent = `By ${name}`

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authName)

    return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')

		.then((response) => {
            console.log('Network request was successful')   
            let bootstrap = response.data.articles.bootstrap
            let javascript = response.data.articles.javascript
            let jquery = response.data.articles.jquery
            let technology = response.data.articles.technology
            let node = response.data.articles.node

			bootstrap.forEach( (article) => {
                let name = article.authorName
                let imgURL = article.authorPhoto
                let title = article.headline
                let newCard = createCard(name, imgURL, title)
				cardsContainer.appendChild(newCard)
            })
            javascript.forEach( (article) => {
                let name = article.authorName
                let imgURL = article.authorPhoto
                let title = article.headline
                let newCard = createCard(name, imgURL, title)
				cardsContainer.appendChild(newCard)
            })
            jquery.forEach( (article) => {
                let name = article.authorName
                let imgURL = article.authorPhoto
                let title = article.headline
                let newCard = createCard(name, imgURL, title)
				cardsContainer.appendChild(newCard)
            })
            technology.forEach( (article) => {
                let name = article.authorName
                let imgURL = article.authorPhoto
                let title = article.headline
                let newCard = createCard(name, imgURL, title)
				cardsContainer.appendChild(newCard)
            })
            node.forEach( (article) => {
                let name = article.authorName
                let imgURL = article.authorPhoto
                let title = article.headline
                let newCard = createCard(name, imgURL, title)
				cardsContainer.appendChild(newCard)
            })
            
		})
		.catch((error) => {
			console.log(error)
		})
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabContainer = document.querySelector('.topics')

function createTab(title) {
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = title

    return tab
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')

		.then((response) => {
		//	console.log('Network request was successful')
			let topics = response.data.topics
        //    console.log(topics)
            
			topics.forEach( (topic) => {
				let title = createTab(topic)
				tabContainer.appendChild(title)
			})
		})
		.catch((error) => {
			console.log(error)
		})

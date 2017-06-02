// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Step 1: If You Get Wet, Run Away!!!!!', 		// this is the TITLE place in the class
				'https://google.com',	// this is the LINK place in the class
				'An Author',			// this is the AUTHOR place in the class
				'http://s3-production.bobvila.com/articles/wp-content/uploads/2013/07/shower-head.jpg',	// this is the IMAGE place in the class
				'Most mermaids, once wet, transform. You should only do this once people know about you.' // this is the BODY place in the class
				),

			new Post(
				'know about the ocean',
				'https://vuejs.org',
				'Sammie Author',
				'img-200.jpg', // this is a local image in the same folder as the js script
				'If your friends raise the topic of the ocean, show off all you know. But if they bring up mermaids, change the subject right away! '
				),

			new Post(
				'This Post: Crazy Fredrick',
				'https://google.com',
				'Bob Author',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeTqNFk6uAexkp_Rx6pcGLjwpnQ3gBuVWOyiIE6cNzVeSQ6LnPQ',
				'Crazy Fredrick bought many very exquisite opal jewels.'
				),

			new Post(
				'sing or hum all the time.',
				'https://vuejs.org',
				'Jane Author',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPEQcb2ln8BH6BSQVUukAi_U9XaK9zQh3lnfPpg64A0UKWVexww',
				'whenever anyones near be sure to hum some beachy tunes'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});




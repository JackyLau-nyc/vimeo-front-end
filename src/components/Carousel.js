import React, {Component} from 'react';
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

import './Carousel.css';

export default class Wheel extends Component {
	render() {
		return (
			<Carousel className="carouselContainer">
				<Carousel.Item>
					<div className="position carouselContainer">
		        		<div className="bg1"></div>
		        	</div>
		        	<Row>
			        	<Col lg={12} className="overlay">
				        	<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselImage">
				            	<Image height={300} src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="Into the Spiderverse" />
				        	</Col>
				        	<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselCaption">
					        	<div>
					            	<h5>Spiderman: Into the Spider-verse</h5>
					            	<p>Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.</p>
					            	<Button target="_blank" href="https://www.amazon.com/Spider-Man-Into-Spider-Verse-Liev-Schreiber/dp/B07L9YXWSW/ref=sr_1_1?keywords=into+the+spiderverse&qid=1572232151&sr=8-1" variant="warning" className="buttonProp">Buy Now</Button>
					            	<Button target="_blank" href="https://vimeo.com/356724117" variant="outline-warning" className="buttonProp">Watch Trailer</Button>
					            </div>
				        	</Col>
			        	</Col>
		        	</Row>
	        	</Carousel.Item>
	        	<Carousel.Item>
					<div className="position carouselContainer">
		        		<div className="bg2"></div>
		        	</div>
			        <Row>
			        	<Col lg={12} className="overlay">
				        	<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselImage">
				            	<Image height={300} src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg" alt="Interstellar" />
				        	</Col>
				        	<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselCaption">
					        	<div>
					            	<h5>Interstellar</h5>
					            	<p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>
					            	<Button target="_blank" href="https://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS/ref=sr_1_1?keywords=interstellar&qid=1572245618&sr=8-1" variant="light" className="buttonProp">Buy Now</Button>
					            	<Button target="_blank" href="https://vimeo.com/108990817" variant="outline-light" className="buttonProp">Watch Trailer</Button>
					            </div>
				            </Col>
			            </Col>
		        	</Row>
	        	</Carousel.Item>
	        	<Carousel.Item>
					<div className="position carouselContainer">
		        		<div className="bg3"></div>
		        	</div>
		        	<Row>
			        	<Col lg={12} className="overlay">
				        	<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselImage">
				            	<Image height={300} src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SY1000_SX675_AL_.jpg" alt="Your Name" />
				        	</Col>
							<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselCaption">
					        	<div>
					            	<h5>Your Name</h5>
					            	<p>Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?</p>
					            	<Button target="_blank" href="https://www.amazon.com/Your-Name-Makoto-Shinkai/dp/B078SNJK8G/ref=sr_1_1?keywords=your+name&qid=1572245667&sr=8-1" variant="primary" className="buttonProp">Buy Now</Button>
					            	<Button target="_blank" href="https://vimeo.com/328762415" variant="outline-primary" className="buttonProp">Watch Trailer</Button>
					        	</div>
				        	</Col>
			        	</Col>
	        		</Row>
	        	</Carousel.Item>
	        	<Carousel.Item>
					<div className="position carouselContainer">
		        		<div className="bg4"></div>
		        	</div>
		        	<Row>
			        	<Col lg={12} className="overlay">
				        	<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselImage">
				            	<Image height={300} src="https://m.media-amazon.com/images/M/MV5BNjFlNTliMWQtZGJlOC00YTIxLWEzODEtZjM4NzgzZDhkMmFjL2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SY1000_CR0,0,707,1000_AL_.jpg" alt="Spirited Away" />
				        	</Col>
							<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselCaption">
					        	<div>
					            	<h5>Spirited Away</h5>
					            	<p>During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.</p>
					            	<Button target="_blank" href="https://www.amazon.com/Spirited-Away-Bluray-Combo-Blu-ray/dp/B074121MFR/ref=sr_1_2?keywords=spirited+away&qid=1572246436&sr=8-2" variant="dark" className="buttonProp">Buy Now</Button>
					            	<Button target="_blank" href="https://vimeo.com/305752404" variant="outline-dark" className="buttonProp">Watch Trailer</Button>
					        	</div>
				        	</Col>
			        	</Col>
	        		</Row>
	        	</Carousel.Item>
	        	<Carousel.Item>
					<div className="position carouselContainer">
		        		<div className="bg5"></div>
		        	</div>
		        	<Row>
			        	<Col lg={12} className="overlay">
				        	<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselImage">
				            	<Image height={300} src="https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SY1000_CR0,0,640,1000_AL_.jpg" alt="Arrival" />
				        	</Col>
							<Col lg={{span:4, offset: 0}} md={{span:6, offset:3}} className="carouselCaption">
					        	<div>
					            	<h5>Arrival</h5>
					            	<p>A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.</p>
					            	<Button target="_blank" href="https://www.amazon.com/Arrival-Amy-Adams/dp/B01M2C4NP8/ref=sr_1_1?keywords=arrival&qid=1572246369&sr=8-1" variant="secondary" className="buttonProp">Buy Now</Button>
					            	<Button target="_blank" href="https://vimeo.com/272254092" variant="outline-secondary" className="buttonProp">Watch Trailer</Button>
					        	</div>
				        	</Col>
			        	</Col>
	        		</Row>
	        	</Carousel.Item>
	    	</Carousel>
		)
	}
}
import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import './Content.css';

export default class Content extends Component {
	render() {
	    return (
	    	<Container>
		        <Row className="topContainer justify-content-sm-center">
		        	<Col md={4} sm={6} className="image-wrapper">
		            	<Image src='https://i.vimeocdn.com/video/595198868_505x160.jpg' />
		        	</Col>
		        	<Col md={4} sm={6} className="caption-wrapper">
		            	<h3>MONSOON III</h3>
		            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.</p>
		          </Col>
	        	</Row>
	        	<Row className="midContainer justify-content-sm-center">
			        <Col md={4} sm={6} className="caption-wrapper">
			        	<h3>BEAMS</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.</p>
					</Col>
			        <Col md={4} sm={6} className="image-wrapper">
			            <Image src='https://i.vimeocdn.com/video/589972810_530x315.jpg'/>
			        </Col>
			    </Row>
			    <Row className="botContainer justify-content-sm-center">
			        <Col md={4} sm={6} className="image-wrapper">
			            <Image src='https://i.vimeocdn.com/video/590587169_530x315.jpg' />
			        </Col>
			        <Col md={4} sm={6} className="caption-wrapper">
			            <h3>Move 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.</p>
					</Col>
				</Row>
	    	</Container>
	    );
	}
}


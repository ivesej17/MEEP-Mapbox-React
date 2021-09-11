import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { transportationProjects } from './locations.js'; 

mapboxgl.accessToken='pk.eyJ1IjoiaXZlc2VqIiwiYSI6ImNrdDBoenJtYjA1ZHkycG1ocGtjaXllOTkifQ.2KQkXYatr1RRKz6RXLdlsg';

class Map extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -94.578331, //Sets initial longitude for map on page load
			lat: 39.099724, //Sets initial latitude for map on page load
			zoom: 8 //Increase this zoom level to have the map more zoomed in on page load, or vice-versa
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/light-v10', //You can swap out this link to change the map style. Check out Mapbox styles on their site
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		for (const { geometry } of transportationProjects.features){
            		var marker = new mapboxgl.Marker()
				     .setLngLat(geometry.coordinates) //Sets latitude and longitude for the marker
				     .addTo(map); //This function renders the marker on the map at the position set in .setLngLat()
            
	    		//Example code for adding onclick event listener to each marker. 
            		marker.getElement().addEventListener('click', () => {
                	alert("Clicked");
            		}
        	)}
    }

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
			</div>
		)
	}
}

export default Map;

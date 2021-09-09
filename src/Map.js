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
			lng: -94.578331, 
			lat: 39.099724,
			zoom: 8
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/light-v10', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		for (const { geometry } of transportationProjects.features){
            var marker = new mapboxgl.Marker()
			.setLngLat(geometry.coordinates)
			.addTo(map);
            
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
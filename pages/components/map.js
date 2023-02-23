import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibGVzZWdvYmFsZSIsImEiOiJja3hjYmU3bWY0MTRjMnFwendlMzAxOHhrIn0.bPFqtvOSXkIaGfP9jp12aw';

const map = (props) => {
    
    useEffect(() => {
    
        const map = new mapboxgl.Map({
        container: "map",/*is the id of the div where the map should be */
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',/*map style can be changed */
        center: [28.1873570148,-25.772450439],/*this is the place you want the map to be using longtitude and  latitude */
        zoom: 9,

        })
     
     
     
    
        // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      showUserLocation:true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      )
      if(props.pickupCoordinates){
        addToMap(map, props.pickupCoordinates)
      }

      if(props.dropOffCoordinates){
        addToMap(map, props.dropOffCoordinates)
      }
        if(props.dropOffCoordinates && props.pickupCoordinates){
//for auto centering on to the markers
            map.fitBounds([
                props.pickupCoordinates, // southwestern corner of the bounds
                props.dropOffCoordinates // northeastern corner of the bounds
                ], {
                    padding: 70

                });

        }
        }, [props.pickupCoordinates,props.dropOffCoordinates])
           
        const addToMap = (map,coordinates) => {

            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);

        }

       

        

    return (
        <Wrapper id = 'map'>
            
        </Wrapper>
    )
}


export default map

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
flex-1 h-1/2
`
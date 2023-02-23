import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { useRouter } from 'next/router'
import Map from './components/map'
import RideSelector from './components/RideSelector'

const Confirm = () => {

    const router = useRouter()
    const { pickup,dropOff} = router.query
    //acts as box to put in  and set coordinates 
    //set puts in in the box while the other gets it
    const [ pickupCoordinates, setPickupCoordinates ] =useState([0,0])

    const [ dropOffCoordinates, setdropOffCoordinates ] =useState([0,0])

    //to get the Pickup coordinates for teh map
const getPickupCoordinates = (pickup) =>{

   
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({

            access_token: "pk.eyJ1IjoibGVzZWdvYmFsZSIsImEiOiJja3hjYmU3bWY0MTRjMnFwendlMzAxOHhrIn0.bPFqtvOSXkIaGfP9jp12aw",
            limit: 1
        
        })
    )
    .then(response => response.json())
    .then(data => {
     
        
        setPickupCoordinates(data.features[0].center)
    })
}

//to get the drop off coordinates for teh map
const getDropoffCoordinates = (dropOff) =>{

    //var dropOff = "The grove mall";//name of the location is entered
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?`+
        new URLSearchParams({

            access_token: "pk.eyJ1IjoibGVzZWdvYmFsZSIsImEiOiJja3hjYmU3bWY0MTRjMnFwendlMzAxOHhrIn0.bPFqtvOSXkIaGfP9jp12aw",
            limit: 1
        
        })
    )
    .then(response => response.json())
    .then(data => {
    
        setdropOffCoordinates(data.features[0].center)
    })

}

useEffect(()=>{
//Calling the functions for getting coordinates two locations
getPickupCoordinates(pickup);
getDropoffCoordinates(dropOff);

}, [pickup,dropOff])

    return (
        <Wrapper>
            <Link href="Search">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>       
             
            <Map

            //These are props
            pickupCoordinates={pickupCoordinates}
            dropOffCoordinates={dropOffCoordinates}
            />

            <RideContainer>
                <RideSelector
                
                pickupCoordinates={pickupCoordinates}
            dropOffCoordinates={dropOffCoordinates}
                />
               

                <ConfirmButton>
                    Confirm UberX
                </ConfirmButton>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm


const Wrapper = tw.div`
flex h-screen flex-col overflow-visible
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const BackButton = tw.img`
w-10 float-right overflow-visible rounded-full transform hover:cursor-pointer transition hover:scale-95 h-10 w-10  px-1 rounded-full absolute top-2 left-2 z-10 bg-white shadow-md
`



const ConfirmButton = tw.div`
text-white bg-black px-4 py-2 mt-3 mx-10 text-center text-xl rounded-lg transform hover:scale-95 transition transform hover:cursor-pointer m-5
`
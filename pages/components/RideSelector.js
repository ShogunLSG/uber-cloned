import React,{useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../Data/carList'

const RideSelector = ({pickupCoordinates,dropOffCoordinates}) => {
    const [rideDuration,setRideDuration] =useState(0)

    useEffect(() =>{fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoibGVzZWdvYmFsZSIsImEiOiJja3hjYmU3bWY0MTRjMnFwendlMzAxOHhrIn0.bPFqtvOSXkIaGfP9jp12aw`).then(res=>res.json())
    .then(data =>{ setRideDuration(data.routes[0].duration/100)
    })
}, [pickupCoordinates, dropOffCoordinates])
    return (
        <Wrapper>
           <Title>
            Choose a ride, or swipe up for more
           </Title>
           <CarList>
               { carList.map((car,index)=>(
                <Car key={index}>
                    <CarImage src={car.imgUrl}/>
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <CarPrice>R{(rideDuration*car.multiplier).toFixed(2)}</CarPrice>
                </Car>

               )) }
                

                
           </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 flex flex-col overflow-y-scroll
`
const Title = tw.div`
text-grey-500 text-center text-s py-2 border-b font-thin
`

const CarList = tw.div`

`
const Car = tw.div`
flex m-3`
                                 
const CarImage = tw.img`
h-20 w-20
 `
const CarDetails = tw.div`
flex flex-1 flex-col m-5`

const Service = tw.div`
font-bold`

const Time = tw.div`
text-xs text-blue-500`

const CarPrice = tw.div`
flex items-center`
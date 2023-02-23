import { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {

const [pickup, setpickup ]= useState("");
const [dropOff, setdropOff ]= useState("");



    return (
        <Wrapper>
            <Link href="/">
                <ButtonContainer>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                   
                </ButtonContainer>
            </Link>
            <InputContainer> 
                <FromToIcon>
                    
                    <CircleIcon src="https://img.icons8.com/ios/50/9CA3AF/filled-circle.png"/>

                    <LineIcon src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>

                    <SquareIcon src="https://img.icons8.com/ios-glyphs/30/000000/call-me.png"/>

                </FromToIcon> 
{/*getting values from the input boxes*/}
                <InputBoxes>
                    <Input placeholder="Your Location"
                    value={pickup}
                    onChange={(e)=> setpickup(e.target.value)}
                    />

                    <Input placeholder="Your Destination"
                    value={dropOff}
                    onChange={(e)=>setdropOff(e.target.value)}
                    />
                </InputBoxes>
                <PlusButton src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>
            
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                Saved Places
            </SavedPlaces>
            {/*Passing parameters to another page*/}
            <Link href={{
                pathname:"/Confirm",
                query:{
                    pickup:pickup,
                    dropOff:dropOff
                }
            }}>
            <ConfirmLocation>
                Confirm Location
            </ConfirmLocation>
            </Link>
            
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white
`

const InputContainer = tw.div`
flex bg-white items-center px-4 mb-3
`

const BackButton = tw.img`
transform hover:scale-105 transition transform hover:cursor-pointer h-10 ml-5 mt-2 px-1 
`
const FromToIcon = tw.div`
w-10 flex flex-col mr-2 items-center
`

const CircleIcon = tw.img`
h-2.5
`

const LineIcon = tw.img`
h-10
`

const SquareIcon = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1 mb-2
`

const Input = tw.input`
bg-gray-200 h-10 my-3 rounded-full p-2 outline-none border-none
`

const PlusButton = tw.img`
rounded-full w-10 h-10 bg-gray-200 ml-3 mr-3 transform hover:scale-105 transition transform hover:cursor-pointer
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 h-10 mr-3 rounded-full p-2 h-9 
`

const ConfirmLocation = tw.div`
text-white bg-black px-4 py-2 mt-3 mx-10 text-center text-xl rounded-lg transform hover:scale-105 transition transform hover:cursor-pointer
`
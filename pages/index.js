import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Link from 'next/link'
/*link to be able to use the map api*/
import Map from './components/map'

/*sort of like a ticket for using the api*/



export default function Home() {

  

  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Heading>
          <Uberlogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>

            <Profile>
              <Name>Lesego Matsimela</Name>
              <ProfileImg src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"/>
            </Profile>
        
        </Heading>
        <ActionButtons>
          <Link href="/Search">
              <ActionButton>
                <ActionImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                Ride
              </ActionButton>
          </Link>
          <ActionButton>
            <ActionImage src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels
          </ActionButton>

          <ActionButton>
            <ActionImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve
          </ActionButton>


        </ActionButtons>
<InputButton>Where to Bro?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}




const Wrapper = tw.div`
flex flex-col h-screen
`



const ActionItems = tw.div`
flex-1 p-4

`

const Heading = tw.div`
flex justify-between items-center
`

const Uberlogo = tw.img`
h-28

`
const ProfileImg = tw.img`
h-20 mr-4 ml-4 border border - gray-200 p-px rounded-full
`

const Profile = tw.div`
flex items-center

`

const Name = tw.div`
italic
`

const ActionButtons = tw.div`
flex  

`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-2 h-32 w-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transform hover:bg-gray-300 transition text-xl transform hover:cursor-pointer
`


const ActionImage= tw.img`
h-20 w-20
`

const InputButton = tw.div`
bg-gray-200 h-20 rounded-lg mt-2 m-2 text-2xl p-8 flex items-center transform hover:scale-105 transition transform hover:cursor-pointer
`

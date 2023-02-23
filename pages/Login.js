import React from 'react'
import tw from "tailwind-styled-components"

const Login = () => {
    return (
        <Wrapper>
           <SignInButton>Sign in with Google</SignInButton> 
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col m-2
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 w-full
`
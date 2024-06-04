import { StyleSheet, Text, View, useAnimatedValue } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const PasswordSchema=Yup.object().shape({
  passwordlength:Yup.number()
  .min(4,"Should be minimum of 4 characters")
  .max(16,"Should not be more than 16 characters")
  .required('Length is required')
})

// const  [password,setpassword]=useState('')
// const [isPassGenerated,setIsPassGenerated]=useState(false)
// const [lowerCase,setLowerCase]=useState(true)
// const [upperCase,setUpperCase]=useState(true)
// const [NumberSchema,useNumbers]=useState(false)
// const [symbols,useSymbols]=useState(false)

// const generatedPasswordString=(paswordLength :number) => 
//   {
//     //
//   }

//   const createPaswword= (characters:string,passwordLength:number) =>  
//     {
//       let result='';
//       for (let index = 0; index < passwordLength; index++) 
//       {
//         const characterIndex= Math.round(Math.random() *characters.length) 
//         result +=characters[characterIndex]
        
//       }
//       return result 
//     }

//     const resetPasswordState= () =>
//       {
//         //
//       }

export default function App() {
  return (
    <View>
      <Text>App</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({})
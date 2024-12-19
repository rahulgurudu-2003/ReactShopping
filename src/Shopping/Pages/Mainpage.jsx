import React,{useState} from 'react'
import Header from '../Componets/Header'
import Banner from '../Componets/Banner'
import Collections from '../Componets/Collections'
import Footer from '../Componets/Footer'
import { Gents,Ladies } from '../data'
import Woman from '../Componets/Woman'

const Mainpage = () => {
  const [gentsFashion,setgenstFashion] = useState(Gents)
  const [womenFashion,setwomenFashion] = useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <Woman womenFashion={womenFashion} />
        <Footer/>
    </div>
  )
}

export default Mainpage
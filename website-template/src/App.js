import React from "react"
import Navbar from "./Navbar"
import MainSection from "./MainSection"
import AppSection from "./AppSection"
import CardSection from "./CardSection"
import Footer from "./Footer"

const App = () => {
    return(
        <div>
            <Navbar/>
            <MainSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
}

export default App;

import Footer from "@/components/footer"
import Hero from "@/components/home/hero"
import Popular from "@/components/home/popular"
import Topnav from "@/components/home/topnav"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "chucks-kit ",
    description : "we make good food ",

}

export default function Home() {
    return (
        <main>
            <Topnav/>   
            <Hero/>
            <Popular/>
            <Footer/>


        </main> 
    )
}


import Footer from "@/components/footer"
import Signup from "@/components/signup"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "chucks-kit ",
    description : "we make good food ",

}

export default function Home() {
    return (
        <main>
            <Signup/>
            <Footer/>
             

        </main> 
    )
}

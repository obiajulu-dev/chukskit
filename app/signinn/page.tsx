
import Footer from "@/components/footer"
import Signin from "@/components/signin"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "chucks-kit ",
    description : "we make good food ",

}

export default function Home() {
    return (
        <main>
            <Signin/>
            <Footer/>
             

        </main> 
    )
}

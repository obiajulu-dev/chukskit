
import Footer from "@/components/footer"
import Signin from "@/components/signin"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "chucks-kit ",
    description : "we make good food ",
          icons : {
    icon : "/img/Chuks Kitchen.jpg",
  },


}

export default function Home() {
    return (
        <main>
            <Signin/>
            <Footer/>
             

        </main> 
    )
}

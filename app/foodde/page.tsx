
import Foodde from "@/components/foodde"
import Footer from "@/components/footer"
import Topnav from "@/components/home/topnav"
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
            <Foodde/>
            <Footer/>


        </main> 
    )
}

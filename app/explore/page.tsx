
import Heroex from "@/components/explore/heroex"
import Jolex from "@/components/explore/jolex"
import Menuu from "@/components/explore/menuu"
import Popex from "@/components/explore/popex"
import Swaex from "@/components/explore/swaex"
import Topnavex from "@/components/explore/topnavex"
import Footer from "@/components/footer"
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
            <Topnavex/>
            <Heroex/>
            <Menuu/>
            <Popex/>
            <Jolex/>
            <Swaex/>
            <Footer/>


        </main> 
    )
}

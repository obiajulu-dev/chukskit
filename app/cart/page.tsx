

import Cart from "@/components/myorder/cart"
import Footer from "@/components/footer"
import Topnavor from "@/components/myorder/topnavor"
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
            <Topnavor/>
            <Cart/>
            <Footer/>


        </main> 
    )
}



import Cart from "@/components/cart"
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
            <Cart/>
            <Footer/>


        </main> 
    )
}

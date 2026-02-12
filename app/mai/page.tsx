
import Main from "@/components/main"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "chucks-kit ",
    description : "we make good food ",

}

export default function Home() {
    return (
        <main>
            <Main/>  

        </main> 
    )
}

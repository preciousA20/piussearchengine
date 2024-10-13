import Header from "@/components/Header"
import HomeSearch from "@/components/HomeSearch"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="space-y-10">


      <Suspense fallback={<div>Loading...</div>}>
      <Header />
      </Suspense>
        
      


    <Suspense fallback={<div>Loading...</div>}>
     <HomeSearch />
      </Suspense>

    </div>
  );
}

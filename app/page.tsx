import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text=-xl font-bold">Olá, placeholder</h2>
        <p>Placeholder de Data</p>

        <div className="mt-6 flex items-center gap-2 space-x-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

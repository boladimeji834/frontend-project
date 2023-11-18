import Onboarding from "@/components/onboarding-screen"
import { 
  useEffect,
  useState
} from 'react'

export default function Home() {
  const [ onBoarding, setOnboarding ] = useState(true)

  useEffect(() => {
    setTimeout(() => setOnboarding(false), 5000)
  }, [])
  return (
    <main className="h-screen flex justify-center items-center p-5 my-16">
      <Onboarding show={onBoarding} />
    </main>
  )
}

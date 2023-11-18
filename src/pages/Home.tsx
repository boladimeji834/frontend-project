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
    <main className="flex justify-center items-center p-md-5 my-md-16" style={{ height: 'fit-content'}}>
      <Onboarding show={onBoarding} />
    </main>
  )
}

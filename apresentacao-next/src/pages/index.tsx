import SEO from '../components/SEO'
import {Title} from '../styles/pages/Dashboard'

export default function Home() {
  return (
    <div>
      <SEO 
        title="DevCommerce, your best e-commerce!" 
        image="icon.png"
        shouldExcludeTitleSuffix
      />
      <Title>time</Title>
    </div>
  )
}

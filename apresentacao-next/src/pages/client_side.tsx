import {useEffect, useState} from "react";
import {Title} from '../styles/pages/Dashboard'

interface IProduct {
  id: string;
  title: string;
}

export default function ClientSide() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/recommended").then(res => {
      res.json().then(data => {
        setRecommendedProducts(data)
      })
    })
  }, [])

  return (
    <div>
      <section>
        <Title>Client Side</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
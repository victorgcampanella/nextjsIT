import { GetServerSideProps } from 'next';
import {Title} from '../styles/pages/Dashboard'

interface IProduct {
  id: string;
  title: string;
}

interface ServerSideProps {
  recommendedProducts: IProduct[];
}

export default function ServerSide({recommendedProducts}: ServerSideProps) {
  return (
    <div>
      <section>
        <Title>Server Side</Title>

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

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const response = await fetch("http://localhost:3333/recommended");
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
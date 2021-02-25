import { GetStaticProps } from "next";

interface IProduct {
  id: string;
  title: string;
}

interface StaticSiteGenProps {
  products: IProduct[];
}

export default function StaticSiteGeneration({products}: StaticSiteGenProps) {
  return (
    <div>
      <h1>Static Site Generation</h1>

      <ul>
        {
          products.map(product => {
            return (
              <li key={product.id}>
                {product.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<StaticSiteGenProps> = async () => {
  const response = await fetch("http://localhost:3333/products");
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 5
  }
}
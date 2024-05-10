import Image from "next/image"
import Link from "next/link"

export default async function Detalhe({ params: { abobrinha } }) {
  const response = await fetch(`http://localhost:8000/hamburgers`)
  const data = await response.json()

  const priceFormat = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const detail = data.find((item: any) => item.title === abobrinha)

  return (
    <div>
      <h1>Detalhe - {abobrinha}</h1>
      <div>
        <p>
          {detail.title} - {priceFormat(detail.values.single)}
        </p>
        <Image
          src={detail.image[0]}
          alt={detail.title}
          width={240}
          height={240}
        />
        <p>{detail.description}</p>
      </div>
    </div>
  )
}

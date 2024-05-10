import Image from "next/image"
import Link from "next/link"

export default async function Produtos() {
  const response = await fetch("http://localhost:8000/hamburgers")
  const data = await response.json()

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {data.map((item: any) => (
          <div key={item.title}>
            <p>{item.title}</p>
            <Image
              src={item.image[0]}
              alt={item.title}
              width={120}
              height={120}
            />
            <p>{item.values.single}</p>
            <Link href={`produtos/${item.title}`}>Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

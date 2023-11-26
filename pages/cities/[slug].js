import { cities } from "../../lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DynamicRouting() {
    const router = useRouter();
    const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug)

  if(!city) {
    return <p>City not found</p>
  }

 
    return(

        <>
      <h1>{city.name}</h1>
      <h2>Country: {city.country}</h2>
      <h2>Population: has {city.population} habitants</h2>
      <p>{city.description}</p>
<Link href="/cities">Back to all cities </Link>
      </> 
    )
    }


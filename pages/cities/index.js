import { cities } from "../../lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function City() {
  const router = useRouter();
  return (
    <>
      <h1>Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`/cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

/* fehler 1: key={id} geschrieben */
/*fehler 2 : <ul>
        {cities.map((city,slug) => (
          <li key={city.id}>{city.name}
          <Link href={`/cities/${slug}`}></Link>
          </li> */

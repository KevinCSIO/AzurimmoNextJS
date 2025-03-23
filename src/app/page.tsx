import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>AzurImmo</h1>
        <ul>
            <li>
                <Link href={"/batiments"}>Bâtiments</Link>
            </li>
            <li>
                <Link href={"/appartements"}>Appartements</Link>
            </li>
            <li>
                <Link href={"/locataires"}>Locataires</Link>
            </li>
        </ul>
    </>
  );
}

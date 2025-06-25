{/*import Image from "next/image";

import portfolioImage from "./assets/images/amina.png"; // Adjust the path as necessary
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-7xl m-auto">
      <article className="grid grid-cols-2 grid-rows-[1fr_auto_1fr]">
        <h1 className="col-start-1 self-end">Amina</h1>
        <p className="col-start-1">THi, I’m Amina, a Danish student at the Center for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole. I’m focused on building creative, user-friendly websites and enjoy working on both the visual and technical sides of web development.</p>
<Link href="/contact" className="col-start-1 p-5 text-white bg-active block rounded w-fit h-fit">
         Get in touch
        </Link>
        <Image className="col-start-2 row-start-1 row-span-4 rounded-full object-cover"
          src={portfolioImage}
          alt="Profile Picture"/>
      </article>
    </main>
  );
}
*/}



import Image from "next/image";
import Link from "next/link";
import portfolioImage from "./assets/images/amina.png";

export default function HomePage() {
  return (
   <main className="max-w-5xl m-auto">

      <article className="grid grid-cols-2 grid-rows-[1fr_auto_1fr] gap-3">
        <h1 className="col-start-1 self-end">Amina</h1>
        <p className="col-start-1 text-text">
          Hi, I'm Amina, a Danish student at the Center for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole. I'm focused on building creative, user-friendly websites and enjoy working on both the visual and technical sides of web development.
        </p>
        <Link
          href="/contact"
          className="col-start-1 p-4 mt-4 text-white bg-active font-bold rounded w-fit h-fit"
        >
          Get in touch 
        </Link>
      <div className="col-start-2 row-start-1 row-span-3">

          <Image
            src={portfolioImage}
            alt="Profile Picture"
            className="rounded-full object-cover h-80 w-80 place-self-center"

          />
        </div>
      </article>
    </main>
  );
}
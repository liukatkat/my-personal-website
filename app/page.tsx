import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ color: "blue" })}>hi there!&nbsp;</h1>
        <br />
        <h1 className={title()}>
          my name is katrina
        </h1>
        <p className="mt-0">
          (aka tin nam aka liukatkat)
        </p>

        <div className="flex justify-center w-full mt-12">
          <Image
            className="mb-4 block dark:hidden"
            src="/home.png"
            alt="abstract illustration of a flying person with a graduation hat."
            width={250}
          />
          <Image
            className="hidden dark:block"
            src="/home_dark.png"
            alt="dark mode version of an abstract illustration of a flying person with a graduation hat."
            width={250}
          />
        </div>

        <p style={{ fontSize: '12px', marginBottom: '12px' }}>illustration(s) from <Link style={{ fontSize: '12px' }} href="https://absurd.design/">absurd.design</Link>.</p>

        <h2 className={subtitle({ class: "mt-4" })}>
          i am a student studying computer science at the university of pennsylvania. welcome to my little spot on the internet.
        </h2>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            github
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon size={18} />
            linkedin
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="/Katrina Liu Resume.pdf"
          >
            <FontAwesomeIcon icon={faBook} height={20} />
            my resume
          </Link>
        </div>
      </div>



    </section>
  );
}

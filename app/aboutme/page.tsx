"use client";

import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { ListboxItem, Listbox } from "@nextui-org/listbox";
import { button as buttonStyles } from "@nextui-org/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperclip,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Card, CardFooter } from "@nextui-org/card";
import React from "react";
import { Chip } from "@nextui-org/chip";

import { siteConfig } from "@/config/site";
import { ListboxWrapper } from "@/components/listboxwrapper";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { title } from "@/components/primitives";

export default function DocsPage() {
  const handleAction = (key: any) => {
    const pub = publications.find((p) => p.key === key);

    if (pub && pub.link) {
      window.open(pub.link, "_blank");
    }
  };

  const publications = [
    {
      key: "pub1",
      title:
        "Automating Responses to Patient Portal Messages Using Generative AI",
      year: "2024",
      description: "medRxiv (Preprint)",
      icon: faPaperclip,
      link: "https://www.medrxiv.org/content/10.1101/2024.04.25.24306183v1",
    },
    {
      key: "pub2",
      title:
        "Sense and (path) sensitivity: My experience adding a new feature as a Semgrep intern",
      year: "2024",
      description: "Semgrep Blog",
      icon: faBlog,
      link: "https://semgrep.dev/blog/2024/sense-and-path-sensitivity-my-experience-adding-a-new-feature-as-a-semgrep-intern",
    },
    {
      key: "pub3",
      title: "Exploring Round-trip Properties in Property-based Testing",
      year: "2023",
      description: "UPenn PL Club Blog",
      icon: faBlog,
      link: "https://www.cis.upenn.edu/~plclub/blog/2023-12-07-round-trip-properties/",
    },
  ];

  return (
    <div>
      <h1 className={title({ color: "blue" })}>about me</h1>

      <div className="flex justify-center w-full mt-12 mb-12">
        <Image
          alt="a photo of me in a black shirt, smiling and holding a beverage."
          src="/profile.jpg"
          width={250}
        />
      </div>

      <div className="text-lg p-4">
        I am Katrina Liu, a senior studying computer science at the University
        of Pennsylvania. You can contact/see me through:
      </div>

      <div className="flex justify-center w-full mt-4 mb-12">
        <div className="flex gap-3 justify-center flex-wrap sm:flex-nowrap">
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
            href="mailto:katrinatinnamliu@gmail.com"
          >
            <FontAwesomeIcon height={20} icon={faEnvelope} />
            email
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.instagram}
          >
            <FontAwesomeIcon height={20} icon={faInstagram} />
            instagram
          </Link>
        </div>
      </div>

      <p>professional</p>
      <h2 className={title({ size: "sm" })}>experiences</h2>

      <div className="flex justify-center w-full mt-4 mb-12">
        <div className="flex gap-3">
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              alt="semgrep logo"
              className="object-cover"
              height={200}
              src="https://avatars.githubusercontent.com/u/29760937?s=280&v=4"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">
                Software Engineer (Program Analysis)
              </p>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              alt="university of pennsylvania logo"
              className="object-cover"
              height={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvnX2oF0i0KPVo081NYJFOhvK0hC_EHcYqQ&s"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">
                TA & Undergraduate Researcher
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <h2 className={title({ size: "sm" })}>publications</h2>
      <p className="mb-4">(or just things i wrote)</p>

      <ListboxWrapper>
        <Listbox
          aria-label="List of publications"
          variant="faded"
          onAction={handleAction}
        >
          {publications.map((pub) => (
            <ListboxItem
              key={pub.key}
              description={pub.description + " (" + pub.year + ")"}
              startContent={
                <FontAwesomeIcon
                  icon={pub.icon}
                  style={{ marginRight: "10" }}
                />
              }
              style={{
                textAlign: "left",
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
            >
              <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                {pub.title}
              </div>
            </ListboxItem>
          ))}
        </Listbox>
      </ListboxWrapper>

      <div className="mt-12" />

      <h2 className={title({ size: "sm" })}>languages</h2>

      <div className="mt-4">
        i have been coding a lot in{" "}
        <Chip color="primary" size="sm" variant="flat">
          ocaml
        </Chip>
        ,{" "}
        <Chip color="primary" size="sm" variant="flat">
          python
        </Chip>
        ,{" "}
        <Chip color="primary" size="sm" variant="flat">
          typescript
        </Chip>
        , and{" "}
        <Chip color="primary" size="sm" variant="flat">
          haskell
        </Chip>{" "}
        recently. but i also know{" "}
        <Chip size="sm" variant="flat">
          java
        </Chip>
        ,{" "}
        <Chip size="sm" variant="flat">
          c
        </Chip>
        ,{" "}
        <Chip size="sm" variant="flat">
          sql
        </Chip>
        ,{" "}
        <Chip size="sm" variant="flat">
          swift
        </Chip>{" "}
        etc...
      </div>

      <div className="mt-4">
        for non-cs friends, i speak{" "}
        <Chip color="primary" size="sm" variant="flat">
          english
        </Chip>
        ,
        <a
          href="https://uhlibraries.pressbooks.pub/chin3342fa22/chapter/analysis-by-anonymous/"
          target="_blank"
        >
          <Chip
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
            size="sm"
            variant="shadow"
          >
            cantonese
          </Chip>
        </a>
        , and
        <Chip color="primary" size="sm" variant="flat">
          mandarin chinese
        </Chip>
        .
      </div>
    </div>
  );
}

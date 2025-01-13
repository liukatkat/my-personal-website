"use client";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { title } from "@/components/primitives";

const projects = [
  {
    name: "fromTS",
    description:
      "a typescript transpiler (to javascript) + typechecker written in haskell.",
    button: "repo",
    link: "https://github.com/esinx/fromTS",
  },
  {
    name: "proof steps extension",
    description:
      "a vscode extension to record and replay coq proof steps for educational purposes.",
    button: "figma",
    link: "https://www.figma.com/proto/Q64P8RIlMl1qc3LtTpX1sk/coq?node-id=3942-29628&p=f&t=lS7zexQTiFRuitZT-1&scaling=min-zoom&content-scaling=fixed&page-id=3942%3A4539&starting-point-node-id=3942%3A29628&show-proto-sidebar=1",
  },
  {
    name: "semgrep (path sensitivity and widget)",
    description:
      "added path sensitivity to semgrep and created a dashboard widget to display branch information.",
    button: "blog",
    link: "https://semgrep.dev/blog/2024/sense-and-path-sensitivity-my-experience-adding-a-new-feature-as-a-semgrep-intern/",
  },
  {
    name: "etna (parser and infrastructure)",
    description:
      "added parser workload to etna, and modified the infrastructure to support it.",
    button: "repo",
    link: "https://github.com/jwshii/etna",
  },
  {
    name: "instalite",
    description:
      "a scalable social media application for a cloud computing class.",
    button: "repo",
    link: "https://github.com/upenn-nets-2120/project-404-team-not-found",
  },
  {
    name: "oat to x86 compiler",
    description:
      "a compiler that translates OAT (a simple, self-defined, object-oriented language) code to x86 assembly.",
    button: "repo",
    link: "https://github.com/upenn-cis3410/hw5-oatv2-katrina-thomas",
  },
  {
    name: "pennos",
    description:
      "a basic operating system featuring fundamental OS components.",
    button: "repo",
    link: "https://github.com/CIS548/23fa-cis3800-pennos-29",
  },
  {
    name: "distraction free youtube",
    description:
      "a swift mobile application that removes distractions from youtube for focused viewing.",
    button: "repo",
    link: "https://github.com/distractionfreeyoutube/codepath-youtube",
  },
  {
    name: "peregrine",
    description:
      "a computer vision project/ mobile application that detects crowds using surveliance camera footages for efficient medical service delivery.",
    button: "figma",
    link: "https://www.figma.com/proto/N2uD1LtCCQRxtlS05Y9gBP/Peregrine-Demos?node-id=23-3&p=f&t=RzawkTab9I9vl7lO-1&scaling=scale-down&content-scaling=fixed&page-id=23%3A2",
  },
];

export default function ProjectPage() {
  return (
    <div>
      <h1 className={title()}>projects</h1>
      <p className="pt-4">
        note: some of the repos might be private, feel free to reach out if you
        want access!
      </p>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              isFooterBlurred
              className="w-full min-h-[320px] col-span-10 sm:col-span-6 lg:col-span-4 mx-auto"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny font-bold">project</p>
                <h4
                  className="font-medium text-2xl"
                  style={{ textAlign: "left" }}
                >
                  {project.name}
                </h4>
              </CardHeader>
              <div className="absolute w-full h-full">
                <div className="absolute inset-0 bg-foreground opacity-10" />
              </div>
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div>
                  <p className="text-md">{project.description}</p>
                </div>
                <Button
                  className="text-tiny ml-2"
                  color="primary"
                  radius="full"
                  size="sm"
                  onPress={() => window.open(project.link)}
                >
                  {project.button}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

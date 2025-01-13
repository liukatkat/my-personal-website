import { title } from "@/components/primitives";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Image from 'next/image';

const projects = [
  {
    name: 'semgrep (path sensitivity and dashboard widget)',
    image: '/sample.jpg',
    description: 'A powerful tool for analyzing code with path sensitivity and a user-friendly dashboard widget.'
  },
  {
    name: 'etna (parser and infrastructure)',
    image: '/sample.jpg',
    description: 'Parser and infrastructure project to enhance data processing capabilities.'
  },
  {
    name: 'instalite',
    image: '/sample.jpg',
    description: 'A lightweight social media application focused on quick and easy photo sharing.'
  },
  {
    name: 'oat to x86 compiler',
    image: '/sample.jpg',
    description: 'A compiler project that translates OAT code to x86 assembly for educational purposes.'
  },
  {
    name: 'pennos',
    image: '/sample.jpg',
    description: 'An operating system designed for educational use, featuring fundamental OS components.'
  },
  {
    name: 'distraction free youtube',
    image: '/sample.jpg',
    description: 'A browser extension that removes distractions from YouTube for focused viewing.'
  },
  {
    name: 'peregrine',
    image: '/sample.jpg',
    description: 'A high-speed project management tool designed for agile teams.'
  }
];

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>projects</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <Card key={index} isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-6 lg:col-span-4">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 font-bold">project</p>
                <h4 style={{ textAlign: 'left' }} className="text-black font-medium text-2xl">{project.name}</h4>
              </CardHeader>
              <Image
                alt={project.name}
                className="z-0 w-full h-full scale-110 -translate-y-4 object-cover"
                src={project.image}
                width={100}
                height={100}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div>
                  <p className="text-black text-tiny">{project.description}</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import { ShimmerButtonMinimalist } from '@/components/magicui/shimmer-button-minimalist'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { MailIcon, GithubIcon, LinkedinIcon, ThumbsUpIcon, ThumbsDownIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const davidImg = "/david.jpg"

const team = [
  {
    name: "David Vieira",
    role: "Frontend Developer & Web Designer",
    image: davidImg,
    email: "davidvieira7279@gmail.com",
    socials: [
      {
        href: "https://www.linkedin.com/in/david7279/",
        icon: LinkedinIcon,
        label: "LinkedIn",
        color: "sky",
      },
      {
        href: "https://github.com/david-7279",
        icon: GithubIcon,
        label: "Github",
        color: "gray",
      },
      {
        href: "mailto:davidvieira7279@gmail.com",
        icon: MailIcon,
        label: "Email",
        color: "red",
      },
    ],
    portfolio: "https://david7279.vercel.app/",
    bio: "Frontend Developer dedicado, sediado em Portugal, especializado na criação de experiências de produto intuitivas e visualmente refinadas, que dão prioridade à funcionalidade e à simplicidade estética.",
  },
]

const socials = [
  {
    href: "mailto:davidvieira7279@gmail.com",
    icon: MailIcon,
    label: "Email",
    className:
      "group w-21 justify-start gap-3 overflow-hidden rounded-none rounded-s-md shadow-none transition-all duration-200 not-hover:w-10 hover:bg-red-500/10 hover:text-red-500 focus-visible:z-10 dark:hover:bg-red-400/10 dark:hover:text-red-400",
  },
  {
    href: "https://www.linkedin.com/in/david7279/",
    icon: LinkedinIcon,
    label: "Linkedin",
    className:
      "group w-26 justify-start gap-3 overflow-hidden rounded-none shadow-none transition-all duration-200 not-hover:w-10 hover:bg-sky-500/10 hover:text-sky-500 focus-visible:z-10 dark:hover:bg-sky-400/10 dark:hover:text-sky-400",
  },
  {
    href: "https://github.com/david-7279",
    icon: GithubIcon,
    label: "Github",
    className:
      "group w-23 justify-start gap-3 overflow-hidden rounded-none rounded-e-md shadow-none transition-all duration-200 not-hover:w-10 hover:bg-sky-500/10 hover:text-gray-500 focus-visible:z-10 dark:hover:bg-gray-400/10 dark:hover:text-gray-400",
  },
];

const Page = () => {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 mt-5 space-y-10">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-5xl tracking-tighter font-regular">
            Conheça a equipe
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Saiba mais sobre a pessoa que torna este projeto possível.
          </p>
        </div>

        {/* Team Cards */}
        <div>
          {team.map((member, index) => (
            <Card key={member.email || index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-10 md:gap-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover border border-muted mb-2 sm:mb-0"
                  />
                  <div className="flex flex-col items-start justify-center text-center sm:items-start flex-1">
                    <p className="font-semibold text-lg text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <div className="flex flex-row flex-wrap justify-end items-end gap-3 mt-2">
                      {/* Animated Socials */}
                      <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
                        {socials.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <Link href={item.href} key={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                              <Button
                                variant='outline'
                                className={item.className}
                              >
                                <Icon />
                                {item.label}
                              </Button>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter>
                <Link href={member.portfolio} target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                  <ShimmerButtonMinimalist className="w-full text-sm text-foreground rounded-none">
                    <span>Visitar Portfólio</span>
                  </ShimmerButtonMinimalist>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Page
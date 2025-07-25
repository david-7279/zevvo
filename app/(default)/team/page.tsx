import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ShimmerButtonMinimalist } from '@/components/magicui/shimmer-button-minimalist'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BriefcaseBusinessIcon, MailIcon, GithubIcon, LinkedinIcon, Columns3CogIcon, ClipboardListIcon, ChartAreaIcon, CodeIcon, FingerprintIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const davidImg = "/david.jpg"

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX Design",
  "Figma",
  "Node.js (básico)",
]

const values = [
  {
    Icon: ClipboardListIcon,
    name: "Design minimalista",
    description: "Interfaces limpas, funcionais e elegantes, com foco na simplicidade e clareza visual.",
    href: "https://david7279.vercel.app/",
    cta: "Visitar Portfolio",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Gestão de Clientes" />,
  },
  {
    Icon: ChartAreaIcon,
    name: "Foco no utilizador",
    description: "Experiências centradas no utilizador, garantindo usabilidade, acessibilidade e satisfação em cada interação.",
    href: "https://david7279.vercel.app/",
    cta: "Visitar Portfolio",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Faturação Automática" />,
  },
  {
    Icon: Columns3CogIcon,
    name: "Código limpo e escalável",
    description: "Desenvolvimento com boas práticas, resultando em soluções robustas, fáceis de manter e prontas para crescer.",
    href: "https://david7279.vercel.app/",
    cta: "Visitar Portfolio",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Relatórios Interativos" />,
  },
];

const Page = () => {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 mt-5 space-y-10">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        {/* Header */}
        <div className="space-y-5 flex justify-center items-center text-center">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Conheça a equipe
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Saiba mais sobre a pessoa que torna este projeto possível.
            </p>
          </div>
        </div>

        {/* Avatar & Name */}
        <div className='flex flex-row gap-5 items-center'>
          <Avatar className='size-16 rounded-2xl'>
            <AvatarImage src={davidImg} alt='David Vieira' />
            <AvatarFallback className='text-xs'>DV</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <p className='text-xl text-foreground font-semibold'>David Vieira</p>
            <p className='text-xs text-muted-foreground'>Frontend Developer & Web Designer</p>
            <div className="flex gap-2 mt-2">
              <Link href="mailto:davidvieira7279@gmail.com" target="_blank" aria-label="Email">
                <MailIcon className="size-4 text-muted-foreground hover:text-foreground transition" />
              </Link>
              <Link href="https://david7279.vercel.app/" target="_blank" aria-label="Portfolio">
                <BriefcaseBusinessIcon className="size-4 text-muted-foreground hover:text-foreground transition" />
              </Link>
              <Link href="https://www.linkedin.com/in/david7279/" target="_blank" aria-label="LinkedIn">
                <LinkedinIcon className="size-4 text-muted-foreground hover:text-foreground transition" />
              </Link>
              <Link href="https://github.com/david-7279" target="_blank" aria-label="GitHub">
                <GithubIcon className="size-4 text-muted-foreground hover:text-foreground transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className='text-pretty space-y-4 text-muted-foreground text-sm'>
          <p>
            Olá! Sou um Frontend Developer dedicado, sediado em Portugal, especializado na criação de experiências de produto intuitivas e visualmente refinadas. Com uma filosofia de design minimalista, concentro-me na construção de interfaces limpas, eficientes e centradas no utilizador, que dão prioridade à funcionalidade e à simplicidade estética.
          </p>
        </div>

        {/* Values */}
        <div className="flex items-center gap-2">
          <FingerprintIcon className="size-4 text-primary" />
          <h3 className="text-base font-medium text-foreground">Valores & Filosofia</h3>
        </div>

        <div className="grid gap-y-12 lg:[grid-template-columns:1fr_auto] -mt-8">
          <BentoGrid>
            {values.map((value) => (
              <BentoCard key={value.name} {...value} />
            ))}
          </BentoGrid>
        </div>

        {/* PORFOLIO */}
        <div>
          <Link href={"https://david7279.vercel.app/"} target="_blank" className="w-3/4">
            <ShimmerButtonMinimalist
              type="button"
              className="w-full rounded-none  text-sm text-foreground">
              <p>Visitar Porfolio</p>
            </ShimmerButtonMinimalist>
          </Link>
        </div>



        {/* Call to Action */}
        <div className="flex justify-center items-center gap-1 max-w-full flex-wrap sm:text-xs">
          <p className="text-muted-foreground text-sm whitespace-normal break-words">
            Tem uma sugestão, dúvida ou quer colaborar?
          </p>
          <Link href={"mailto:davidvieira7279@gmail.com"} className="group">
            <p className="relative text-sm text-foreground transition-all duration-500
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
                group-hover:after:w-full break-all">
              Entre em contacto comigo!
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Page
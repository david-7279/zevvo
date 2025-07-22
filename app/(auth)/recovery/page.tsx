import { BorderBeam } from '@/components/magicui/border-beam'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Path } from '@/lib/paths'
import { PackageIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AccountRecovery = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-1">

        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-left p-10 items-end hidden lg:block absolute top-0 left-0">
            <Link href={Path.root}>
              <Button variant="link" className="rounded-2xl">Zevvo</Button>
            </Link>
          </div>

          {/* Recovery */}
          <div className="max-w-4xl w-full flex flex-col items-center space-y-5 px-4">
            <div className="items-start text-left w-full">
              <p className="mt-2 text-xl font-bold tracking-tight">Recuperação de conta</p>
              <small className="text-sm text-muted-foreground leading-none font-medium">Redefina a sua palavra-passe de forma segura em três passos simples. Enviar-lhe-emos uma palavra-passe única para verificar o seu e-mail e, em seguida, poderá definir uma nova palavra-passe para a sua conta.</small>
            </div>

            <Card className="relative w-full overflow-hidden">
              <CardContent>
                Form for recovery account
              </CardContent>
              <BorderBeam duration={8} size={100} />
            </Card>

            <div className="mt-5">
              <div className="flex justify-center items-center gap-1">
                <p className="text-muted-foreground text-sm">Lembra-se da sua palavra-passe?</p>
                <Link href={Path.login} className="group">
                  <p className="relative text-sm text-foreground transition-all duration-500
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
                  group-hover:after:w-full"
                  >
                    Iniciar Sessão
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountRecovery
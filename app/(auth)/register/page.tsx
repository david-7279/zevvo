"use client"

import Link from "next/link";
import { Path } from "@/lib/paths";

import RegisterForm from "@/components/forms/(default)/auth/form-register";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Card, CardContent } from '@/components/ui/card'
import { PackageIcon } from "lucide-react";

import SiderContent from "@/app/(auth)/components/sider-content";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="w-full flex flex-col justify-center items-center relative">
          <div className="text-left p-10 items-end hidden lg:block absolute top-0 left-0">
            <Link href={Path.root}>
              <Button variant="link" className="rounded-2xl">Zevvo</Button>
            </Link>
          </div>

          <div className="max-w-sm m-auto w-full flex flex-col items-center space-y-5 px-4">
            <div className="items-start text-left w-full">
              <PackageIcon />
              <p className="mt-2 text-xl font-bold tracking-tight">Registar conta no Zevvo</p>
              <small className="text-sm text-muted-foreground leading-none font-medium">Bem-vindo! Cria uma conta para continuar</small>
            </div>

            <Card className="relative w-full overflow-hidden">
              <CardContent>
                <RegisterForm />
              </CardContent>
              <BorderBeam duration={8} size={100} />
            </Card>

            <div className="mt-5">
              <div className="flex justify-center items-center gap-1">
                <p className="text-muted-foreground text-sm">Já tem uma conta?</p>
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

        {/* RIGHT PANEL */}
        <div className="inline-flex items-center py-3 px-6">
          <SiderContent />
        </div>
      </div>
    </div>
  );
};

export default Register;
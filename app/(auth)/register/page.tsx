"use client"

import Link from "next/link";
import { Path } from "@/lib/paths";

import RegisterForm from "@/components/forms/(default)/auth/form-register";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Card, CardContent } from '@/components/ui/card'
import { PackageIcon } from "lucide-react";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2 p-4">
        <div className="max-w-xs m-auto w-full flex flex-col space-y-5">
          <div>
            <PackageIcon />
            <p className="mt-2 text-xl font-bold tracking-tight">Registar conta no Bussiness Hub</p>
            <small className="text-sm text-muted-foreground leading-none font-medium">Bem-vindo! Cria uma conta para continuar</small>
          </div>

          <Card className="relative w-[350px] overflow-hidden">
            <CardContent>
              <RegisterForm />
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>

          <div className="mt-5 space-y-5">
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
        <div className="bg-muted hidden lg:block rounded-lg" />
      </div>
    </div>
  );
};

export default Register;
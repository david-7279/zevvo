import Link from "next/link";
import RegisterForm from "@/components/forms/(default)/auth/form-register";
import { Card, CardContent } from '@/components/ui/card'
import { BorderBeam } from "@/components/magicui/border-beam";
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
            <p className="text-sm text-center">
              Já tem uma conta?
              <Link href="#" className="ml-1 underline text-muted-foreground">
                Iniciar Sessão
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-muted hidden lg:block rounded-lg" />
      </div>
    </div>
  );
};

export default Register;
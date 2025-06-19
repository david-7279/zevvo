import Link from "next/link";
import RegisterForm from "@/components/forms/(default)/auth/form-register";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2 p-4">
        <div className="max-w-xs m-auto w-full flex flex-col items-center">
          <p className="mt-4 text-xl font-bold tracking-tight">
            Log in to Shadcn UI Blocks
          </p>

          <RegisterForm />

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
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  PasswordInput,
  PasswordInputAdornment,
  PasswordInputAdornmentToggle,
  PasswordInputInput,
} from "@/components/ui/password-input";
import {
  InputBase,
  InputBaseAdornment,
  InputBaseControl,
  InputBaseInput,
} from "@/components/ui/input-base";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { LockKeyholeIcon, MailIcon, UserRoundPenIcon } from "lucide-react";
import Link from "next/link";
import { Path } from "@/lib/paths";

const formSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, "Palavra-passe deve ter pelo menos 8 caracteres"),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (isLoading) return;
    setIsLoading(true);

    try {
      // Toast Event
      toast("Conta autenticada com sucesso", {
        description: `Bem-vindo de volta!`,
      });
      setTimeout(() => {
        form.reset();
      }, 600)
      console.log("Conta autenticada com sucesso: ", data);
    } catch (error) {
      console.log(`Erro ao iniciar sessão na conta: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Endereço de e-mail</FormLabel>
              <InputBase error={Boolean(fieldState.error)}>
                <InputBaseAdornment>
                  <MailIcon />
                </InputBaseAdornment>
                <InputBaseControl>
                  <FormControl>
                    <InputBaseInput placeholder="E-mail" {...field} />
                  </FormControl>
                </InputBaseControl>
              </InputBase>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Palavra-passe</FormLabel>

              <PasswordInput>
                <PasswordInputAdornment>
                  <LockKeyholeIcon />
                </PasswordInputAdornment>
                <FormControl>
                  <PasswordInputInput
                    autoComplete="new-password"
                    placeholder="Palavra-passe"
                    {...field}
                  />
                </FormControl>
                <PasswordInputAdornmentToggle />
              </PasswordInput>
              <div className="flex justify-end items-center gap-1 max-w-full flex-wrap sm:text-xs">

                <Link href={Path.recovery} target="_blank" className="group">
                  <p className="relative text-sm text-muted-foreground transition-all duration-500
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
                group-hover:after:w-full break-all">
                    Esqueceu-se da sua palavra-passe?
                  </p>
                </Link>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 w-full">
          Iniciar sessão
        </Button>
      </form >
    </Form >
  )
}

export default LoginForm
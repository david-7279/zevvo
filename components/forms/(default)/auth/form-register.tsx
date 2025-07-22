"use client";

import { useState, useEffect } from "react";
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
  username: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Palavra-passe deve ter pelo menos 8 caracteres"),
});

const RegisterForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (isLoading || !isClient) return;
    setIsLoading(true);

    try {
      toast("Conta criada com sucesso", {
        description: `Bem-vindo(a) ${data.username}`,
      });
      setTimeout(() => {
        form.reset();
      }, 600);
      console.log("Conta criada com sucesso: ", data);
    } catch (error) {
      console.log(`Error creating account: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (!isClient) {
    return <div className="h-[300px] w-[350px] animate-pulse bg-gray-200 rounded-lg" />; // Placeholder durante SSR
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Nome de utilizador</FormLabel>
              <InputBase error={Boolean(fieldState.error)}>
                <InputBaseAdornment>
                  <UserRoundPenIcon />
                </InputBaseAdornment>
                <InputBaseControl>
                  <FormControl>
                    <InputBaseInput placeholder="Nome" {...field} />
                  </FormControl>
                </InputBaseControl>
              </InputBase>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Endereço de Email</FormLabel>
              <InputBase error={Boolean(fieldState.error)}>
                <InputBaseAdornment>
                  <MailIcon />
                </InputBaseAdornment>
                <InputBaseControl>
                  <FormControl>
                    <InputBaseInput placeholder="Email" {...field} />
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
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <PasswordInputAdornmentToggle />
              </PasswordInput>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 w-full" disabled={isLoading}>
          Criar Conta
        </Button>

        <div className="flex justify-center items-center gap-1 max-w-full flex-wrap sm:text-xs">
          <p className="text-muted-foreground text-sm whitespace-normal break-words">
            Ao criar uma conta, aceita os nossos
          </p>
          <Link href={Path.terms} target="_blank" className="group">
            <p className="relative text-sm text-foreground transition-all duration-500
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
                group-hover:after:w-full break-all">
              Termos e Condições
            </p>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
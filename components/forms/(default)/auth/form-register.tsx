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
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Palavra-passe deve ter pelo menos 8 caracteres"),
});

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
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
      toast("Conta criada com sucesso", {
        description: `Bem vindo(a) ${data.name}`,
      });
      setTimeout(() => {
        form.reset();
      }, 600)
      console.log("Conta criada com sucesso: ", data);
    } catch (error) {
      console.log(`Error creating account: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome de Utilizador</FormLabel>
              <FormControl>
                <Input type="name" placeholder="Nome" className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço de Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Palavra Passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Palavra passe" className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4 w-full">
          Criar Conta
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
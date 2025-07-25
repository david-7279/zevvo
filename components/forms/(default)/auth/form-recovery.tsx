"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  InputBase,
  InputBaseAdornment,
  InputBaseControl,
  InputBaseInput,
} from "@/components/ui/input-base";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MailIcon } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

const RecoveryForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (isLoading) return;
    setIsLoading(true);

    try {
      // Toast Event
      toast("Pedido de recuperação enviado com sucesso", {
        description: `Por favor verifique o seu e-mail para continuar o processo.`,
      });
      setTimeout(() => {
        form.reset();
      }, 600)
      console.log("Pedido de recuperação enviado: ", data);
    } catch (error) {
      console.log(`Erro ao enviar pedido de recuperação: ${error}`);
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
              <FormDescription>
                Introduza o seu endereço de e-mail e enviar-lhe-emos um código de confirmação.
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 w-full">
          Recuperar Sessão
        </Button>
      </form >
    </Form >
  )
}

export default RecoveryForm
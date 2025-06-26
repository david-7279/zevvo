import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { UserIcon } from "lucide-react"

const ChatContent = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Suporte</h1>
        <p className="text-muted-foreground">
          Fale conosco através do chat abaixo. Nossa equipa responderá o mais breve possível.
        </p>
      </div>

      {/* Support Chat */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Chat de Suporte
          </CardTitle>
          <CardDescription>
            Envie sua dúvida ou solicitação e aguarde o retorno do nosso time de suporte.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Example: Chat messages would go here */}
          {/* Message input */}
          <Textarea placeholder="Digite sua mensagem..." rows={3} />
          <div className="flex justify-end">
            <Button>Enviar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ChatContent
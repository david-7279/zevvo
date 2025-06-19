import React from 'react'

const Terms = () => {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-4 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Termos <br className="hidden lg:block" /> e <br className="hidden lg:block" />
              Condições de Uso
            </h2>
            <p>Leia estes termos antes de se registar ou usar nossa plataforma para gerir seu negócio local.</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="py-6">
              <h3 className="font-medium">Como usamos seus dados?</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>Utilizamos seus dados para fornecer os serviços da nossa plataforma. Isso inclui:</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Gestão de clientes, emissão de faturas, e geração de relatórios.</li>
                  <li>Processamento seguro de pagamentos através do Stripe, nosso parceiro.</li>
                  <li>Envio de notificações, como confirmação de registo e alertas de faturas.</li>
                  <li>Resposta a pedidos de suporte via tickets ou e-mail.</li>
                </ul>
                <p>Não compartilhamos nem vendemos seus dados a terceiros.</p>
              </div>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Seus dados são armazenados?</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>Sim, armazenamos seus dados de forma segura para garantir o funcionamento da plataforma. Isso inclui:</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Informações de conta (ex.: nome, e-mail).</li>
                  <li>Dados de clientes e faturas criados na plataforma.</li>
                  <li>Tickets de suporte para acompanhamento.</li>
                </ul>
                <p>Todos os dados são protegidos com medidas de segurança padrão da indústria.</p>
              </div>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Usamos cookies ou rastreadores?</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>Usamos apenas cookies essenciais para o funcionamento da plataforma, como:</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Autenticação de utilizadores.</li>
                  <li>Manutenção de preferências de idioma.</li>
                </ul>
                <p>Não utilizamos cookies de rastreamento ou ferramentas de análise de terceiros sem seu consentimento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms
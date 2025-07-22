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

            <div className="py-6">
              <h3 className="font-medium">Sobre os seus dados na plataforma</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>
                  Os dados referentes aos seus produtos, clientes, fornecedores, pagamentos e stock são armazenados na nossa plataforma para garantir o funcionamento dos serviços. No entanto, apesar de adotarmos medidas de segurança, existe sempre o risco de perda de dados devido a falhas técnicas, indisponibilidade do servidor ou outros imprevistos.
                </p>
                <p>
                  Por esse motivo, disponibilizamos para todos os planos um botão de exportação e importação, permitindo que você faça backup de todos os seus dados em um ficheiro. Apenas você tem acesso a esse ficheiro, e é sua responsabilidade realizar exportações regulares para garantir a segurança das suas informações.
                </p>
                <p>
                  Caso ocorra algum problema com a sua conta ou com a plataforma, não temos como recuperar os seus dados. Recomendamos que utilize a funcionalidade de exportação/importação para manter uma cópia de segurança atualizada dos seus dados.
                </p>
              </div>
            </div>

            {/* Adicionais recomendados para uma página de Termos e Condições */}
            <div className="py-6">
              <h3 className="font-medium">Responsabilidades do Utilizador</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>
                  O utilizador é responsável por manter a confidencialidade das suas credenciais de acesso e por todas as atividades realizadas na sua conta. Não é permitido utilizar a plataforma para fins ilegais ou não autorizados.
                </p>
              </div>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Limitação de Responsabilidade</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>
                  A plataforma é fornecida "tal como está". Não nos responsabilizamos por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou da impossibilidade de uso da plataforma.
                </p>
              </div>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Alterações nos Termos</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>
                  Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações serão comunicadas através da plataforma ou por e-mail. O uso continuado da plataforma após as alterações implica aceitação dos novos termos.
                </p>
              </div>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Cancelamento e Encerramento de Conta</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>
                  O utilizador pode cancelar a sua conta a qualquer momento. Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos ou que apresentem atividades suspeitas.
                </p>
              </div>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Contato</h3>
              <div className="text-muted-foreground mt-4 space-y-2">
                <p>
                  Em caso de dúvidas sobre estes termos, entre em contato através do e-mail: <a href="mailto:zevvohelp@outlook.com" className="underline">zevvohelp@outlook.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms
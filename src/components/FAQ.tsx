"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Como funciona a primeira consulta com os advogados?",
    answer: "A primeira consulta é o momento onde entenderemos a fundo o seu caso. Você pode agendar presencialmente em uma de nossas unidades (Campos ou Cardoso Moreira) ou de forma online via videochamada. Analisaremos seus documentos e traçaremos a melhor estratégia jurídica."
  },
  {
    question: "O escritório atende clientes de outras cidades de forma online?",
    answer: "Sim! Atendemos clientes de todo o Brasil através do nosso formato de Advocacia Digital. Realizamos reuniões por videochamada e todo o envio de documentos é feito de forma segura e rápida pelo WhatsApp ou e-mail."
  },
  {
    question: "Quais documentos preciso enviar para dar entrada na aposentadoria ou auxílio do INSS?",
    answer: "Geralmente solicitamos RG, CPF, comprovante de residência, Carteiras de Trabalho (CTPS), carnês de contribuição e laudos médicos (no caso de auxílio-doença). Na primeira consulta, analisaremos seu CNIS para informar exatamente o que será necessário."
  },
  {
    question: "Onde fica localizada a unidade do Parque Pelinca em Campos dos Goytacazes?",
    answer: "Nossa unidade principal está localizada no coração do Parque Pelinca, oferecendo fácil acesso, estacionamento próximo e uma estrutura moderna e confortável para receber você com total privacidade."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Esclareça suas principais dúvidas sobre nosso atendimento e serviços.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-brand-navy hover:text-brand-gold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

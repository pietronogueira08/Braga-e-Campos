"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Carlos Eduardo S.",
    role: "Cliente de Campos dos Goytacazes",
    text: "Excelente atendimento! Resolveram meu problema trabalhista com muita rapidez e transparência. A equipe do Parque Pelinca é nota 10.",
  },
  {
    name: "Maria das Graças",
    role: "Cliente de Cardoso Moreira",
    text: "Consegui minha aposentadoria graças à competência dos advogados da Braga & Campos. Muito atenciosos e me explicaram tudo direitinho desde o primeiro dia.",
  },
  {
    name: "Roberto Almeida",
    role: "Empresário local",
    text: "A assessoria jurídica empresarial tem sido fundamental para o crescimento seguro da minha empresa. Profissionais éticos e altamente qualificados.",
  }
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-brand-slate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center gap-1 mb-4 text-brand-gold">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Mais de 170 avaliações 5 estrelas no Google. Nossa maior conquista é a satisfação e tranquilidade de quem confia em nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-none shadow-lg shadow-brand-navy/5 relative pt-8">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy shadow-lg">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-brand-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

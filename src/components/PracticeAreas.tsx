"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  HeartHandshake, 
  ShieldAlert, 
  Users, 
  Building2, 
  Scale 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const areas = [
  {
    icon: <HeartHandshake className="w-10 h-10" />,
    title: "Direito Previdenciário & INSS",
    description: "Aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte e revisões de benefício."
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Direito Trabalhista",
    description: "Defesa dos direitos do trabalhador e consultoria preventiva trabalhista para empresas."
  },
  {
    icon: <ShieldAlert className="w-10 h-10" />,
    title: "Direito Cível & Consumidor",
    description: "Indenizações, cobranças indevidas, problemas contratuais, golpes bancários e negativação."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Direito de Família & Sucessões",
    description: "Divórcios, partilha de bens, inventários, guarda e pensão alimentícia."
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Direito Empresarial & Tributário",
    description: "Blindagem jurídica, contratos corporativos e planejamento tributário."
  },
  {
    icon: <Scale className="w-10 h-10" />,
    title: "Direito Criminal & Eleitoral",
    description: "Defesa técnica preventiva e acompanhamento em processos judiciais."
  }
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Áreas de Atuação Estratégicas
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos suporte jurídico integral para pessoas físicas e empresas, com foco em resultados reais e segurança para o seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:-translate-y-2 transition-transform duration-300 border-gray-100 hover:border-brand-gold shadow-sm hover:shadow-xl hover:shadow-brand-gold/10 overflow-hidden bg-white">
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-brand-slate rounded-lg flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                    {area.icon}
                  </div>
                  <CardTitle className="font-heading text-xl text-brand-navy group-hover:text-brand-gold transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

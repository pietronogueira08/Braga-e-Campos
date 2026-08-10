"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Globe, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: <Star className="w-8 h-8 text-brand-gold" />,
    title: "5.0 ★★★★★",
    subtitle: "Nota Máxima no Google",
    description: "+170 Depoimentos reais de clientes satisfeitos",
  },
  {
    icon: <MapPin className="w-8 h-8 text-brand-gold" />,
    title: "Duas Unidades",
    subtitle: "Atendimento Presencial",
    description: "Parque Pelinca (Campos) e Cardoso Moreira",
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-gold" />,
    title: "Atuação Nacional",
    subtitle: "Digital e Sem Fronteiras",
    description: "Consultoria preventiva e judicial em todo o Brasil",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
    title: "Corpo Jurídico",
    subtitle: "Especializado e Transparente",
    description: "Equipe de alta performance para o seu caso",
  },
];

export default function TrustMetrics() {
  return (
    <section className="bg-brand-navy py-16 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-brand-gold/20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index !== 0 ? 'sm:pl-8 pt-8 sm:pt-0' : ''}`}
            >
              <div className="mb-4 bg-brand-navy-light p-4 rounded-full border border-brand-gold/20">
                {metric.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-1">{metric.title}</h3>
              <h4 className="text-brand-gold font-medium text-sm mb-3 uppercase tracking-wider">{metric.subtitle}</h4>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

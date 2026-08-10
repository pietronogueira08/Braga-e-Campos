"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const differentials = [
  {
    title: "Transparência Absoluta",
    description: "Acompanhamento constante do status do seu processo. Explicamos cada etapa sem juridiquês, para que você tenha controle sobre seu caso."
  },
  {
    title: "Atendimento VIP e Personalizado",
    description: "Você não é apenas um número. Cada caso é analisado de forma individualizada pelos próprios sócios do escritório, garantindo excelência."
  },
  {
    title: "Duas Unidades Físicas",
    description: "Escritórios estruturados e confortáveis no Parque Pelinca (Campos dos Goytacazes) e em Cardoso Moreira para lhe receber."
  },
  {
    title: "Atendimento Digital Rápido",
    description: "Agilidade no envio de documentos e consultas online pelo WhatsApp, poupando seu tempo sem perder a qualidade."
  }
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-brand-slate overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">
              Por que nos escolher?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Diferenciais que Garantem a sua Tranquilidade
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Nosso compromisso é entregar a melhor experiência jurídica possível, unindo a solidez de um escritório tradicional à agilidade da advocacia moderna.
            </p>

            <div className="space-y-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-brand-navy/10 z-10" />
              <Image 
                src="/hero.jpg" 
                alt="Reunião de advogados Braga & Campos" 
                fill 
                className="object-cover scale-x-[-1]"
              />
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-gold rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-navy rounded-full blur-3xl opacity-10 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

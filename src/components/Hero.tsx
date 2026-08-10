"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Scale, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-slate">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -skew-x-12 translate-x-32 hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-gold/30 text-brand-navy text-sm font-medium mb-6 shadow-sm">
              <Scale className="w-4 h-4 text-brand-gold" />
              <span>Soluções Jurídicas Inteligentes no RJ</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.15] mb-6">
              Defesa Estratégica e Atendimento Humanizado para Proteger <span className="text-brand-gold italic">Seus Direitos</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Avançada consultoria e advocacia especializada em Direito Previdenciário, Trabalhista, Empresarial, Cível e de Família. Atendimento presencial em Campos dos Goytacazes e Cardoso Moreira, e online em todo o Brasil.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                <strong className="text-brand-navy">5.0</strong> (+170 Avaliações no Google)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://wa.me/5522998667158" 
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-base h-14 px-8 shadow-lg shadow-brand-gold/20 transition-all hover:-translate-y-1"
              >
                Falar com Advogado pelo WhatsApp
              </Link>
              <Link 
                href="#areas"
                className="inline-flex items-center justify-center rounded-lg border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white h-14 px-8 text-base transition-all"
              >
                Conhecer Áreas de Atuação
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/hero.jpg" 
                alt="Equipe Braga & Campos Advogados" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            </div>
            
            {/* Trust Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 sm:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">Escritórios Físicos</p>
                  <p className="text-xs text-gray-500">Parque Pelinca - Campos</p>
                  <p className="text-xs text-gray-500">Cardoso Moreira - RJ</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

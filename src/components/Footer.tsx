"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Banner Section */}
        <div className="bg-brand-navy-light rounded-3xl p-10 md:p-16 text-center mb-20 shadow-2xl border border-white/5">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Precisa de orientação jurídica segura e ágil para o seu caso?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Agende seu atendimento presencial no Parque Pelinca / Cardoso Moreira ou fale diretamente com nossos advogados pelo WhatsApp.
          </p>
          <Link 
            href="https://wa.me/5522998667158" 
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-lg h-14 px-8 shadow-lg shadow-brand-gold/20"
          >
            <Phone className="w-5 h-5 mr-2" />
            Solicitar Orientação Jurídica no WhatsApp
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative overflow-hidden rounded-md bg-white">
                <Image src="/logo.jpg" alt="Braga & Campos Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none tracking-wide text-brand-gold">
                  BRAGA & CAMPOS
                </span>
                <span className="text-[10px] tracking-widest text-white/70 uppercase mt-1">
                  Advogados Associados
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluções Jurídicas Inteligentes. Defesa Estratégica e Atendimento Humanizado para proteger seus direitos e seu patrimônio.
            </p>
            <p className="text-brand-gold/80 text-sm font-semibold">
              OAB/RJ XXXXX
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              <li><Link href="#escritorio" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">O Escritório</Link></li>
              <li><Link href="#areas" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Áreas de Atuação</Link></li>
              <li><Link href="#diferenciais" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Diferenciais</Link></li>
              <li><Link href="#avaliacoes" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Avaliações</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contatos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>(22) 99866-7158</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>contato@bragaecampos.com.br</span>
              </li>
              <li className="flex gap-4 mt-6">
                <Link href="https://wa.me/5522998667158" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Nossas Unidades</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">Campos dos Goytacazes</p>
                  <p>Parque Pelinca</p>
                  <p>Campos dos Goytacazes - RJ</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">Cardoso Moreira</p>
                  <p>Centro</p>
                  <p>Cardoso Moreira - RJ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Braga & Campos Advogados Associados. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</Link>
          </div>
          <p className="flex items-center gap-1">
            Desenvolvido por <span className="text-white font-medium">Pietro Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

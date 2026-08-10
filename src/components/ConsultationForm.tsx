"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import { MessageSquare } from "lucide-react";

export default function ConsultationForm() {
  const [area, setArea] = useState<string>("");
  const [unit, setUnit] = useState<string>("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!area || !unit) return;

    const message = `Olá! Vim pelo site da Braga & Campos e gostaria de uma orientação sobre: ${area}. Preferência de atendimento: ${unit}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5522998667158?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-brand-navy rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-5 h-full">
            
            <div className="md:col-span-2 bg-brand-gold p-10 flex flex-col justify-center text-brand-navy relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16 blur-2xl" />
              <MessageSquare className="w-12 h-12 mb-6" />
              <h3 className="font-heading text-3xl font-bold mb-4">Qual orientação jurídica você precisa hoje?</h3>
              <p className="font-medium text-brand-navy/80">
                Selecione as opções ao lado para ser direcionado ao especialista correto no WhatsApp.
              </p>
            </div>

            <div className="md:col-span-3 p-10">
              <form onSubmit={handleWhatsAppRedirect} className="flex flex-col h-full justify-center space-y-6">
                
                <div className="space-y-3">
                  <Label htmlFor="area" className="text-white text-base">1. Qual a sua necessidade?</Label>
                  <Select value={area} onValueChange={(val) => setArea(val || "")} required>
                    <SelectTrigger className="w-full bg-white/10 border-white/20 text-white h-12 focus:ring-brand-gold">
                      <SelectValue placeholder="Selecione a área do direito" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Direito Previdenciário / INSS">Direito Previdenciário / INSS</SelectItem>
                      <SelectItem value="Direito Trabalhista">Direito Trabalhista</SelectItem>
                      <SelectItem value="Família / Inventário">Família / Inventário</SelectItem>
                      <SelectItem value="Direito Empresarial / Cível">Direito Empresarial / Cível</SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="unit" className="text-white text-base">2. Unidade de Preferência</Label>
                  <Select value={unit} onValueChange={(val) => setUnit(val || "")} required>
                    <SelectTrigger className="w-full bg-white/10 border-white/20 text-white h-12 focus:ring-brand-gold">
                      <SelectValue placeholder="Selecione onde deseja atendimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Campos dos Goytacazes - Pelinca">Campos dos Goytacazes - Pelinca</SelectItem>
                      <SelectItem value="Cardoso Moreira - RJ">Cardoso Moreira - RJ</SelectItem>
                      <SelectItem value="Atendimento Online">Atendimento Online (Todo Brasil)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  disabled={!area || !unit}
                  className="w-full h-14 mt-4 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {unit ? `Enviar Consulta para ${unit.includes('Online') ? 'Atendimento Online' : unit.split('-')[0]}` : 'Preencha os campos acima'}
                </Button>
                
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

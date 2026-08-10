"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-sm font-semibold text-brand-navy animate-pulse-slow">
        Falar com Advogado
      </div>
      <Link
        href="https://wa.me/5522998667158?text=Olá!%20Vim%20pelo%20site%20da%20Braga%20%26%20Campos%20e%20gostaria%20de%20uma%20consulta."
        target="_blank"
        className="w-16 h-16 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </Link>
    </motion.div>
  );
}

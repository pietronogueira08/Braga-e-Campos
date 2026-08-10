"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O Escritório", href: "#escritorio" },
    { name: "Áreas de Atuação", href: "#areas" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative overflow-hidden rounded-md shadow-sm group-hover:shadow-md transition-shadow">
             <Image src="/logo.jpg" alt="Braga & Campos Logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-xl leading-none tracking-wide ${scrolled ? 'text-brand-navy' : 'text-brand-navy drop-shadow-sm'}`}>
              BRAGA & CAMPOS
            </span>
            <span className="text-[10px] tracking-widest text-brand-gold font-medium uppercase mt-1">
              Advogados Associados
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                scrolled ? "text-gray-600" : "text-brand-navy/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/5522998667158?text=Olá!%20Gostaria%20de%20uma%20consulta%20jurídica."
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-brand-navy hover:bg-brand-navy-light text-brand-gold hover:text-white transition-all shadow-md shadow-brand-navy/20"
          >
            <Phone className="w-4 h-4 mr-2" />
            Consulta Jurídica
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-brand-gold py-2 border-b border-gray-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://wa.me/5522998667158" 
              target="_blank"
              className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-brand-navy text-brand-gold mt-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Consulta Jurídica
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

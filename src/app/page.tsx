"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Wrench, Layers, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="relative min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      
      {/* 1. Navigation Bar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/90 backdrop-blur-md border-surface shadow-sm py-4" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-heading font-bold tracking-tight text-foreground uppercase">
            MetalMecanica <span className="text-primary">Talca</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted hover:text-foreground">
            <a href="#servicios" className="transition-colors hover:text-primary">Servicios</a>
            <a href="#proyectos" className="transition-colors hover:text-primary">Proyectos</a>
            <a href="#nosotros" className="transition-colors hover:text-primary">Nosotros</a>
            <a href="#contacto" className="transition-colors hover:text-primary">Contacto</a>
          </div>
          <Button 
            className="hidden md:inline-flex" 
            onClick={() => window.open('https://wa.me/56989246972', '_blank')}
          >
            WhatsApp
          </Button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Video with Parallax */}
        <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-[120%] w-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1777919393704-727d2bf9dd78?auto=format&fit=crop&q=80"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
          <div className="absolute inset-0 bg-background/40 z-10" />
        </motion.div>
        
        <div className="container relative z-20 mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-surface bg-surface/50 px-3 py-1 text-xs font-semibold text-primary mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Disponible en la Región del Maule
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-6 uppercase">
              MetalMecanica — <span className="text-primary">Talca</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed">
              Servicios de soldadura estructural, mantenimiento de maquinaria pesada en terreno y fabricación metalúrgica integral para sectores residenciales e industriales.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14" onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver proyectos
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                Contactar ahora
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <div className="border-y border-surface bg-surface/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-surface/0 md:divide-surface">
            {[
              { number: "Maestranza", label: "Taller Propio" },
              { number: "Terreno", label: "Autonomía Total" },
              { number: "Talca", label: "Región del Maule" },
              { number: "Técnico", label: "Soporte en Faena" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2 uppercase">{stat.number}</div>
                <div className="text-sm font-medium text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Services Section */}
      <section id="servicios" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground uppercase tracking-tight">Servicios Técnicos</h2>
            <div className="h-1 w-20 bg-primary mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: "Soldadura y Montaje Estructural", desc: "Fabricación y unión de vigas de gran calado para galpones y naves industriales. Montaje en altura con plataformas elevadoras." },
              { icon: Wrench, title: "Maquinaria Pesada en Terreno", desc: "Reparación de componentes de excavadoras, chasis y maquinaria agrícola/forestal directamente en faena con equipos autónomos." },
              { icon: Zap, title: "Acero Inoxidable e Industria", desc: "Soldadura TIG de precisión en tuberías, componentes inoxidables, mantenimiento de cintas transportadoras y estanques." },
              { icon: Shield, title: "Cerrajería y Estructuras Residenciales", desc: "Fabricación de portones ornamentales, rejas perimetrales, protecciones de seguridad y estructuras ligeras como cobertizos." },
              { icon: Wrench, title: "Vehículos Comerciales", desc: "Construcción integral de carros de arrastre tipo Food Truck, incluyendo chasis, revestimientos y terminaciones en acero inoxidable." },
              { icon: Layers, title: "Mecanizado y Recuperación", desc: "Uso de torno mecánico para fabricación y recuperación de piezas como ejes y bujes. Soldadura técnica en sistemas de escape." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
                }}
                className="group relative p-8 rounded-xl bg-surface border border-surface hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <service.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Portfolio / Gallery */}
      <section id="proyectos" className="py-24 bg-surface/10 border-y border-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground uppercase tracking-tight">Proyectos en Ejecución</h2>
              <div className="h-1 w-20 bg-primary mt-6"></div>
            </motion.div>
            <div className="mt-8 md:mt-0 flex gap-4 overflow-x-auto pb-2 scrollbar-hide text-sm font-medium">
              {['Todos', 'Estructural', 'Industrial', 'Residencial'].map((tab, i) => (
                <button key={i} className={cn(
                  "px-4 py-2 rounded-full whitespace-nowrap transition-colors",
                  i === 0 ? "bg-primary text-primary-foreground" : "bg-surface text-muted hover:text-foreground"
                )}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, src: "/proyectos/galpon-1.webp", title: "Estructura de Galpón Industrial", category: "Estructural" },
              { id: 2, src: "/proyectos/maquinaria-1.webp", title: "Reparación de Maquinaria Pesada", category: "Industrial" },
              { id: 3, src: "/proyectos/taller-1.webp", title: "Trabajo en Maestranza Propia", category: "Industrial" },
              { id: 4, src: "/proyectos/terreno-1.webp", title: "Montaje Estructural en Terreno", category: "Estructural" },
              { id: 5, src: "/proyectos/batea-1.webp", title: "Fabricación de Batea Industrial", category: "Industrial" },
              { id: 6, src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80", title: "Fabricación de Rejas Artísticas", category: "Residencial" }
            ].map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group aspect-[4/3] overflow-hidden rounded-2xl bg-surface border border-surface cursor-pointer"
              >
                <Image 
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-lg font-heading font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground uppercase tracking-tight">Metodología de Trabajo</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-surface -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {[
                { step: "1", title: "Diagnóstico", desc: "Evaluación técnica en terreno o taller." },
                { step: "2", title: "Cotización", desc: "Propuesta detallada en menos de 24h." },
                { step: "3", title: "Ejecución", desc: "Soldadura calificada y materiales certificados." },
                { step: "4", title: "Entrega", desc: "Control de calidad y puesta en marcha." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-2xl font-heading font-bold text-primary mb-6 shrink-0 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. About / Trust section */}
      <section id="nosotros" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-surface"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                poster="/proyectos/terreno-1.webp"
              >
                <source src="/proyectos/nosotros.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 uppercase tracking-tight">Capacidad Operativa en Taller y Terreno</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              
              <p className="text-muted mb-6 leading-relaxed">
                Ejecutamos proyectos de fabricación y unión de vigas de acero de gran calado destinadas a naves industriales y galpones, operando tanto en taller propio como en instalaciones industriales y zonas de faena al aire libre.
              </p>
              <p className="text-muted mb-10 leading-relaxed">
                Contamos con autonomía técnica para realizar refuerzo y blindaje de maquinaria pesada en entornos forestales, agrícolas o cercanías a ríos, utilizando equipos de generación autónoma y soldadura TIG de precisión.
              </p>

              <div className="space-y-4">
                {[
                  "Equipos de soldadura Soltec y DeWalt de alta fidelidad.",
                  "Uso de soplete de oxicorte y mecanizado con torno mecánico.",
                  "Operación certificada de plataformas elevadoras (Manlift).",
                  "Equipo de protección personal bajo normas de seguridad industrial."
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section id="contacto" className="bg-surface border-y border-surface/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-24 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 uppercase tracking-tight">Cotizaciones Técnicas</h2>
              <p className="text-muted mb-12 max-w-md leading-relaxed">
                Para solicitar la evaluación técnica de proyectos o cotizar servicios de maestranza, soldadura y reparaciones en terreno en Talca y la Región del Maule.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="text-xs text-primary uppercase tracking-wider font-bold mb-2">Canal Directo</div>
                  <div className="text-xl text-foreground font-medium">+56 9 8924 6972</div>
                  <div className="text-foreground font-medium mt-1">contacto@metalmecanica.cl</div>
                </div>
                <div>
                  <div className="text-xs text-primary uppercase tracking-wider font-bold mb-2">Cobertura</div>
                  <div className="text-foreground font-medium">Sede Talca. Región del Maule.</div>
                  <div className="text-muted">Despliegue a terreno en zonas forestales, agrícolas e industriales.</div>
                </div>
              </div>
            </div>

            <div className="bg-background p-12 lg:p-24 border-l border-surface/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted">Nombre completo</label>
                    <Input placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted">Teléfono / WhatsApp</label>
                    <Input placeholder="+56 9 1234 5678" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">Tipo de proyecto</label>
                  <Select>
                    <option value="" disabled selected hidden>Selecciona una opción</option>
                    <option value="estructural">Soldadura Estructural</option>
                    <option value="maquinaria">Reparación Maquinaria Pesada</option>
                    <option value="inox">Acero Inoxidable / Industrial</option>
                    <option value="cerrajeria">Cerrajería / Residencial</option>
                    <option value="foodtruck">Food Truck / Vehículos</option>
                    <option value="mecanizado">Mecanizado / Torno</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">Detalles del requerimiento</label>
                  <Textarea placeholder="Describa brevemente el servicio solicitado..." className="min-h-[120px]" />
                </div>

                <Button type="submit" size="lg" className="w-full text-base h-14 mt-4 uppercase font-bold tracking-wider">
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-background py-12 border-t border-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-xl font-heading font-bold tracking-tight text-foreground uppercase">
              MetalMecanica <span className="text-primary">Talca</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm font-medium text-muted">
              <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
              <a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
              <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            </div>

            <div className="flex items-center space-x-4 text-muted">
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left text-sm text-muted/50 pt-8 border-t border-surface">
            © 2026 MetalMecanica. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* 11. Floating WhatsApp Button */}
      <a 
        href="https://wa.me/56989246972" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

    </main>
  );
}

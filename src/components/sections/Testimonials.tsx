import { motion } from "framer-motion";
import { config } from "@/config";
import { ReviewCard } from "@/components/ReviewCard";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section id="testimonials" className="py-32 bg-[#0D0C0C] relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF7F50]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <p className="text-[#FF7F50] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Lo Que Dicen Nuestros Clientes
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display text-white tracking-widest">
                        TRABAJOS QUE <span className="text-[#FF7F50]">HABLAN</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="h-full"
                        >
                            <ReviewCard 
                                name={item.name} 
                                role={item.role} 
                                text={item.text} 
                                tags={item.tags} 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
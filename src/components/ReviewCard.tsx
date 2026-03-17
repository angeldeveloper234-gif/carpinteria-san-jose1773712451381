import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export function ReviewCard({ name, role, text, tags }: ReviewCardProps) {
    return (
        <div className="bg-[#111010] border border-white/5 p-8 md:p-10 hover:border-[#FF7F50]/30 transition-all duration-500 group relative overflow-hidden h-full flex flex-col">
            {/* Quote watermark */}
            <Quote
                size={80}
                className="absolute -top-2 -right-2 text-[#FF7F50]/5 group-hover:text-[#FF7F50]/10 transition-colors"
                fill="currentColor"
            />

            <div className="flex flex-col h-full relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} size={16} className="fill-[#FF7F50] text-[#FF7F50]" />
                    ))}
                </div>

                <p className="text-lg md:text-xl font-sans font-light text-zinc-300 leading-relaxed mb-8 flex-1 group-hover:text-white transition-colors">
                    "{text}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="bg-[#FF7F50]/10 text-[#FF7F50] text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-[#FF7F50]/20">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-11 h-11 bg-[#FF7F50]/20 flex items-center justify-center text-[#FF7F50] font-display font-bold text-xl flex-shrink-0">
                        {name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-white font-sans text-sm font-bold tracking-wider uppercase">
                            {name}
                        </p>
                        <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5">
                            {role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
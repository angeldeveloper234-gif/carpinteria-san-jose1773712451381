import { ClipboardList, Wrench, CheckCircle2 } from 'lucide-react';

interface RoadmapBlockProps {
    step: string;
    title: string;
    desc: string;
    index: number;
}

export function RoadmapBlock({ step, title, desc, index }: RoadmapBlockProps) {
    const icons = [
        <ClipboardList size={28} className="text-[#FF7F50]" />,
        <Wrench size={28} className="text-[#FF7F50]" />,
        <CheckCircle2 size={28} className="text-[#FF7F50]" />,
    ];

    return (
        <div className="bg-[#111010] border border-white/8 p-10 rounded-none hover:border-[#FF7F50]/40 transition-all duration-500 overflow-hidden h-full">
            {/* Number watermark */}
            <div className="absolute -top-6 -right-4 text-[120px] font-display font-bold text-white/[0.02] pointer-events-none group-hover:text-[#FF7F50]/[0.04] transition-colors leading-none select-none">
                {step}
            </div>

            <div className="relative z-10">
                {/* Step indicator */}
                <div className="w-14 h-14 border border-[#FF7F50]/30 flex items-center justify-center mb-8 group-hover:border-[#FF7F50]/60 group-hover:bg-[#FF7F50]/10 transition-all">
                    {icons[index % 3]}
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#FF7F50] font-mono text-xs font-black tracking-widest uppercase">PASO {step}</span>
                    <div className="h-[1px] w-6 bg-[#FF7F50]/40"></div>
                </div>

                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-[#FF7F50] transition-colors tracking-wider">
                    {title}
                </h3>

                <p className="text-zinc-500 font-sans font-light text-base leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}
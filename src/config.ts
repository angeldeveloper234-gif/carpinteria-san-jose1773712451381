interface Product {
    id: string | number;
    image: string;
    name: string;
    price: string;
    desc: string;
}

export const config = {
    branding: {
        name: "Carpintería San José",
        slogan: "Muebles que Perduran",
        logo: "San José",
        trade: "Carpintería y Ebanistería",
    },

    landingClientId: "f9483f0e-b4c9-49b8-8d63-e7f6da8a50c2",

    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    },
    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    bookingUrl: "#contact",
    paymentLink: "#",
    googleMapsReviewUrl: "#",

    dynamicContent: {
        city: "Mérida",
        localAnchor: "Montes de Amé",
        stats: {
            projectsDone: 1500,
            experienceYears: 30,
            happyClients: 1200
        },
        specialization: {
            title: "Carpintería",
            pain: "Muebles desechables",
            ego: "Tu Carpintería de Confianza",
            hook: "MUEBLES QUE PERDURAN"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico",
                desc: "Evaluamos tu espacio y necesidades específicas para ofrecerte la mejor solución en madera."
            },
            {
                step: "02",
                title: "Estrategia",
                desc: "Diseñamos el mueble o cocina ideal, seleccionando materiales duraderos y acabados premium."
            },
            {
                step: "03",
                title: "Resolución",
                desc: "Fabricación artesanal e instalación limpia. Tu proyecto entregado con garantía absoluta."
            }
        ],
        pricing: {
            basic: "Reparaciones desde $800 MXN",
            comprehensive: "Cocinas desde $25,000 MXN",
            retainer: "Mantenimiento anual disponible"
        }
    },

    services: [
        {
            id: "01",
            icon: "Kitchen",
            title: "Cocinas Integrales",
            problem: "¿Tu cocina actual es disfuncional?",
            agitation: "Una mala distribución te hace perder tiempo y espacio valioso cada día.",
            solve: "Diseño y fabricación de cocinas que combinan funcionalidad y elegancia.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "Furniture",
            title: "Muebles a Medida",
            problem: "¿Nada encaja en ese espacio?",
            agitation: "Los muebles de tienda suelen tener medidas estándar que desperdician tus rincones.",
            solve: "Closets, mesas y mobiliario personalizado para aprovechar cada centímetro.",
            price: "pricing.comprehensive"
        },
        {
            id: "03",
            icon: "Hammer",
            title: "Restauración",
            problem: "¿Muebles antiguos dañados?",
            agitation: "Tirar un mueble de buena madera es un crimen. Solo necesita mano experta.",
            solve: "Devolvemos la vida a tus muebles antiguos con técnicas artesanales.",
            price: "pricing.basic"
        }
    ],

    testimonials: [
        {
            name: "Branon Enrique Alderete",
            role: "Cliente Verificado",
            text: "Carpintería San José se adapta a presupuestos e ideas. No intentan estafar, honestidad total.",
            tags: ["Honestidad", "Presupuesto"]
        },
        {
            name: "David Ruz",
            role: "Cliente Verificado",
            text: "Excelente mano de obra, hacen trabajos de muy buena calidad y durabilidad.",
            tags: ["Calidad", "Durabilidad"]
        },
        {
            name: "Ben Afleck",
            role: "Colaborador",
            text: "Recomiendo ampliamente consultar y pedir cotizaciones de todo tipo de muebles.",
            tags: ["Recomendado", "Variedad"]
        }
    ],

    demoUser: {
        name: "Cliente",
        email: "carpinteriasanjoseoficial@gmail.com",
        whatsapp: "+529994589306"
    },

    features: {
        showGallery: true,
        showProducts: true,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },

    gallery: [
        {
            title: "Cocina Moderna",
            category: "Cocinas",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Closet Minimalista",
            category: "Mobiliario",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Restauración Mesa",
            category: "Restauración",
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Estantería Roble",
            category: "Mobiliario",
            image: "/gallery/estanteria-roble.png"
        }
    ],

    products: [
        {
            id: 1,
            name: "Mesa Comedor Artesanal",
            desc: "Sólida mesa de roble tallada a mano, con acabados naturales que resaltan la veta de la madera.",
            price: "$12,500 MXN",
            image: "/products/mesa-comedor.png"
        },
        {
            id: 2,
            name: "Escritorio Ejecutivo Premium",
            desc: "Diseño minimalista y ergonómico, ideal para oficina en casa con compartimentos ocultos.",
            price: "$8,900 MXN",
            image: "/products/escritorio-roble.png"
        },
        {
            id: 3,
            name: "Puerta Principal de Lujo",
            desc: "Puerta de seguridad en madera de nogal con detalles tallados y herrajes de bronce.",
            price: "$18,000 MXN",
            image: "/products/puerta-tallada.png"
        }
    ] as Product[]
};
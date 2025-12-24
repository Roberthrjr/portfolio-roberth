import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
    Server,
    Database,
    Terminal,
    Cpu,
    Award,
    Briefcase,
    GraduationCap,
    CheckCircle2,
    Download,
    ArrowUp,
    Cloud
} from 'lucide-react';
import { motion } from "motion/react";
import data from './data/profile.json';

function App() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

            {/* --- HERO SECTION --- */}
            <motion.header
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 text-white pb-24 pt-12"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                        {/* FOTO DE PERFIL */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className='relative'
                        >
                            <img
                                src="/foto.png"
                                alt={data.profile.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl bg-slate-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://ui-avatars.com/api/?name=Roberth+Rios&background=0D8ABC&color=fff&size=128";
                                }}
                            />
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-slate-900 rounded-full"
                                title='Disponible para trabajar'
                            ></motion.span>
                        </motion.div>

                        {/* DESCRIPCION DE PERFIL */}
                        <div className="text-center md:text-left flex-1">
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-4xl font-bold tracking-tight"
                            >
                                {data.profile.name}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className='text-blue-400 font-medium text-lg mt-2 flex items-center justify-center md:justify-start gap-2'
                            >
                                <Terminal size={20} /> {data.profile.role}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className='mt-4 text-slate-300 max-w-2xl leading-relaxed text-sm md:text-base'
                            >
                                {data.profile.summary}
                            </motion.p>

                            <motion.div
                                className='flex flex-wrap justify-center md:justify-start gap-3 mt-6'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {/* --- NUEVO BOTÓN: DESCARGAR CV --- */}
                                <motion.a
                                    href="/cv_roberth_rios.pdf"
                                    download="CV_Roberth_Rios.pdf"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition text-sm text-white font-medium shadow-lg shadow-emerald-900/20"
                                >
                                    <Download size={16} /> Descargar CV
                                </motion.a>
                                {/* BOTONES DE CONTACTO */}
                                {[
                                    { href: `mailto:${data.profile.email}`, icon: Mail, label: 'Contactar', color: "bg-slate-800" },
                                    { href: data.profile.social.linkedin, icon: Linkedin, label: 'LinkedIn', color: "bg-[#0077b5]" },
                                    { href: data.profile.social.github, icon: Github, label: 'GitHub', color: "bg-gray-700" },
                                ].map((btn, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={btn.href}
                                        target={btn.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center gap-2 px-4 py-2 ${btn.color} rounded-lg hover:opacity-90 transition text-sm text-white`}
                                    >
                                        <btn.icon size={16} /> {btn.label}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-12 space-y-8">

                {/* LAYOUT DE 2 COLUMNAS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* COLUMNA IZQUIERDA (Info Lateral) */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Skills */}
                        <motion.div variants={fadeInUp} className='bg-white rounded-xl shadow-sm border border-slate-200 p-6'>
                            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                                <Cpu size={20} className="text-blue-600" /> Stack Técnico
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{ scale: 1.1, backgroundColor: "#e2e8f0" }}
                                        className='px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold border border-slate-200 cursor-default'
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Educación */}
                        <motion.div variants={fadeInUp} className='bg-white rounded-xl shadow-sm border border-slate-200 p-6'>
                            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                                <GraduationCap size={20} className="text-purple-600" /> Educación
                            </h3>
                            <div className="space-y-6">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="relative pl-4 border-l-2 border-slate-200">
                                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-400"></div>
                                        <h4 className="font-bold text-sm text-slate-900 lead">{edu.degree}</h4>
                                        <p className="text-xs text-blue-600 font-semibold mt-1">{edu.school}</p>
                                        <p className="text-xs text-slate-400 mt-0.5 mb-2">{edu.period}</p>
                                        {edu.detail && (
                                            <p className="text-xs text-slate-500 italic border-l-2 border-slate-100 pl-2">
                                                "{edu.detail}"
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>


                        {/* Certificaciones */}
                        <motion.div variants={fadeInUp} className='bg-white rounded-xl shadow-sm border border-slate-200 p-6'>
                            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                                <Award size={20} className="text-yellow-600" /> Certificaciones
                            </h3>
                            <ul className="space-y-3">
                                {data.certifications.map((cert, index) => (
                                    <li key={index} className="text-xs text-slate-600 flex gap-2 group">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                        <span className="text-slate-600 leading-snug">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* COLUMNA DERECHA (Principal) */}
                    <div className="md:col-span-2 space-y-8">

                        {/* Experiencia Laboral */}
                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8"
                        >
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6 border-b border-slate-100 pb-2">
                                <Briefcase className="text-blue-600" size={24} /> Experiencia Profesional
                            </h2>
                            <div className="space-y-8">
                                {data.experience.map((job, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between items-start flex-wrap gap-2">
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition">
                                                    {job.role}
                                                </h3>
                                                <p className="text-blue-500 font-medium text-sm">{job.company}</p>
                                            </div>
                                            <span className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                                                {job.period}
                                            </span>
                                        </div>
                                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                            {job.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Proyectos */}
                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8"
                        >
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6 border-b border-slate-100 pb-2">
                                <Server className="text-blue-600" size={24} /> Proyectos Destacados
                            </h2>
                            <div className="grid gap-6">
                                {data.projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                        className="bg-slate-50 rounded-xl p-5 border border-transparent hover:border-blue-200 transition-colors"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                                                    {project.title.includes("Cloud") ? <Server size={20} /> :
                                                        project.title.includes("Data") ? <Database size={20} /> :
                                                            <Code size={20} />}
                                                </div>
                                                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <a
                                                href={project.link}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-blue-600"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">{project.desc}</p>
                                        <div className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded border border-blue-100">
                                            {project.tech}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                    </div>
                </div>

                <footer className="pt-12 pb-8 border-t border-slate-200 mt-12 bg-slate-50">
                    <div className="flex flex-col items-center justify-center space-y-4">

                        {/* Sección de Stack Tecnológico e Infraestructura */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex flex-wrap justify-center items-center gap-2 text-sm text-slate-500 px-4"
                        >
                            <span className="hidden sm:inline">Construido con</span>

                            {/* Badges de Desarrollo */}
                            <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">React</span>
                            <span className="font-semibold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">Tailwind</span>

                            {/* Separador vertical */}
                            <span className="text-slate-300 mx-1">|</span>

                            {/* Badge de Infraestructura (EL IMPORTANTE) */}
                            <span className="flex items-center gap-1 font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 shadow-sm">
                                <Cloud size={12} className="fill-orange-500 text-orange-600" />
                                Desplegado en AWS S3
                            </span>
                        </motion.div>

                        {/* Copyright y CIP */}
                        <div className="text-center px-4">
                            <p className="text-slate-600 font-medium">
                                © {new Date().getFullYear()} {data.profile.name}
                            </p>
                            <p className="text-slate-400 text-sm mt-1">
                                Ingeniero de Sistemas Colegiado <span className="text-slate-600 font-semibold">CIP 321353</span>
                            </p>
                        </div>

                        {/* Botón Volver Arriba */}
                        <motion.button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            whileHover={{ y: -3 }}
                            className="mt-4 p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
                            title="Volver arriba"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </footer>

            </main>
        </div>
    );
}

export default App;
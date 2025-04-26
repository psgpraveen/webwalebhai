"use client"
import Link from "next/link";
import { useState , useEffect } from "react";
import Whatsapp from './../_components/whatsapp';
import Header from "../_components/Header";
interface props {
    habhaiha:boolean;
}
// ServiceCard component with animated shine
function ServiceCard({
  title,
  desc,
  svg,
  color,
}: {
  title: string;
  desc: string;
  svg: React.ReactNode;
  color: string;
}) {
  const [shine, setShine] = useState(false);
  return (
    <div
      className={`group relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-72 cursor-pointer hover:scale-105 transition-transform duration-300`}
      style={{ borderTop: `4px solid ${color}` }}
      onMouseEnter={() => setShine(true)}
      onMouseLeave={() => setShine(false)}
    >
      {/* Shine animation */}
      <div className="absolute left-[-75%] top-0 w-1/2 h-full pointer-events-none">
        {shine && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-xl animate-shine"
            onAnimationEnd={() => setShine(false)}
          />
        )}
      </div>
      <span className="mb-4">{svg}</span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function HomeHero({habhaiha} : props) {
    useEffect(()=>{
        console.log(habhaiha)
    },[])
  
  return (<>
        {habhaiha ?  " " : <Header/>}

      <section className="bg-white py-14 px-4 text-center relative overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-2">
          About Webwalebhai Consultancy Services
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          India’s No 1 <span className="italic text-blue-700">Website Design</span> Company
        </h1>
        <div className="text-lg text-gray-500 mb-2">Successfully Delivered 5800+ Websites</div>
        <p className="text-base text-gray-600 mb-8">
          Webwalebhai offers a wide range of <span className="font-semibold text-blue-700">website</span> design services in India: business sites, personal blogs, web portals, micro-sites, e-commerce, static and dynamic websites, and more. We empower brands of all sizes to stand out online with modern, scalable, and high-converting solutions.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <ServiceCard
          title="Web Design"
          desc="Usability, Layout, CMS, Responsive"
          color="#2563eb"
          svg={
            <svg width="80" height="80" fill="none" viewBox="0 0 64 64" className="text-blue-600">
              <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="#fff"/>
              <rect x="16" y="24" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="#fff"/>
              <circle cx="20" cy="36" r="2" fill="currentColor"/>
              <circle cx="32" cy="36" r="2" fill="currentColor"/>
              <circle cx="44" cy="36" r="2" fill="currentColor"/>
              <rect x="24" y="40" width="16" height="4" rx="1" fill="currentColor"/>
            </svg>
          }
        />
        <ServiceCard
          title="Digital Marketing"
          desc="SEO, Targeting, Research, Strategy"
          color="#f59e42"
          svg={
            <svg width="80" height="80" fill="none" viewBox="0 0 64 64" className="text-yellow-500">
              <ellipse cx="32" cy="32" rx="24" ry="14" fill="currentColor" opacity="0.2"/>
              <path d="M16 32h32M32 16v32" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="32" r="6" fill="currentColor"/>
            </svg>
          }
        />
        <ServiceCard
          title="E-Commerce"
          desc="Online Stores, Secure Payments, Growth"
          color="#16a34a"
          svg={
            <svg width="80" height="80" fill="none" viewBox="0 0 64 64" className="text-green-600">
              <rect x="12" y="20" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="#fff"/>
              <path d="M20 44v4a4 4 0 004 4h16a4 4 0 004-4v-4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="24" cy="52" r="2" fill="currentColor"/>
              <circle cx="40" cy="52" r="2" fill="currentColor"/>
              <rect x="28" y="28" width="8" height="8" rx="2" fill="currentColor"/>
            </svg>
          }
        />
        <ServiceCard
          title="Branding"
          desc="Logo, Identity, Visual Strategy"
          color="#db2777"
          svg={
            <svg width="80" height="80" fill="none" viewBox="0 0 64 64" className="text-pink-500">
              <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="#fff"/>
              <path d="M32 16v20l10 6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="32" r="6" fill="currentColor"/>
            </svg>
          }
        />
      </div>
       {
        habhaiha ?" " :  <>
        <div className="flex justify-center mt-8">
        <Link href="/proposals">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="inline-block">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8c-.6 1.2-1.5 2.2-2.5 3.1-1.8 1.6-4.2 2.6-6.6 2.6-2.3 0-4.6-.8-6.3-2.3-.8-.7-1.5-1.4-2-2.2C2.1 15.6 2 15.3 2 15V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6.5z" stroke="currentColor" strokeWidth="2" />
              <path d="M9 11l3 3 5-5" stroke="currentColor" strokeWidth="2" />
            </svg>
            Get a Free Quote
          </button>
        </Link>
      </div>
         </> 
    }
      {/* Floating WhatsApp Button */}
      <Whatsapp/>
    </section>  </>
  );
}

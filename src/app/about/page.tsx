'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  KeyRound, 
  Award, 
  ArrowLeft,
  Star,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';

export default function AboutJohnPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#0f2038] text-white text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">Blackswan Locksmith Co. • Tucson Master Technician</span>
          </div>
          <Link href="/" className="text-amber-400 hover:underline flex items-center gap-1 font-semibold text-xs">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#0f2038] flex items-center justify-center text-amber-400 shadow-md">
              <KeyRound className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-black tracking-tight text-[#0f2038] uppercase">Blackswan</span>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200">
                  Est. 1997
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Master Locksmith Co. • Tucson, AZ</p>
            </div>
          </Link>

          <a
            href="tel:5203121534"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-slate-950" />
            <span>(520) 312-1534</span>
          </a>
        </div>
      </header>

      {/* 3. HERO BIO */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Profile */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80" 
                  alt="John Fiore Master Locksmith Tucson"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2038]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                    Sole Owner & Operator
                  </span>
                  <p className="text-xl font-black mt-1">John Fiore</p>
                  <p className="text-xs text-slate-300">Master Locksmith • Serving Tucson Since 1997</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-[#0f2038]">BBB A+ Accredited</span>
                </div>
                <div className="flex items-center text-amber-600 font-bold">
                  <Star className="w-4 h-4 fill-amber-600 mr-1" />
                  5.0 Rating (150+ Reviews)
                </div>
              </div>
            </div>

            {/* Story & Background */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Catalina Foothills #1 Rated Locksmith</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#0f2038] tracking-tight">
                Meet John Fiore
              </h1>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  For nearly 30 years, John has been the go-to independent master locksmith across Tucson, Catalina Foothills, Oro Valley, and surrounding Pima County. When you call Blackswan Locksmith Co., you don't get routed to a random call center—you speak straight to John.
                </p>
                <p>
                  Established in 1997 out of his Central Tucson location on East Fairmount Place, John built his reputation on damage-free entry, personal accountability, and flat upfront pricing before he ever rolls his van.
                </p>
                <p>
                  Specializing in electronic safe recovery, jammed deadbolts, and automotive lockout rescues in the Southern Arizona heat, John carries the precision tooling to solve lockouts on the spot without ruining your door or vehicle weather stripping.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="tel:5203121534"
                  className="inline-flex items-center justify-center gap-3 bg-[#0f2038] hover:bg-slate-800 text-amber-400 font-extrabold px-8 py-4 rounded-xl text-base shadow-xl shadow-slate-900/10 transition-transform active:scale-95"
                >
                  <Phone className="w-5 h-5 fill-amber-400" />
                  <span>Call John Directly: (520) 312-1534</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THREE PILLARS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-[#0f2038]">Why Tucson Trusts John</h2>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Direct Local Craftsmanship</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">Direct Craftsman, No Brokers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No middleman or broker selling your ticket to an unlicensed stranger. John quotes you and performs the work himself.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">Damage-Free Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trained in precision bypass, air wedges, and non-destructive entry. Your locks and car paint remain fully protected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">Flat Upfront Rates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero surprise arrival fees. John gives you the exact quote over the phone before heading out.
              </p>
            </div>
          </div>

          {/* Discounts */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4">
            <HeartHandshake className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong className="text-base font-bold text-[#0f2038] block mb-1">Community Discounts:</strong>
              10%–20% fee reduction for First Responders, Police Officers, Firefighters, Medical Workers, and Tucson Seniors.
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 bg-[#0f2038] text-white text-xs px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-semibold text-sm">
            <MapPin className="w-4 h-4" />
            <span>5421 E Fairmount Pl, Tucson, AZ 85712 • Blackswan Locksmith Co.</span>
          </div>
          <p className="text-slate-300">
            Catalina Foothills • Oro Valley • Downtown Tucson • Midtown • Marana • Tanque Verde
          </p>
        </div>
      </footer>

    </main>
  );
}
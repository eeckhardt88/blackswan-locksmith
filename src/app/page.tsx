'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Car, 
  Home, 
  KeyRound, 
  Clock, 
  Star, 
  Award, 
  Vault, 
  HeartHandshake, 
  CheckCircle2, 
  Briefcase,
  Camera
} from 'lucide-react';

const reviews = [
  {
    name: 'Marla S.',
    location: 'Catalina Foothills',
    tag: 'Safe Opening',
    text: 'We had a safe that needed to be unlocked quickly. John came over right away, tried to unlock it but had to go make a key. Came back quickly and had it open! Very reasonable prices and could not have been nicer. Thank you John!',
  },
  {
    name: 'Celina P.',
    location: 'Tucson Metro',
    tag: 'Car Lockout',
    text: 'Left my keys inside my car with groceries in the heat... John came to the rescue! I cannot thank him enough for not only his knowledge and patience but he did it so fast and with zero scratches on my door. I will NEVER call anyone else.',
  },
  {
    name: 'James L.',
    location: 'Oro Valley Homeowner',
    tag: 'Safe Diagnostics',
    text: 'We thought our 20 y.o. electronic safe was completely dead. John Fiore responded quickly and accurately diagnosed the problem. While on-site he also adjusted our sticking front deadbolts.',
  },
  {
    name: 'Tre Smith',
    location: 'Tucson',
    tag: 'Keypad Failure',
    text: 'Called regarding a battery and code malfunction on my home safe. Spoke with John directly—extremely cordial, knowledgeable, and walked me through practical steps before saving the day on-site.',
  },
  {
    name: 'Troy A.',
    location: 'Midtown Tucson',
    tag: 'Lock & Knob Repair',
    text: 'Showed up exactly when he said he would, opened the door, and adjusted the seized deadbolt. Very knowledgeable and courteous craftsman. Exactly what local business should be.',
  },
  {
    name: 'David R.',
    location: 'Tanque Verde',
    tag: 'Residential Rekey',
    text: 'Rekeyed all 5 exterior locks for our new home. John was clean, on time, stamped duplicate keys right in his truck, and his prices were exactly what he quoted over the phone.',
  },
  {
    name: 'Sarah K.',
    location: 'Sam Hughes / University',
    tag: 'Emergency Entry',
    text: 'Honest pricing is rare with locksmiths. Quoted me flat upfront and did not add a single hidden fee. Arrived quickly and had my front door open in under 4 minutes without drilling.',
  },
];

export default function BlackswanLocksmith() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.85;

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900 pb-20 sm:pb-0">
      
      {/* 1. TOP COMMUNITY BANNER */}
      <div className="bg-[#0f2038] text-white text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">Central Tucson Mobile Unit • Always On Immediate Call</span>
          </div>
          <div className="text-amber-400 font-bold text-[11px] sm:text-xs tracking-wide">
            Catalina Foothills #1 Rated Locksmith • 30 Years Serving Pima County
          </div>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#0f2038] flex items-center justify-center text-amber-400 shadow-md">
              <KeyRound className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-[#0f2038] uppercase">Blackswan</span>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200">
                  Est. 1997
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Master Locksmith Co. • Tucson, AZ</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#safe-vault" className="hover:text-amber-600 transition-colors">Safe & Vault</a>
            <a href="#realtors" className="hover:text-amber-600 transition-colors">Realtor Accounts</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">About John</a>
            <a href="#reviews" className="hover:text-amber-600 transition-colors">Reviews</a>
          </nav>

          <a
            href="tel:5203121534"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-slate-950" />
            <span>(520) 312-1534</span>
          </a>

        </div>
      </header>

      {/* 3. HERO: TUCSON LANDSCAPE BACKDROP + CAR LOCKOUT PHOTO */}
      <section className="relative py-14 lg:py-20 border-b border-slate-200 overflow-hidden bg-slate-50">
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url('/tucson-desert.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold shadow-sm">
                <Award className="w-4 h-4 text-amber-600" />
                <span>30 Years Serving Tucson Metro, Foothills & Oro Valley</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f2038] tracking-tight leading-[1.08]">
                "Break a window or <span className="text-amber-600 underline decoration-amber-400/40">call John</span>."
              </h1>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Keys stranded inside your vehicle in the desert heat? Deadbolt seized? Need a residential safe opened or house locks rekeyed today? 
                When you call Blackswan, you deal directly with master locksmith <strong className="text-slate-950 font-bold">John Fiore</strong>—never an out-of-state call center. Clear upfront flat pricing, prompt arrival, and 100% damage-free entry.
              </p>

              {/* Conversion Buttons */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="tel:5203121534"
                    className="inline-flex items-center justify-center gap-3 bg-[#0f2038] hover:bg-slate-800 text-amber-400 font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg shadow-xl shadow-slate-900/10 transition-transform active:scale-95"
                  >
                    <Phone className="w-5 h-5 fill-amber-400" />
                    <span>Call John: (520) 312-1534</span>
                  </a>

                  <a
                    href="sms:5203121534?body=Hi%20John,%20I'm%20locked%20out.%20Here%20is%20a%20photo%20of%20my%20lock:"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 px-5 py-4 rounded-xl border border-slate-300 shadow-sm transition-colors"
                  >
                    <Camera className="w-4 h-4 text-amber-600" />
                    <span>Text a Photo of Your Lock</span>
                  </a>
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  Direct phone line • Flat upfront pricing confirmed before truck rolls
                </p>
              </div>

              {/* Guarantees */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-300 max-w-lg text-left">
                <div>
                  <p className="text-base font-black text-[#0f2038]">0% Damage</p>
                  <p className="text-[11px] text-slate-500">Non-destructive entry</p>
                </div>
                <div>
                  <p className="text-base font-black text-amber-600">Flat Rates</p>
                  <p className="text-[11px] text-slate-500">No arrival fee surprises</p>
                </div>
                <div>
                  <p className="text-base font-black text-[#0f2038]">30 Years</p>
                  <p className="text-[11px] text-slate-500">BBB A+ Rated</p>
                </div>
              </div>

            </div>

            {/* Right Column: CAR LOCKOUT PHOTO */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xl space-y-3">
                
                <div className="relative rounded-xl overflow-hidden h-80 w-full bg-slate-900">
                  <img 
                    src="/car-lockout.jpg" 
                    alt="Car keys and vehicle door handle emergency lockout"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-slate-200/80 shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                        Rapid Local Arrival
                      </span>
                      <p className="text-xs font-bold text-[#0f2038] mt-1">Car Lockout in Tucson Heat? John Rolls Fast.</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                <a 
                  href="#about"
                  className="p-3 bg-slate-50 hover:bg-amber-50/60 rounded-xl border border-slate-100 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <h3 className="font-bold text-[#0f2038] text-xs group-hover:text-amber-700 flex items-center gap-1">
                      John Fiore — Master Locksmith <span className="text-[10px] text-amber-600 font-semibold">(Read Story ↓)</span>
                    </h3>
                    <p className="text-[11px] text-slate-500">Centrally based in Tucson, AZ</p>
                  </div>
                  <div className="flex items-center text-amber-600 font-bold text-xs bg-amber-100/70 px-2 py-1 rounded">
                    <Star className="w-3.5 h-3.5 fill-amber-600 mr-1" />
                    5.0 (150+)
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THREE EMERGENCY CATEGORIES */}
      <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700">What Can We Help You With?</span>
            <h2 className="text-3xl font-black text-[#0f2038]">Common Emergencies Handled Daily</h2>
            <p className="text-sm text-slate-500">
              Precision bypass tooling designed to protect your door frames, weather seals, and paint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Auto Lockout */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between space-y-5 shadow-sm hover:border-amber-400 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f2038]">Keys Locked In Car or Trunk</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Locked out at the grocery store or gas station? John uses non-marking air-wedges and long-reach tools that leave zero marks on paint or weather stripping.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Damage-free door & trunk entry</span>
              </div>
            </div>

            {/* Residential / Deadbolt */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between space-y-5 shadow-sm hover:border-amber-400 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f2038]">House Lockouts & Snapped Keys</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Key broken off in the cylinder, or is the deadbolt jammed? John extracts snapped keys, opens locked doors, and rekeys locks on-site so your home stays secure.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Keep your existing decorative handles</span>
              </div>
            </div>

            {/* Safe / Vault Specialist */}
            <div className="bg-amber-50/50 border-2 border-amber-300 rounded-2xl p-7 flex flex-col justify-between space-y-5 shadow-sm relative">
              <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                John's Specialty
              </span>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Vault className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f2038]">Safe & Lockbox Diagnostics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Electronic keypad dead, forgotten code, or jammed home safe? Other locksmiths turn safe jobs down—John specializes in residential safe diagnostics and opening.
                </p>
              </div>
              <div className="pt-4 border-t border-amber-200/80 text-xs text-amber-900 flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Electronic keypad & home safe recovery</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. RESIDENTIAL SAFE PHOTO */}
      <section id="safe-vault" className="py-20 bg-white border-b border-slate-200 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-lg">
              <img 
                src="/home-safe.jpg" 
                alt="Solid metal residential home security safe"
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
                <p className="text-xs font-bold text-[#0f2038]">Home & Personal Safes</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Recovered Without Damaging Your Safe or Contents</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Specialized Local Craft</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f2038]">Locked Out of Your Home Safe?</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              It happens all the time: the digital keypad batteries die, a backup key is misplaced, or the solenoid gets stuck. Instead of taking a crowbar or drill to your personal safe, John diagnoses the electronic malfunction and recovers your passports, firearms, or valuables safely.
            </p>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <strong className="text-[#0f2038] font-bold block mb-0.5">Community Standing Discounts:</strong>
                10%–20% fee reduction for First Responders, Law Enforcement, Medical Staff, and Seniors across Pima County.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. REALTOR & PROPERTY MANAGER PARTNER SECTION */}
      <section id="realtors" className="py-20 bg-slate-50 border-b border-slate-200 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                  <span>Real Estate & Property Management Accounts</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0f2038]">
                  Tucson Realtors & Property Managers
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Need a home rekeyed same-day before closing? Dealing with a seized lockbox at a vacant listing or need master key systems for multi-family rentals? John provides reliable, scheduled rekeying with net invoicing and direct craftsman communication.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Same-Day Closing Rekeys</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Lockbox Extraction</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Master Key Systems</span>
                  </div>
                </div>
              </div>

              {/* CLEAN FIXED BUTTON (One line, no wrap) */}
              <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center gap-2">
                <a
                  href="tel:5203121534"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0f2038] hover:bg-slate-800 text-amber-400 font-black px-6 py-3.5 rounded-xl text-sm whitespace-nowrap shadow-lg shadow-slate-900/10 transition-transform active:scale-95 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 fill-amber-400 shrink-0" />
                  <span>(520) 312-1534</span>
                </a>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-center md:text-right">
                  Direct Broker Billing & Net Invoicing
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT JOHN */}
      <section id="about" className="py-20 bg-white border-b border-slate-200 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-md space-y-4 text-center">
                
                <div className="w-16 h-16 rounded-2xl bg-[#0f2038] text-amber-400 flex items-center justify-center shadow-md mx-auto">
                  <KeyRound className="w-8 h-8 stroke-[2.2]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-[#0f2038]">John Fiore</h3>
                  <p className="text-xs text-amber-700 font-bold uppercase tracking-wider">
                    Master Locksmith & Sole Craftsman
                  </p>
                  <p className="text-xs text-slate-500">Blackswan Locksmith Co. • Established 1997</p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Service Model:</span>
                    <strong className="text-slate-900">100% Mobile Van Dispatch</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Coverage:</span>
                    <strong className="text-slate-900">All Tucson & Pima County</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Direct Phone:</span>
                    <strong className="text-amber-700">(520) 312-1534</strong>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs bg-white p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-[#0f2038]">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>BBB A+ Accredited</span>
                  </div>
                  <div className="flex items-center text-amber-600 font-bold">
                    <Star className="w-4 h-4 fill-amber-600 mr-1" />
                    5.0 (150+)
                  </div>
                </div>

              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Direct Craftsmanship</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f2038]">
                About John Fiore
              </h2>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  For nearly 30 years, John has served Tucson residents as an independent tradesman. When you call Blackswan Locksmith Co., you won't be bounced to a third-party lead generation call center or outsourced broker—you speak directly with John.
                </p>
                <p>
                  Specializing in residential lockouts, delicate safe recovery, and precision deadbolt rekeying, John approaches every service call with non-destructive methods and honest upfront flat pricing before he ever rolls his truck.
                </p>
                <p>
                  Whether you're locked out in the heat or moving into a new home in the Catalina Foothills, you get verified local craftsmanship backed by 30 years of Tucson trust.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="tel:5203121534"
                  className="inline-flex items-center gap-2 bg-[#0f2038] hover:bg-slate-800 text-amber-400 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 fill-amber-400" />
                  <span>Call John Directly: (520) 312-1534</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CONTINUOUS MOVING REVIEWS CAROUSEL */}
      <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 text-center space-y-2">
          <div className="flex justify-center gap-1 text-amber-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-500" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0f2038]">Real Feedback from Tucson Neighbors</h2>
          <p className="text-xs text-slate-500 font-medium">Verified Google, Angi & Community Reviews across Pima County</p>
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full overflow-x-hidden flex select-none cursor-grab active:cursor-grabbing no-scrollbar py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 shrink-0">
            {[...reviews, ...reviews].map((item, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                      {item.tag}
                    </span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                  <span className="font-bold text-[#0f2038]">{item.name}</span>
                  <span className="text-[11px] text-slate-500">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SERVICE AREAS */}
      <section className="py-16 bg-white border-b border-slate-200 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Pima County Coverage</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0f2038]">Where John Dispatches Directly</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center font-medium">
            {[
              'Catalina Foothills (85718)',
              'Oro Valley (85737)',
              'Downtown Tucson (85701)',
              'Midtown & University (85719)',
              'Tanque Verde (85749)',
              'Marana (85658)',
              'Vail & Rita Ranch (85641)',
              'Casas Adobes (85704)',
            ].map((area, i) => (
              <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-amber-600 inline mr-1" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-12 bg-[#0f2038] text-white text-xs px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-semibold text-sm">
            <MapPin className="w-4 h-4" />
            <span>Dispatched from Central Tucson (5421 E Fairmount Pl, 85712) • Serving All Pima County</span>
          </div>
          <p className="text-slate-300">
            Open 24/7 for Emergency Automotive & Residential Dispatch • Licensed Tucson Master Craftsman
          </p>
          <p className="text-slate-400 text-[11px]">
            © 2026 Blackswan Locksmith Co. LLC • All Rights Reserved
          </p>
        </div>
      </footer>

      {/* 11. PERSISTENT MOBILE CALL BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex items-center justify-between gap-3 shadow-lg">
        <div className="text-left pl-2">
          <p className="text-xs font-black text-[#0f2038] leading-none">Need John Now?</p>
          <p className="text-[10px] text-amber-700 font-medium mt-0.5">Tucson Mobile Unit Ready</p>
        </div>

        <a
          href="tel:5203121534"
          className="flex items-center gap-2 bg-amber-500 text-slate-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 fill-slate-950" />
          <span>(520) 312-1534</span>
        </a>
      </div>

    </main>
  );
}
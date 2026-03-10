import React from 'react';
import { openBookingWidget } from '@/utils/bookingWidget';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
          Results UK Logistics Firms Can Bank On
        </h2>
        <p className="text-center text-slate-500 text-lg mb-10">Real improvements from live customer deployments</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "3PL",         stat: "60% Less Admin Time",    quote: "Onboarding new clients in hours, not weeks. Admin workload dropped by half.",      author: "Operations Director, City Express Logistics", tagBg: "bg-blue-100",   tagText: "text-blue-700",   border: "border-blue-100",   statGrad: "from-blue-600 via-blue-700 to-indigo-600"   },
            { tag: "E-Commerce",  stat: "99.8% Accuracy",          quote: "No more stockouts or mis-picks. Total trust in the numbers.",                     author: "Head of Fulfillment, ShopRocket",              tagBg: "bg-purple-100", tagText: "text-purple-700", border: "border-purple-100", statGrad: "from-purple-600 via-purple-700 to-indigo-600" },
            { tag: "Transport",   stat: "Fleet Billing Cut by 40%", quote: "We see every delivery in real time and bill clients in minutes, not days.",       author: "Fleet Manager, UK National Couriers",          tagBg: "bg-green-100",  tagText: "text-green-700",  border: "border-green-100",  statGrad: "from-green-600 via-green-700 to-teal-600"    },
          ].map((c) => (
            <div key={c.tag} className={`bg-white rounded-xl shadow-md p-8 border ${c.border} flex flex-col hover:shadow-xl transition-shadow`}>
              <span className={`inline-block px-3 py-1 ${c.tagBg} ${c.tagText} font-semibold rounded-full text-xs mb-4 self-start`}>{c.tag}</span>
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${c.statGrad} text-transparent bg-clip-text`}>{c.stat}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">&ldquo;{c.quote}&rdquo;</p>
              <div className="mt-auto pt-4 border-t border-slate-100 text-sm text-slate-400 font-medium">{c.author}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            onClick={openBookingWidget}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-base font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
          >
            Get Started Free
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { t: "250+ UK Logistics Firms", bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-100" },
              { t: "£1.2M+ Saved Annually",   bg: "bg-green-50",  text: "text-green-700",  border: "border-green-100" },
              { t: "99.8% Accuracy",           bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-100" },
              { t: "ISO 27001 & GDPR",         bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-100" },
            ].map(({ t, bg, text, border }) => (
              <span key={t} className={`text-xs ${bg} ${text} px-3 py-1.5 rounded-full font-semibold border ${border}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

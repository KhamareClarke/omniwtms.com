import React, { useState, useEffect } from "react";
import { Warehouse, Truck, BarChart3, Heart, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield } from "lucide-react";
import { openBookingWidget } from "@/utils/bookingWidget";

export default function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('solutions');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden"
      id="solutions"
    >

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4" />
            Complete Supply Chain Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text leading-tight">
            Transform Every Part of Your Operation
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
            Complete visibility and total control across warehouse, transport, and customer operations. All in one platform.
          </p>
        </div>
        {/* Enhanced Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Warehouse Operations - Enhanced */}
          <div className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '100ms'}}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-xl p-3">
                  <Warehouse className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Warehouse Operations</h3>
                  <p className="text-blue-100">Complete inventory control</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">60%</div>
                <div className="text-sm text-blue-100">Faster order processing</div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">3D Warehouse Visualization</div>
                    <div className="text-sm text-gray-600">Maximize storage capacity and reduce costs</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Real-time Inventory Tracking</div>
                    <div className="text-sm text-gray-600">Barcode, RFID, and bin-level accuracy</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Automated Order Fulfillment</div>
                    <div className="text-sm text-gray-600">Pick optimization and shipping accuracy</div>
                  </div>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">Perfect For:</span>
                </div>
                <div className="text-sm text-blue-600">Warehouse Managers • Logistics Coordinators • Operations Directors</div>
              </div>
            </div>
          </div>

          {/* Transportation Operations - Enhanced */}
          <div className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-xl p-3">
                  <Truck className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Transportation</h3>
                  <p className="text-indigo-100">AI-powered fleet optimization</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">38%</div>
                <div className="text-sm text-indigo-100">Faster deliveries</div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">AI Route Optimization</div>
                    <div className="text-sm text-gray-600">Cut fuel costs and delivery times</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Live GPS Tracking</div>
                    <div className="text-sm text-gray-600">Real-time vehicle and driver monitoring</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Digital Proof of Delivery</div>
                    <div className="text-sm text-gray-600">Mobile driver app with instant POD</div>
                  </div>
                </li>
              </ul>
              <div className="bg-indigo-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-700">Perfect For:</span>
                </div>
                <div className="text-sm text-indigo-600">Transport Managers • Fleet Operators • Delivery Coordinators</div>
              </div>
            </div>
          </div>

          {/* Data & Analytics - Enhanced */}
          <div className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '300ms'}}>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-xl p-3">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Data & Analytics</h3>
                  <p className="text-purple-100">Real-time business intelligence</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">99.8%</div>
                <div className="text-sm text-purple-100">Data accuracy</div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Live KPI Dashboards</div>
                    <div className="text-sm text-gray-600">Real-time operational visibility</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Predictive Analytics</div>
                    <div className="text-sm text-gray-600">AI-powered demand forecasting</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Custom Reports</div>
                    <div className="text-sm text-gray-600">Automated insights and alerts</div>
                  </div>
                </li>
              </ul>
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">Perfect For:</span>
                </div>
                <div className="text-sm text-purple-600">Operations Managers • Business Analysts • C-Suite Executives</div>
              </div>
            </div>
          </div>

          {/* Customer Experience - Enhanced */}
          <div className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-green-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-xl p-3">
                  <Heart className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Customer Experience</h3>
                  <p className="text-green-100">Branded customer portals</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm text-green-100">Customer satisfaction</div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Real-time Order Tracking</div>
                    <div className="text-sm text-gray-600">Live updates and delivery notifications</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Branded Customer Portal</div>
                    <div className="text-sm text-gray-600">Self-service tracking and scheduling</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Flexible Delivery Options</div>
                    <div className="text-sm text-gray-600">Time slots and delivery preferences</div>
                  </div>
                </li>
              </ul>
              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Perfect For:</span>
                </div>
                <div className="text-sm text-green-600">Customer Service • Marketing Teams • Account Managers</div>
              </div>
            </div>
          </div>
        </div>
        {/* Results Showcase */}
        <div className={`rounded-3xl overflow-hidden mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Header */}
          <div className="bg-white px-10 py-8 text-center border border-gray-200 rounded-t-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Results UK Logistics Firms Can Bank On</h3>
            <p className="text-gray-500">Measured improvements across live customer deployments</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200 border border-slate-200 rounded-b-3xl overflow-hidden">
            {[
              { value: "38%",    label: "Faster Deliveries",    sub: "Average across all customers",    bar: 38,  color: "bg-green-500",  text: "text-green-600",  bg: "bg-green-50" },
              { value: "54%",    label: "Less Manual Admin",    sub: "Time saved on daily operations",   bar: 54,  color: "bg-blue-500",   text: "text-blue-600",   bg: "bg-blue-50" },
              { value: "99.97%", label: "Inventory Accuracy",   sub: "Real-time stock level precision",  bar: 100, color: "bg-purple-500", text: "text-purple-600", bg: "bg-purple-50" },
              { value: "100%",   label: "Live Order Visibility", sub: "Complete supply chain coverage",   bar: 100, color: "bg-indigo-500", text: "text-indigo-600", bg: "bg-indigo-50" },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.bg} p-8 flex flex-col items-center text-center`}>
                <div className={`text-4xl md:text-5xl font-black ${stat.text} mb-2 leading-none`}>{stat.value}</div>
                <div className="text-sm font-bold text-slate-800 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 mb-4">{stat.sub}</div>
                <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
                  <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.bar}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-12">
            <button
              onClick={openBookingWidget}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 border-0 text-base"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Start Your Free Trial
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Trusted by 250+ UK Logistics Firms", color: "blue" },
              { label: "ISO 27001 Certified",                color: "green" },
              { label: "GDPR Compliant",                    color: "indigo" },
            ].map((t) => (
              <div key={t.label} className={`flex items-center gap-2 bg-${t.color}-50 rounded-full px-5 py-2.5 border border-${t.color}-100 shadow-sm`}>
                <CheckCircle className={`h-4 w-4 text-${t.color}-600`} />
                <span className={`text-${t.color}-700 font-semibold text-sm`}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

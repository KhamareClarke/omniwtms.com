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
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4" />
            Complete Supply Chain Solution
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text leading-tight">
            Transform Every Part of<br />Your Operation
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-4xl mx-auto font-medium leading-relaxed">
            OmniWTMS delivers <span className="font-bold text-blue-600">complete visibility</span> and <span className="font-bold text-purple-600">total control</span> across warehouse, transport, and customer operations. 
            <br className="hidden md:block" />
            Eliminate bottlenecks, boost efficiency, and delight your customers.
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
        <div className={`bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Results UK Logistics Firms Can Bank On</h3>
            <p className="text-slate-300 text-lg">Real performance improvements from actual customer deployments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-2">38%</div>
              <div className="text-lg font-semibold mb-2">Faster Deliveries</div>
              <div className="text-sm text-slate-400">Average improvement across all customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-blue-400 mb-2">54%</div>
              <div className="text-lg font-semibold mb-2">Less Manual Admin</div>
              <div className="text-sm text-slate-400">Time saved on daily operations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-purple-400 mb-2">99.97%</div>
              <div className="text-lg font-semibold mb-2">Inventory Accuracy</div>
              <div className="text-sm text-slate-400">Real-time stock level precision</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-400 mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Live Order Visibility</div>
              <div className="text-sm text-slate-400">Complete supply chain transparency</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTAs */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={openBookingWidget}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 text-lg"
            >
              <CheckCircle className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              See How OmniWTMS Helps
            </button>
            <button
              onClick={openBookingWidget}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 text-lg"
            >
              Download Solutions Guide
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-semibold">Trusted by 250+ UK Logistics Firms</span>
            </div>
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-100">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-700 font-semibold">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-100">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

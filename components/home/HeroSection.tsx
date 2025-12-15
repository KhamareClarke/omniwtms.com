"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, MapPin, Smartphone, Star, Users, CheckCircle, TrendingUp, Shield, BarChart3, Truck, Package, Activity } from "lucide-react";
import Head from "next/head";
import { openBookingWidget } from "@/utils/bookingWidget";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 27,
    seconds: 23
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Cut our delivery times by 38% in first month", author: "Sarah M., Operations Director" },
    { text: "Eliminated 99% of inventory errors", author: "James K., Warehouse Manager" },
    { text: "Reduced admin time by 54%", author: "Lisa R., Logistics Coordinator" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Testimonial rotation
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    // Sticky header scroll functionality
    const handleScroll = () => {
      const stickyHeader = document.getElementById('sticky-header');
      if (stickyHeader) {
        if (window.scrollY > 600) {
          stickyHeader.style.transform = 'translateY(0)';
        } else {
          stickyHeader.style.transform = 'translateY(-100%)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      clearInterval(testimonialTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookDemo = () => {
    openBookingWidget();
  };

  const handleSeePricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadBrochure = () => {
    openBookingWidget();
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="OmniWTMS: The UK's fastest, most advanced Warehouse & Transport Management System. Get real-time visibility, zero delays, and full automation."
        />
      </Head>
      
      {/* Header spacing - ensure urgency bar appears below header */}
      <div className="h-20"></div>
      
      {/* Urgency Bar - Prominent mobile visibility */}
      <div className="w-full bg-red-600 text-white shadow-xl border-b-4 border-yellow-400">
        <div className="w-full px-2 py-1">
          <div className="flex items-center justify-center">
            <div className="bg-yellow-400 text-red-900 px-3 py-1 rounded-lg font-bold text-xs whitespace-nowrap text-center border border-yellow-300 shadow transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center">
                <span className="text-base animate-bounce mr-1">🚨</span>
                <span className="tracking-wide">ONLY 7 SLOTS LEFT!</span>
                <span className="text-base animate-bounce ml-1">🚨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-6 md:py-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Enhanced Background with Logistics Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle route lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
            <path d="M100,200 Q300,100 500,200 T900,300" stroke="#2563eb" strokeWidth="2" fill="none" strokeDasharray="10,5" />
            <path d="M50,400 Q250,300 450,400 T850,500" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="15,10" />
            <path d="M150,600 Q350,500 550,600 T950,700" stroke="#059669" strokeWidth="2" fill="none" strokeDasharray="8,8" />
          </svg>
          
          {/* Floating logistics icons */}
          <div className="absolute top-32 left-20 opacity-10 animate-pulse">
            <Truck className="h-16 w-16 text-blue-600" />
          </div>
          <div className="absolute top-40 right-32 opacity-10 animate-pulse delay-1000">
            <Package className="h-12 w-12 text-purple-600" />
          </div>
          <div className="absolute bottom-40 left-32 opacity-10 animate-pulse delay-2000">
            <MapPin className="h-14 w-14 text-green-600" />
          </div>
          
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* AI Tagline - Ultra Mobile Responsive */}
          <div className={`text-center mb-3 sm:mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 shadow-md max-w-[95%] mx-auto">
              <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold text-blue-700 text-center leading-tight">
                AI-Powered UK Warehouse & Transport Management System
              </span>
            </div>
          </div>

          {/* Social Proof Banner - Mobile Responsive */}
          <div className={`text-center mb-5 sm:mb-6 transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Desktop Version */}
            <div className="hidden md:inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-sm text-blue-700">250+ UK Logistics Firms</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
                <span className="ml-1 font-medium text-sm text-gray-700">4.9/5</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-sm text-green-700">38% Faster Deliveries</span>
              </div>
            </div>
            
            {/* Mobile Version - Minimal Badge */}
            <div className="md:hidden flex items-center justify-center mb-2">
              {/* Tiny trust badge */}
              <div className="flex items-center gap-1 bg-white/80 rounded-full px-2 py-0.5 shadow-sm text-[10px] border border-gray-100">
                <Users className="h-2 w-2 text-blue-600" />
                <span className="font-medium text-blue-700">250+</span>
                <div className="flex gap-0.5 mx-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-1.5 w-1.5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-gray-600">4.9</span>
                <TrendingUp className="h-2 w-2 text-green-600 ml-1" />
                <span className="font-medium text-green-700">38%</span>
              </div>
            </div>
          </div>

          {/* Main Headlines with Enhanced Typography - Ultra Mobile Responsive */}
          <div className={`text-center mb-5 sm:mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-3 sm:mb-5">
              <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text leading-tight tracking-tight px-2 animate-gradient-shift">
                Deliver On Time.<br />
                <span className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl">Every Time.</span>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3 sm:mb-5 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-base xs:text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-6 leading-tight px-2">
              Total Control from <span className="text-blue-600 animate-fade-in-up">Warehouse</span> to <span className="text-purple-600 animate-fade-in-up-delay">Doorstep</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-xl text-gray-700 max-w-5xl mx-auto font-medium leading-relaxed mb-3 sm:mb-5 px-4">
              The UK's <span className="font-bold text-blue-600 animate-text-shimmer">fastest, most advanced</span> Warehouse & Transport Management System.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span><span className="font-bold text-purple-600 animate-text-shimmer-delay-1">Real-time visibility</span>, <span className="font-bold text-green-600 animate-text-shimmer-delay-2">zero delays</span>, <span className="font-bold text-indigo-600 animate-text-shimmer-delay-3">full automation</span>.
            </p>
          </div>

          {/* Enhanced CTAs */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button
              size="lg"
              onClick={handleBookDemo}
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative z-10 flex items-center gap-3">
                <CheckCircle className="h-6 w-6" />
                Book Live Demo
              </span>
            </Button>
            <Button
              size="lg"
              onClick={handleSeePricing}
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
            >
              <span className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6" />
                See Pricing
              </span>
            </Button>
            <Button
              size="lg"
              onClick={handleDownloadBrochure}
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 flex items-center gap-3"
            >
              Download Brochure
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Rotating Testimonial */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto border border-blue-200 shadow-xl mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 font-semibold italic text-center text-base mb-4">"{testimonials[currentTestimonial].text}"</p>
              <div className="flex items-center justify-center gap-4">
                {/* Person Image */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
                  {testimonials[currentTestimonial].author.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-800">{testimonials[currentTestimonial].author}</p>
                  {/* Company Logo Placeholder */}
                  <div className="mt-1 inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <span className="text-xs font-semibold text-blue-700">Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speed to Value Bar */}
          <div className={`flex flex-wrap justify-center items-center gap-8 mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200">
              <div className="bg-green-100 rounded-full p-2">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <span className="font-semibold text-sm text-green-700">Live in 48 hours</span>
            </div>
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-200">
              <div className="bg-blue-100 rounded-full p-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-semibold text-sm text-blue-700">No training needed</span>
            </div>
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-200">
              <div className="bg-purple-100 rounded-full p-2">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <span className="font-semibold text-sm text-purple-700">UK support</span>
            </div>
          </div>

          {/* Dashboard Teaser - Refined */}
          <div className={`mb-24 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">See Your Command Center</h3>
              <p className="text-lg text-slate-600">Real-time visibility across your entire logistics operation</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                <span className="text-sm text-slate-500 font-medium">Live Demo Data</span>
              </div>
            </div>
            
            {/* Mock Dashboard - Refined */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 rounded-lg p-2">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">OmniWTMS Control Center</h4>
                      <p className="text-slate-300 text-sm">Manchester Distribution Hub</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-300">Last Updated</div>
                      <div className="font-mono text-sm">14:27:43 GMT</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-blue-600 rounded-lg p-2">
                        <Truck className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+12%</div>
                    </div>
                    <div className="text-3xl font-bold text-blue-700 mb-1">247</div>
                    <div className="text-sm text-blue-600 font-medium">Active Vehicles</div>
                    <div className="text-xs text-gray-500 mt-1">23 en route, 224 available</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-green-600 rounded-lg p-2">
                        <Package className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+8%</div>
                    </div>
                    <div className="text-3xl font-bold text-green-700 mb-1">1,847</div>
                    <div className="text-sm text-green-600 font-medium">Orders Today</div>
                    <div className="text-xs text-gray-500 mt-1">1,203 delivered, 644 pending</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-purple-600 rounded-lg p-2">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+2.1%</div>
                    </div>
                    <div className="text-3xl font-bold text-purple-700 mb-1">94.8%</div>
                    <div className="text-sm text-purple-600 font-medium">On-Time Rate</div>
                    <div className="text-xs text-gray-500 mt-1">Target: 92% (exceeded)</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-orange-600 rounded-lg p-2">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+15%</div>
                    </div>
                    <div className="text-3xl font-bold text-orange-700 mb-1">£47.2K</div>
                    <div className="text-sm text-orange-600 font-medium">Revenue Today</div>
                    <div className="text-xs text-gray-500 mt-1">Monthly target: 89%</div>
                  </div>
                </div>
                
                {/* Live Activity Feed & Route Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Live Activity */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Activity className="h-5 w-5 text-slate-600" />
                      <h5 className="font-bold text-slate-800">Live Activity Feed</h5>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-800">Order #WH-4721 delivered</div>
                          <div className="text-xs text-slate-500">Manchester → Birmingham, 14:26</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-800">Vehicle V-247 route optimized</div>
                          <div className="text-xs text-slate-500">AI saved 23 minutes, 14:24</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-800">Warehouse pick completed</div>
                          <div className="text-xs text-slate-500">Order #WH-4722, Bay 7, 14:22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Route Visualization */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-5 w-5 text-slate-600" />
                      <h5 className="font-bold text-slate-800">Live Route Optimization</h5>
                    </div>
                    <div className="bg-white rounded-lg p-6 h-48 relative overflow-hidden border border-slate-200">
                      {/* Mock Map Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50"></div>
                      
                      {/* Route Lines */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                        <path d="M50,100 Q100,50 150,100 T250,80" stroke="#2563eb" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse" />
                        <path d="M50,120 Q120,80 180,120 T270,100" stroke="#059669" strokeWidth="3" fill="none" strokeDasharray="8,4" />
                        <path d="M50,140 Q110,110 170,140 T260,120" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="6,6" />
                      </svg>
                      
                      {/* Location Markers */}
                      <div className="absolute top-12 left-12 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute top-16 right-16 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                      
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs">
                        <div className="font-semibold text-slate-800">AI Route Optimization</div>
                        <div className="text-slate-600">3 active routes, 12% efficiency gain</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Demo CTA */}
                <div className="mt-8 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                    <h6 className="font-bold text-lg mb-2">See Your Real Data Here</h6>
                    <p className="text-blue-100 mb-4">This dashboard shows live data from actual UK logistics operations. Book a demo to see your specific metrics.</p>
                    <Button
                      onClick={handleBookDemo}
                      className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                      Book Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid with Animations */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Clock, title: "Lightning-Fast Onboarding", desc: "Go live in 48 hours.", color: "blue", delay: "delay-100" },
              { icon: Zap, title: "AI-Powered Routing", desc: "Cut delivery times and empty miles.", color: "indigo", delay: "delay-200" },
              { icon: MapPin, title: "Real-Time Tracking", desc: "Know where every order and vehicle is at all times.", color: "purple", delay: "delay-300" },
              { icon: Smartphone, title: "Driver App (Android/iOS)", desc: "No paperwork. Full digital POD.", color: "green", delay: "delay-400" }
            ].map((feature, index) => (
              <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-${feature.color}-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center group ${feature.delay}`}>
                <div className={`bg-${feature.color}-50 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-10 w-10 text-${feature.color}-600`} />
                </div>
                <h3 className={`font-bold text-${feature.color}-700 text-xl mb-3`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Bar */}
          <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 mb-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-gray-800 ml-2">4.9/5 from 250+ UK Logistics Firms</span>
              </div>
              
              {/* Placeholder Quote */}
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4 max-w-4xl mx-auto">
                "OmniWTMS transformed our entire operation. We went from chaos to complete control in just 48 hours. Our delivery times improved by 40% and customer complaints dropped to almost zero."
              </blockquote>
              <cite className="text-gray-600 font-semibold">
                Sarah Mitchell, Operations Director, Manchester Logistics Group
              </cite>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Clock, text: "48-Hour Setup", color: "green" },
                { icon: Shield, text: "GDPR Compliant", color: "blue" },
                { icon: Users, text: "UK-Based Support", color: "purple" },
                { icon: CheckCircle, text: "ISO 27001 Certified", color: "indigo" }
              ].map((item, index) => (
                <div key={index} className={`bg-${item.color}-50 rounded-full px-6 py-3 shadow-lg border border-${item.color}-100 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center gap-2">
                    <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                    <span className={`text-${item.color}-700 font-semibold text-sm`}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sticky CTAs */}
      
      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 shadow-2xl">
        <div className="flex gap-3">
          <Button
            onClick={handleBookDemo}
            className="flex-1 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
          >
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Book Demo
            </span>
          </Button>
          <Button
            onClick={handleSeePricing}
            className="px-6 py-4 text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
          >
            Pricing
          </Button>
        </div>
      </div>

      {/* Desktop Floating Action Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <div className="relative group">
          {/* Main CTA Button */}
          <Button
            onClick={handleBookDemo}
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 border-0 group"
          >
            <CheckCircle className="h-8 w-8" />
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-20 right-0 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Book Free Demo
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Sticky Top Bar (appears on scroll) */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg transform -translate-y-full transition-transform duration-300" id="sticky-header">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="font-bold text-xl text-blue-700">OmniWTMS</div>
              <div className="text-sm text-gray-600">UK's #1 Logistics Platform</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>7 onboarding slots left</span>
              </div>
              <Button
                onClick={handleBookDemo}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 border-0"
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}

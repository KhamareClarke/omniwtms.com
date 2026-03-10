"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Clock, Zap, MapPin, Smartphone, Star, Users, CheckCircle, TrendingUp, Shield, BarChart3, Package, Truck, Bell, Search, LayoutDashboard, Warehouse } from "lucide-react";
import { openBookingWidget } from "@/utils/bookingWidget";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookDemo = () => {
    openBookingWidget();
  };

  const handleSeePricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="h-20"></div>

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
            <path d="M100,200 Q300,100 500,200 T900,300" stroke="#2563eb" strokeWidth="2" fill="none" strokeDasharray="10,5" />
            <path d="M50,400 Q250,300 450,400 T850,500" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="15,10" />
            <path d="M150,600 Q350,500 550,600 T950,700" stroke="#059669" strokeWidth="2" fill="none" strokeDasharray="8,8" />
          </svg>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <Container size="main" className="relative z-10 !max-w-7xl">
          {/* Platform Badge */}
          <div className={`text-center mb-4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 shadow-sm">
              <span className="text-sm font-semibold text-blue-700">
                AI-Powered UK Warehouse & Transport Management System
              </span>
            </div>
          </div>

          {/* Social Proof Banner */}
          <div className={`text-center mb-8 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
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
            <div className="md:hidden flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-3 py-1 shadow-sm text-xs border border-gray-100">
                <Users className="h-3 w-3 text-blue-600" />
                <span className="font-medium text-blue-700">250+ firms</span>
                <div className="flex gap-0.5 mx-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2 w-2 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-gray-600">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className={`text-center mb-8 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight tracking-tight px-2">
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Deliver On Time.</span><br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-transparent bg-clip-text text-3xl sm:text-5xl md:text-6xl">Every Time.</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 leading-snug px-2">
              Total Control from <span className="text-blue-600 font-bold">Warehouse</span> to <span className="text-purple-600 font-bold">Doorstep</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The UK's most advanced Warehouse & Transport Management System.
              Real-time visibility, intelligent automation, and seamless fleet management all in one platform.
            </p>
          </div>

          {/* CTA */}
          <div className={`flex justify-center mb-10 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <Button
              size="lg"
              onClick={handleBookDemo}
              className="px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 border-0"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Get Started Free
              </span>
            </Button>
          </div>

          {/* Value Pillars */}
          <div className={`flex flex-wrap justify-center items-center gap-4 mb-16 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="flex items-center gap-2 bg-green-50 rounded-full px-5 py-2.5 shadow-sm border border-green-200">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-sm text-green-700">Live in 48 hours</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 rounded-full px-5 py-2.5 shadow-sm border border-blue-200">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-sm text-blue-700">No training needed</span>
            </div>
            <div className="flex items-center gap-2 bg-indigo-50 rounded-full px-5 py-2.5 shadow-sm border border-indigo-200">
              <Users className="h-4 w-4 text-indigo-600" />
              <span className="font-semibold text-sm text-indigo-700">UK-based support</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 rounded-full px-5 py-2.5 shadow-sm border border-purple-200">
              <Shield className="h-4 w-4 text-purple-600" />
              <span className="font-semibold text-sm text-purple-700">ISO 27001 & GDPR</span>
            </div>
          </div>

          {/* Platform Dashboard Preview */}
          <div className={`mb-24 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">Your Operations, One View</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A single, unified platform connecting <span className="font-semibold text-blue-600">warehouse</span>, <span className="font-semibold text-purple-600">fleet</span>, and <span className="font-semibold text-indigo-600">customer</span> operations in real time.
              </p>
            </div>

            {/* Feature callout pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { icon: BarChart3,    label: "Live KPI Dashboards",       color: "blue" },
                { icon: MapPin,       label: "Real-Time Fleet Tracking",   color: "indigo" },
                { icon: CheckCircle,  label: "Digital Proof of Delivery",  color: "green" },
                { icon: TrendingUp,   label: "AI Route Optimisation",      color: "purple" },
              ].map((f) => (
                <div key={f.label} className={`flex items-center gap-2 bg-white border border-${f.color}-100 text-${f.color}-700 px-4 py-2 rounded-full shadow-sm text-sm font-semibold`}>
                  <f.icon className={`h-4 w-4 text-${f.color}-500`} />
                  {f.label}
                </div>
              ))}
            </div>

            {/* Browser chrome frame */}
            <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded-md px-4 py-1 text-xs text-slate-400 border border-slate-200 w-64 text-center truncate">
                    app.yourbusiness.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard UI */}
              <div className="overflow-x-auto">
                <div className="flex min-w-[960px] h-[640px]">

                  {/* Sidebar — matches actual app */}
                  <div className="w-52 bg-white border-r border-gray-100 flex-shrink-0 flex flex-col">
                    {/* Brand + user */}
                    <div className="px-4 pt-4 pb-2 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-indigo-600 font-extrabold text-base tracking-tight">OmniWTMS</span>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-bold">K</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[9px] text-gray-400 font-medium">Online</span>
                      </div>
                    </div>

                    <nav className="flex-1 px-3 py-3 overflow-hidden">
                      {/* MAIN */}
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-1.5">Main</p>
                      {[
                        { icon: LayoutDashboard, label: "Dashboard",    shortcut: "Ctrl+D", active: true },
                        { icon: MapPin,          label: "Live Tracking", shortcut: "Ctrl+L" },
                      ].map((item) => (
                        <div key={item.label} className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-default mb-0.5 ${
                          item.active ? "bg-indigo-50 border border-indigo-100" : "hover:bg-gray-50"
                        }`}>
                          <div className="flex items-center gap-2">
                            <item.icon className={`h-3 w-3 flex-shrink-0 ${item.active ? "text-indigo-600" : "text-gray-400"}`} />
                            <span className={`text-[10px] ${item.active ? "font-bold text-indigo-700" : "font-medium text-gray-500"}`}>{item.label}</span>
                          </div>
                          <span className="text-[7px] text-gray-300 font-mono hidden sm:block">{item.shortcut}</span>
                        </div>
                      ))}

                      {/* WAREHOUSE */}
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest px-2 mt-3 mb-1.5">Warehouse</p>
                      {[
                        { icon: Package,   label: "Inventories",       shortcut: "Ctrl+I" },
                        { icon: Search,    label: "Barcode Scanner",   shortcut: "Ctrl+B" },
                        { icon: Warehouse, label: "Warehouses",        shortcut: "Ctrl+W" },
                        { icon: Truck,     label: "Warehouse Ops",     shortcut: "Ctrl+O" },
                        { icon: BarChart3, label: "Visualisation" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-default text-gray-500 mb-0.5 hover:bg-gray-50">
                          <div className="flex items-center gap-2">
                            <item.icon className="h-3 w-3 flex-shrink-0 text-gray-400" />
                            <span className="text-[10px] font-medium text-gray-500">{item.label}</span>
                          </div>
                          {item.shortcut && <span className="text-[7px] text-gray-300 font-mono hidden sm:block">{item.shortcut}</span>}
                        </div>
                      ))}
                    </nav>

                    <div className="px-4 py-2 border-t border-gray-100">
                      <span className="text-[8px] text-gray-300 font-mono">v1.0.0</span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">

                    {/* Top bar — Dashboard Overview style */}
                    <div className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between flex-shrink-0">
                      <div>
                        <p className="text-sm font-bold text-indigo-600 underline decoration-indigo-200 underline-offset-2">Dashboard Overview</p>
                        <p className="text-[9px] text-gray-400 mt-0.5">Monitor your logistics operations in real-time</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] text-gray-400">Tuesday, 10 March 2026</span>
                        <div className="flex items-center gap-1 bg-indigo-600 text-white px-2.5 py-1 rounded-lg cursor-default">
                          <TrendingUp className="h-2.5 w-2.5" />
                          <span className="text-[9px] font-semibold">Refresh</span>
                        </div>
                      </div>
                    </div>

                    {/* AI-Powered Insights banner */}
                    <div className="bg-indigo-50 border-b border-indigo-100 px-6 py-2 flex items-center gap-2.5 flex-shrink-0">
                      <div className="w-5 h-5 bg-indigo-100 rounded-md flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-3 w-3 text-indigo-600" />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-indigo-700">AI-Powered Insights </span>
                        <span className="text-[9px] text-indigo-500">Your logistics network is operating at 87% efficiency. Warehouse #3 could be optimised to improve capacity.</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-auto p-4 space-y-3">

                      {/* KPI cards — colored top stripe + colored value text */}
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { icon: Package,    label: "Orders Today",    value: "1,847",    sub: "644 pending dispatch",  change: "+8% today",  changeColor: "text-green-600",  topBar: "bg-purple-500", valueColor: "text-purple-600", detail1: "Added this week", detail1val: "+124" },
                          { icon: Truck,      label: "Warehouse Ops",   value: "23 / 247", sub: "Active fleet en route", change: "Live",        changeColor: "text-blue-600",   topBar: "bg-blue-500",   valueColor: "text-blue-600",   detail1: "Utilisation",    detail1val: "73%" },
                          { icon: TrendingUp, label: "Delivery Metrics", value: "94.8%",    sub: "On-Time Rate",          change: "+2.1%",       changeColor: "text-green-600",  topBar: "bg-green-500",  valueColor: "text-green-600",  detail1: "Completed",      detail1val: "5" },
                          { icon: BarChart3,  label: "Warehouse Cap.",   value: "73%",      sub: "3 bays available",      change: "Capacity",    changeColor: "text-pink-600",   topBar: "bg-pink-500",   valueColor: "text-pink-600",   detail1: "Items stored",   detail1val: "1,241" },
                        ].map((kpi) => (
                          <div key={kpi.label} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className={`h-1 ${kpi.topBar}`}></div>
                            <div className="p-3">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wide">{kpi.label}</span>
                                <div className={`w-4 h-4 rounded-md ${kpi.topBar} opacity-20`}></div>
                              </div>
                              <div className={`text-xl font-black ${kpi.valueColor} leading-none mb-0.5`}>{kpi.value}</div>
                              <div className="text-[9px] text-gray-400 mb-1.5">{kpi.sub}</div>
                              <div className="border-t border-gray-50 pt-1.5 flex items-center justify-between">
                                <span className="text-[8px] text-gray-400">{kpi.detail1}: <span className="font-semibold text-gray-600">{kpi.detail1val}</span></span>
                                <span className={`text-[8px] font-bold ${kpi.changeColor}`}>{kpi.change}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Middle row */}
                      <div className="grid grid-cols-3 gap-3">

                        {/* Orders table */}
                        <div className="col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                          <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                            <div>
                              <h3 className="text-xs font-bold text-gray-800">Recent Orders</h3>
                              <p className="text-[8px] text-gray-400">Latest stock movements and operations</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-[9px] text-indigo-600 font-semibold">Live</span>
                            </div>
                          </div>
                          <table className="w-full">
                            <thead>
                              <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="text-left px-4 py-2 text-[9px] text-gray-400 font-semibold">Order ID</th>
                                <th className="text-left px-4 py-2 text-[9px] text-gray-400 font-semibold">Customer</th>
                                <th className="text-left px-4 py-2 text-[9px] text-gray-400 font-semibold">Status</th>
                                <th className="text-left px-4 py-2 text-[9px] text-gray-400 font-semibold">ETA</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { id: "#ORD-4821", customer: "M&S Distribution", status: "Delivered",  cls: "bg-green-100 text-green-700",   eta: "" },
                                { id: "#ORD-4820", customer: "Argos Leeds DC",   status: "In Transit", cls: "bg-indigo-100 text-indigo-700", eta: "14:45" },
                                { id: "#ORD-4819", customer: "Next PLC",         status: "Picking",    cls: "bg-purple-100 text-purple-700", eta: "15:20" },
                                { id: "#ORD-4818", customer: "ASOS Returns",     status: "Delivered",  cls: "bg-green-100 text-green-700",   eta: "" },
                                { id: "#ORD-4817", customer: "Tesco DC North",   status: "Dispatched", cls: "bg-blue-100 text-blue-700",     eta: "16:10" },
                              ].map((o, i) => (
                                <tr key={o.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                  <td className="px-4 py-1.5 text-[9px] font-mono font-bold text-indigo-700">{o.id}</td>
                                  <td className="px-4 py-1.5 text-[9px] text-gray-600">{o.customer}</td>
                                  <td className="px-4 py-1.5"><span className={`text-[8px] px-2 py-0.5 rounded-full font-semibold ${o.cls}`}>{o.status}</span></td>
                                  <td className="px-4 py-1.5 text-[9px] font-mono text-gray-500">{o.eta}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Fleet + Warehouse */}
                        <div className="flex flex-col gap-3">
                          {/* Fleet */}
                          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex-1">
                            <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                              <h3 className="text-[10px] font-bold text-gray-800">Fleet Status</h3>
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[8px] text-green-600 font-semibold">Live</span>
                              </div>
                            </div>
                            <div className="p-2 space-y-1">
                              {[
                                { id: "V-101", route: "Birmingham",  status: "En Route", dot: "bg-green-500",  textCls: "text-green-600" },
                                { id: "V-247", route: "Leeds",       status: "En Route", dot: "bg-green-500",  textCls: "text-green-600" },
                                { id: "V-089", route: "Bay 4",       status: "Loading",  dot: "bg-yellow-500", textCls: "text-yellow-600" },
                                { id: "V-312", route: "M6 Delayed",  status: "Alert",    dot: "bg-red-500",    textCls: "text-red-600" },
                                { id: "V-198", route: "Sheffield",   status: "En Route", dot: "bg-green-500",  textCls: "text-green-600" },
                              ].map((v) => (
                                <div key={v.id} className="flex items-center gap-2 px-2 py-1 rounded-md bg-gray-50">
                                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${v.dot}`}></div>
                                  <div className="min-w-0 flex-1">
                                    <span className="text-[9px] font-bold text-gray-700">{v.id}</span>
                                    <span className="text-[8px] text-gray-400 ml-1">{v.route}</span>
                                  </div>
                                  <span className={`text-[8px] font-semibold flex-shrink-0 ${v.textCls}`}>{v.status}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Warehouse capacity */}
                          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
                            <h3 className="text-[10px] font-bold text-gray-800 mb-2">Warehouse Capacity</h3>
                            {[
                              { bay: "Bay A", pct: 88, color: "bg-red-400",   text: "text-red-500" },
                              { bay: "Bay B", pct: 72, color: "bg-blue-500",  text: "text-blue-500" },
                              { bay: "Bay C", pct: 55, color: "bg-green-500", text: "text-green-500" },
                            ].map((b) => (
                              <div key={b.bay} className="mb-1.5">
                                <div className="flex justify-between mb-0.5">
                                  <span className="text-[8px] text-gray-600 font-semibold">{b.bay}</span>
                                  <span className={`text-[8px] font-bold ${b.text}`}>{b.pct}%</span>
                                </div>
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                  <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.pct}%` }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Weekly deliveries bar chart */}
                      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="text-[10px] font-bold text-gray-800">Deliveries This Week</h3>
                            <p className="text-[8px] text-gray-400">Week 10, 2026</p>
                          </div>
                          <span className="text-[8px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded font-semibold border border-indigo-100">1.8k peak</span>
                        </div>
                        <div className="flex items-end gap-2 h-12">
                          {[
                            { day: "Mon", val: "1.4k", h: 77 },
                            { day: "Tue", val: "1.7k", h: 90 },
                            { day: "Wed", val: "1.4k", h: 75 },
                            { day: "Thu", val: "1.7k", h: 93 },
                            { day: "Fri", val: "1.8k", h: 100, active: true },
                            { day: "Sat", val: "980",  h: 53 },
                            { day: "Sun", val: "620",  h: 34 },
                          ].map((d) => (
                            <div key={d.day} className="flex-1 flex flex-col items-center gap-0.5">
                              <span className="text-[7px] text-gray-400">{d.val}</span>
                              <div className={`w-full rounded-t-sm ${d.active ? "bg-indigo-500" : "bg-indigo-100"}`} style={{ height: `${d.h}%` }}></div>
                              <span className={`text-[8px] font-semibold ${d.active ? "text-indigo-600" : "text-gray-400"}`}>{d.day}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA below dashboard */}
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm mb-4">See it with your own data. Book a 30-minute personalised walkthrough</p>
              <Button
                onClick={handleBookDemo}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 border-0"
              >
                Start Your Free Trial
              </Button>
            </div>
          </div>

          {/* Enhanced Features Grid with Animations */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Clock,       title: "48-Hour Onboarding",      desc: "Go live in 48 hours, fully configured.",  iconBg: "bg-blue-50",   iconColor: "text-blue-600",   border: "border-blue-100"   },
              { icon: Zap,         title: "AI-Powered Routing",       desc: "Cut delivery times and empty miles.",      iconBg: "bg-indigo-50", iconColor: "text-indigo-600", border: "border-indigo-100" },
              { icon: MapPin,      title: "Real-Time Tracking",       desc: "Every order and vehicle, always visible.", iconBg: "bg-green-50",  iconColor: "text-green-600",  border: "border-green-100"  },
              { icon: Smartphone,  title: "Driver App (iOS/Android)", desc: "No paperwork. Full digital POD.",          iconBg: "bg-purple-50", iconColor: "text-purple-600", border: "border-purple-100" }
            ].map((feature, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-sm p-6 border ${feature.border} text-center hover:shadow-md transition-shadow`}>
                <div className={`${feature.iconBg} rounded-xl p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center`}>
                  <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Bar */}
          <div className={`bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg p-6 mb-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Clock,        text: "48-Hour Setup",        color: "green"  },
                { icon: Shield,       text: "GDPR Compliant",       color: "blue"   },
                { icon: Users,        text: "UK-Based Support",     color: "indigo" },
                { icon: CheckCircle,  text: "ISO 27001 Certified",  color: "purple" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-2 bg-${item.color}-50 rounded-full px-5 py-2.5 border border-${item.color}-100 shadow-sm`}>
                  <item.icon className={`h-4 w-4 text-${item.color}-600`} />
                  <span className={`text-${item.color}-700 font-semibold text-sm`}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Sticky CTAs */}
      
      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 p-4 shadow-lg">
        <Button
          onClick={handleBookDemo}
          className="w-full py-4 text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 border-0"
        >
          <span className="flex items-center justify-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Get Started Free
          </span>
        </Button>
      </div>

      {/* Desktop Floating Action Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <Button
            onClick={handleBookDemo}
            className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300 border-0"
          >
            <CheckCircle className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Book Free Demo
          </div>
        </div>
      </div>

      {/* Sticky Top Bar (appears on scroll) */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-sm transform -translate-y-full transition-transform duration-300" id="sticky-header">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="font-bold text-base text-slate-900">OmniWTMS</div>
              <div className="text-xs text-slate-500">UK Warehouse &amp; Transport Management</div>
            </div>
            <Button
              onClick={handleBookDemo}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-200 border-0"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

    </>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Clock, CheckCircle, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DemoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    needs: "",
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          requirements: formData.needs,
          phone: formData.phone || "Not provided",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Redirect to thank you page or show success message
      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error (show error message to user)
    }
  };

  const handleDemoClick = () => {
    const form = document.getElementById("demo-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div id="demo-form" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-blue-100">
              <Zap className="h-4 w-4" />
              Live in 48 hours. No long contracts
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="block bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text animate-gradient-slow">
                Ready to Transform Your Operations?<br />
                Start Your Free Trial Today
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Get started in 48 hours with zero setup fees. We&apos;ll configure everything for your operation. Warehouse, fleet, or both.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left: Benefits + What to Expect */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Benefit tiles */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock,         label: "Live in 48h",   desc: "Fully configured",   iconBg: "bg-blue-50",   iconColor: "text-blue-600",   labelColor: "text-blue-700",   border: "border-blue-100"   },
                  { icon: Zap,           label: "No Training",   desc: "Intuitive by design", iconBg: "bg-purple-50", iconColor: "text-purple-600", labelColor: "text-purple-700", border: "border-purple-100" },
                  { icon: CheckCircle,   label: "UK Support",    desc: "Real humans, fast",   iconBg: "bg-green-50",  iconColor: "text-green-600",  labelColor: "text-green-700",  border: "border-green-100"  },
                  { icon: MessageCircle, label: "24h Response",  desc: "Guaranteed SLA",      iconBg: "bg-indigo-50", iconColor: "text-indigo-600", labelColor: "text-indigo-700", border: "border-indigo-100" },
                ].map((b) => (
                  <div key={b.label} className={`bg-white rounded-xl p-4 border ${b.border} shadow-sm flex flex-col items-center text-center`}>
                    <div className={`${b.iconBg} rounded-lg p-2.5 mb-2`}>
                      <b.icon className={`h-5 w-5 ${b.iconColor}`} />
                    </div>
                    <div className={`font-bold text-sm ${b.labelColor}`}>{b.label}</div>
                    <div className="text-xs text-slate-500">{b.desc}</div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-xl border border-indigo-200 shadow-sm p-5">
                <h3 className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-3 uppercase tracking-wide">What to Expect</h3>
                <ul className="space-y-2.5">
                  {[
                    "30-minute personalised walkthrough",
                    "Tailored to your business size & sector",
                    "Live Q&A with a solutions specialist",
                    "No obligation. Free to all UK businesses",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                      <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone contact */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl border border-green-200 shadow-sm p-5 flex items-center gap-4">
                <div className="bg-green-100 rounded-xl p-3 flex-shrink-0">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-green-700 font-semibold">Prefer to call?</div>
                  <a href="tel:+442079460982" className="text-base font-bold bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text hover:from-green-700 hover:to-teal-700 transition-all">
                    +44 20 7946 0982
                  </a>
                  <div className="text-xs text-green-600">Mon-Fri, 9am-5:30pm GMT</div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-indigo-200 shadow-lg p-8">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text mb-1">Get Started Free</h3>
                <p className="text-sm text-slate-500 mb-6">Join 250+ UK logistics firms. Start your free trial today.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-slate-700 mb-1 block">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-1 block">Business Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-slate-700 mb-1 block">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="needs" className="text-sm font-semibold text-slate-700 mb-1 block">What are you looking to improve?</Label>
                    <Textarea
                      id="needs"
                      name="needs"
                      placeholder="e.g. reduce delivery delays, automate dispatch, improve inventory accuracy..."
                      value={formData.needs}
                      onChange={handleChange}
                      rows={4}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 border-0 text-base"
                    size="lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Start Free Trial
                    </span>
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    No obligation. We&apos;ll respond within 24 hours. Your data is handled in line with our <span className="underline cursor-default">Privacy Policy</span>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

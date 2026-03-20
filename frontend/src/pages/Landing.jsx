import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="bg-background overflow-x-hidden min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl flex justify-between items-center h-20 px-12 max-w-[1440px] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black tracking-[-0.02em] text-[#c0c1ff]">SkillPath AI</span>
          <div className="hidden md:flex gap-6 items-center">
            <a className="text-[#c0c1ff] border-b-2 border-[#c0c1ff] pb-1 font-medium text-sm tracking-wide" href="#">Product</a>
            <a className="text-slate-300 hover:text-white transition-opacity font-medium text-sm tracking-wide" href="#">Solutions</a>
            <a className="text-slate-300 hover:text-white transition-opacity font-medium text-sm tracking-wide" href="#">Pricing</a>
            <a className="text-slate-300 hover:text-white transition-opacity font-medium text-sm tracking-wide" href="#">Resources</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-slate-300 hover:text-white font-medium text-sm px-4 py-2">Sign In</Link>
          <Link to="/upload" className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold px-6 py-2.5 rounded-full hover:brightness-110 active:scale-[0.98] transition-all">
            Get Started
          </Link>
          <div className="flex items-center gap-3 ml-4 border-l border-outline-variant/15 pl-6">
            <span className="material-symbols-outlined text-slate-300 cursor-pointer hover:text-primary transition-colors">notifications</span>
            <span className="material-symbols-outlined text-slate-300 cursor-pointer hover:text-primary transition-colors">account_circle</span>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-12 max-w-[1440px] mx-auto hero-gradient">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-highest/50 border border-outline-variant/15">
                <span className="text-[10px] uppercase tracking-widest font-bold text-secondary mr-2">New</span>
                <span className="text-xs text-on-surface-variant">Version 2.0 AI Engine Now Live</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-on-surface leading-[1.1]">
                AI Adaptive Learning Engine for <span className="text-primary">Smart Onboarding</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
                Upload your resume and job description to get a personalized learning roadmap. Let our curator bridge your skill gaps with precision.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/upload" className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold text-lg px-8 py-4 rounded-2xl hover:brightness-110 transition-all flex items-center gap-2">
                  Get Started
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <button className="bg-surface-container-highest text-on-surface font-bold text-lg px-8 py-4 rounded-2xl hover:bg-surface-bright transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              {/* AI Learning Graph Illustration */}
              <div className="relative w-full aspect-square glass-panel rounded-2xl p-8 border border-outline-variant/10 shadow-[0_20px_50px_rgba(7,0,108,0.15)]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <span className="material-symbols-outlined text-[300px] text-primary">psychology</span>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <span className="material-symbols-outlined text-primary">hub</span>
                    </div>
                    <div className="bg-surface-container-highest px-4 py-2 rounded-full border border-outline-variant/20 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                      <span className="text-xs font-bold tracking-widest text-secondary uppercase">Analysis Active</span>
                    </div>
                  </div>
                  {/* Skill Gap Visualizer */}
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full shadow-[0_0_15px_rgba(192,193,255,0.5)]"></div>
                    </div>
                    <div className="flex justify-between items-center text-xs font-medium text-slate-400">
                      <span>Current Skillset</span>
                      <span>Target Proficiency: 92%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                      <span className="text-[10px] uppercase tracking-tighter text-slate-500 mb-1 block">Recommended Path</span>
                      <span className="text-sm font-bold text-on-surface">Data Engineering</span>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                      <span className="text-[10px] uppercase tracking-tighter text-slate-500 mb-1 block">AI Confidence</span>
                      <span className="text-sm font-bold text-secondary">98.4% Match</span>
                    </div>
                  </div>
                </div>
                {/* Floating Skill Tags */}
                <div className="absolute -top-4 -right-4 p-3 bg-surface-container-highest rounded-xl border border-outline-variant/30 shadow-2xl">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                </div>
                <div className="absolute bottom-1/2 -left-8 p-3 bg-surface-container-high rounded-xl border border-outline-variant/30 shadow-2xl">
                  <span className="material-symbols-outlined text-secondary">cloud_upload</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold tracking-tight text-on-surface mb-6">Mastering your new role in <span className="text-primary">3 simple steps</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Our AI engine simplifies the transition by mapping your unique background to your future responsibilities.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 relative">
              <div className="mb-8 w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">upload_file</span>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-black text-outline-variant opacity-10">01</div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Upload Resume</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Provide your current professional background and the job description you're aiming for.</p>
            </div>
            {/* Step 2 */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 relative">
              <div className="mb-8 w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">query_stats</span>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-black text-outline-variant opacity-10">02</div>
              <h3 className="text-xl font-bold text-on-surface mb-4">AI analyzes skills</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Our curator cross-references thousands of data points to identify exactly where you need to grow.</p>
            </div>
            {/* Step 3 */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 relative">
              <div className="mb-8 w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">route</span>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-black text-outline-variant opacity-10">03</div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Get roadmap</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Receive a prioritized, interactive learning path tailored to your specific timeframe and goals.</p>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-32 px-12 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">The Engine</span>
                <h2 className="text-4xl font-bold text-on-surface leading-tight">Sophisticated Features for Rapid Skill Acquisition</h2>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Explore all capabilities
                <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              {/* Feature 1: Skill Gap Detection */}
              <div className="md:col-span-8 group bg-surface-container-low p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10 max-w-sm">
                  <h3 className="text-2xl font-bold text-on-surface mb-4">Skill gap detection</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">Granular analysis of your tech stack, leadership style, and domain expertise to find hidden bottlenecks in your performance.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-[10px] font-bold text-slate-500 border border-outline-variant/30 rounded-full uppercase tracking-widest">Natural Language Processing</span>
                    <span className="px-3 py-1 text-[10px] font-bold text-slate-500 border border-outline-variant/30 rounded-full uppercase tracking-widest">Skill Mapping</span>
                    <span className="px-3 py-1 text-[10px] font-bold text-slate-500 border border-outline-variant/30 rounded-full uppercase tracking-widest">Gap Analysis</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-30 group-hover:opacity-60 transition-opacity">
                  <img className="w-full h-full object-cover rounded-tl-[100px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYhfFhy8RVi70AML1CmisMKvTsoxzXDRt8SzpLArVRUSq8njQhAgbXVve4NRsRpjAMSgL01f28qMzfd42Mg5v-XcFZpF2Etjb3-d4bkJfRinldjrDA3tZbWgadIcRor-FQG5acfPIfI6N0TyBeurr65w-cqjivDH7QHfYaFYzqil_FBIlHZANGQvtDSZwo1SVi6sgkIXtI_G9syjsdz_KoyUXI0zyCIuKFiSrqTbGU6_zSHg0XWmc4vaIWCtf6DdXHLEOc0FcEUA" />
                </div>
              </div>
              {/* Feature 2: Personalized roadmap */}
              <div className="md:col-span-4 bg-surface-container-highest p-10 rounded-2xl flex flex-col justify-between items-start">
                <div className="mb-12">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">edit_road</span>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">Personalized roadmap</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">No generic lists. Every milestone is curated based on your current knowledge level and the specific nuances of your new role.</p>
                </div>
                <div className="w-full h-1.5 bg-surface/50 rounded-full">
                  <div className="w-2/3 h-full bg-primary rounded-full"></div>
                </div>
              </div>
              {/* Feature 3: Adaptive Learning */}
              <div className="md:col-span-4 bg-surface-container-high p-10 rounded-2xl flex flex-col gap-6">
                <div className="p-4 bg-secondary/10 rounded-2xl self-start">
                  <span className="material-symbols-outlined text-secondary">model_training</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface">Adaptive learning</h3>
                <p className="text-slate-400 text-sm leading-relaxed">As you progress, the engine recalibrates. Stuck on a concept? The AI pivot and suggests alternative resources immediately.</p>
              </div>
              {/* CTA Feature Card */}
              <div className="md:col-span-8 bg-gradient-to-br from-[#1e2746] to-background p-10 rounded-2xl border border-primary/20 flex items-center justify-between">
                <div className="max-w-md">
                  <h3 className="text-3xl font-bold text-on-surface mb-4">Ready to accelerate your career?</h3>
                  <p className="text-slate-400 mb-8">Join over 10,000+ professionals who mastered their roles 40% faster using SkillPath AI.</p>
                  <Link to="/upload" className="bg-primary text-on-primary font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors inline-block">Start Your Analysis</Link>
                </div>
                <div className="hidden lg:block">
                  <span className="material-symbols-outlined text-8xl text-primary/10">rocket_launch</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Final CTA */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto text-center">
          <div className="glass-panel p-16 rounded-[3rem] border border-outline-variant/10">
            <h2 className="text-5xl font-bold text-on-surface mb-8 tracking-tight">The future of onboarding is <span className="text-primary italic">here</span>.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input className="bg-surface-container-lowest border-outline-variant/30 text-on-surface px-6 py-4 rounded-2xl w-full max-w-sm focus:ring-primary focus:border-primary transition-all" placeholder="Enter your email" type="email" />
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold px-10 py-4 rounded-2xl w-full sm:w-auto hover:brightness-110 active:scale-95 transition-all">Get Started Free</button>
            </div>
            <p className="text-xs text-slate-500 mt-6 font-medium uppercase tracking-[0.1em]">No credit card required · Instant setup</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-12 mt-auto bg-[#0b1326] border-t border-[#424754]/15">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-black text-primary">SkillPath AI</span>
            <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-slate-500 text-center md:text-left">
              © 2024 SkillPath AI. Orchestrating the future of onboarding.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Cookie Settings</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Contact Us</a>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer transition-colors">language</span>
            <span className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer transition-colors">help</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

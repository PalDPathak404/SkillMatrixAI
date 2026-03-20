import React from 'react';
import { useNavigate } from 'react-router-dom';

function HRDashboard() {
  const navigate = useNavigate();

  return (
    <div className="antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen bg-surface flex">
      {/* SideNavBar (HR Specific) */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#131b2e] flex flex-col py-8 z-40">
        <div className="px-8 mb-10">
          <h1 className="text-lg font-black text-white tracking-tighter">Enterprise Portal</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Fluid Intelligence</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="relative flex items-center gap-3 text-[#c0c1ff] before:content-[''] before:w-0.5 before:h-5 before:bg-[#c0c1ff] before:absolute before:left-0 px-8 py-3 bg-white/5" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </a>
          {[
            { name: 'Candidates', icon: 'group' },
            { name: 'Reviews', icon: 'fact_check' },
            { name: 'Training', icon: 'school' },
            { name: 'Feedback', icon: 'forum' },
            { name: 'Settings', icon: 'settings' }
          ].map((item) => (
            <a key={item.name} className="flex items-center gap-3 text-slate-400 hover:text-slate-100 hover:bg-[#2d3449] transition-colors duration-200 px-8 py-3" href="#">
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-medium text-sm">{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="px-8 mt-auto pt-8 border-t border-white/5 space-y-1">
          <a className="flex items-center gap-3 text-slate-400 hover:text-slate-100 py-2 text-sm" href="#">
            <span className="material-symbols-outlined text-base">help</span>
            <span>Support</span>
          </a>
          <a className="flex items-center gap-3 text-slate-400 hover:text-slate-100 py-2 text-sm" href="#">
            <span className="material-symbols-outlined text-base">description</span>
            <span>Documentation</span>
          </a>
          <button 
            onClick={() => navigate('/')}
            className="w-full mt-6 py-2 px-4 rounded-lg bg-surface-container-highest text-[#c0c1ff] text-xs font-bold uppercase tracking-wider hover:bg-surface-variant transition-all font-inter"
          >
            Switch Role
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen flex-grow">
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 left-64 h-16 bg-[#0b1326]/80 backdrop-blur-xl flex justify-between items-center px-8 z-30 border-b border-white/5">
          <div className="flex items-center gap-8">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-500 text-sm">search</span>
              <input 
                className="bg-white/5 border-none rounded-full pl-10 pr-4 py-1.5 text-sm w-80 focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-slate-600 outline-none" 
                placeholder="Search candidates, roles, or skills..." 
                type="text"
              />
            </div>
            <nav className="hidden lg:flex gap-6">
              <a className="text-[#c0c1ff] border-b-2 border-[#c0c1ff] pb-1 text-sm font-medium" href="#">Dashboard</a>
              <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium" href="#">Candidates</a>
              <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium" href="#">Upload</a>
              <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium" href="#">Settings</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:bg-white/5 rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-slate-400 hover:bg-white/5 rounded-full transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-white/10 ml-2">
              <img 
                className="w-full h-full object-cover" 
                alt="HR Manager profile avatar" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGLNO4a7-2tRXiux52lKBQsjy4q3n33CFuOfkUOuuglJyPwTYdQLMRhADxceMBc1haHUEGyL-TvBH5ggLNLLJAKBzTNbaYkZDUpB6jlLvy4WCFfTIUn8p03Rx6_QzyO8nkxAkxDdoANP9qV1S7NrRMX1kQSVWDb7ZSV-t3XQK4aH4VpXQSjSIjCNnzau51cDaPyuH_4ynIDG4PWubeQmXIKL8fPIpwvy8U2p-FowdHvRl6lAaFp5tkPrcqxJDNnmONyaDznEwcGw"
              />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="pt-24 px-12 pb-12">
          {/* Bento Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Candidates', value: '48', icon: 'groups', color: 'text-primary' },
              { label: 'In Review', value: '12', icon: 'rate_review', color: 'text-tertiary' },
              { label: 'In Training', value: '24', icon: 'model_training', color: 'text-secondary' },
              { label: 'Completed', value: '12', icon: 'verified', color: 'text-emerald-400' }
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container-low p-6 rounded-2xl group hover:bg-surface-container transition-all">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-4xl font-black text-on-surface tracking-tighter">{stat.value}</h3>
                  <span className={`${stat.color} material-symbols-outlined text-3xl opacity-20 group-hover:opacity-100 transition-opacity`}>{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Candidate Table Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Active Candidates</h2>
                <p className="text-slate-400 text-sm">Managing the current recruitment pipeline and AI-upskilling paths.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-surface-container-highest rounded-xl text-sm font-semibold text-white flex items-center gap-2 hover:bg-surface-variant transition-all">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  Filter
                </button>
                <button onClick={() => navigate('/upload-resumes')} className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container rounded-xl text-sm font-bold text-on-primary shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all">
                  Upload Resume
                </button>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <table className="w-full text-left border-separate border-spacing-0">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-white/5">Candidate Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-white/5">Role Applied</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-white/5 text-center">Match %</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-white/5">Status</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-white/5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: 'Alex Chen', email: 'alex.chen@example.com', role: 'Senior Fullstack', match: 65, status: 'In Training', color: 'secondary' },
                    { name: 'Sarah Jenkins', email: 's.jenkins@cloud.tech', role: 'Backend Architect', match: 82, status: 'Approved', color: 'primary' },
                    { name: 'Marcus Thorne', email: 'm.thorne@devops.org', role: 'DevOps Engineer', match: 45, status: 'Completed', color: 'emerald-400' }
                  ].map((candidate) => (
                    <tr key={candidate.name} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`h-9 w-9 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-${candidate.color}`}>
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{candidate.name}</p>
                            <p className="text-xs text-slate-500">{candidate.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-sm text-slate-300">{candidate.role}</td>
                      <td className="px-8 py-5">
                        <div className="flex flex-col items-center gap-1">
                          <span className={`text-xs font-bold text-${candidate.color}`}>{candidate.match}%</span>
                          <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full bg-${candidate.color}`} style={{ width: `${candidate.match}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-${candidate.color}/10 text-${candidate.color} uppercase tracking-wider`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">View Profile</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Settings & Details Layout */}
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Settings Panel */}
            <div className="flex-1 space-y-8">
              <div className="bg-surface-container-low rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">settings</span>
                  Portal Settings
                </h3>
                {/* Tabs */}
                <div className="flex gap-6 border-b border-white/5 mb-8 overflow-x-auto no-scrollbar">
                  {['Profile', 'Preferences', 'System', 'Security'].map((tab, i) => (
                    <button 
                      key={tab} 
                      className={`pb-3 text-sm whitespace-nowrap transition-all ${i === 0 ? 'font-bold text-primary border-b-2 border-primary' : 'font-medium text-slate-500 hover:text-slate-300'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {/* Settings Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Name</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-xl text-sm py-3 px-4 focus:ring-1 focus:ring-primary/40 text-on-surface outline-none" type="text" defaultValue="Julian Casablancas" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-xl text-sm py-3 px-4 focus:ring-1 focus:ring-primary/40 text-on-surface outline-none" type="email" defaultValue="julian@skillpath.ai" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Role</label>
                      <div className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl text-sm py-3 px-4 text-slate-400 italic">
                        Human Resources Manager
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <p className="text-sm font-semibold text-white">Dark Mode</p>
                        <p className="text-xs text-slate-500">System appearance</p>
                      </div>
                      <div className="w-10 h-5 bg-primary/20 rounded-full relative p-0.5 cursor-pointer">
                        <div className="h-4 w-4 bg-primary rounded-full absolute right-0.5 shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <h4 className="text-sm font-bold text-white mb-4">AI Model Configuration</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-surface-container-highest p-4 rounded-xl border border-primary/20">
                      <div className="flex justify-between items-start mb-2">
                        <span className="material-symbols-outlined text-primary text-xl">neurology</span>
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      </div>
                      <p className="text-xs font-bold text-white">OpenAI GPT-4o</p>
                      <p className="text-[10px] text-slate-400">Current Default</p>
                    </div>
                    <div className="bg-surface-container-highest p-4 rounded-xl border border-white/5 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="material-symbols-outlined text-slate-500 text-xl">cloud_done</span>
                      </div>
                      <p className="text-xs font-bold text-white">Claude 3.5</p>
                      <p className="text-[10px] text-slate-400">Not Active</p>
                    </div>
                    <div className="bg-surface-container-highest p-4 rounded-xl border border-white/5 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="material-symbols-outlined text-slate-500 text-xl">terminal</span>
                      </div>
                      <p className="text-xs font-bold text-white">Meta Llama 3</p>
                      <p className="text-[10px] text-slate-400">Internal Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail Preview Panel */}
            <div className="xl:w-96">
              <div className="bg-surface-container-high rounded-2xl p-6 shadow-[0_20px_50px_rgba(7,0,108,0.15)] border border-white/5 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black uppercase tracking-tighter text-secondary">Draft Preview</span>
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-4 mb-6 border border-white/5 aspect-[3/4] overflow-hidden relative">
                  <div className="absolute inset-0 p-6">
                    <div className="h-4 bg-white/10 w-1/2 rounded-full mb-8"></div>
                    <div className="space-y-4">
                      <div className="h-2 bg-white/5 w-full rounded-full"></div>
                      <div className="h-2 bg-white/5 w-full rounded-full"></div>
                      <div className="h-2 bg-white/5 w-3/4 rounded-full"></div>
                      <div className="pt-6">
                        <div className="h-3 bg-white/10 w-1/3 rounded-full mb-4"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-10 bg-white/5 rounded-lg"></div>
                          <div className="h-10 bg-white/5 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Resume_Alex_Chen_v2.pdf</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                      <span className="text-xs font-bold text-secondary">AI Insight</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Candidate shows strong alignment with <span className="text-white font-medium">AWS Architecture</span> but requires upskilling in <span className="text-white font-medium">Terraform module design</span>.
                    </p>
                  </div>
                  <button className="w-full py-4 bg-primary text-on-primary font-black rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                    Send for Review
                  </button>
                  <button className="w-full py-3 bg-white/5 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-all border border-white/5">
                    Download JD Comparison
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HRDashboard;

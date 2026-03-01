"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { techStack } from "@/data/skills";

// Helper functions for enriched data
const getIconForCategory = (cat: string) => {
  switch (cat) {
    case 'language': return '📝';
    case 'frontend': return '🎨';
    case 'backend': return '⚙️';
    case 'ai': return '🤖';
    case 'database': return '🗄️';
    case 'cloud': return '☁️';
    case 'automation': return '⚡';
    case 'data': return '📊';
    case 'design': return '🎯';
    case 'mobile': return '📱';
    default: return '🔧';
  }
};

const getProficiencyInfo = (prof: number): { pct: number, exp: string, status: string } => {
  switch (prof) {
    case 5: return { pct: 90 + Math.floor(Math.random() * 8), exp: '3+ yrs', status: 'Primary' };
    case 4: return { pct: 75 + Math.floor(Math.random() * 10), exp: '2 yrs', status: 'Active' };
    case 3: return { pct: 60 + Math.floor(Math.random() * 10), exp: '1 yr', status: 'Learning' };
    case 2: return { pct: 40 + Math.floor(Math.random() * 10), exp: '< 1 yr', status: 'Learning' };
    case 1: return { pct: 25 + Math.floor(Math.random() * 10), exp: 'Basics', status: 'Learning' };
    default: return { pct: 50, exp: '1 yr', status: 'Active' };
  }
};

// Map original category to UI Category
const getUiCategory = (cat: string) => {
  if (['language', 'frontend'].includes(cat)) return 'core';
  if (['ai', 'automation'].includes(cat)) return 'ai';
  if (['database'].includes(cat)) return 'db';
  if (['cloud'].includes(cat)) return 'cloud';
  if (['backend'].includes(cat)) return 'backend';
  if (['data'].includes(cat)) return 'data';
  if (['design', 'mobile'].includes(cat)) return 'design';
  return 'core';
};

const CAT_COLORS: Record<string, { bg: string, color: string, label: string }> = {
  core: { bg: 'rgba(137,180,250,0.15)', color: '#89b4fa', label: 'Core Foundation' },
  ai: { bg: 'rgba(203,166,247,0.15)', color: '#cba6f7', label: 'AI & Agents' },
  db: { bg: 'rgba(148,226,213,0.15)', color: '#94e2d5', label: 'Databases' },
  cloud: { bg: 'rgba(249,226,175,0.15)', color: '#f9e2af', label: 'Cloud & DevOps' },
  backend: { bg: 'rgba(166,227,161,0.15)', color: '#a6e3a1', label: 'Backend & APIs' },
  data: { bg: 'rgba(250,179,135,0.15)', color: '#fab387', label: 'Data Science' },
  design: { bg: 'rgba(243,139,168,0.15)', color: '#f38ba8', label: 'Design & Mobile' },
};

const enrichedTechStack = techStack.map(skill => {
  const info = getProficiencyInfo(skill.proficiency);
  const uiCat = getUiCategory(skill.category);
  return {
    ...skill,
    icon: getIconForCategory(skill.category),
    pct: info.pct,
    exp: info.exp,
    status: info.status,
    uiCat: uiCat,
    cc: CAT_COLORS[uiCat]
  };
});

type EnrichedSkill = typeof enrichedTechStack[0];

export default function TechUniverse() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [currentCat, setCurrentCat] = useState('all');
  const [profFilter, setProfFilter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<EnrichedSkill | null>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  // Trigger bar animations when data/view changes
  useEffect(() => {
    setBarsAnimated(false);
    const timer = setTimeout(() => {
      setBarsAnimated(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentCat, profFilter, viewMode, searchQuery]);

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return enrichedTechStack.filter(s => {
      // Category filter
      if (currentCat !== 'all' && s.uiCat !== currentCat) return false;
      // Proficiency filter
      if (profFilter === 'expert' && s.pct < 90) return false;
      if (profFilter === 'advanced' && (s.pct < 70 || s.pct >= 90)) return false;
      if (profFilter === 'learning' && s.pct >= 70) return false;
      // Search
      if (q && !s.name.toLowerCase().includes(q) && !s.category.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [currentCat, profFilter, searchQuery]);

  const handleSetCategory = (cat: string) => {
    setCurrentCat(cat);
    setProfFilter(null);
  };

  const handleSetProf = (level: string) => {
    setProfFilter(level);
    setCurrentCat('all');
  };

  const pathName = useMemo(() => {
    if (profFilter) return profFilter.charAt(0).toUpperCase() + profFilter.slice(1) + ' Skills';
    if (currentCat !== 'all') return CAT_COLORS[currentCat]?.label || currentCat;
    return 'All Technologies';
  }, [currentCat, profFilter]);

  // Count items for sidebar
  const getCount = (filterFn: (s: EnrichedSkill) => boolean) => enrichedTechStack.filter(filterFn).length;

  return (
    <section ref={sectionRef} id="tech" className="relative py-16 sm:py-24 overflow-hidden font-mono text-[var(--text-primary)]">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent-orange)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--accent-red)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-max px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--accent-orange)] bg-[var(--accent-orange)]/10 rounded-full border border-[var(--accent-orange)]/20">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-accent font-bold mb-4">
              <span className="gradient-text">Skills</span>.OS
            </h2>
            <p className="text-[var(--text-tertiary)] max-w-2xl mx-auto">
              Interactive file explorer showcasing my technical expertise and proficiency across various domains.
            </p>
          </div>

          {/* MacOS Window UI */}
          <div className="w-full bg-[#111118] border border-[#252535] rounded-xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7),_0_0_0_1px_rgba(255,255,255,0.04)]">

            {/* Titlebar */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-[#16161f] border-b border-[#1e1e2e] select-none">
              <div className="flex gap-[7px]">
                <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
                <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
              </div>
              <div className="flex-1 text-center text-xs text-[#6c7086] tracking-widest hidden sm:block">
                Skills.OS — File Explorer
              </div>
              <div className="text-[11px] text-[#6c7086] bg-[#1e1e2e] border border-[#252535] px-2.5 py-1 rounded">
                ~/portfolio/skills
              </div>
            </div>

            {/* Pathbar */}
            <div className="flex items-center gap-1.5 px-5 py-2.5 border-b border-[#1e1e2e] text-xs text-[#6c7086] bg-[#111118]">
              <span className="text-[#89b4fa]">~</span>
              <span className="text-[#252535]">/</span>
              <span className="text-[#89b4fa]">portfolio</span>
              <span className="text-[#252535]">/</span>
              <span className="text-[#cdd6f4]">{pathName}</span>
            </div>

            {/* Explorer Layout */}
            <div className="flex flex-col md:flex-row h-[580px]">

              {/* Sidebar */}
              <div className="w-full md:w-[220px] border-r border-[#1e1e2e] overflow-y-auto py-3 bg-[#111118] shrink-0 custom-scrollbar hidden md:block">

                <div className="py-1">
                  <div className="text-[9px] tracking-[0.15em] uppercase text-[#6c7086] px-5 py-1">Drives</div>
                  <SidebarItem
                    icon="💾" label="All Skills" count={enrichedTechStack.length}
                    isActive={currentCat === 'all' && !profFilter}
                    onClick={() => handleSetCategory('all')}
                  />
                </div>

                <div className="py-1 mt-2">
                  <div className="text-[9px] tracking-[0.15em] uppercase text-[#6c7086] px-5 py-1">Categories</div>
                  <SidebarItem icon="⚡" label="Core Foundation" count={getCount(s => s.uiCat === 'core')} isActive={currentCat === 'core'} onClick={() => handleSetCategory('core')} />
                  <SidebarItem icon="🤖" label="AI & Agents" count={getCount(s => s.uiCat === 'ai')} isActive={currentCat === 'ai'} onClick={() => handleSetCategory('ai')} />
                  <SidebarItem icon="🗄️" label="Databases" count={getCount(s => s.uiCat === 'db')} isActive={currentCat === 'db'} onClick={() => handleSetCategory('db')} />
                  <SidebarItem icon="☁️" label="Cloud & DevOps" count={getCount(s => s.uiCat === 'cloud')} isActive={currentCat === 'cloud'} onClick={() => handleSetCategory('cloud')} />
                  <SidebarItem icon="⚙️" label="Backend & APIs" count={getCount(s => s.uiCat === 'backend')} isActive={currentCat === 'backend'} onClick={() => handleSetCategory('backend')} />
                  <SidebarItem icon="📊" label="Data Science" count={getCount(s => s.uiCat === 'data')} isActive={currentCat === 'data'} onClick={() => handleSetCategory('data')} />
                  <SidebarItem icon="🎨" label="Design & Mobile" count={getCount(s => s.uiCat === 'design')} isActive={currentCat === 'design'} onClick={() => handleSetCategory('design')} />
                </div>

                <div className="py-1 mt-2">
                  <div className="text-[9px] tracking-[0.15em] uppercase text-[#6c7086] px-5 py-1">Proficiency</div>
                  <SidebarItem icon="★" label="Expert (90%+)" count={getCount(s => s.pct >= 90)} isActive={profFilter === 'expert'} onClick={() => handleSetProf('expert')} />
                  <SidebarItem icon="◆" label="Advanced (70%+)" count={getCount(s => s.pct >= 70 && s.pct < 90)} isActive={profFilter === 'advanced'} onClick={() => handleSetProf('advanced')} />
                  <SidebarItem icon="◇" label="Learning" count={getCount(s => s.pct < 70)} isActive={profFilter === 'learning'} onClick={() => handleSetProf('learning')} />
                </div>

              </div>

              {/* Main Panel */}
              <div className="flex-1 overflow-y-auto relative bg-[#111118] custom-scrollbar">

                {/* Toolbar */}
                <div className="sticky top-0 sticky-toolbar flex items-center gap-3 px-5 py-2.5 border-b border-[#1e1e2e] bg-[#111118]/90 backdrop-blur-md z-10">
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6c7086] text-sm pointer-events-none">⌕</span>
                    <input
                      type="text"
                      placeholder="Search skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#1e1e2e] border border-[#252535] rounded-md py-1.5 pl-8 pr-3 text-[11px] text-[#cdd6f4] placeholder-[#6c7086] outline-none focus:border-[#89b4fa] transition-colors font-mono"
                    />
                  </div>
                  <div className="flex gap-0.5 bg-[#1e1e2e] rounded-md p-0.5">
                    <button
                      onClick={() => setViewMode('table')}
                      className={`px-2 py-1 rounded-[4px] text-xs transition-colors ${viewMode === 'table' ? 'bg-[#89b4fa] text-[#111118]' : 'text-[#6c7086] hover:bg-[#252535] hover:text-[#cdd6f4]'}`}
                    >
                      ≡
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-2 py-1 rounded-[4px] text-xs transition-colors ${viewMode === 'grid' ? 'bg-[#89b4fa] text-[#111118]' : 'text-[#6c7086] hover:bg-[#252535] hover:text-[#cdd6f4]'}`}
                    >
                      ⊞
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative min-h-[400px]">
                  {filteredData.length === 0 ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[#6c7086] text-[13px] gap-2">
                      <div className="text-3xl opacity-40">📭</div>
                      <div>No matching skills found</div>
                    </div>
                  ) : (
                    viewMode === 'table' ? (
                      <table className="w-full border-collapse pb-4">
                        <thead className="sticky top-[49px] bg-[#16161f] z-[5] shadow-[0_1px_0_var(--border2)] border-b border-[#1e1e2e] text-[#6c7086]">
                          <tr>
                            <th className="px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-left font-normal cursor-pointer hover:text-[#89b4fa]">Name</th>
                            <th className="px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-left font-normal cursor-pointer hover:text-[#89b4fa] hidden sm:table-cell">Category</th>
                            <th className="px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-left font-normal cursor-pointer hover:text-[#89b4fa] hidden md:table-cell">Type</th>
                            <th className="px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-left font-normal cursor-pointer hover:text-[#89b4fa] min-w-[140px]">Proficiency</th>
                            <th className="px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-left font-normal cursor-pointer hover:text-[#89b4fa] hidden lg:table-cell">Experience</th>
                            <th className="px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-left font-normal cursor-pointer hover:text-[#89b4fa]">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.map((s, i) => (
                            <motion.tr
                              key={s.id}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03, duration: 0.3 }}
                              onClick={() => setSelectedSkill(s)}
                              className="border-b border-[#1e1e2e]/60 cursor-pointer hover:bg-[#89b4fa]/10 transition-colors group"
                            >
                              <td className="px-4 py-2.5">
                                <div className="flex items-center gap-2.5">
                                  <div
                                    className="w-7 h-7 rounded-md flex items-center justify-center text-sm shrink-0"
                                    style={{ background: s.cc.bg }}
                                  >
                                    {s.icon}
                                  </div>
                                  <span className="text-xs text-[#cdd6f4] font-medium">{s.name}</span>
                                </div>
                              </td>
                              <td className="px-4 py-2.5 hidden sm:table-cell">
                                <span className="text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: s.cc.bg, color: s.cc.color }}>
                                  {s.cc.label}
                                </span>
                              </td>
                              <td className="px-4 py-2.5 hidden md:table-cell text-[11px] capitalize" style={{ color: s.cc.color }}>
                                {s.category}
                              </td>
                              <td className="px-4 py-2.5">
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-1 bg-[#1e1e2e] rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full transition-all duration-700 ease-out"
                                      style={{ width: barsAnimated ? `${s.pct}%` : '0%', background: s.color || s.cc.color }}
                                    ></div>
                                  </div>
                                  <div className="text-[10px] text-[#6c7086] w-6 text-right shrink-0">{s.pct}%</div>
                                </div>
                              </td>
                              <td className="px-4 py-2.5 hidden lg:table-cell text-xs text-[#6c7086]">
                                {s.exp}
                              </td>
                              <td className="px-4 py-2.5">
                                <StatusBadge status={s.status} />
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                        {filteredData.map((s, i) => (
                          <motion.div
                            key={s.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.02, duration: 0.3 }}
                            onClick={() => setSelectedSkill(s)}
                            className="bg-[#16161f] border border-[#1e1e2e] rounded-xl p-4 cursor-pointer hover:-translate-y-1 hover:border-[#252535] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300"
                          >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3" style={{ background: s.cc.bg }}>
                              {s.icon}
                            </div>
                            <div className="text-xs font-bold text-[#cdd6f4] mb-1">{s.name}</div>
                            <div className="text-[10px] text-[#6c7086] mb-2.5 capitalize">{s.category}</div>
                            <div className="h-[3px] bg-[#1e1e2e] rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-700 ease-out"
                                style={{ width: barsAnimated ? `${s.pct}%` : '0%', background: s.color || s.cc.color }}
                              ></div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* StatusBar */}
            <div className="flex items-center gap-5 px-5 py-1.5 border-t border-[#1e1e2e] bg-[#16161f] text-[10px] text-[#6c7086]">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#a6e3a1] animate-pulse"></div>
                <span className="text-[#cdd6f4]">Active</span>
              </div>
              <div className="flex items-center gap-1.5">
                Items: <span className="text-[#cdd6f4]">{filteredData.length}</span>
              </div>
              <div className="flex items-center gap-1.5 hidden sm:flex">
                Category: <span className="text-[#cdd6f4]">{currentCat === 'all' && !profFilter ? 'All' : pathName}</span>
              </div>
              <div className="ml-auto">Skills.OS v2.0</div>
            </div>

          </div>
        </motion.div >
      </div >

      {/* Detail Overlay */}
      <AnimatePresence>
        {
          selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#111118] border border-[#252535] rounded-2xl p-6 md:p-8 w-full max-w-sm shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 text-[#6c7086] hover:text-[#cdd6f4] text-xl leading-none"
                >
                  ×
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                    style={{ background: selectedSkill.cc.bg }}
                  >
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <div className="font-accent text-xl font-bold text-[#cdd6f4]">{selectedSkill.name}</div>
                    <div className="text-xs text-[#6c7086] mt-0.5">{selectedSkill.cc.label}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1e1e2e] text-xs">
                    <span className="text-[#6c7086]">Category</span>
                    <span className="text-[#cdd6f4] font-medium capitalize">{selectedSkill.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1e1e2e] text-xs">
                    <span className="text-[#6c7086]">Proficiency</span>
                    <span className="text-[#cdd6f4] font-medium">{selectedSkill.pct}%</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1e1e2e] text-xs">
                    <span className="text-[#6c7086]">Experience</span>
                    <span className="text-[#cdd6f4] font-medium">{selectedSkill.exp}</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1e1e2e] text-xs">
                    <span className="text-[#6c7086]">Status</span>
                    <StatusBadge status={selectedSkill.status} />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-[11px] text-[#6c7086] mb-1.5">
                    <span>Skill Level</span>
                    <span>{selectedSkill.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.pct}%` }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: selectedSkill.color || selectedSkill.cc.color }}
                    ></motion.div>
                  </div>
                </div>

              </motion.div>
            </motion.div >
          )
        }
      </AnimatePresence >

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #252535;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #313244;
        }
      `}} />
    </section >
  );
}

// Subcomponents

function SidebarItem({ icon, label, count, isActive, onClick }: { icon: string, label: string, count: number, isActive: boolean, onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 px-5 py-1.5 cursor-pointer text-xs border-l-[3px] transition-all
        ${isActive
          ? 'bg-[#89b4fa]/10 text-[#89b4fa] border-[#89b4fa]'
          : 'border-transparent text-[#6c7086] hover:bg-[#1e1e2e] hover:text-[#cdd6f4]'
        }
      `}
    >
      <span className="text-[13px] w-4 text-center">{icon}</span>
      <span>{label}</span>
      <span className={`ml-auto text-[9px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-[#89b4fa]/20 text-[#89b4fa]' : 'bg-[#1e1e2e] text-[#6c7086]'}`}>
        {count}
      </span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const color = status === 'Primary' ? '#a6e3a1' : status === 'Active' ? '#89b4fa' : '#f9e2af';
  return (
    <span className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }}></span>
      {status}
    </span>
  );
}






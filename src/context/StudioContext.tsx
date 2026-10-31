"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, PROJECTS_DATA, JOURNAL_ESSAYS, ProjectCaseStudy, JournalEssay } from "@/data/studioData";

interface StudioContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  isConciergeOpen: boolean;
  openConcierge: (preselectedProject?: string) => void;
  closeConcierge: () => void;
  preselectedProject: string;
  projects: ProjectCaseStudy[];
  addCustomProject: (proj: ProjectCaseStudy) => void;
  essays: JournalEssay[];
  addCustomEssay: (essay: JournalEssay) => void;
  heroVideoUrl: string;
  setHeroVideoUrl: (url: string) => void;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [preselectedProject, setPreselectedProject] = useState("");
  const [projects, setProjects] = useState<ProjectCaseStudy[]>(PROJECTS_DATA);
  const [essays, setEssays] = useState<JournalEssay[]>(JOURNAL_ESSAYS);
  const [heroVideoUrl, setHeroVideoUrlState] = useState<string>("/videos/alphaville_metamorphosis_720p.mp4");

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem("rbi_locale") as Locale | null;
      if (savedLocale === "en" || savedLocale === "pt") {
        setLocaleState(savedLocale);
      }
      const savedProjects = localStorage.getItem("rbi_custom_projects");
      if (savedProjects) {
        const parsed = JSON.parse(savedProjects) as ProjectCaseStudy[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProjects([...parsed, ...PROJECTS_DATA]);
        }
      }
      const savedEssays = localStorage.getItem("rbi_custom_essays");
      if (savedEssays) {
        const parsed = JSON.parse(savedEssays) as JournalEssay[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEssays([...parsed, ...JOURNAL_ESSAYS]);
        }
      }
      const savedVideo = localStorage.getItem("rbi_hero_video_url");
      if (savedVideo !== null && savedVideo !== undefined) {
        setHeroVideoUrlState(savedVideo);
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    try {
      localStorage.setItem("rbi_locale", loc);
    } catch {
      // ignore
    }
  };

  const openConcierge = (projectSlug?: string) => {
    if (projectSlug) setPreselectedProject(projectSlug);
    setIsConciergeOpen(true);
  };

  const closeConcierge = () => {
    setIsConciergeOpen(false);
  };

  const addCustomProject = (proj: ProjectCaseStudy) => {
    setProjects((prev) => {
      const updated = [proj, ...prev.filter((p) => p.slug !== proj.slug)];
      try {
        const customOnly = updated.filter(
          (p) => !PROJECTS_DATA.some((defaultP) => defaultP.slug === p.slug)
        );
        localStorage.setItem("rbi_custom_projects", JSON.stringify(customOnly));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const addCustomEssay = (essay: JournalEssay) => {
    setEssays((prev) => {
      const updated = [essay, ...prev.filter((e) => e.slug !== essay.slug)];
      try {
        const customOnly = updated.filter(
          (e) => !JOURNAL_ESSAYS.some((defaultE) => defaultE.slug === e.slug)
        );
        localStorage.setItem("rbi_custom_essays", JSON.stringify(customOnly));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const setHeroVideoUrl = (url: string) => {
    setHeroVideoUrlState(url);
    try {
      localStorage.setItem("rbi_hero_video_url", url);
    } catch {
      // ignore
    }
  };

  return (
    <StudioContext.Provider
      value={{
        locale,
        setLocale,
        isConciergeOpen,
        openConcierge,
        closeConcierge,
        preselectedProject,
        projects,
        addCustomProject,
        essays,
        addCustomEssay,
        heroVideoUrl,
        setHeroVideoUrl,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  const ctx = useContext(StudioContext);
  if (!ctx) {
    throw new Error("useStudio must be used within a StudioProvider");
  }
  return ctx;
}

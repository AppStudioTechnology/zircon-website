import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SectorsSection } from './components/SectorsSection';
import { TrustSection } from './components/TrustSection';
import { SolutionsSection } from './components/SolutionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutPage } from './AboutPage';
import { SolutionsLandingPage } from './SolutionsLandingPage';
import { SolutionsTypePage } from './SolutionsTypePage';
import { SolutionsDentalPage } from './SolutionsDentalPage';
import { SolutionsMedicalPage } from './SolutionsMedicalPage';
import { CategoryPage } from './CategoryPage';
import { ProductPage } from './ProductPage';
import { EducationPage } from './EducationPage';
import { EventsPage } from './EventsPage';
import { ContactPage } from './ContactPage';

const HomePage = () => (
  <>
    <Hero />
    <div className="relative z-10 bg-white w-full">
      <AboutSection />
      <SectorsSection />
      <TrustSection />
      <SolutionsSection />
      <TestimonialsSection />
      <InsightsSection />
      <CTASection />
    </div>
  </>
);

function AppLayout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const isHome = location.pathname === '/';

  function upcaseWords(input: string) {
    return input
      .split(' ')
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function ensureMetaTag(attr: 'name' | 'property', key: string) {
    const selector = `meta[${attr}="${key}"]`;
    let el = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    return el;
  }

  function ensureLinkRel(rel: string) {
    const selector = `link[rel="${rel}"]`;
    let el = document.head.querySelector(selector) as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement('link');
      el.rel = rel;
      document.head.appendChild(el);
    }
    return el;
  }

  function getSeoForPath(pathname: string) {
    const segments = pathname.split('/').filter(Boolean);
    let pageTitle = 'Home';
    let description =
      'Zircon Medical Equipment connects global innovation with GCC healthcare professionals across dental and medical solutions—products, education, events, and support.';

    if (segments[0] === 'about') {
      pageTitle = 'About Us';
      description =
        'Learn about Zircon Medical Equipment—our mission, values, and how we support healthcare professionals across the GCC.';
    } else if (segments[0] === 'solutions') {
      if (segments.length === 1) {
        pageTitle = 'Solutions';
        description =
          'Explore Zircon’s portfolio of dental and medical solutions—products curated for quality, clinical relevance, and reliability.';
      } else if (segments.length === 2) {
        pageTitle = `${segments[1].replace(/-/g, ' ')} Solutions`;
        description = `Explore ${segments[1].replace(/-/g, ' ')} solutions—categories and products tailored for modern clinical workflows.`;
      } else if (segments.length === 3) {
        pageTitle = `${segments[2].replace(/-/g, ' ')} – Category`;
        description = `Browse products in ${segments[2].replace(/-/g, ' ')}—specifications, highlights, and related solutions.`;
      } else if (segments.length >= 4) {
        pageTitle = `${segments[3].replace(/-/g, ' ')} – Product`;
        description = `Discover ${segments[3].replace(/-/g, ' ')}—details, clinical highlights, and supporting resources.`;
      }
    } else if (segments[0] === 'education') {
      pageTitle = 'Education';
      description =
        'Explore education resources, clinical case studies, and learning opportunities from Zircon Medical Equipment.';
    } else if (segments[0] === 'events') {
      pageTitle = 'Events';
      description =
        'See upcoming exhibitions, workshops, and educational events from Zircon Medical Equipment across the GCC.';
    } else if (segments[0] === 'contact') {
      pageTitle = 'Contact Us';
      description =
        'Contact Zircon Medical Equipment to request a consultation, product information, or partnership support.';
    }

    pageTitle = upcaseWords(pageTitle);
    return { pageTitle, description };
  }

  // Basic SEO: title + meta description + canonical + OG/Twitter tags
  useEffect(() => {
    const { pageTitle, description } = getSeoForPath(location.pathname);

    const fullTitle = `${pageTitle} | Zircon Medical Equipment`;
    document.title = fullTitle;

    // Meta description
    ensureMetaTag('name', 'description').content = description;

    // Canonical (exclude query/hash)
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    ensureLinkRel('canonical').href = canonicalUrl;

    // Open Graph
    ensureMetaTag('property', 'og:title').content = fullTitle;
    ensureMetaTag('property', 'og:description').content = description;
    ensureMetaTag('property', 'og:url').content = canonicalUrl;
    ensureMetaTag('property', 'og:type').content = 'website';
    ensureMetaTag('property', 'og:site_name').content = 'Zircon Medical Equipment';

    // Twitter
    ensureMetaTag('name', 'twitter:title').content = fullTitle;
    ensureMetaTag('name', 'twitter:description').content = description;
  }, [location.pathname, location.search]);

  // Scroll restoration:
  // - On normal navigation (links), scroll to top or hash target
  // - On back/forward (POP), restore previous scroll position
  const scrollPositions = useRef<Record<string, { x: number; y: number }>>({});

  // Save scroll position before route changes
  useEffect(() => {
    const key = location.key || `${location.pathname}${location.search}`;
    return () => {
      scrollPositions.current[key] = { x: window.scrollX, y: window.scrollY };
    };
  }, [location]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const key = location.key || `${location.pathname}${location.search}`;

    // Back/forward navigation: restore previous scroll position if we have it
    if (navigationType === 'POP') {
      const stored = scrollPositions.current[key];
      if (stored) {
        window.scrollTo(stored.x, stored.y);
        return;
      }
    }

    // If URL has a hash, try to scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: 'start', behavior: 'smooth' });
        return;
      }
    }

    // Default: scroll to top for new pages
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location, navigationType]);

  return (
    <div className={`min-h-screen font-['Montserrat',sans-serif] selection:bg-[#DD005C] selection:text-white relative ${isHome ? 'bg-black' : 'bg-white'}`}>
      <Header />
      {/* No main top padding: every page’s first section goes to top, header overlays. Each section uses its own pt for header clearance. */}
      <main className="relative w-full pt-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsLandingPage />} />
          <Route path="/solutions/dental" element={<SolutionsDentalPage />} />
          <Route path="/solutions/medical" element={<SolutionsMedicalPage />} />
          <Route path="/solutions/:typeId" element={<SolutionsTypePage />} />
          <Route path="/solutions/:typeId/:categoryId" element={<CategoryPage />} />
          <Route path="/solutions/:typeId/:categoryId/:productId" element={<ProductPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

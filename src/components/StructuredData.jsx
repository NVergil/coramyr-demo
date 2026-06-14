import testimonialsData from "../data/testimonials.json";
import faqsData from "../data/faqs.json";
import { DOCTOR_CONFIG, APP_CONFIG } from "../data/constants";

const StructuredData = () => {
  const physician = {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalBusiness"],
    "@id": `${APP_CONFIG.domain}/#physician`,
    name: `${DOCTOR_CONFIG.title} ${DOCTOR_CONFIG.name}`,
    alternateName: APP_CONFIG.siteName,
    description: APP_CONFIG.description,
    url: `${APP_CONFIG.domain}/`,
    telephone: `+52-${DOCTOR_CONFIG.phoneRaw.slice(0, 2)}-${DOCTOR_CONFIG.phoneRaw.slice(2, 6)}-${DOCTOR_CONFIG.phoneRaw.slice(6)}`,
    priceRange: "$$",
    image: `${APP_CONFIG.domain}/doctor-profile.png`,
    logo: `${APP_CONFIG.domain}/favicon.svg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
      addressLocality: "Ciudad de México",
    },
    areaServed: [
      { "@type": "Country", name: "México" },
      { "@type": "Country", name: "Estados Unidos" },
      { "@type": "Country", name: "Latinoamérica" },
    ],
    medicalSpecialty: [
      "Radiesthesia",
      "Radionics",
      "Alternative Medicine",
      "Quantum Healing",
      "Homeopathy",
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Diagnóstico por Radiestesia Médica" },
      { "@type": "MedicalProcedure", name: "Sanación Cuántica a Distancia" },
      { "@type": "MedicalProcedure", name: "Terapias Naturales" },
      { "@type": "MedicalProcedure", name: "Tratamiento Oncológico Alternativo" },
      { "@type": "MedicalProcedure", name: "Apoyo Neurológico y Emocional" },
    ],
    sameAs: [
      "https://www.facebook.com/coramyr/",
      "https://www.instagram.com/dr.miriam_cabanas_alvistegui/",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const averageRating =
    testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length;

  const physicianWithRating = {
    ...physician,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonialsData.length,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const reviews = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${APP_CONFIG.domain}/#reviews`,
    review: testimonialsData.slice(0, 10).map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      datePublished: "2026-01-01",
      reviewBody: t.content,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianWithRating) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }}
      />
    </>
  );
};

export default StructuredData;

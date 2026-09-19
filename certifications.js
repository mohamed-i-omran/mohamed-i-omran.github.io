/* =====================================================================
   CERTIFICATIONS & COURSES
   ---------------------------------------------------------------------
   To add a new certificate: copy one block { ... }, paste it where you
   want it to appear (top = shown first), edit the text, and keep the
   comma after the closing brace.

   Fields:
     name      certificate title                       (required)
     issuer    who issued it                           (required)
     year      e.g. "2026"                             (optional)
     status    small note, e.g. "In progress"          (optional)
     link      URL to verify the certificate           (optional)
     icon      badge | shield | chart | bars | trend   (optional)
     featured  true = big highlighted card             (optional)
   ===================================================================== */

window.CERTIFICATIONS = [
  {
    name: "CISA (Certified Information Systems Auditor)",
    issuer: "ISACA",
    status: "Candidate, exam preparation in progress",
    icon: "badge",
    featured: true
  },
  {
    name: "Information Systems Auditing, Controls, and Assurance",
    issuer: "The Hong Kong University of Science and Technology (Coursera)",
    icon: "shield"
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    icon: "chart"
  },
  {
    name: "Power BI in Finance and Accounting Analytics",
    issuer: "Universiti Sains Malaysia",
    icon: "bars"
  },
  {
    name: "Business Intelligence Analyst Mastery Award",
    issuer: "IBM Cognos",
    year: "2022",
    icon: "badge"
  },
  {
    name: "Predictive Analytics Modeler",
    issuer: "IBM SPSS Modeler",
    year: "2020",
    icon: "trend"
  },
];

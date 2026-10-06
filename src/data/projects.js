// Representative engagement types. Replace with approved case studies as they become available.
const projects = [
  {
    id: 1, slug: "hospitality-fit-out", code: "P-01", category: "Hospitality",
    title: "Hospitality fit-out package",
    summary: "Full interior documentation and joinery shop drawings for guest areas, F&B and back-of-house.",
    scope: ["Coordinated plans, RCPs, elevations and sections", "Joinery and wall-panelling shop drawings", "Finishes, FF&E and lighting coordination", "Tender and IFC issue sets"],
    services: ["cad-documentation", "shop-drawings", "ffe-solutions"],
  },
  {
    id: 2, slug: "residential-bim", code: "P-02", category: "Residential",
    title: "Luxury residential BIM model",
    summary: "A single Revit model carrying architecture and interiors to LOD 300, with sheets and schedules driven from it.",
    scope: ["Revit Architecture and ID modelling to LOD 300", "Room finish and joinery schedules", "Coordinated documentation sheets", "Model checks before each issue"],
    services: ["bim-modelling", "cad-documentation"],
  },
  {
    id: 3, slug: "retail-joinery", code: "P-03", category: "Retail & Commercial",
    title: "Retail joinery and fixtures",
    summary: "Fabrication drawings for shopfit joinery and loose fixtures, coordinated to site and manufacturer limits.",
    scope: ["Joinery and fixture shop drawings", "Site-condition coordination", "Manufacturer-standard detailing", "Installation details"],
    services: ["shop-drawings", "project-delivery"],
  },
  {
    id: 4, slug: "workplace-interiors", code: "P-04", category: "Workplace",
    title: "Workplace interior design support",
    summary: "Design development, specification and material selection support from concept to tender.",
    scope: ["Coloured plans and elevations", "Specification writing", "Materials boards", "Vendor selection assistance"],
    services: ["interior-design", "ffe-solutions", "cad-documentation"],
  },
];
export default projects;

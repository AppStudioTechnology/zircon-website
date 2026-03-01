export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  specs?: Record<string, string>;
  benefits?: string[];
  features?: ProductFeature[];
  image?: string;
  productLink?: string;
  brochureLink?: string;
  refNumber?: string;
  tagline?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  products: Product[];
}

export interface SolutionType {
  id: string;
  name: string;
  description?: string;
  categories: Category[];
}

export const solutionsData: SolutionType[] = [
  {
    id: 'dental',
    name: 'Dental',
    description: 'Advanced dental solutions for modern clinics and laboratories.',
    categories: [
      {
        id: 'implants',
        name: 'Implants',
        description: 'Our implant solutions are designed to support predictable, long-term clinical success across a wide range of indications. Zircon provides bone-level implant systems engineered for stability, biological integration, and prosthetic flexibility—supporting both routine and complex implant cases.',
        products: [
          { 
            id: 'superline-11-bone-level', 
            name: 'Superline 11 (Bone Level)',
            description: 'A high-performance bone-level implant system designed for excellent primary stability and long-term biological integration. Supports predictable outcomes across a wide range of implant indications.'
          },
          { 
            id: 'superline-bone-level', 
            name: 'Superline (Bone Level)',
            description: 'A reliable bone-level implant system featuring double-threaded tapered body design for easy and fast insertion. S.L.A. surface treatment and single prosthetic platform across all diameters.',
            tagline: 'Developed by Clinicians for Clinicians',
            productLink: 'https://www.dentiumusa.com/products/implant-systems/superline',
            specs: { 'Material': 'Ti-G4 (Unalloyed Titanium ASTM F67)', 'Connection': 'Internal Hex, Conical', 'Platform Diameters': '3.6mm, 4.0mm, 4.5mm, 5.0mm, 6.0mm, 7.0mm', 'Lengths': '8mm, 10mm, 12mm, 14mm', 'Surface': 'S.L.A. (Sandblasted & Acid-Etched)', 'Torque': '30~45 N·cm', 'RPM': '1000 rpm' },
            features: [
              { title: 'Double-Threaded Tapered Body', description: 'Easy and fast insertion with self-tapping capability and enhanced primary stability.' },
              { title: '3 Tapered Apical Cutting Flutes', description: '3-blade self-tapping design with flat end for precision control and minimal bone compression trauma.' },
              { title: 'S.L.A. Surface Treatment', description: 'Sandblasted with large grits and acid-etched. Clinically proven surface technology for faster osseointegration.' },
              { title: 'Single Prosthetic Platform', description: 'Single connection across all diameters. One abutment screw fits all abutments and implant platforms.' },
              { title: 'Platform-Switched Design', description: 'Beneficial for marginal bone preservation. Coronal bevel edge facilitates soft tissue or bone growth.' },
              { title: 'Interchangeable Abutments', description: 'Seamlessly use any abutments with any implant diameter across all three implant systems.' }
            ],
            benefits: ['Simplified inventory management', 'One hex connection throughout the system', 'Cutting flutes full length for increased efficiency', 'Efficiency in all bone types', 'Lifetime warranty']
          },
          { 
            id: 'implantium-bone-level', 
            name: 'Implantium (Bone Level)',
            description: 'A clinically proven bone-level implant offering high stability and prosthetic flexibility. Engineered to support durable results in both simple and complex cases.'
          },
          { 
            id: 'simpleline-2-tissue-level', 
            name: 'Simpleline 2 (Tissue Level)',
            description: 'A tissue-level implant that simplifies soft tissue management while maintaining strong functional and aesthetic outcomes. Ideal for efficient restorative workflows.'
          },
          { 
            id: 'slimline-one-body-implant', 
            name: 'Slimline (One Body Implant)',
            description: 'A one-piece implant solution designed for minimally invasive procedures. Supports streamlined treatment protocols with reduced surgical complexity.'
          },
          { 
            id: 'bright-implant', 
            name: 'Bright Implant',
            description: 'A tissue-level implant system built on over 20 years of clinical experience and advanced technology. Engineered for healthy soft tissue response, simplified prosthetic handling, and predictable long-term outcomes.',
            tagline: 'Built on Decades of Clinical Excellence',
            productLink: 'https://dentiumturkiye.com/urun/bright-implant-tissue-level/',
            brochureLink: 'https://dentiumturkiye.com/wp-content/uploads/2025/05/bright-Implants.pdf',
            specs: { 'Material': 'Commercially Pure Titanium Grade 4', 'Surface': 'S.L.A. (Sandblasted & Acid-Etched)', 'Type': 'Tissue Level', 'Connection': 'Internal Hex' },
            features: [
              { title: 'Tissue-Level Design', description: 'Simplifies soft tissue management while maintaining strong functional and aesthetic outcomes.' },
              { title: 'S.L.A. Surface Treatment', description: 'Proven surface technology for enhanced osseointegration and long-term implant stability.' },
              { title: 'Simplified Prosthetics', description: 'Streamlined prosthetic handling reduces chair time and complexity for efficient workflows.' },
              { title: 'Clinical Heritage', description: 'Built on over 20 years of clinical research, global success, and science-driven development.' }
            ],
            benefits: ['Predictable long-term outcomes', 'Efficient restorative workflows', 'Excellent biocompatibility', 'Simplified inventory']
          },
          { 
            id: 'dynamic-abutments', 
            name: 'Dynamic Abutments',
            description: 'Advanced abutment solutions that allow precise angulation correction and prosthetic adaptability. Designed to enhance restorative flexibility and aesthetic outcomes.'
          },
          { 
            id: 'surgical-motor', 
            name: 'Surgical Motor (iCT Motor)', 
            description: 'The iCT Motor is a portable, wireless dental device designed specifically for implant surgery — the first cordless motor of its kind in the field. Recognized with the prestigious iF Design Award for its innovation and aesthetics.',
            tagline: 'Advanced Tools, Intuitive Handling',
            refNumber: 'WL-1',
            productLink: 'https://www.dentiumusa.com/products/instruments-motor#ict-motor',
            specs: { 'Reference': 'WL-1', 'Type': 'Cordless / Wireless', 'Torque Range': 'Up to 70 N·cm', 'Programs': '6 Customizable Presets', 'Illumination': 'Up to 6000K', 'Irrigation Levels': '3', 'Battery': 'Up to 250 implant placement cycles' },
            features: [
              { title: 'Cordless Control Unit & Foot Pedal', description: 'Place the unit anywhere without power cords. Quick and easy control of RPM, rotation, and program sequence.' },
              { title: '6 Customizable Presets', description: 'Pre-programmed implant surgery presets, fully customizable for efficient and precise operation.' },
              { title: 'High Performance & Versatility', description: 'Simple control panel with fully adjustable RPM, torque up to 70 N·cm, rotation direction, and 3 irrigation levels.' },
              { title: 'Pre-Programmed for Dentium', description: 'Factory presets for Dentium implant systems, customizable for your preferred implant system.' }
            ],
            benefits: ['iF Design Award 2019 winner', 'Cordless operation for maximum flexibility', 'Up to 250 placement cycles per charge', 'Ergonomic compact design']
          },
          { 
            id: 'sinus-kit', 
            name: 'Sinus Kit (DASK)', 
            description: 'The Dentium Advanced Sinus Kit (DASK) is a specialized toolset for sinus lift procedures ensuring efficient, safe access to the sinus cavity. Features diamond-coated burs, hydraulic irrigation, and support for both crestal and lateral approaches.',
            tagline: 'Complete Sinus Lift Solution',
            refNumber: 'DASK',
            productLink: 'https://www.dentiumusa.com/products/instruments-motor#dask-kit',
            specs: { 'Reference': 'DASK', 'Approaches': 'Crestal & Lateral', 'Burs': 'Diamond-Coated', 'Irrigation': 'Hydraulic', 'Includes': 'Drills, Elevators, Drill Stops' },
            features: [
              { title: 'Crestal Approach Drills', description: 'Precision drills designed for minimally invasive crestal sinus access with controlled depth.' },
              { title: 'Lateral Approach Drills', description: 'Specialized burs for lateral wall access with diamond-coated tips for safe membrane handling.' },
              { title: 'Sinus Membrane Elevators', description: 'Ergonomic elevators for careful Schneiderian membrane elevation and protection.' },
              { title: 'Drill Stops', description: 'Maximum available drill depth stops with guideline for residual bone height.' }
            ],
            benefits: ['Supports both crestal and lateral approaches', 'Diamond-coated burs for safe access', 'Hydraulic irrigation system', 'Smaller kits available separately']
          },
          { 
            id: 'help-kit', 
            name: 'Help Kit', 
            description: 'Designed to address implant emergencies, specifically for the removal of fractured screws, damaged fixtures, and compromised implants. A critical tool for managing complications with precision.',
            tagline: 'Implant Emergency Solutions',
            refNumber: 'XIH',
            productLink: 'https://dentiumeurope.com/product/help-kit-xih/',
            specs: { 'Reference': 'XIH', 'Compatibility': 'SuperLine & Implantium', 'Purpose': 'Fractured screw & fixture removal' },
            features: [
              { title: 'Fractured Screw Removal', description: 'Specialized instruments for safely extracting broken abutment screws without damaging the implant.' },
              { title: 'Fixture Removal', description: 'Tools designed for controlled removal of damaged or compromised implant fixtures.' },
              { title: 'Emergency Preparedness', description: 'Complete kit ensures clinicians are prepared for the most common implant complications.' },
              { title: 'System Compatibility', description: 'Designed for SuperLine and Implantium systems for seamless integration.' }
            ],
            benefits: ['Manages common implant emergencies', 'Minimizes damage during extraction', 'Compatible with SuperLine & Implantium', 'Essential for every implant practice']
          },
          { 
            id: 'osteotome-kit', 
            name: 'Osteotome Kit', 
            description: 'Designed for bone manipulation in dental implant procedures, primarily aiding in sinus elevation and bone compaction techniques without drilling. Allows gradual bone widening, ideal for cases with limited bone density.',
            tagline: 'Minimally Invasive Bone Preparation',
            refNumber: 'XOFK / XOFBK',
            productLink: 'https://www.dentiumusa.com/products/instruments-motor#osteotome-kit',
            specs: { 'Reference': 'XOFK (Convex) / XOFBK (Concave)', 'Types': 'Convex & Concave', 'Technique': 'Bone compaction & ridge expansion', 'Approach': 'Non-drilling / minimally invasive' },
            features: [
              { title: 'Convex Osteotomes (XOFK)', description: 'For controlled sinus floor elevation and bone condensation in maxillary posterior regions.' },
              { title: 'Concave Osteotomes (XOFBK)', description: 'For ridge expansion and gradual bone widening in narrow ridge situations.' },
              { title: 'Sinus Elevation', description: 'Enables internal sinus lift procedures without the need for lateral window access.' },
              { title: 'Bone Compaction', description: 'Gradual widening technique ideal for soft bone types, increasing bone density around the implant site.' }
            ],
            benefits: ['Minimally invasive technique', 'No drilling required', 'Suitable for limited bone density', 'Dual kit options (convex & concave)']
          },
          { 
            id: 'trephine-kit', 
            name: 'Trephine Kit', 
            description: 'Designed for bone harvesting during implant procedures. Features precise cutting and easy retrieval of bone samples, with measurement scales for accurate depth control.',
            tagline: 'Precision Bone Harvesting',
            refNumber: 'XIT',
            productLink: 'https://www.dentiumusa.com/products/instruments-motor#trephine-kit',
            specs: { 'Reference': 'XIT', 'Purpose': 'Bone harvesting & core sampling', 'Features': 'Measurement scales for depth control', 'Cutting': 'Precision cylindrical cutting' },
            features: [
              { title: 'Precision Cutting', description: 'Cylindrical trephine burs for clean, controlled bone core extraction with minimal trauma.' },
              { title: 'Depth Measurement Scales', description: 'Built-in measurement markings for accurate depth control during harvesting procedures.' },
              { title: 'Easy Core Retrieval', description: 'Designed for simple retrieval of bone core samples for autogenous grafting or biopsy.' },
              { title: 'Multiple Diameters', description: 'Range of sizes to accommodate different clinical requirements and bone harvest volumes.' }
            ],
            benefits: ['Accurate depth control', 'Clean bone core extraction', 'Autogenous graft harvesting', 'Diagnostic bone sampling']
          },
          { id: 'surgical-kit', name: 'Surgical Kit' },
          { id: 'prosthetic-kit', name: 'Prosthetic Kit' },
          { id: 'ridge-spreader-kit', name: 'Ridge Spreader Kit' },
          { id: 'implant-guide-kit', name: 'Implant Guide Kit' },
          { id: 'planning-kit', name: 'Planning Kit' },
          { id: 'polymer-guide-kit', name: 'Polymer Guide Kit' },
          { id: 'gbr-kit', name: 'GBR Kit' },
          { id: 'drill-stopper-kit', name: 'Drill Stopper Kit' },
        ]
      },
      {
        id: 'dental-consumables',
        name: 'Dental Consumables',
        products: [
          { 
            id: 'sutures', 
            name: 'Sutures', 
            description: 'Monofast absorbable and non-absorbable sutures for oral and periodontal surgery. Reliable wound closure with excellent tensile strength and soft tissue management.',
            tagline: 'Professional Wound Closure Solutions',
            productLink: 'https://medipac.gr/product-category/monofast/',
            specs: { 'Brand': 'Monofast by Medipac', 'Types': 'Absorbable & Non-Absorbable', 'Material': 'Polyglycolic Acid / Nylon', 'Applications': 'Oral & Periodontal Surgery' },
            features: [
              { title: 'Absorbable Options', description: 'Synthetic absorbable sutures that degrade naturally, eliminating the need for removal.' },
              { title: 'Non-Absorbable Options', description: 'High-tensile strength sutures for situations requiring longer wound support.' },
              { title: 'Excellent Handling', description: 'Smooth passage through tissue with minimal drag for efficient suturing.' },
              { title: 'Consistent Quality', description: 'Manufactured under strict ISO standards for reliable performance in every procedure.' }
            ],
            benefits: ['Reliable wound closure', 'Multiple material options', 'Excellent knot security', 'ISO certified quality']
          },
          { id: 'impression-materials', name: 'Impression Materials' },
          { id: 'universal-etchant', name: 'Universal Etchant' },
          { id: 'resin-cement', name: 'Resin Cement' },
          { id: 'primer', name: 'Primer' },
          { id: 'high-low-flow', name: 'High/Low Flow' },
          { id: 'core', name: 'Core' },
          { id: 'bulk-flow', name: 'Bulk Flow' },
          { id: 'bond-universal', name: 'Bond Universal' },
          { id: 'gloves', name: 'Gloves' },
          { id: 'mask', name: 'Mask' },
          { id: 'sterilization-wipes', name: 'Sterilization Wipes' },
          { id: 'sterilization-spray', name: 'Sterilization Spray' },
          { id: 'sterilization-liquid', name: 'Sterilization Liquid' },
          { 
            id: 'allograft', 
            name: 'Allograft', 
            description: 'Human-derived bone graft materials for bone regeneration and augmentation. Processed and sterilized to eliminate immunogenic response while preserving the natural bone matrix for predictable osseointegration.',
            tagline: 'Natural Bone Regeneration',
            productLink: 'https://medpark.net/product/new_product.php?product_id=56',
            specs: { 'Origin': 'Human-Derived (Allograft)', 'Processing': 'Freeze-Dried / Demineralized', 'Applications': 'Ridge augmentation, Socket preservation, Periodontal defects', 'Sterility': 'Gamma Irradiated' },
            features: [
              { title: 'Natural Bone Matrix', description: 'Preserves the natural bone scaffold structure for optimal cell attachment and new bone formation.' },
              { title: 'Osteoinductive Properties', description: 'Demineralized options retain growth factors that actively stimulate bone regeneration.' },
              { title: 'Multiple Formulations', description: 'Available in cortical, cancellous, and cortico-cancellous forms for different clinical needs.' },
              { title: 'Rigorous Processing', description: 'Thoroughly processed and sterilized to ensure safety while maintaining biological activity.' }
            ],
            benefits: ['Predictable bone regeneration', 'Natural scaffold structure', 'Multiple formulations available', 'Rigorous safety standards']
          },
          { 
            id: 'xenograft', 
            name: 'Xenograft', 
            description: 'Xenograft bone substitute materials for guided bone regeneration. Biocompatible deproteinized bovine bone mineral providing excellent osteoconductive scaffold for ridge preservation and sinus augmentation.',
            tagline: 'Biocompatible Bone Regeneration',
            productLink: 'https://medpark.net/product/new_product.php?product_id=14',
            specs: { 'Origin': 'Bovine-Derived (Xenograft)', 'Processing': 'Deproteinized Bovine Bone Mineral', 'Porosity': 'Highly porous interconnected structure', 'Applications': 'Sinus lift, Ridge augmentation, Socket preservation' },
            features: [
              { title: 'Osteoconductive Scaffold', description: 'Provides a natural porous framework that supports new bone growth and vascularization.' },
              { title: 'Slow Resorption', description: 'Maintains volume over time, providing long-term space maintenance for bone regeneration.' },
              { title: 'Interconnected Porosity', description: 'Highly interconnected pore structure facilitates blood vessel ingrowth and cell migration.' },
              { title: 'Proven Clinical Results', description: 'Extensively documented in clinical literature for sinus augmentation and GBR procedures.' }
            ],
            benefits: ['Excellent volume maintenance', 'Highly biocompatible', 'Proven clinical track record', 'Optimal pore structure']
          },
          { id: 'collagen-membrane', name: 'Collagen Membrane' },
          { 
            id: 'syringe-bone', 
            name: 'Syringe Bone (Osteon II)', 
            description: 'Osteon II is a synthetic osteoconductive bone graft material with high β-TCP content (70%) and HA (30%). Its interconnected porous structure (approx. 70% porosity) mimics cancellous bone, eliminating any risk of disease transmission.',
            tagline: '100% Synthetic Bone Graft Material',
            productLink: 'https://www.dentiumusa.com/products/biomaterials#osteon-ii',
            specs: { 'Composition': 'HA (30%) + β-TCP (70%)', 'Porosity': '~70%', 'Pore Size': '~250μm', 'Type': 'Synthetic Osteoconductive', 'Forms': 'Vial & Syringe', 'Particle Sizes': '0.2~0.5mm, 0.5~1.0mm, 1.0~2.0mm' },
            features: [
              { title: 'Highly Resorbable', description: 'Higher β-TCP content enables faster resorption and replacement with new natural bone.' },
              { title: 'Excellent Wettability', description: 'Superior hydrophilic properties for easy handling and consistent graft placement.' },
              { title: 'Osteoconductive', description: 'Interconnected porous structure similar to cancellous bone promotes cell growth and vascularization.' },
              { title: 'Syringe Delivery', description: 'Pre-loaded syringe format for precise, minimally invasive delivery to the defect site.' }
            ],
            benefits: ['100% synthetic — no disease transmission risk', 'Easy handling with excellent wettability', 'Multiple particle sizes available', 'Clinically proven in peer-reviewed studies']
          },
          { 
            id: 'collagen-graft', 
            name: 'Collagen Graft', 
            description: 'Collagen-based grafting material combining bone graft with a collagen matrix for soft and hard tissue regeneration. Supports wound healing and provides barrier function in guided bone regeneration procedures.',
            tagline: 'Regenerative Collagen Matrix',
            productLink: 'https://www.dentiumthailand.com/collagengraft',
            specs: { 'Type': 'Collagen-based bone graft', 'Origin': 'Bovine-derived Type I Collagen', 'Applications': 'GBR, Socket preservation, Ridge augmentation' },
            features: [
              { title: 'Collagen Matrix', description: 'Pure Type I collagen scaffold promotes cell attachment and guides tissue regeneration.' },
              { title: 'Dual Function', description: 'Combines bone graft material with collagen membrane properties for simplified procedures.' },
              { title: 'Easy Manipulation', description: 'Collagen matrix provides excellent handling characteristics and easy adaptation to defect sites.' },
              { title: 'Biocompatible', description: 'Highly biocompatible material with minimal inflammatory response for predictable healing.' }
            ],
            benefits: ['Simplified GBR procedures', 'Excellent tissue integration', 'Easy to handle and shape', 'Promotes wound healing']
          },
          { id: 'bone-block', name: 'Bone Block' },
          { 
            id: 'membrane-pins', 
            name: 'Membrane Pins', 
            description: 'Fixation pins for securing resorbable and non-resorbable membranes during guided bone regeneration procedures. Ensures stable membrane positioning for predictable bone formation and healing outcomes.',
            tagline: 'Stable Membrane Fixation',
            productLink: 'https://dentiumturkiye.com/urun/membrane-pins/',
            specs: { 'Material': 'Titanium', 'Purpose': 'Membrane fixation for GBR', 'Compatibility': 'Resorbable & non-resorbable membranes' },
            features: [
              { title: 'Secure Fixation', description: 'Titanium pins provide rigid, stable fixation of barrier membranes over bone graft sites.' },
              { title: 'Easy Placement', description: 'Designed for quick and precise insertion with minimal tissue trauma.' },
              { title: 'Universal Compatibility', description: 'Works with both resorbable and non-resorbable membranes from any manufacturer.' },
              { title: 'Optimal Design', description: 'Pin geometry prevents membrane displacement during the critical healing period.' }
            ],
            benefits: ['Prevents membrane displacement', 'Quick and easy insertion', 'Compatible with all membrane types', 'Improves GBR predictability']
          },
          { id: 'membrane-screws', name: 'Membrane Screws' },
        ]
      },
      {
        id: 'endodontics',
        name: 'Endodontics',
        products: [
          { id: 'endo-files', name: 'Endo Files' },
          { id: 'mta-sealer', name: 'MTA Sealer' },
          { id: 'mta-capping', name: 'MTA Capping' },
          { id: 'endo-sealer', name: 'Endo Sealer' },
          { id: 'apex-locator', name: 'Apex Locator' },
        ]
      },
      {
        id: 'dental-equipment',
        name: 'Dental Equipment',
        products: [
          { id: 'dental-chairs', name: 'Dental Chairs' },
          { id: 'cbct', name: 'CBCT' },
          { id: 'x-ray', name: 'X-Ray' },
          { id: 'surgical-motor-equip', name: 'Surgical Motor' },
          { id: 'autoclave', name: 'Autoclave' },
          { id: 'cad-cam', name: 'CAD/CAM' },
          { id: 'cad-cam-chairside', name: 'CAD/CAM (Chairside)' },
          { id: 'mill-metal', name: 'Mill Metal' },
          { id: 'desk-scanner', name: 'Desk Scanner' },
          { id: 'iox', name: 'IOX' },
          { id: 'ez-check', name: 'EZ Check' },
          { id: '3d-printer-equip', name: '3D Printer' },
          { id: 'ict-injection', name: 'ICT Injection' },
          { id: 'curing-light', name: 'Curing Light' },
        ]
      },
      {
        id: 'digital',
        name: 'Digital',
        products: [
          { id: 'ios-scanner', name: 'IOS Scanner' },
          { id: 'guided-surgery-implant', name: 'Guided Surgery (Implant)' },
          { id: 'guided-surgery-prosthetics', name: 'Guided Surgery (Prosthetics)' },
          { id: 'guided-surgery-bone', name: 'Guided Surgery (Bone)' },
          { id: 'customized-implants', name: 'Customized Implants' },
          { id: 'customized-mesh-plates', name: 'Customized Mesh Plates' },
          { id: 'clear-aligners', name: 'Clear Aligners' },
          { id: 'guided-kits', name: 'Guided kits' },
          { id: 'smile-design', name: 'Smile Design' },
          { id: '3d-printer-digital', name: '3D Printer' },
        ]
      },
      {
        id: 'dental-lab',
        name: 'Dental Lab',
        products: [
          { id: 'zirconia-blocks', name: 'Zirconia Blocks' },
          { id: 'porcelain-powder', name: 'Porcelain Powder' },
          { id: 'stain-kit', name: 'Stain Kit' },
          { id: 'dipping-liquid', name: 'Dipping Liquid' },
          { id: 'coloring-liquid', name: 'Coloring Liquid' },
          { id: 'alginate', name: 'Alginate' },
          { id: 'modeling-wax', name: 'Modeling Wax' },
          { id: 'modeling-resin', name: 'Modeling Resin' },
          { id: 'acrylic-teeth', name: 'Acrylic Teeth' },
          { id: 'milling-burs', name: 'Milling Burs' },
          { id: 'lab-burs', name: 'Lab Burs' },
        ]
      },
      {
        id: 'mouth-care',
        name: 'Mouth Care',
        products: [
          { id: 'tooth-paste', name: 'Tooth Paste' },
          { id: 'tooth-brushes', name: 'Tooth Brushes' },
          { id: 'interdental-brushes', name: 'Interdental Brushes' },
          { id: 'dental-floss', name: 'Dental Floss' },
          { id: 'mouth-wash', name: 'Mouth Wash' },
          { id: 'chlorhexidine', name: 'Chlorhexidine' },
        ]
      },
    ]
  },
  {
    id: 'medical',
    name: 'Medical',
    description: 'High-quality medical supplies and equipment for healthcare providers.',
    categories: [
      {
        id: 'general-consumables',
        name: 'General Consumables',
        products: [
          { id: 'examination-gloves', name: 'Examination Gloves' },
          { id: 'surgical-gloves', name: 'Surgical Gloves' },
          { id: 'surgical-gowns', name: 'Surgical Gowns' },
          { id: 'isolation-gowns', name: 'Isolation Gowns' },
          { id: 'syringe', name: 'Syringe' },
          { id: 'diapers', name: 'Diapers' },
          { id: 'foley-catheters', name: 'Foley Catheters' },
          { id: 'bandage', name: 'Bandage' },
          { id: 'suction-catheters', name: 'Suction Catheters' },
        ]
      },
      {
        id: 'or-consumables',
        name: 'OR Consumables',
        products: [
          { id: 'kit-packs', name: 'Kit packs' },
          { id: 'drapes', name: 'Drapes' },
          { id: 'surgical-suction', name: 'Surgical Suction' },
          { id: 'sterile-resorbable-hemostat', name: 'Sterile resorbable Hemostat' },
        ]
      },
      {
        id: 'disinfectant',
        name: 'Disinfectant',
        products: [
          { id: 'whips', name: 'Whips' },
          { id: 'spray', name: 'Spray' },
          { id: 'liquid', name: 'Liquid' },
          { id: 'enzamatic-solution', name: 'Enzamatic solution' },
          { id: 'sanitizers', name: 'Sanitizers' },
          { id: 'antiseptic', name: 'Antiseptic' },
        ]
      },
      {
        id: 'homecare',
        name: 'Homecare',
        products: [
          { id: 'compression-therapy', name: 'Compression Therapy' },
          { id: 'intermetent-catheters', name: 'Intermetent Catheters' },
          { id: 'ostomy', name: 'Ostomy' },
          { id: 'anal-irrigation', name: 'Anal irrigation' },
        ]
      },
    ]
  }
];

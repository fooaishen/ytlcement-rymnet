import { FileText, FileSpreadsheet, FileImage } from "lucide-react"

export const productData = {
  cement: {
    title: "Cement",
    description:
      "Our cement products are engineered for superior performance, durability, and environmental sustainability. We offer a comprehensive range of cement types suitable for various construction applications.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/i_Stock_1320401601_1_b071dc2a3e.jpg",
    keyFeatures: [
      "High early strength development",
      "Enhanced durability in aggressive environments",
      "Reduced carbon footprint compared to conventional cement",
      "Consistent quality and performance",
      "Compliant with international standards",
    ],
    regions: [
      {
        id: "my",
        name: "Malaysia",
        products: [
          "ECOCement Portland Composite Cement",
          "ECOCement Portland Limestone Cement",
          "ECOCement Masonry Cement",
          "ECOCement Oil Well Cement",
        ],
        facilities: [
          {
            name: "Kuala Lumpur Plant",
            address: "123 Industrial Zone, Kuala Lumpur, Malaysia",
          },
          {
            name: "Johor Production Facility",
            address: "456 Manufacturing Hub, Johor, Malaysia",
          },
        ],
        contactInfo: "For inquiries in Malaysia, please contact: sales.my@ytlcement.com or call +60 3 1234 5678",
      },
      {
        id: "sg",
        name: "Singapore",
        products: [
          "ECOCement Portland Composite Cement",
          "ECOCement Portland Limestone Cement",
          "ECOCement Marine Cement",
        ],
        facilities: [
          {
            name: "Singapore Distribution Center",
            address: "789 Port Road, Singapore",
          },
        ],
        contactInfo: "For inquiries in Singapore, please contact: sales.sg@ytlcement.com or call +65 6789 0123",
      },
      {
        id: "vn",
        name: "Vietnam",
        products: [
          "ECOCement Portland Composite Cement",
          "ECOCement Portland Limestone Cement",
          "ECOCement High-Performance Cement",
        ],
        facilities: [
          {
            name: "Ho Chi Minh City Plant",
            address: "101 Industrial Park, Ho Chi Minh City, Vietnam",
          },
        ],
        contactInfo: "For inquiries in Vietnam, please contact: sales.vn@ytlcement.com or call +84 28 3456 7890",
      },
      {
        id: "db",
        name: "Dubai",
        products: [
          "ECOCement Heat-Resistant Cement",
          "ECOCement Desert-Optimized Cement",
          "ECOCement High-Durability Cement",
        ],
        facilities: [
          {
            name: "Dubai Innovation Center",
            address: "567 Sheikh Zayed Road, Dubai, UAE",
          },
        ],
        contactInfo: "For inquiries in Dubai, please contact: sales.db@ytlcement.com or call +971 4 123 4567",
      },
      {
        id: "fi",
        name: "Finland",
        products: [
          "ECOCement Cold-Climate Cement",
          "ECOCement Ultra-Low Carbon Cement",
          "ECOCement Frost-Resistant Cement",
        ],
        facilities: [
          {
            name: "Helsinki Sustainable Production Facility",
            address: "789 Innovation Park, Helsinki, Finland",
          },
        ],
        contactInfo: "For inquiries in Finland, please contact: sales.fi@ytlcement.com or call +358 9 123 4567",
      },
    ],
    applications: [
      {
        title: "High-Rise Buildings",
        description: "Ideal for structural elements in high-rise construction requiring high strength and durability.",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Infrastructure Projects",
        description: "Perfect for bridges, highways, and tunnels exposed to harsh environmental conditions.",
        image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Residential Construction",
        description: "Suitable for foundations, structural elements, and finishing works in residential buildings.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Technical Data Sheet",
        fileType: "PDF",
        fileSize: "2.4 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Safety Data Sheet",
        fileType: "PDF",
        fileSize: "1.8 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Performance Specifications",
        fileType: "Excel",
        fileSize: "1.2 MB",
        url: "#",
        icon: FileSpreadsheet,
      },
    ],
  },
  concrete: {
    title: "Concrete",
    description:
      "Our ready-mix concrete solutions deliver consistent quality, workability, and strength for a wide range of construction applications. Engineered for optimal performance, our concrete products meet the most demanding project requirements.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Mask_Group_2_5b72eee9d9.jpg",
    keyFeatures: [
      "Customizable mix designs for specific project requirements",
      "Enhanced workability and placement characteristics",
      "Superior durability and long-term performance",
      "Reduced environmental impact with recycled materials",
      "Quality control throughout production and delivery",
    ],
    regions: [
      {
        id: "my",
        name: "Malaysia",
        products: [
          "ECOConcrete Standard Mix",
          "ECOConcrete High-Strength Mix",
          "ECOConcrete Self-Compacting Concrete",
          "ECOConcrete Fiber-Reinforced Concrete",
          "ECOConcrete Lightweight Concrete",
        ],
        facilities: [
          {
            name: "Kuala Lumpur Batching Plant",
            address: "123 Industrial Zone, Kuala Lumpur, Malaysia",
          },
          {
            name: "Penang Batching Plant",
            address: "456 Manufacturing Hub, Penang, Malaysia",
          },
        ],
        contactInfo:
          "For concrete inquiries in Malaysia, please contact: concrete.my@ytlcement.com or call +60 3 1234 5678",
      },
      {
        id: "db",
        name: "Dubai",
        products: [
          "ECOConcrete Rapid-Set Mix",
          "ECOConcrete High-Performance Mix",
          "ECOConcrete Temperature-Controlled Mix",
        ],
        facilities: [
          {
            name: "Dubai Concrete Solutions Center",
            address: "789 Al Quoz Industrial Area, Dubai, UAE",
          },
        ],
        contactInfo:
          "For concrete inquiries in Dubai, please contact: concrete.db@ytlcement.com or call +971 4 567 8901",
      },
      {
        id: "fi",
        name: "Finland",
        products: ["ECOConcrete Arctic Mix", "ECOConcrete Insulated Concrete", "ECOConcrete Sustainable Aggregate Mix"],
        facilities: [
          {
            name: "Espoo Concrete Innovation Hub",
            address: "101 Otaniemi Research Park, Espoo, Finland",
          },
        ],
        contactInfo:
          "For concrete inquiries in Finland, please contact: concrete.fi@ytlcement.com or call +358 9 234 5678",
      },
    ],
    applications: [
      {
        title: "Commercial Buildings",
        description: "Ideal for structural elements, floors, and walls in commercial construction projects.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Infrastructure Development",
        description: "Engineered for bridges, tunnels, and transportation infrastructure requiring durability.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      },
      {
        title: "Residential Projects",
        description: "Perfect for foundations, slabs, and structural elements in residential construction.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Mix Design Specifications",
        fileType: "PDF",
        fileSize: "3.1 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Performance Data",
        fileType: "Excel",
        fileSize: "1.5 MB",
        url: "#",
        icon: FileSpreadsheet,
      },
      {
        title: "Application Guide",
        fileType: "PDF",
        fileSize: "2.8 MB",
        url: "#",
        icon: FileText,
      },
    ],
  },
  aggregates: {
    title: "Aggregates",
    description:
      "Our high-quality aggregates provide the foundation for durable construction. We offer a range of crushed stone, gravel, and sand products that meet rigorous quality standards for various applications.",
    image: "https://images.unsplash.com/photo-1699982758028-98aef67d1890?q=80&w=2043&auto=format&fit=crop",
    keyFeatures: [
      "Consistent gradation and particle shape",
      "High strength and durability",
      "Low absorption rates",
      "Environmentally responsible sourcing",
      "Quality-controlled production process",
    ],
    regions: [
      {
        id: "my",
        name: "Malaysia",
        products: [
          "Crushed Stone (various sizes)",
          "Construction Sand",
          "Manufactured Sand",
          "Recycled Aggregates",
          "Specialty Aggregates",
        ],
        facilities: [
          {
            name: "Kuala Lumpur Quarry",
            address: "123 Quarry Road, Kuala Lumpur, Malaysia",
          },
          {
            name: "Johor Processing Plant",
            address: "456 Industrial Zone, Johor, Malaysia",
          },
        ],
        contactInfo:
          "For aggregates inquiries in Malaysia, please contact: aggregates.my@ytlcement.com or call +60 3 1234 5678",
      },
      {
        id: "db",
        name: "Dubai",
        products: ["Desert Sand Aggregates", "Crushed Rock Aggregates", "Marine Dredged Aggregates"],
        facilities: [
          {
            name: "Dubai Aggregates Processing Center",
            address: "456 Jebel Ali Industrial Area, Dubai, UAE",
          },
        ],
        contactInfo:
          "For aggregates inquiries in Dubai, please contact: aggregates.db@ytlcement.com or call +971 4 789 0123",
      },
      {
        id: "fi",
        name: "Finland",
        products: ["Granite Aggregates", "Gravel Aggregates", "Recycled Concrete Aggregates"],
        facilities: [
          {
            name: "Turku Aggregates Distribution Hub",
            address: "789 Port of Turku, Turku, Finland",
          },
        ],
        contactInfo:
          "For aggregates inquiries in Finland, please contact: aggregates.fi@ytlcement.com or call +358 9 345 6789",
      },
    ],
    applications: [
      {
        title: "Concrete Production",
        description: "Essential component for ready-mix concrete and precast concrete products.",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
      },
      {
        title: "Road Construction",
        description: "Used in base layers, asphalt mixtures, and surface treatments for roads and highways.",
        image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Drainage Systems",
        description: "Ideal for drainage applications, filtration systems, and landscaping projects.",
        image: "https://images.unsplash.com/photo-1488197047962-b48492212cda?q=80&w=2067&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Product Specifications",
        fileType: "PDF",
        fileSize: "1.9 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Quality Test Results",
        fileType: "Excel",
        fileSize: "1.3 MB",
        url: "#",
        icon: FileSpreadsheet,
      },
      {
        title: "Application Guidelines",
        fileType: "PDF",
        fileSize: "2.2 MB",
        url: "#",
        icon: FileText,
      },
    ],
  },
  drymix: {
    title: "Drymix",
    description:
      "Our QuikMix drymix products offer convenient, pre-mixed solutions for various construction applications. These ready-to-use products ensure consistent quality and performance while saving time on site.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_381284419_2_3214286be5.jpg",
    keyFeatures: [
      "Pre-mixed for consistent quality",
      "Easy to use - just add water",
      "Reduced waste and improved efficiency",
      "Extended shelf life",
      "Suitable for various applications",
    ],
    regions: [
      {
        id: "my",
        name: "Malaysia",
        products: [
          "QuikMix Tile Adhesive",
          "QuikMix Plaster",
          "QuikMix Render",
          "QuikMix Screed",
          "QuikMix Repair Mortar",
        ],
        facilities: [
          {
            name: "Kuala Lumpur Production Facility",
            address: "123 Industrial Zone, Kuala Lumpur, Malaysia",
          },
        ],
        contactInfo:
          "For drymix inquiries in Malaysia, please contact: drymix.my@ytlcement.com or call +60 3 1234 5678",
      },
      {
        id: "sg",
        name: "Singapore",
        products: ["QuikMix Tile Adhesive", "QuikMix Plaster", "QuikMix Render", "QuikMix Waterproofing Mortar"],
        facilities: [
          {
            name: "Singapore Distribution Center",
            address: "789 Port Road, Singapore",
          },
        ],
        contactInfo: "For drymix inquiries in Singapore, please contact: drymix.sg@ytlcement.com or call +65 6789 0123",
      },
      {
        id: "db",
        name: "Dubai",
        products: ["QuikMix High-Heat Tile Adhesive", "QuikMix Desert Plaster", "QuikMix Crack-Resistant Render"],
        facilities: [
          {
            name: "Dubai Drymix Solutions Hub",
            address: "101 Al Quoz Industrial Area, Dubai, UAE",
          },
        ],
        contactInfo: "For drymix inquiries in Dubai, please contact: drymix.db@ytlcement.com or call +971 4 901 2345",
      },
      {
        id: "fi",
        name: "Finland",
        products: [
          "QuikMix Frost-Resistant Tile Adhesive",
          "QuikMix Insulated Plaster",
          "QuikMix Waterproofing Screed",
        ],
        facilities: [
          {
            name: "Helsinki Drymix Innovation Center",
            address: "234 Vantaa Technology Park, Helsinki, Finland",
          },
        ],
        contactInfo: "For drymix inquiries in Finland, please contact: drymix.fi@ytlcement.com or call +358 9 456 7890",
      },
    ],
    applications: [
      {
        title: "Tiling Works",
        description: "Perfect for tile installation in floors, walls, and wet areas.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Wall Finishing",
        description: "Ideal for plastering, rendering, and surface preparation.",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Repair & Maintenance",
        description: "Suitable for concrete repairs, surface patching, and maintenance works.",
        image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=1974&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Product Data Sheets",
        fileType: "PDF",
        fileSize: "2.5 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Application Guide",
        fileType: "PDF",
        fileSize: "3.2 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Safety Information",
        fileType: "PDF",
        fileSize: "1.7 MB",
        url: "#",
        icon: FileText,
      },
    ],
  },
  precast: {
    title: "Precast Concrete",
    description:
      "Our precast concrete solutions offer high-quality, factory-produced concrete elements that ensure precision, durability, and faster construction times. These prefabricated components are designed for easy installation and superior performance.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/precast_infra_services_53cdaf7e25.jpg",
    keyFeatures: [
      "Factory-controlled quality assurance",
      "Consistent dimensions and finish",
      "Reduced on-site construction time",
      "Enhanced durability and structural integrity",
      "Versatile design options",
    ],
    externalLink: "https://www.epprecast.com",
    regions: [],
    applications: [
      {
        title: "Building Structures",
        description:
          "Used for structural elements like beams, columns, and floor slabs in commercial and residential buildings.",
        image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=1974&auto=format&fit=crop",
      },
      {
        title: "Infrastructure Projects",
        description: "Ideal for bridges, tunnels, retaining walls, and other infrastructure components.",
        image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Architectural Elements",
        description: "Perfect for facade panels, decorative elements, and custom architectural features.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Design Specifications",
        fileType: "PDF",
        fileSize: "4.2 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Installation Guide",
        fileType: "PDF",
        fileSize: "3.5 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Product Catalog",
        fileType: "PDF",
        fileSize: "5.8 MB",
        url: "#",
        icon: FileImage,
      },
    ],
  },
  prefab: {
    title: "Prefabricated Bathroom Units",
    description:
      "Our PREBAS prefabricated bathroom units offer complete, factory-finished bathrooms ready for installation. These units combine quality, efficiency, and design flexibility for various building projects.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_110261574_2_98e0e74393.jpg",
    keyFeatures: [
      "Complete factory-finished bathrooms",
      "Reduced installation time on site",
      "Consistent quality and finish",
      "Customizable designs and layouts",
      "Integrated plumbing and electrical systems",
    ],
    externalLink: "https://www.parmarine.com",
    regions: [],
    applications: [
      {
        title: "Hotels & Resorts",
        description: "Ideal for standardized bathroom units in hotel and resort developments.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Residential Developments",
        description: "Perfect for multi-unit residential projects requiring efficient construction.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Student Accommodation",
        description: "Suitable for student housing and dormitory projects with repetitive bathroom layouts.",
        image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Technical Specifications",
        fileType: "PDF",
        fileSize: "3.7 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Installation Manual",
        fileType: "PDF",
        fileSize: "4.5 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Design Options",
        fileType: "PDF",
        fileSize: "6.2 MB",
        url: "#",
        icon: FileImage,
      },
    ],
  },
  greentech: {
    title: "Green Technology",
    description:
      "Our green technology solutions focus on sustainable construction practices and materials that reduce environmental impact while maintaining performance and durability. These innovative technologies help projects achieve environmental certification and long-term sustainability goals.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/IMG_20210721_161811_1_d566d30d09.jpg",
    keyFeatures: [
      "Reduced carbon footprint",
      "Energy-efficient materials and systems",
      "Sustainable resource utilization",
      "Compliance with green building standards",
      "Long-term environmental benefits",
    ],
    regions: [
      {
        id: "my",
        name: "Malaysia",
        products: [
          "Low-Carbon Building Materials",
          "Energy-Efficient Construction Systems",
          "Sustainable Insulation Solutions",
          "Water Conservation Technologies",
          "Renewable Energy Integration",
        ],
        facilities: [
          {
            name: "Kuala Lumpur Green Technology Center",
            address: "123 Eco Park, Kuala Lumpur, Malaysia",
          },
        ],
        contactInfo:
          "For green technology inquiries in Malaysia, please contact: greentech.my@ytlcement.com or call +60 3 1234 5678",
      },
      {
        id: "db",
        name: "Dubai",
        products: [
          "Solar Reflective Coatings",
          "Sustainable Water Management Systems",
          "Recycled Construction Materials",
        ],
        facilities: [
          {
            name: "Dubai Green Tech Innovation Hub",
            address: "456 Sustainable City, Dubai, UAE",
          },
        ],
        contactInfo:
          "For green technology inquiries in Dubai, please contact: greentech.db@ytlcement.com or call +971 4 234 5678",
      },
      {
        id: "fi",
        name: "Finland",
        products: [
          "Passive House Construction Solutions",
          "Geothermal Energy Systems",
          "Timber Frame Building Technologies",
        ],
        facilities: [
          {
            name: "Helsinki Green Building Research Center",
            address: "789 Aalto University Campus, Helsinki, Finland",
          },
        ],
        contactInfo:
          "For green technology inquiries in Finland, please contact: greentech.fi@ytlcement.com or call +358 9 567 8901",
      },
    ],
    applications: [
      {
        title: "Green Building Projects",
        description: "Comprehensive solutions for projects seeking green building certification.",
        image: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Sustainable Infrastructure",
        description: "Technologies for reducing environmental impact in infrastructure development.",
        image: "https://images.unsplash.com/photo-1554769945-af468c934022?q=80&w=1932&auto=format&fit=crop",
      },
      {
        title: "Energy-Efficient Buildings",
        description: "Solutions for improving energy efficiency in commercial and residential buildings.",
        image: "https://images.unsplash.com/photo-1473646590311-c48e1bc1e68d?q=80&w=2066&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Sustainability Guide",
        fileType: "PDF",
        fileSize: "4.8 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Environmental Impact Assessment",
        fileType: "PDF",
        fileSize: "3.9 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Green Building Certification Guide",
        fileType: "PDF",
        fileSize: "5.2 MB",
        url: "#",
        icon: FileText,
      },
    ],
  },
  environmental: {
    title: "Environmental Services",
    description:
      "Our environmental services provide comprehensive waste management and treatment solutions for industrial and construction sectors. We focus on responsible handling, recycling, and disposal practices that minimize environmental impact and promote sustainability.",
    image:
      "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Environmental_Services_Header_4cd13eca33.jpg",
    keyFeatures: [
      "Comprehensive waste management solutions",
      "Industrial wastewater treatment",
      "Recycling and resource recovery",
      "Environmental compliance services",
      "Sustainable disposal practices",
    ],
    regions: [
      {
        id: "my",
        name: "Malaysia",
        products: [
          "Industrial Waste Management",
          "Construction Waste Recycling",
          "Hazardous Waste Treatment",
          "Wastewater Treatment Solutions",
          "Environmental Consulting Services",
        ],
        facilities: [
          {
            name: "Kuala Lumpur Treatment Facility",
            address: "123 Environmental Park, Kuala Lumpur, Malaysia",
          },
        ],
        contactInfo:
          "For environmental services in Malaysia, please contact: environmental.my@ytlcement.com or call +60 3 1234 5678",
      },
      {
        id: "vn",
        name: "Vietnam",
        products: [
          "Industrial Waste Management",
          "Wastewater Treatment Solutions",
          "Environmental Compliance Services",
        ],
        facilities: [
          {
            name: "Ho Chi Minh City Facility",
            address: "101 Environmental Zone, Ho Chi Minh City, Vietnam",
          },
        ],
        contactInfo:
          "For environmental services in Vietnam, please contact: environmental.vn@ytlcement.com or call +84 28 3456 7890",
      },
      {
        id: "db",
        name: "Dubai",
        products: [
          "Waste-to-Energy Solutions",
          "Desalination Plant Waste Management",
          "Environmental Impact Assessments",
        ],
        facilities: [
          {
            name: "Dubai Environmental Solutions Center",
            address: "789 Jebel Ali Free Zone, Dubai, UAE",
          },
        ],
        contactInfo:
          "For environmental services in Dubai, please contact: environmental.db@ytlcement.com or call +971 4 345 6789",
      },
      {
        id: "fi",
        name: "Finland",
        products: ["Soil Remediation Services", "Industrial Ecology Solutions", "Sustainable Waste Recycling"],
        facilities: [
          {
            name: "Helsinki Environmental Technology Park",
            address: "101 Viikki Science Park, Helsinki, Finland",
          },
        ],
        contactInfo:
          "For environmental services in Finland, please contact: environmental.fi@ytlcement.com or call +358 9 678 9012",
      },
    ],
    applications: [
      {
        title: "Industrial Sector",
        description: "Comprehensive waste management and treatment solutions for industrial facilities.",
        image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Construction Projects",
        description: "Recycling and disposal services for construction and demolition waste.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      },
      {
        title: "Municipal Services",
        description: "Environmental solutions for municipal waste management and treatment.",
        image: "https://images.unsplash.com/photo-1603251579711-3e2b0e8d2877?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    technicalDocuments: [
      {
        title: "Service Brochure",
        fileType: "PDF",
        fileSize: "3.4 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Compliance Guidelines",
        fileType: "PDF",
        fileSize: "2.9 MB",
        url: "#",
        icon: FileText,
      },
      {
        title: "Case Studies",
        fileType: "PDF",
        fileSize: "4.1 MB",
        url: "#",
        icon: FileText,
      },
    ],
  },
}

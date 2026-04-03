import Healthcare from "../assets/Industries/helthcare.webp";
import RealEstate from "../assets/Industries/realestate.jpg";
import Architects from "../assets/Industries/Architects.jpeg";
import Manufacturing from "../assets/Industries/manufacturing.jpg";
import Education from "../assets/Industries/education.jpg";
import Hospitality from "../assets/Industries/hospitality.webp";
import ImportExport from "../assets/Industries/import.webp";
import Logistics from "../assets/Industries/logistics.png";
import Sports from "../assets/Industries/sports.jpg";

const industries = [
  {
    slug: "healthcare",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Patient‑Centric Digitalization",
      title: "Healthcare Industry",
      description:
        "From hospitals and clinics to telemedicine platforms, we deliver end‑to‑end software solutions that put patients first.",
      image: Healthcare,
    },
    benefits: [
      {
        title: "Improved Patient Care",
        description:
          "Digital workflows and analytics help clinicians make faster, more accurate decisions.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "All our applications are built with HIPAA, GDPR and other regional regulations in mind.",
      },
      {
        title: "Scalability",
        description:
          "Whether you're a single‑practice clinic or a national health network, our systems grow with you.",
      },
    ],
    offerings: [
      "Electronic Health Record (EHR) Systems",
      "Telemedicine & Remote Monitoring",
      "Medical IoT Integration",
      "Healthcare Analytics Dashboards",
    ],
    longDescription: [
      "The healthcare sector is undergoing a technological revolution. Increased patient expectations, stricter privacy laws, and the rise of telehealth services mean that providers must adopt agile, secure software to stay ahead. Exotic Infotech partners with you to design and implement applications that streamline clinical workflows, reduce paperwork, and improve outcomes.",
      "Our team has experience building interoperable systems that connect medical devices, electronic records, and mobile apps. We emphasize user‑friendly interfaces for both practitioners and patients, enabling effortless appointment scheduling, digital prescriptions, and real‑time monitoring.",
      "Beyond day‑to‑day operations, we build analytics platforms that turn patient data into actionable insights. Hospitals can forecast supply needs, track recovery rates, and identify at‑risk populations, all while maintaining strict data protections.",
    ],
  },
  {
    slug: "real-estate",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Property Meets Pixels",
      title: "Real Estate",
      description:
        "Upgrade your real estate business with portals, CRM systems, and virtual tour platforms that close deals faster.",
      image: RealEstate,
    },
    benefits: [
      {
        title: "Virtual Showings",
        description:
          "Allow buyers to explore properties from anywhere with immersive 3D tours.",
      },
      {
        title: "Lead Management",
        description:
          "Custom CRMs keep track of inquiries, follow‑ups, and conversions in one place.",
      },
      {
        title: "Market Analytics",
        description:
          "Real‑time dashboards give you an edge on pricing and demand trends.",
      },
    ],
    offerings: [
      "Real Estate Portals",
      "Property Management Systems",
      "CRM & Lead Tracking",
      "Augmented Reality Tours",
    ],
    longDescription: [
      "The real estate industry thrives on visibility and trust. Buyers and renters expect instant access to listings, high‑quality images, and transparent pricing. Exotic Infotech builds custom web and mobile platforms that showcase your portfolio and make it easy for clients to save favorites, schedule visits, and submit applications online.",
      "We integrate with MLS databases, payment gateways, and GIS mapping services to provide a seamless user experience. Administrative panels allow agents to update inventory, set commissions, and analyze conversion metrics without writing a single line of code.",
      "Our solutions also include tools for property managers – maintenance trackers, tenant portals, and automated rent reminders. With our analytics modules you can forecast occupancy rates, identify high‑performing neighborhoods, and optimize your investment strategy.",
    ],
  },
  {
    slug: "architects-interior",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Design in the Digital Realm",
      title: "Architects & Interior",
      description:
        "Tools for architects and interior designers to visualize, present and manage projects from concept to completion.",
      image: Architects,
    },
    benefits: [
      {
        title: "3D Visualization",
        description:
          "Bring floorplans to life with interactive 3D and AR experiences.",
      },
      {
        title: "Project Collaboration",
        description:
          "Centralized platforms enable teams, clients and contractors to stay aligned.",
      },
      {
        title: "Material Libraries",
        description:
          "Quickly browse and swap finishes, fixtures and furnishings in your designs.",
      },
    ],
    offerings: [
      "Virtual Reality Walkthroughs",
      "Collaboration Portals",
      "BIM Integration",
      "Client Approval Workflows",
    ],
    longDescription: [
      "In an industry driven by aesthetics and precision, presenting a vision clearly can win or lose a project. Our custom software lets architects and interior designers create interactive presentations that clients can explore on desktop, tablet or headset. Change a wall color, move a sofa, or walk through a space in real‑time – all without leaving the browser.",
      "We build collaboration tools that replace endless email chains. Share drawings, annotate plans, and log change requests in a unified environment so stakeholders always see the latest version. Contractors can download specifications and material lists directly from the platform.",
      "Our systems also connect with leading BIM (Building Information Modeling) software, allowing you to import models, run clash detection, and output cost estimates. Libraries of furniture, fixtures and finishes are customizable, ensuring your designs stay unique while reducing repetitive work.",
    ],
  },
  {
    slug: "manufacturing",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Efficiency Engineered",
      title: "Manufacturing",
      description:
        "Smart factory software that optimizes production lines, inventory and quality control.",
      image: Manufacturing,
    },
    benefits: [
      {
        title: "Real‑time Monitoring",
        description:
          "Track machine performance and output live on the dashboard.",
      },
      {
        title: "Inventory Optimization",
        description:
          "Avoid stock‑outs or overproduction with predictive ordering.",
      },
      {
        title: "Quality Assurance",
        description:
          "Digitally record inspections and automatically flag defects.",
      },
    ],
    offerings: [
      "MES (Manufacturing Execution Systems)",
      "IoT Sensor Integration",
      "Supply Chain Dashboards",
      "Predictive Maintenance Tools",
    ],
    longDescription: [
      "Modern manufacturing plants generate vast amounts of data, yet many continue to rely on paper logs and disconnected spreadsheets. Our platforms collect information from sensors, PLCs, and ERP systems to give managers a unified view of operations. Visual dashboards highlight bottlenecks, downtime and throughput in intuitive charts.",
      "With predictive maintenance modules, equipment is serviced before it fails – reducing costly unplanned downtime. Inventory systems forecast raw material needs based on demand patterns, ensuring components arrive just in time while minimizing holding costs.",
      "We also provide traceability solutions for industries such as food, pharmaceuticals and automotive. Complete lifecycle records ensure compliance with regulations and make recalls faster and more accurate.",
    ],
  },
  {
    slug: "education",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Learning Elevated",
      title: "Education",
      description:
        "Transform classrooms, campuses and online courses with interactive educational software.",
      image: Education,
    },
    benefits: [
      {
        title: "Engaging Content",
        description: "Multimedia lessons keep students motivated and curious.",
      },
      {
        title: "Remote Access",
        description: "Let learners log in from anywhere, on any device.",
      },
      {
        title: "Analytics",
        description:
          "Track progress, identify struggles, and personalize instruction.",
      },
    ],
    offerings: [
      "Learning Management Systems (LMS)",
      "Virtual Classrooms",
      "Student Information Systems",
      "Gamified Assessments",
    ],
    longDescription: [
      "The past decade has seen education move well beyond the physical classroom. Schools and training providers now require platforms that support blended learning, online assessments, and community building. We build bespoke LMS solutions that adapt to your curriculum and branding, making enrollment, grading and communication seamless.",
      "For universities and corporate trainers we create virtual classroom environments with live video, shared whiteboards, and breakout rooms. Teachers can post assignments, grade work, and provide feedback all within a single portal. Parents can monitor attendance and performance through dedicated dashboards.",
      "Our gamification features – badges, leaderboards, and interactive quizzes – increase student engagement. With robust analytics, administrators can spot trends such as dropout risk or subjects needing additional resources, enabling data–driven decision making.",
    ],
  },
  {
    slug: "hospitality",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Service Simplified",
      title: "Hospitality",
      description:
        "Software for hotels, restaurants and travel companies that enhances guest experiences and streamlines back‑office operations.",
      image: Hospitality,
    },
    benefits: [
      {
        title: "Guest Personalization",
        description:
          "Remember preferences and tailor offers to repeat visitors.",
      },
      {
        title: "Online Reservations",
        description: "Seamless booking with integrated payment processing.",
      },
      {
        title: "Operational Efficiency",
        description:
          "Housekeeping, inventory and staffing tools in one dashboard.",
      },
    ],
    offerings: [
      "Property Management Systems (PMS)",
      "Restaurant POS Integration",
      "Loyalty Program Software",
      "Mobile Concierge Apps",
    ],
    longDescription: [
      "In hospitality the guest experience is everything. Our custom platforms make it easy for hotels and restaurants to manage bookings, track service requests, and communicate with guests before, during and after their stay. Mobile apps serve as digital concierges, allowing visitors to order room service, book spa treatments, or check out with a tap.",
      "Backend tools help managers assign housekeeping, monitor inventory of linens and supplies, and analyze occupancy trends. For restaurants we integrate with POS systems and online delivery aggregators, providing a unified view of orders and revenue.",
      "Loyalty and rewards modules encourage repeat business by offering points, discounts, and personalized promotions based on guest history. Analytics dashboards show which offers perform best and where operational improvements can be made.",
    ],
  },
  {
    slug: "import-export",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Global Trade, Local Control",
      title: "Import/Export",
      description:
        "Logistics platforms, customs documentation systems and tracking tools for international traders.",
      image: ImportExport,
    },
    benefits: [
      {
        title: "Compliance",
        description:
          "Automate tariff calculations and required paperwork for every destination.",
      },
      {
        title: "Real‑time Tracking",
        description:
          "Monitor shipments across borders with GPS and carrier integrations.",
      },
      {
        title: "Cost Optimization",
        description:
          "Compare routes, carriers and transit times to minimize expenses.",
      },
    ],
    offerings: [
      "Customs Filing Software",
      "Freight Tracking Dashboards",
      "Inventory & Warehouse Management",
      "Route Optimization Tools",
    ],
    longDescription: [
      "International trade is complex—different regulations, currencies, and transport modes all converge. Our software gives importers and exporters a single interface to prepare documents, calculate duties, and schedule pickups. Integration with major carriers means you can track a container from port to port without juggling multiple websites.",
      "Warehouse modules keep stock levels updated as goods move in and out. Packing lists, bills of lading, and commercial invoices are generated automatically based on order data, reducing manual errors that cause costly delays at customs.",
      "Analytics help you spot trends in freight costs and transit times so you can negotiate better rates or choose more efficient corridors. Alerts notify you of hold‑ups, weather disruptions, or documentation issues so you can act quickly.",
    ],
  },
  {
    slug: "logistics",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Moving the World",
      title: "Logistics",
      description:
        "Transportation management systems, fleet tracking and last‑mile delivery apps that keep goods flowing.",
      image: Logistics,
    },
    benefits: [
      {
        title: "Fleet Visibility",
        description:
          "See all vehicles on a map with ETA estimates and driver status.",
      },
      {
        title: "Route Planning",
        description:
          "Automatically calculate the fastest, cheapest delivery routes.",
      },
      {
        title: "Proof of Delivery",
        description:
          "Capture signatures and photos right from the driver's phone.",
      },
    ],
    offerings: [
      "TMS (Transportation Management System)",
      "Last‑Mile Delivery Apps",
      "Warehouse & Inventory Sync",
      "Driver Companion Apps",
    ],
    longDescription: [
      "Efficient logistics are the backbone of commerce. Our TMS solutions coordinate shipments across trucks, trains, ships and planes. Dispatchers can assign loads, view live traffic conditions, and communicate with drivers through a unified portal.",
      "Mobile driver apps record pickups, drop‑offs and proof of delivery, reducing paperwork and disputes. Integration with warehouse systems ensures that inventory is updated the moment a pallet leaves the dock.",
      "Analytics modules provide KPIs such as on‑time delivery rate, cost per mile and fuel consumption. Armed with this data, logistics managers can optimize their networks, adjust driver schedules, and reduce empty miles.",
    ],
  },
  {
    slug: "sports",
    themeColor: "#0d5b96",
    hero: {
      tagline: "Playbook Powered by Technology",
      title: "Sports",
      description:
        "Fan engagement platforms, team management apps and performance analytics for the sporting world.",
      image: Sports,
    },
    benefits: [
      {
        title: "Fan Engagement",
        description:
          "Interactive apps keep supporters connected to scores, news and exclusive content.",
      },
      {
        title: "Team Analytics",
        description:
          "Track player performance, training loads and injury risks.",
      },
      {
        title: "Ticketing Systems",
        description:
          "Real‑time seat selection and digital wallet integration reduce queues.",
      },
    ],
    offerings: [
      "Fan Club Apps",
      "Team Training Platforms",
      "Stadium IoT Integration",
      "eSports Event Management",
    ],
    longDescription: [
      "Whether you're running a local league or a global franchise, the sports industry thrives on engagement and data. We build apps that bring fans closer to the action – live scoreboards, interactive polls, and augmented reality experiences during matches.",
      "For coaches and athletes we develop performance tracking tools that collect biometric data, GPS movement and training metrics. Algorithms identify fatigue patterns and suggest rest periods to reduce injuries.",
      "Event organizers benefit from ticketing and access control systems that handle high volumes, prevent fraud, and provide real‑time attendance analytics. Combined with stadium IoT sensors, you can monitor crowd density and optimize concessions and security staffing.",
    ],
  },
];

export default industries;

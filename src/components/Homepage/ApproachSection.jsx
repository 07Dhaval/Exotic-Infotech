import {
  ClipboardCheck,
  Search,
  Palette,
  Code2,
  Rocket,
  Settings,
} from "lucide-react";

import "./ApproachSection.css";

const steps = [
  {
    num: "01",
    title: "Built for European Business Standards",
    desc:"Clear documentation before development,Dedicated project manager,Defined milestones & timelines,Secure architecture planning,Long-term technical support.",
    color: "blue-soft",
    side: "right",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    title: "Requirement Understanding",
    desc: "Once you drop an inquiry, we schedule a call to deeply understand your goals, requirements, and strategic direction.",
    color: "blue-light",
    side: "left",
    icon: Search,
  },
  {
    num: "03",
    title: "Design and Prototyping",
    desc: "Our UI/UX team creates visually compelling interfaces and interactive prototypes to ensure seamless user experiences.",
    color: "blue-soft",
    side: "right",
    icon: Palette,
  },
  {
    num: "04",
    title: "Development & Quality Assurance",
    desc: "We build scalable web and mobile applications using modern technologies while ensuring performance, security, and reliability.",
    color: "blue-light",
    side: "left",
    icon: Code2,
  },
  {
    num: "05",
    title: "Deployment",
    desc: "We deploy your application securely to production environments and ensure smooth performance across all platforms.",
    color: "blue-soft",
    side: "right",
    icon: Rocket,
  },
  {
    num: "06",
    title: "Maintenance & Upgrades",
    desc: "We provide ongoing support, updates, and feature enhancements to keep your product competitive and future-ready.",
    color: "blue-light",
    side: "left",
    icon: Settings,
  },
];

export default function ApproachSection() {
  return (
    <section className="approach">
      <div className="homebadge">Why Choose Exotic Infotech?</div>

      <div className="hometitle">
        Exotic Infotech is your strategic partner for cutting-edge digital
        solutions. We specialize in end-to-end Web Development, robust Software
        Development, and innovative Mobile Application Development — bringing
        all your digital needs under one roof.
      </div>

      <div className="homeapproach-list">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div key={i} className={`homerow ${step.side}`}>
              <div className={`homecard ${step.color}`}>
                <div className="icon">
                  <Icon size={26} />
                </div>

                <div className="number">{step.num}.</div>

                <div className="homecontent">
                  <h3>{step.title}</h3>

                  {Array.isArray(step.desc) ? (
                    <ul>
                      {step.desc.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{step.desc}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hometech-visual">
        <div className="floating-box"></div>
        <div className="floating-box small"></div>
      </div>
    </section>
  );
}

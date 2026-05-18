import {
  BarChart3,
  CalendarCheck,
  Check,
  ClipboardList,
  Diamond,
  Filter,
  Layers,
  Megaphone,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import "./Servicepage.css";

const iconMap = {
  calendar: CalendarCheck,
  chart: BarChart3,
  clipboard: ClipboardList,
  diamond: Diamond,
  filter: Filter,
  layers: Layers,
  megaphone: Megaphone,
  rocket: Rocket,
  search: Search,
  share: Share2,
  shield: ShieldCheck,
  target: Target,
  trend: TrendingUp,
  users: Users,
  zap: Zap,
};

const DigitalMarketingPackages = ({ packagesData }) => {
  if (!packagesData?.packages?.length) return null;

  return (
    <section className="marketing-packages">
      <div className="marketing-packages-container">
        <div className="marketing-packages-header">
          <span>{packagesData.eyebrow}</span>
          <h2>{packagesData.title}</h2>
          <p>{packagesData.subtitle}</p>
        </div>

        <div className="marketing-package-list">
          {packagesData.packages.map((pack) => {
            const PackageIcon = iconMap[pack.icon] || Rocket;

            return (
              <article
                className={`marketing-package-card marketing-package-${pack.theme}`}
                key={pack.name}
              >
                <aside className="marketing-package-sidebar">
                  <div>
                    <div className="marketing-package-main-icon">
                      <PackageIcon size={34} strokeWidth={2} />
                    </div>

                    <h3>{pack.name}</h3>
                    <p>{pack.label}</p>
                  </div>

                  <div className="marketing-package-best">
                    <strong>Best For:</strong>
                    <span>{pack.bestFor}</span>
                  </div>
                </aside>

                <div className="marketing-package-content">
                  <span className="marketing-package-pill">
                    Included Features
                  </span>

                  <div className="marketing-feature-grid">
                    {pack.features.map((feature, index) => {
                      const FeatureIcon = iconMap[feature.icon] || Check;

                      return (
                        <div className="marketing-feature" key={feature.title}>
                          <div className="marketing-feature-icon">
                            <FeatureIcon size={24} strokeWidth={2} />
                          </div>

                          <h4>
                            {index + 1}. {feature.title}
                          </h4>

                          <ul>
                            {feature.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="marketing-deliverables">
                    <strong>
                      <Target size={18} strokeWidth={2} />
                      Deliverables
                    </strong>

                    {pack.deliverables.map((deliverable) => (
                      <span key={deliverable}>
                        <Check size={16} strokeWidth={2.4} />
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="marketing-packages-note">
          <strong>Note:</strong> {packagesData.note}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingPackages;

import React from "react";
import { useParams, Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import NotFound from "../../../pages/NotFound";
import Button from "../../../components/ui/Button";

import {
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Building2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Example project data (you can move this to a separate data file later)
  const projects = [
    {
      id: 1,
      title: "CHORUS – Cross-Platform Healthcare App for Google",
      client: "Google.",
      challenges: [
        "Inconsistent BLE performance across platforms",
        "Real-time data synchronization",
        "Maintaining healthcare-grade data security",
        "Optimizing performance for multiple platforms",
      ],
      solution: [
        "We built CHORUS, a scalable cross-platform application (Web, Android, iOS)",
        "Tracks live patient vitals such as heart rate and oxygen levels",
        "Monitors medical device status and signal strength via BLE",
        "Implements secure architecture with SAST, SCA, and rigorous testing",
      ],
      outcome: [
        "Improved hospital efficiency through real-time insights",
        "Reduced equipment downtime with proactive monitoring",
        "Secure and mobile access to patient and device data",
      ],
    },

    {
      id: 2,
      title: "AI-Driven E-Learning Platform (EdTech)",
      client: "EdTech",
      challenges: [
        "Creating a scalable AI model for personalized learning paths",
        "Ensuring real-time performance for live classes and collaboration",
        "Balancing gamification with academic rigor",
      ],
      solution: [
        "We developed a web and mobile platform with features designed to personalize and enhance digital learning",
        "AI-driven course recommendations and adaptive learning paths",
        "Live class functionality using WebRTC for real-time video and chat",
      ],
      outcome: [
        "Improved learner outcomes through adaptive and personalized learning",
        "Increased engagement with gamification and interactive features",
        "Scalable platform for students, educators, and professionals",
      ],
    },
    {
      id: 3,
      title: "AI-Powered Financial Management App",
      client: "FinTech",
      challenges: [
        "Ensuring secure handling of sensitive financial data",
        "Building accurate AI models for spending analysis and fraud detection",
      ],
      solution: [
        "We developed a cross-platform mobile app that delivers AI-driven insights and personalized financial tools.",
        "Bank-grade encryption, biometric authentication, and secure APIs for data protection",
        "Machine learning algorithms to analyze spending, detect anomalies, and automate budgeting",
        "Seamless integration of digital wallets and payment gateways for smooth transactions",
      ],
      outcome: [
        "Increased financial awareness and smarter money management",
        "Early fraud detection for enhanced security",
        "Centralized control and convenient management of all finances",
        "Personalized savings and investment strategies powered by AI",
      ],
    },
    {
      id: 4,
      title: "Smart Business Operations & ERP App (Enterprise)",
      client: "Enterprise Sector",
      challenges: [
        "Integrating diverse modules (HR, finance, inventory, projects) into a seamless system",
        "Ensuring real-time data synchronization across departments",
        "Implementing complex role-based access and data security",
      ],
      solution: [
        "We built a modular ERP system with centralized access to HR, finance, inventory, and project management features",
        "AI-powered analytics for financial forecasting, employee performance, and inventory trends",
        "Workflow automation to streamline repetitive tasks and approvals",
        "Real-time dashboards and cloud-based collaboration tools for dynamic reporting and team coordination",
      ],
      outcome: [
        "Reduced operational overhead through automation",
        "Improved cross-departmental visibility and data accuracy",
        "Faster, data-driven decision-making",
        "Enhanced productivity with streamlined workflows and real-time collaboration",
      ],
    },
    {
      id: 5,
      title: "Predictive Analytics for Business Intelligence",
      client: "Fintech",
      challenges: [
        "Reliance on Static Reporting",
        "Difficulty in Data Analysis",
        "Inefficient Resource Management",
        "Integrating IoT data",
      ],
      solution: [
        "Analyze large volumes of historical and real-time data",
        "Build predictive models for demand forecasting, customer behavior, and risk detection",
        "Provide interactive dashboards with actionable insights for decision-makers",
        "Enable businesses to shift from reactive decision-making to proactive strategy formulation",
      ],
      outcome: [
        "Smarter decision-making",
        "Resource optimization",
        "Proactive risk management",
      ],
    },
    {
      id: 6,
      title: "Cold Chain Monitoring for Leading Pharma Client",
      client: "Pharma",
      challenges: [
        "Ensuring real-time temperature monitoring across distributed facilities",
        "meeting compliance",
        "Minimizing spoilage, and ",
        "Integrating IoT data",
      ],
      solution: [
        "Built an IoT-enabled mobile/web platform",
        "Implemented AI-driven alerts",
        "Designed centralized dashboards",
        "Enabled secure enterprise integration",
      ],
      outcome: [
        "Achieved 40% reduction in spoilage",
        "Ensured full compliance with regulatory standards",
        "Improved supply chain visibility across regions",
      ],
    },
  ];

  const project = projects.find((p) => String(p.id) === id);
  if (!project) return <NotFound />;
  const Icon = ({ name, className, size }) => {
    const icons = {
      AlertTriangle,
      Lightbulb,
      TrendingUp,
      Building2,
      ArrowRight,
      ArrowLeft,
    };
    const IconComponent = icons[name];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Header Section */}

        {/* Go Back Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button
            variant="primary"
            icon={<Icon name="ArrowLeft" />}
            iconPosition="left"
            onClick={() => window.history?.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          ><Icon name="ArrowLeft" className="text-white" size={28} />
            Go Back
          </Button>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-blue-600 text-sm font-medium">
                  Case Study
                </span>
              </div>
              <h1 className="text-6xl font-light text-slate-900 mb-6 leading-tight">
                {project?.title}
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-blue-600"></div>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-10 shadow-xl shadow-slate-900/5">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-blue-500/25">
                <Icon name="Building2" className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Client
                </h3>
                <p className="text-2xl font-light text-slate-900">
                  {project?.client}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Challenges */}
          <div className="lg:col-span-4">
            <div className="bg-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-500/25 h-full text-slate-900 hover:text-white transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-red-500/25">
                  <Icon name="AlertTriangle" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    The
                  </h3>
                  <h2 className="text-xl font-light">Challenges</h2>
                </div>
              </div>
              <div className="space-y-6">
                {project?.challenges?.map((challenge, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start">
                      <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <p className="leading-relaxed font-light">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="lg:col-span-4">
            <div className="bg-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-500/25 h-full text-slate-900 hover:text-white transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-red-500/25">
                  <Icon name="AlertTriangle" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    Our
                  </h3>
                  <h2 className="text-xl font-light">Solution</h2>
                </div>
              </div>
              <div className="space-y-6">
                {project?.solution?.map((challenge, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start">
                      <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <p className="leading-relaxed font-light">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-4">
            <div className="bg-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-500/25 h-full text-slate-900 hover:text-white transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-red-500/25">
                  <Icon name="AlertTriangle" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    The
                  </h3>
                  <h2 className="text-xl font-light">Impact</h2>
                </div>
              </div>
              <div className="space-y-6">
                {project?.outcome?.map((challenge, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start">
                      <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <p className="leading-relaxed font-light">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="flex items-center justify-center space-x-6 opacity-60">
          <div className="text-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
            <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
              Identify
            </span>
          </div>
          <Icon name="ArrowRight" className="text-slate-400" size={16} />
          <div className="text-center">
            <div className="w-3 h-3 bg-amber-500 rounded-full mx-auto mb-2"></div>
            <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
              Solve
            </span>
          </div>
          <Icon name="ArrowRight" className="text-slate-400" size={16} />
          <div className="text-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
              Deliver
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

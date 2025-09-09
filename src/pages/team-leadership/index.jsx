import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TeamOverview from './components/TeamOverview';
import TeamMemberCard from './components/TeamMemberCard';
import TeamCulture from './components/TeamCulture';
import ContactCTA from './components/ContactCTA';
import Footer from 'components/ui/Footer';
import CEOImage from "../../assets/CEO_Image.png";
import CTOImage from "../../assets/CTO_Image.png";
import CMOImage from "../../assets/CMO_Image.png";
import JavaLeadImage from "../../assets/JavaLead_Image.png";
import DataLeadImg from "../../assets/DataLead_Image.png";

const TeamLeadership = () => {
  const [filteredMembers, setFilteredMembers] = useState([]);

  const teamMembers = [
    {
      id: 1,
      name: "Kaustubh Singh",
      position: "Chief Executive Officer",
      avatar: CEOImage,
      expertise: [
        "Business Strategy",
        "Digital Transformation",
        "Market Analysis",
        "Partnership Development",
        "Executive Consulting",
        "Research"
      ],
      socialLinks: [
        { 
          platform: "LinkedIn", 
          icon: "Linkedin", 
          url: "https://www.linkedin.com/in/kaustubh-singh-930770237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        { 
          platform: "GitHub", 
          icon: "Github", 
          url: "#",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    },
    {
      id: 2,
      name: "Yash Singh",
      position: "Chief Technology Officer",
      avatar: CTOImage,
      expertise: [
        "AWS", 
        "Azure", 
        "Cloud Infrastructure", 
        "Infrastructure as Code", 
        "Cost Optimization", 
        "Security"
      ],
      socialLinks: [
        { 
          platform: "LinkedIn", 
          icon: "Linkedin", 
          url: "https://www.linkedin.com/in/yashsingh3148?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        { 
          platform: "GitHub", 
          icon: "Github", 
          url: "#",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    },
    {
      id: 3,
      name: "Aryan Patel",
      position: "Chief Marketing Officer",
      avatar: CMOImage,
      expertise: [
        "Cloud Management", 
        "Saas Development", 
        "Risk Management", 
        "IT Consulting", 
        "Web Design"
      ],
      socialLinks: [
        { 
          platform: "LinkedIn", 
          icon: "Linkedin", 
          url: "https://www.linkedin.com/in/aryan-patel-43224b2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        { 
          platform: "GitHub", 
          icon: "Github", 
          url: "#",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    },
    {
      id: 4,
      name: "Harsh Dwivedi",
      position: "Java Lead",
      avatar: JavaLeadImage,
      expertise: ["Java Full Stack", "Angular", "React", "TypeScript"],
      socialLinks: [
        { 
          platform: "LinkedIn", 
          icon: "Linkedin", 
          url: "https://www.linkedin.com/in/harsh-dwivedi17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        { 
          platform: "GitHub", 
          icon: "Github", 
          url: "#",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    },
    {
      id: 5,
      name: "Shoaib Akhtar",
      position: "Data Lead",
      avatar: DataLeadImg,
      expertise: ["VP Data Scientist", "Data Engineer", "Python"],
      socialLinks: [
        { 
          platform: "LinkedIn", 
          icon: "Linkedin", 
          url: "https://www.linkedin.com/in/shoaib-akhtar-0b69a0192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        { 
          platform: "GitHub", 
          icon: "Github", 
          url: "#",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    }
  ];

  useEffect(() => {
    setFilteredMembers(teamMembers);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CloudNexus Portfolio</title>
        <meta 
          name="description" 
          content="Meet the visionary leaders who combine deep technical expertise with strategic business acumen to deliver transformational technology solutions." 
        />
        <meta 
          name="keywords" 
          content="technology leadership, CTO, engineering team, innovation, digital transformation" 
        />
      </Helmet>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Team Overview Section */}
        <TeamOverview />

        {/* Team Members Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container-brand">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Industry veterans and innovative thinkers who bring decades of experience in building and scaling technology solutions for global enterprises.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers?.map((member) => (
                <TeamMemberCard 
                  key={member?.id}
                  member={member}
                />
              ))}
            </div>

            {filteredMembers?.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  No team members found.
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Team Culture Section */}
        <TeamCulture />

        {/* Contact CTA Section */}
        <ContactCTA />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default TeamLeadership;

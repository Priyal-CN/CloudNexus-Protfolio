import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {

  const securityPractices = [
    {
      icon: "Lock",
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest using industry-standard AES-256 encryption"
    },
    {
      icon: "Eye",
      title: "24/7 Monitoring",
      description: "Continuous security monitoring and threat detection across all systems and networks"
    },
    {
      icon: "UserCheck",
      title: "Access Controls",
      description: "Multi-factor authentication and role-based access controls for all team members"
    },
    {
      icon: "RefreshCw",
      title: "Regular Audits",
      description: "Quarterly security audits and penetration testing by independent security firms"
    },
    {
      icon: "Database",
      title: "Data Backup",
      description: "Automated daily backups with geographic redundancy and disaster recovery protocols"
    },
    {
      icon: "AlertTriangle",
      title: "Incident Response",
      description: "Comprehensive incident response plan with 24-hour notification and resolution procedures"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-brand">
        {/* Section Header */}

        {/* Security Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Security Practices
            </h3>
            <p className="text-lg text-muted-foreground">
              Comprehensive security measures that protect your data and ensure business continuity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPractices?.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 card-elevation"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={practice?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{practice?.title}</h4>
                <p className="text-sm text-muted-foreground">{practice?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
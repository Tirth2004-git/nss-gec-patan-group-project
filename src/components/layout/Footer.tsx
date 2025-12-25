import { Link } from "react-router-dom";
import { Shield, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">NSS GEC Patan</h3>
                <p className="text-xs text-primary-foreground/70">Not Me But You</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              National Service Scheme unit of Government Engineering College, Patan. 
              Committed to community service and nation building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Sainik Welfare", path: "/welfare" },
                { name: "Achievements", path: "/achievements" },
                { name: "Volunteers", path: "/volunteers" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-accent">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: "NSS Activities", path: "/activities" },
                { name: "Annual Reports", path: "/reports" },
                { name: "Admin Portal", path: "/admin" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://nss.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  NSS India <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Government Engineering College, Patan, Gujarat - 384265
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">nss@gecpatan.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
            <p>© 2024 NSS GEC Patan. All rights reserved.</p>
            <p>Developed with ❤️ for Nation Building</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

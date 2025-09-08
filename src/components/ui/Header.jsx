import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "About", path: "/about-company", icon: "Users" },
    { name: "Services", path: "/services-overview", icon: "Settings" },
    { name: "Projects", path: "/portfolio-projects", icon: "Briefcase" },
    { name: "Team", path: "/team-leadership", icon: "UserCheck" },
  ];

  const secondaryItems = [
    { name: "Contact", path: "/contact-consultation", icon: "MessageSquare" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border shadow-card
      }`}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
           <div className="flex items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="src\assets\lgg-removebg-preview.png"
                    alt="CloudNexus Logo"
                    className="w-full h-full object-contain rounded-lg "
                  />
            </div>
                <h1 className="text-2xl sm:text-4xl font-bold text-primary transition-colors duration-200"> 
                  <span className="text-accent">Cloud</span>Nexus
                </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 ml-auto">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-m font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-foreground hover:bg-muted hover:text-accent"
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
         <nav className="hidden lg:flex items-center space-x-4">
            {secondaryItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-3 px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-foreground hover:bg-muted hover:text-accent"
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-border">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-muted hover:text-accent"
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}

            {secondaryItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-muted hover:text-accent"
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

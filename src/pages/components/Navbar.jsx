import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Moon,
  Sun,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
    setActiveNestedDropdown(null);
    setSearchQuery("");
    setHighlightedIndex(-1);
  };

  const toggleNestedDropdown = (name) => {
    setActiveNestedDropdown(activeNestedDropdown === name ? null : name);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    {
      name: "College Inquiries",
      href: "#",
      dropdownItems: [
        { name: "Bachelor of Science in Nursing", href: "/courses/bsn" },
        {
          name: "Bachelor of Science in Electrical Engineering",
          href: "/courses/bsee",
        },
        {
          name: "Bachelor of Science in Electronics Engineering",
          href: "/courses/bsece",
        },
        {
          name: "Bachelor of Science in Computer Engineering",
          href: "/courses/bscpe",
        },
        {
          name: "Bachelor of Science in Computer Science",
          href: "/courses/bscs",
        },
        {
          name: "Bachelor of Science in Business Administration",
          href: "/courses/bsba",
        },
        {
          name: "Bachelor of Science in Hospitality Management",
          href: "/courses/bshm",
        },
        {
          name: "Bachelor of Arts, Major in Psychology",
          href: "/courses/bapsych",
        },
        {
          name: "Bachelor of Elementary Education/Teacher Certification Program",
          href: "/courses/beed",
        },
        {
          name: "Bachelor of Secondary Education/Teacher Certification Program",
          href: "/courses/bsed",
        },
        { name: "Master in Business Administration", href: "/graduate/mba" },
        { name: "Masters of Arts in Education", href: "/graduate/maed" },
        { name: "Major in Education Management", href: "/graduate/maed-em" },
      ],
    },
    {
      name: "Departments",
      href: "#",
      dropdownItems: [
        { name: "Basic Education", href: "/departments/basic-education" },
        { name: "Higher Education", href: "/departments/higher-education" },
      ],
    },
    {
      name: "Student Services",
      href: "#",
      dropdownItems: [
        {
          name: "Las Piñas Campus",
          href: "#",
          nestedDropdownItems: [
            { name: "Library", href: "/services/laspinas/library" },
            { name: "Cafeteria", href: "/services/laspinas/cafeteria" },
            { name: "Sports Facilities", href: "/services/laspinas/sports" },
          ],
        },
        {
          name: "Bacoor Campus",
          href: "#",
          nestedDropdownItems: [
            { name: "Library", href: "/services/bacoor/library" },
            { name: "Cafeteria", href: "/services/bacoor/cafeteria" },
            { name: "Sports Facilities", href: "/services/bacoor/sports" },
          ],
        },
        {
          name: "Los Baños Campus",
          href: "#",
          nestedDropdownItems: [
            { name: "Library", href: "/services/losbanos/library" },
            { name: "Cafeteria", href: "/services/losbanos/cafeteria" },
            { name: "Sports Facilities", href: "/services/losbanos/sports" },
          ],
        },
      ],
    },
  ];

  const filterDropdownItems = (items) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearchKeyDown = (e) => {
    const filteredItems = filterDropdownItems(
      navItems.find((item) => item.name === "College Inquiries").dropdownItems
    );
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < filteredItems.length) {
        window.location.href = filteredItems[highlightedIndex].href;
      }
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-red-600 dark:text-red-400"
            >
              <Image
                src="/sfaclogo.png"
                alt="SFAC logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdownItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                          {item.name === "College Inquiries" && (
                            <div className="px-4 py-2">
                              <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchKeyDown}
                                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                              />
                            </div>
                          )}
                          <div
                            className="py-1 max-h-60 overflow-y-auto"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            {filterDropdownItems(item.dropdownItems).map(
                              (dropdownItem, index) => (
                                <div
                                  key={dropdownItem.name}
                                  className="relative"
                                >
                                  {item.name === "Student Services" ? (
                                    <button
                                      onClick={() =>
                                        toggleNestedDropdown(dropdownItem.name)
                                      }
                                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                                    >
                                      {dropdownItem.name}
                                      <ChevronRight className="ml-1 h-4 w-4 inline float-right" />
                                    </button>
                                  ) : (
                                    <a
                                      href={dropdownItem.href}
                                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white ${
                                        highlightedIndex === index
                                          ? "bg-gray-100 dark:bg-gray-600"
                                          : ""
                                      }`}
                                      role="menuitem"
                                    >
                                      {dropdownItem.name}
                                    </a>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                      {item.name === "Student Services" &&
                        activeNestedDropdown && (
                          <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              {item.dropdownItems
                                .find((di) => di.name === activeNestedDropdown)
                                ?.nestedDropdownItems.map((nestedItem) => (
                                  <a
                                    key={nestedItem.name}
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                                    role="menuitem"
                                  >
                                    {nestedItem.name}
                                  </a>
                                ))}
                            </div>
                          </div>
                        )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-red-600 dark:bg-gray-300 text-white dark:text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 dark:hover:bg-gray-400 transition duration-300">
              Be One of Us
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 dark:focus:ring-red-400"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdownItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 inline float-right" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4">
                        {filterDropdownItems(item.dropdownItems).map(
                          (dropdownItem, index) => (
                            <div key={dropdownItem.name}>
                              {item.name === "Student Services" ? (
                                <>
                                  <button
                                    onClick={() =>
                                      toggleNestedDropdown(dropdownItem.name)
                                    }
                                    className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                                  >
                                    {dropdownItem.name}
                                    <ChevronDown className="ml-1 h-4 w-4 inline float-right" />
                                  </button>
                                  {activeNestedDropdown ===
                                    dropdownItem.name && (
                                    <div className="mt-2 pl-4">
                                      {dropdownItem.nestedDropdownItems.map(
                                        (nestedItem) => (
                                          <a
                                            key={nestedItem.name}
                                            href={nestedItem.href}
                                            className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 block px-3 py-2 rounded-md text-sm font-medium"
                                            onClick={toggleMenu}
                                          >
                                            {nestedItem.name}
                                          </a>
                                        )
                                      )}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <a
                                  href={dropdownItem.href}
                                  className={`text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium ${
                                    highlightedIndex === index
                                      ? "bg-gray-100 dark:bg-gray-600"
                                      : ""
                                  }`}
                                  onClick={toggleMenu}
                                >
                                  {dropdownItem.name}
                                </a>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <button
              className="w-full text-center bg-red-600 dark:bg-gray-300 text-white dark:text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 dark:hover:bg-gray-400 transition duration-300"
              onClick={toggleMenu}
            >
              Be One of Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import List from "@/app/components/List";

export default function Home() {
  const [certificationList, setCertificationList] = useState([]);
  const [loading, setLoading] = useState(true);
  const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : "dark";
  const [theme] = storedTheme || "dark";


  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch("/api/certification-list");
        const result = await response.json();

        if (result.success) {
          setCertificationList(result.data);
        } else {
          console.error(result.error);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  if(loading) return <div>Loading...</div>

  return (
    <div className="flex flex-col">
      <div className="flex-grow p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        
        <div className="mb-5">
          <div className="mb-2 justify-evenly">
            Welcome! Your one stop to practice all questions for AWS
            Certifications.
          </div>
          <div className="mb-2  justify-evenly">
            All the questions presented in this website are taken from &nbsp;
            <a
              className="underline text-blue-500"
              href="https://www.youtube.com/@sthithapragnakk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sthithapragn&apos;s YouTube Channel.
            </a>
          </div>
          <div className="mb-2  justify-evenly">
            Below are the certifications available for practice!
          </div>
        </div>

        <div className={`no-scrollbar ${theme === 'dark' ? 'dark-theme' : 'light-theme'} p-3 h-52 overflow-y-auto`}>
          <List data={certificationList} />
        </div>

      </div>
    </div>
  );
}

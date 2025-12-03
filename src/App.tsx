import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { UnderwaterServices } from "./components/UnderwaterServices";
import { TechnicalService } from "./components/TechnicalService";

type Page = "landing" | "underwater" | "technical";

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<Page>("landing");

  return (
    <div className="min-h-screen bg-black">
      {currentPage === "landing" && (
        <LandingPage
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
      {currentPage === "underwater" && (
        <UnderwaterServices
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
      {currentPage === "technical" && (
        <TechnicalService
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}
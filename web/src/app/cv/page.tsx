"use client";
import { useEffect } from "react";

export default function CVRedirect() {
  useEffect(() => {
    // Redirect to the legacy al-folio site
    window.location.href = "/legacy-al-folio";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
          Redirecting to Portfolio...
        </h1>
        <p className="text-neutral-600">
          Taking you to my academic portfolio and CV.
        </p>
        <div className="mt-6">
          <a 
            href="/legacy-al-folio" 
            className="text-emerald-600 hover:text-emerald-700 underline"
          >
            Click here if you're not redirected automatically
          </a>
        </div>
      </div>
    </div>
  );
}

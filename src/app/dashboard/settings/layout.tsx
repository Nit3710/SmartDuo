import React, { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Settings Section</h3>
      <div className="border p-4 rounded bg-white">{children}</div>
    </div>
  );
}
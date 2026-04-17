"use client";

import React, { useEffect } from "react";
import { datadogLogs } from "../utils/datadog";
import EmailGate from "./components/EmailGate";

export function ClientWrapper({ children }) {
  useEffect(() => {
    // No-op — datadogLogs is initialized by import side-effect
  }, []);

  return <EmailGate>{children}</EmailGate>;
}

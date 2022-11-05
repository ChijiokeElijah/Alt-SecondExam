import React from "react";
import { Helmet } from "react-helmet-async";

export default function Farewell({ subject }) {
  return (
    <div>
      <Helmet>
        <title>Error boundary</title>
        <meta
          name="description"
          content="Page to test for ErrorBoundary of my Altschool Africa second semester examination"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      Goodbye {subject.toUpperCase()}
    </div>
  );
}

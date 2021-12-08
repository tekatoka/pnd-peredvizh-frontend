import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export const PageContent = ({ children }) => {
  return (
    <div className="page-content">
      <Breadcrumbs />
      {children}
    </div>
  );
};

export const PageTitle = ({ children }) => {
  return <h1 className="page-title">{children}</h1>;
};

export const PageTitleCentered = ({ children }) => {
  return (
    <>
      <h1 className="page-title centered">{children}</h1>
      {/* <div class="small-border" /> */}
    </>
  );
};

export const PageSubtitle = ({ children }) => {
  return <h2 className="page-subtitle">{children}</h2>;
};

export const PageSubtitleDecorated = ({ children }) => {
  return <h2 className="page-subtitle decorated">{children}</h2>;
};

export const PageSubtitleSmall  = ({ children }) => {
  return <h5 className="page-subtitle centered">{children}</h5>;
};

export const DateElement = ({ children }) => {
  return <span className="date-element">{children}</span>;
};

export const AuthorElement = ({ children }) => {
  return <span className="author-element">{children}</span>;
};

export const MetadataContainer = ({ children }) => {
  return <div className="metadata-container">{children}</div>;
};

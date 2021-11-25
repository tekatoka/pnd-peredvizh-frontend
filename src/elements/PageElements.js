import React from "react";

export const PageContent = ({children}) => {
    return <div className="page-content">{children}</div>
}

export const PageTitle = ({children}) => {
    return <h3 className="page-title">{children}</h3>
}

export const DateElement = ({children}) => {
    return <span className="date-element">{children}</span>
}

export const AuthorElement = ({children}) => {
    return <span className="author-element">{children}</span>
}

export const MetadataContainer = ({children}) => {
    return <div className="metadata-container">{children}</div>
}
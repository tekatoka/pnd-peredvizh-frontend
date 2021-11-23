import React from "react";

export const PageContent = ({children}) => {
    return <div className="page-content">{children}</div>
}

export const PageTitle = ({children}) => {
    return <h2 className="page-title">{children}</h2>
}
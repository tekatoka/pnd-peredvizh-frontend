import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactMarkdown from 'react-markdown';
import axios from "./../../axios.config";
import { mapStateToProps, mapDispatchToProps } from '../../store/_functions/mapToProps';

import s from './Subpage.module.scss';

const Subpage = (props) =>  {

  const [pageId, setPageId] = useState([]);
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    props && 
    
      axios.get('/pages/' + props.slug)
      .then((response) => {
        setPageData(response.data);
        props.setIsLoaded();
      })
      .catch((reason) => {
        if (!reason.response || !reason.response.status === 400) {
          // Handle 400
        } else {
          // Handle else
        }
        props.setIsLoaded();
      })
  }, []);

    return (
      <React.Fragment>
        {
          pageData && pageData.content &&
          <div className={`${s.pageContent}`}>
            <h2 className={s.pageTitle}>{pageData.title}</h2>
            <ReactMarkdown>{pageData.content}</ReactMarkdown>
          </div>
        }
      </React.Fragment>
    );
  }

  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Subpage)
  );
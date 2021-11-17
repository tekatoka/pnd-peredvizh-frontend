import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { mapStateToProps, mapDispatchToProps } from '../store/_functions/mapToProps';

import { Link } from 'react-router-dom';
import PageNotFound from '../assets/404.png';

const NotFoundPage = (props) =>  {

    useEffect(() => {
      props.setIsLoaded();
    }, []);

    return (
        <div style={{textAlign: "center", height: "100%", maxWidth: "100%", marginTop: "10rem"}}>
            <img src={PageNotFound} style={{maxWidth: "100%"}} />
            <p style={{marginTop:"25px"}}>
              <Link to="/">На главную</Link>
            </p>
          </div>
    );
    }

  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NotFoundPage)
  );
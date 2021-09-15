import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Loader.module.scss';

class Loader extends React.Component {
    static propTypes = {
        size: PropTypes.number.isRequired
    };

    static defaultProps = {
        size: 21
    };

    render() {
        return (
            <div className={cx(s.root, s.loader)}>
                <i className="la la-asterisk la-spin" style={{fontSize: 64}}/>
                {/* la-dharmachakra */}
            </div>
        );
    }
}

export default Loader;

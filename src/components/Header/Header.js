import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (
    {
        brandName
    }
) => {
    return (
        <div className={'navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    {brandName}
                </Link>
                <div>
                    <ul className={'navbar-nav mr-auto'}>
                        <li className={'nav-item'}>
                            <Link
                                className={'nav-link'}
                                to={'/'}><i className={'fas fa-home'} /></Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                className={'nav-link'}
                                to={'/contact/add'}><i className={'fas fa-plus'} /></Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                className={'nav-link'}
                                to={'/about'}><i className={'fas fa-question'} />About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    brandName: PropTypes.string.isRequired
};

export default Header;
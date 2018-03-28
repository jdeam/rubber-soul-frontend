import React from 'react';
import Headroom from 'react-headroom';
import AccountDropdown from './AccountDropdown/AccountDropdown';
import CartDropdown from './CartDropdown/CartDropdown';
import SearchInput from '../SearchBar/SearchInput';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryShoes } from '../../actions';

const submitQuery = (e, action, searchQuery, data, sizes) => {
  e.preventDefault();
  action(searchQuery, data, sizes);
}

const Header = ({ queryShoes, searchQuery, selectedSizes, shoes }) => (
  <Headroom id="Header">
    <nav id="Header-navbar" className="navbar has-shadow">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="rs-logo title is-1">RubberSoul</h1>
        </Link>
        <div className="navbar-search">
          <p className="control has-icons-left">
            <form onSubmit={(e) => submitQuery(e, queryShoes, searchQuery, shoes, selectedSizes)}>
              <SearchInput />
            </form>
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <AccountDropdown />
          <hr className="navbar-divider" />
          <CartDropdown />
        </div>
      </div>
    </nav>
  </Headroom>
);

const mapStateToProps = (state) => ({
  shoes: state.shoes,
  searchQuery: state.searchQuery,
  selectedSizes: state.selectedSizes
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  queryShoes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

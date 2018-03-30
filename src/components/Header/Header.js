import React from 'react';
import Headroom from 'react-headroom';
import AccountDropdown from './AccountDropdown/AccountDropdown';
import CartDropdown from './CartDropdown/CartDropdown';
import SearchInput from '../SearchBar/SearchInput';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryShoes, applySortToShoes } from '../../actions';

const submitQuery = (e, action, searchQuery, data, applySortToShoes, sort) => {
  console.log(sort);
  e.preventDefault();
  action(searchQuery, data);
  applySortToShoes(sort)
}

const Header = ({ queryShoes, applySortToShoes, searchQuery, shoes, sort }) => (
  
  <Headroom id="Header">
    <nav id="Header-navbar" className="navbar has-shadow">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="rs-logo title is-1">RubberSoul</h1>
        </Link>
        <div className="navbar-search">
          <div className="control has-icons-left">
            <form
              onSubmit={ (e) => submitQuery(e, queryShoes, searchQuery, shoes, applySortToShoes, sort)}>
              <SearchInput />
            </form>
          </div>
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
  sort: state.sort
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  queryShoes, applySortToShoes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

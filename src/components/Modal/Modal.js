import React from 'react';
import 'bulma/css/bulma.css';
import SignupView from '../SignupView/SignupView';
import LoginView from '../LoginView/LoginView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from '../../actions';

const Modal = ({ toggleModal, modal, modalContent }) => {
    let header = '';
    let loginTrue;
    switch(modalContent) {
        case 'Login': {
            header = 'Login';
            loginTrue = true;
            break;
        }
        case 'Signup': {
            header = 'Create an Account';
            loginTrue = false;
            break;
        }
        default: {
            header = 'Error!';
        }
    }
    return (
        <div className={"modal " + (modal ? "is-active" : "")}>
            <div className="modal-background"></div>
                <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{header}</p>
                    <button onClick={(e) => toggleModal()} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    {loginTrue ? <LoginView /> : <SignupView />}
                </section>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({ 
    modal: state.modal, modalContent: state.modalContent
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleModal
}, dispatch);

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Modal);
  
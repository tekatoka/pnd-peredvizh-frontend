import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Widget from "../Widget/Widget";
import s from "./Modal.module.scss";
import { toggleModal } from "../../store/actions/modal";

const ModalDialog = (props) => {
  const { modalVisible, toggleModal, children } = props;
  return (
    modalVisible && (
      <div
        className={`${s.modalWrapper}`}
        onClick={() => toggleModal(!modalVisible)}
      >
        <div
          className={`mt-4 py-0 animate__animated animate__faster animate__fadeInUp `}
        >
          <div className={s.root}>
            <Widget title={<h6></h6>} close toggleModal={toggleModal}>
              {children}
            </Widget>
          </div>
        </div>
      </div>
    )
  );
};

function mapStateToProps(store) {
  return {
    modalVisible: store.modal.modalVisible,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (showModal) => {
      dispatch(toggleModal(showModal));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalDialog)
);

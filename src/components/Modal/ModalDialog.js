import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Widget from "../Widget/Widget";
import s from "./Modal.module.scss";
import { toggleModal } from "../../store/actions/modal.actions";
import useOutsideClick from "../../hooks/useOutsideClick";

const ModalDialog = (props) => {
  const { modalVisible, toggleModal, children } = props;

  const ref = useRef();
  useOutsideClick(ref, () => {
    toggleModal(!modalVisible);
  });

  return (
    modalVisible && (
      <div className={`${s.modalWrapper}`}>
        <div
          className={`mt-4 py-0 animate__animated animate__faster animate__fadeInUp `}
        >
          <div className={s.root} ref={ref}>
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

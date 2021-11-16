import { toggleModal } from "../actions/modal";
import { setIsLoaded } from "../actions/loader";


export const  mapStateToProps = (store) => {
    return {
      modalVisible: store.modal.modalVisible,
      isLoaded: store.loader.isLoaded
    };
  }
  
export const mapDispatchToProps = (dispatch) => {
    return {
      toggleModal: (showModal) => {
        dispatch(toggleModal(showModal));
      },
      setIsLoaded: () => {
        dispatch(setIsLoaded());
      },
    };
  };
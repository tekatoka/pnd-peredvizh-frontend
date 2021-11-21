import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal.actions";

const initialState = {
  modalVisible: false
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        modalVisible: true,
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modalVisible: false,
      });
    default:
      return state;
  }
}

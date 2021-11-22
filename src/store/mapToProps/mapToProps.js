import { toggleModal } from "../actions/modal.actions";
import { getEventsList, getEventBySlug } from "../actions/events.actions";
import { getPeopleList, getPersonBySlug } from "../actions/people.actions";
import { getSubpageBySlug } from "../actions/subpages.actions";
import { resetStore } from "../actions/store.actions";

export const  mapStateToProps = (store) => {
    return {
      modalVisible: store.modal.modalVisible,
      isLoading: store.events.isLoading || store.people.isLoading || store.subpage.isLoading,
      eventList: store.events.eventList,
      selectedEvent: store.events.selectedEvent,
      peopleList: store.people.peopleList,
      selectedPerson: store.people.selectedPerson,
      currentPage: store.subpage.current
    };
  }
  
export const mapDispatchToProps = (dispatch) => {
    return {
      resetStore: () => {
        dispatch(resetStore());
      },
      toggleModal: (showModal) => {
        dispatch(toggleModal(showModal));
      },
      getEventsList: () => {
        dispatch(getEventsList());
      },
      getEventBySlug: (slug) => {
        dispatch(getEventBySlug(slug))
      },
      getPeopleList: () => {
        dispatch(getPeopleList());
      },
      getPersonBySlug: (slug) => {
        dispatch(getPersonBySlug(slug))
      },
      getSubpageBySlug: (slug) => {
        dispatch(getSubpageBySlug(slug))
      }
    };
  };
import { toggleModal } from "../actions/modal.actions";
import { getEventsList, getEventBySlug } from "../actions/events.actions";
import { getPeopleList, getPersonBySlug } from "../actions/people.actions";
import { getSubpageBySlug } from "../actions/subpages.actions";
import { resetStore } from "../actions/store.actions";
import { getProjectYear } from "../actions/projectYear.actions";
import { getCities, setMapLoading, getEventsByCity, getPeopleByCity } from "../actions/cities.actions";
import { getBlogArticles, getBlogArticleBySlug } from "../actions/blog.actions";

export const mapStateToProps = (store) => {
  return {
    modalVisible: store.modal.modalVisible,
    isLoading:
      store.events.isLoading ||
      store.people.isLoading ||
      store.subpage.isLoading ||
      store.cities.isLoading ||
      store.cities.isEventsLoading ||
      store.cities.isPeopleLoading ||
      store.cities.isMapLoading ||
      store.projectYear.isLoading ||
      store.blog.isLoading,
    eventList: store.events.eventList,
    selectedEvent: store.events.selectedEvent,
    peopleList: store.people.peopleList,
    selectedPerson: store.people.selectedPerson,
    currentPage: store.subpage.current,
    currentProjectYear: store.projectYear.current,
    cities: store.cities.citiesList,
    selectedCity: store.cities.selectedCity,
    blogArticlesList: store.blog.blogArticlesList,
    selectedBlogArticle: store.blog.selectedBlogArticle
  };
};

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
      dispatch(getEventBySlug(slug));
    },
    getPeopleList: () => {
      dispatch(getPeopleList());
    },
    getPersonBySlug: (slug) => {
      dispatch(getPersonBySlug(slug));
    },
    getSubpageBySlug: (slug) => {
      dispatch(getSubpageBySlug(slug));
    },
    getProjectYear: (year) => {
      dispatch(getProjectYear(year));
    },
    getCities: () => {
      dispatch(getCities());
    },
    setMapLoading: (isLoading) => {
      dispatch(setMapLoading(isLoading))
    },
    getEventsByCity: (cityId) => {
      dispatch(getEventsByCity(cityId))
    },
    getPeopleByCity: (cityId) => {
      dispatch(getPeopleByCity(cityId))
    },
    getBlogArticles: () => {
      dispatch(getBlogArticles())
    },
    getBlogArticleBySlug: (slug) => {
      dispatch(getBlogArticleBySlug(slug))
    }
  };
};

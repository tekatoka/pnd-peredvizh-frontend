/* eslint-disable import/prefer-default-export */

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function toggleModal(showModal) {
  return {
    type: showModal ? OPEN_MODAL : CLOSE_MODAL,
  };
}
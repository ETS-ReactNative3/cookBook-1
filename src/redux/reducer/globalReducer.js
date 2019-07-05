import {
  GET_DATA,
  GET_DATA_SUCCESSFUL,
  ADD_DATA,
  ADD_DATA_SUCCESSFULL,
  TRIGGER_MODAL,
  EDIT_DATA,
  UPDATE_DATA_SUCCESSFULL
} from '../types'

  const initialState = {
      isLoading: false,
      openModal: false,
      recipesData: [],
      editData: {},
      modalView: ''
  }

export default (state = initialState, action) => {
  switch(action.type) {

      case GET_DATA:
        return { ...state }
      case GET_DATA_SUCCESSFUL:
        return { ...state,  recipesData: action.payload }
      case ADD_DATA_SUCCESSFULL:
        return { ...state, openModal: false, modalView: '' }
      case TRIGGER_MODAL:
        return { ...state, ...action.payload }
      case EDIT_DATA:
        return { ...state, editData: action.payload }
      case UPDATE_DATA_SUCCESSFULL:
        return { ...state,  openModal: false, isLoading: false, editData: {} }
      default:
        return state;  
  }
}
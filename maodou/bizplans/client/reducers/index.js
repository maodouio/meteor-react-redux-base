export default {
  selectedTypes (state = [], action) {
    const { t } = action
    const index = state.indexOf(t)
    const newState = [...state]

    if (index === -1) {
      newState.push(t)
    } else {
      newState.splice(index, 1)
    }

    switch (action.type) {
      case 'SELECT_TYPE':
        return newState
      case 'CLEAN_SELECTED_TYPES':
        return []
      default:
        return state
    }
  },
  bizplanPDF (state = {}, action) {
    const { PDFName, PDFUrl } = action
    switch (action.type) {
      case 'ADD_PDF':
        return {PDFName, PDFUrl}
      case 'REMOVE_PDF':
        return ''
      default:
        return state
    }
  },
  uploading (state = false, action) {
    switch (action.type) {
      case 'UPLOADING_PDF':
        return true
      case 'UPLOADED_PDF':
        return false
      default:
        return state
    }
  }
}

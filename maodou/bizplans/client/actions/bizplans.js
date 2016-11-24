import { $ } from 'meteor/jquery'

export default {
  // pure action
  selectType (context, t) {
    return { type: 'SELECT_TYPE', t }
  },
  cleanselectedTypes () {
    return { type: 'CLEAN_SELECTED_TYPES' }
  },
  addPDF (context, PDFName, PDFUrl) {
    return { type: 'ADD_PDF', PDFName, PDFUrl }
  },
  uploadingPDF (context) {
    return { type: 'UPLOADING_PDF' }
  },
  uploadedPDF (context) {
    return { type: 'UPLOADED_PDF' }
  },
  removePDF (context) {
    return { type: 'REMOVE_PDF' }
  },
  // redux thunk
  addBizplan ({ Meteor, swal }, e, bizplanPDF) {
    return () => {
      e.preventDefault()

      const types = $('input[name="types"]:checked').map(function () {
        return this.value
      }).get()

      const data = {
        ...bizplanPDF,
        name: e.target.name.value,
        contact: e.target.contact.value,
        types,
        desc: e.target.desc.value
      }

      Meteor.call('bizplans.add', data, (err) => {
        if (err) {
          $('#failedMsg').modal()
        } else {
          $('#successMsg').modal()
        }
      })
    }
  },
  removeBizplan ({ Meteor, swal, toastr }, _id) {
    return () => {
      Meteor.call('bizplans.remove', _id, (err) => {
        if (err) {
          toastr.error('删除失败');
        } else {
          toastr.success('删除成功');
        }
      })
    }
  }
}

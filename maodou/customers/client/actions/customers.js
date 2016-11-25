import { browserHistory } from 'react-router'

export default {
  /**** User Actions ****/

  /**** Admin Actions ****/
  addCustomer({ Meteor, swal, toastr }, customer) {
    return () => {
      customer.preventDefault();
      const index = customer.target.index.value;
      const title = customer.target.title.value;
      const category = customer.target.category.value; // TODO
      const customerName = customer.target.customerName.value;
      const salesName = customer.target.salesName.value;
      const desc = customer.target.desc.value;
      const schedule = customer.target.schedule.value;
      const money = customer.target.money.value;
      Meteor.call('customers.add', index, title, category, customerName, salesName, desc, schedule, money, (err) => {
        if (err) {
          toastr["error"]("发布失败", "Error!");
        } else {
          swal({
            title: '发布成功',
            type: 'success',
            onClose() {
              browserHistory.push('/admin/customers/list');
            }
          });
        }
      });
    }
  },
  editCustomer({ Meteor, swal, toastr }, customer, id, coverUrl) {
    return () => {
      customer.preventDefault();
      const index = customer.target.index.value;
      const title = customer.target.title.value;
      const category = customer.target.category.value; // TODO
      const customerName = customer.target.customerName.value;
      const salesName = customer.target.salesName.value;
      const desc = customer.target.desc.value;
      const schedule = customer.target.schedule.value;
      const money = customer.target.money.value;
      const customerData = {
        index,
        title,
        category,
        customerName,
        salesName,
        desc,
        schedule,
        money
      };
      Meteor.call('customers.edit', id, customerData, (err) => {
        if (err) {
          console.log(err);
          if (err.reason === "Index is required") {
            swal({
              title: '发布失败，请先添加编号',
              type: 'error'
            });
          } else if (err.reason === "Index must be a number") {
            swal({
              title: '发布失败，编号必须是数字',
              type: 'error'
            });
          } else if (err.reason === "Title is required") {
            swal({
              title: '发布失败，请先添加项目名',
              type: 'error'
            });
          } else if (err.reason === "CustomerName is required") {
            swal({
              title: '发布失败，请先添加客户',
              type: 'error'
            });
          } else if (err.reason === "SaleName is required") {
            swal({
              title: '发布失败，请先添加项目负责人',
              type: 'error'
            });
          } else if (err.reason === "Money must be a number") {
            swal({
              title: '发布失败，项目金额必须是数字',
              type: 'error'
            });
           }else {
            swal({
              title: '发布失败',
              type: 'error'
            });
          }
        } else {
          swal({
            title: '更新客户进展成功',
            type: 'success',
            onClose() {
              browserHistory.push('/admin/customers/list');
            }
          });
        }
      });
    }
  },
  deleteCustomer({ Meteor, toastr, swal }, customer, id) {
    return () => {
      customer.preventDefault();
      swal({
        title: '确定删除吗？',
        text: '此操作不可撤销',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        Meteor.call('customers.delete', id, (err) => {
          if (err) {
            toastr["error"]("删除失败", "Error!");
          } else {
            toastr["success"]("删除成功", "Success!");
          }
        });
      }, (dismiss) => {
        if (dismiss === 'cancel') {
          console.log('cancel');
        }
      });
    }
  }
};

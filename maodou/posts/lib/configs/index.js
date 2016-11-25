export default {
  posts: {
    adminLabel: '文章管理',
    subMenu: [
      { label: '配置选项', href: '/admin/posts/configure' },
      { label: '所有文章', href: '/admin/posts/list' },
      { label: '添加新文章', href: '/admin/post/add' }
    ],
    categories: ['初创公司', '创业学院', '孵化服务'],
    UI: {
      listImgPosition: 'left',
      categoriesPosition: 'bottom',
      categoriesTabsColor: 'green'
    }
  }
};

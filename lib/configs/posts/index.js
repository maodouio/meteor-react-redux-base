export default {
  posts: {
    adminLabel: 'Posts',
    subMenu: [
      { label: 'All Posts', href: '/admin/posts/list' },
      { label: 'Add Post', href: '/admin/posts/add' },
      { label: 'Categories', href: '/admin/posts/categories' },
    ],
    categories: ['初创公司', '创业学院', '孵化服务'],
    UI: {
      listImgPosition: 'left',
      categoriesPosition: 'bottom',
      categoriesTabsColor: 'green'
    }
  }
};

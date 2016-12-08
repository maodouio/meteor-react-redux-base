export default {
  posts: {
    adminLabel: '文章管理',
    subMenu: [
      { label: '配置选项', href: '/admin/posts/configure' },
      { label: '所有文章', href: '/admin/posts/list' },
      { label: '添加新文章', href: '/admin/post/add' }
    ],
    categories: ['精选内容', '创业者说', '深度好文'],
    UI: {
      listImgPosition: 'left',
      categoriesPosition: 'top',
      categoriesTabsColor: 'green'
    }
  }
};

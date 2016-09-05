export default {
  posts: {
    adminLabel: 'Posts',
    subMenu: [
      { label: 'All Posts', href: '/admin/posts/list' },
      { label: 'Add Post', href: '/admin/posts/add' },
      { label: 'Categories', href: '/admin/posts/categories' },
    ],
    showType: 'list',
    categories: ['cate1', 'cate2', 'cate3'],
    mobile: {
      categoriesPosition: 'top'
    }
  }
};

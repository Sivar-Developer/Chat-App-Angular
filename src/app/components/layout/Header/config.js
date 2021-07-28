export default function getMenuData() {
  return [
    {
      title: 'Portfolio',
      key: 'portfolio',
      count: '99+',
      url: '/portfolio',
      children: [
        {
          title: 'For You',
          key: 'portfolioIndex',
          url: '/portfolio',
        },
        {
          title: 'Following',
          key: 'portfolioFollowing',
          url: '/portfolio/following',
        },
      ],
    },
  ]
}

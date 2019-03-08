module.exports = {
    title: 'JK Learning Corner',
    description: 'My learning notes on newest technology',
    head: [
        ['link', { rel: 'icon', href: '/vue-jk-logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/zexingguo' },
        ],
        sidebar: [
            ['/', 'Introduction'],
            '/javascript/',
            '/performance/'
        ]
    }
}
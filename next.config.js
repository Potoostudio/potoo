module.exports = {
    async rewrites( ) {
        return [ {
            source: '/api/contact-handle',
            destination: 'https://potoo-flax.vercel.app/api/contact-handle',
        },
        ]
    },
};
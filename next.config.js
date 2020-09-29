module.exports = {

  async redirects() {

    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  },

  env: {
    tokenAPI: 'lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl'
  }


};
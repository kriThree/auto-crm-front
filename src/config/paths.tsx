
type Path = {
    from: string,
    to: string
}

export const paths: { [key: string]: Path } = {
    login: {
        from: '/login',
        to: '/login'
    },
    register: {
        from: '/register',
        to: '/register'
    },
    home: {
        from: '/',
        to: '/'
    },
    autoservice: {
        from: "/autoservices/:id",
        to: "/autoservices"
    },
    autoservices: {
        from: "/autoservices",
        to: "/autoservices"
    },
    cars: {
        from: "/cars",
        to: "/cars"
    },
    car: {
        from: "/cars/:id",
        to: "/cars"
    },
    settings: {
        from: "/settings",
        to: "/settings"
    },
    notFound: {
        from: "*",
        to: "/not-found"
    }
}
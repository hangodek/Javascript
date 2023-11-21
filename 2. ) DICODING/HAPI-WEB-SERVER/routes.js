const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Test1";
        },
    },

    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "Halaman tidak bisa di akses";
        },
    },

    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "Test2";
        },
    },

    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "Halaman tidak bisa di akses";
        },
    },

    /// Param

    {
        method: "GET",
        path: "/users/{username?}",
        handler: (request, h) => {
            const { username = "Stranger" } = request.params;
            const { lang } = request.query;

            if (lang === "id") {
                return `Hello, ${username} ID !`;
            }

            return `Hello, ${username}`;
        },
    },
];

module.exports = routes
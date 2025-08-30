const baseURL = import.meta.env.VITE_API_URL;

export const urls = {
    users: {
        allUsers: `${baseURL}users`,
        byID: (id: number) => `${baseURL}users/${id}`,
    },
    posts: {
        allPosts: `${baseURL}posts`,
        byID: (id: number) => `${baseURL}posts/${id}`,
        allPostsByUserId: (id: number) => `${baseURL}posts/?userId=${id}`,
    }

}
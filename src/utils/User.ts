export interface User {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    createdAt: number, //timestamp
    email: string,
    password: string,
    role: string, 
}
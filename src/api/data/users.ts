import { User } from '../../domain/types/user';

export const userData: User[] = [
    {
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1990-01-01"),
        address: "742 Evergreen Terrace, Springfield, IL 62704",
        country: "United States",
        isAdmin: true,
        failedLogins: 0
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1985-03-15"),
        address: "12 Baker Street, London W1U 6TL",
        country: "United Kingdom",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Carlos",
        lastName: "Ramirez",
        email: "carlos.ramirez@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1992-07-09"),
        address: "Avenida Reforma 305, Colonia Cuauhtémoc, Ciudad de México 06500",
        country: "Mexico",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Fatima",
        lastName: "Khan",
        email: "fatima.khan@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1995-11-30"),
        address: "45 Jinnah Avenue, F-7/1, Islamabad 44000",
        country: "Pakistan",
        isAdmin: false,
		failedLogins: 3
    },
    {
        firstName: "Liam",
        lastName: "O'Connor",
        email: "liam.oconnor@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1988-06-22"),
        address: "18 Grafton Street, Dublin 2, D02 VF65",
        country: "Ireland",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Sophie",
        lastName: "Dubois",
        email: "sophie.dubois@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1993-04-12"),
        address: "27 Rue de Rivoli, 75001 Paris",
        country: "France",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Chen",
        lastName: "Wei",
        email: "chen.wei@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1991-08-03"),
        address: "88 Nanjing Road, Huangpu District, Shanghai 200001",
        country: "China",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Emma",
        lastName: "Andersson",
        email: "emma.andersson@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1987-12-19"),
        address: "Drottninggatan 56, 111 21 Stockholm",
        country: "Sweden",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "David",
        lastName: "Nguyen",
        email: "david.nguyen@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1994-02-28"),
        address: "15 Nguyễn Huệ Boulevard, District 1, Ho Chi Minh City 700000",
        country: "Vietnam",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Maya",
        lastName: "Patel",
        email: "maya.patel@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1996-10-05"),
        address: "23 MG Road, Connaught Place, New Delhi 110001",
        country: "India",
        isAdmin: false,
		failedLogins: 0
    }
];

import { User } from '../../domain/types/user';

export const userData: User[] = [
    {
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1990-01-01"),
        country: "USA",
        isAdmin: true,
        failedLogins: 0
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1985-03-15"),
        country: "UK",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Carlos",
        lastName: "Ramirez",
        email: "carlos.ramirez@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1992-07-09"),
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
        country: "Pakistan",
        isAdmin: false,
		failedLogins: 0
    },
    {
        firstName: "Liam",
        lastName: "O'Connor",
        email: "liam.oconnor@test.com",
        password: "Password123!",
        dateOfBirth: new Date("1988-06-22"),
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
        country: "India",
        isAdmin: false,
		failedLogins: 0
    }
];

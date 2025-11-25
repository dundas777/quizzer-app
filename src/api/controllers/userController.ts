import { userData } from '../data/users';
import { User } from '../../domain/types/user';

export class UserController {

    public login(email: string, password: string): User[] {
        //console.log(`Fetching user with email and password: ${email} and password: ${password}`);
        if (email === 'all') {
            return userData;
        }
        return userData.filter(q => q.email === email && q.password === password);
    }

    public getUser(email: string): User | undefined {
        // console.log(`Fetching user with email: ${email}`);
        if (!email) {
            throw new Error("Invalid email");
        }
        return userData.find(u => u.email === email);
    }

    public addUser(user: User): void {
        userData.push(user);
    }

    public getUsers(): User[] {
        return userData;
    }

    public updateUser(updatedUser: User): void {
        if (!updatedUser || !updatedUser.email) {
            throw new Error("A valid user with an email must be provided for update");
        }

        const index = userData.findIndex(u => u.email === updatedUser.email);
        if (index === -1) {
            throw new Error(`User with email ${updatedUser.email} not found`);
        }

        userData[index] = updatedUser;
    }

    public deleteUser(email: string): void {
        // console.log(`Deleting user with email: ${email}`);
        if (!email) {
            throw new Error("A valid email must be provided for deletion");
        }

        const index = userData.findIndex(u => u.email === email);
        if (index === -1) {
            throw new Error(`User with email ${email} not found`);
        }

        userData.splice(index, 1);
    }
};


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id: string;
    name: string;
    email?: Nullable<string>;
    phoneNumber?: Nullable<string>;
}

export interface IQuery {
    findAllUser(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    findUserByID(id: string): Nullable<User> | Promise<Nullable<User>>;
    findUserByEmail(email: string): Nullable<User> | Promise<Nullable<User>>;
    findUserByPhoneNumber(phoneNumber: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;

export interface UserInfo {
    firstName: string;
    lastName:string;
    email: string;
    jobPosition: string;
    password: string;
};

export interface UserLogin {
    email: string;
    password: string;
};

export interface CreateAccountProps {
    firstName: string;
    lastName: string;
    email: string;
    jobPosition: string;
    password: string;
  }



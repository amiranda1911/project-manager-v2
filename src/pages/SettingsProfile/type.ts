export interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    jobPosition: string;
    avatar: string;
    creationDate: string;
    password: string;
    role: string;
    userName: string;
    notifications: {
      newMembers: boolean;
      newTasks: boolean;
      weeklyReports: boolean;
    };
    socialMedia: {
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  }
  
  
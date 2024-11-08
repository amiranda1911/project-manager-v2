export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobPosition: string;
  password: string;
  userName: string;
  creationDate: string; // ou Date, se quiser transformar em um objeto Date posteriormente
  role: string;
  avatar: string;
  socialMedia: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  notifications: {
    newTasks: boolean;
    newMembers: boolean;
    weeklyReports: boolean;
  };
}

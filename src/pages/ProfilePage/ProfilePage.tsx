import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../constants';

import { UserProps } from '../../interface/User';

import UserFace from './UserFace';
import ProfileData from './ProfileData';
import LastesActivitySection from './LastesActivitySection';
import WeeklyReport from './WeeklyReport';
import MainHeader from '../../Components/MainHeader';
import MainFooter from '../../Components/MainFooter';
import PageNotFound from '../PageNotFound/PageNotFound';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { TasksProps } from '../../interface/Tasks';
import useFindTaskByUserId from '../../hooks/useFindTaskByUserId';
import { calculeTotalTaskDuration } from '../../utils/calculeTotalTaskDuration';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserProps>();
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get<UserProps>(`${baseUrl}/users/${id}`);
        await setUser(response.data);
      } catch (error) {
        setError('Erro ao buscar dados');
        console.error(error);
      }
    };

    const getTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get<TasksProps[]>(`${baseUrl}/tasks`);
        await setTasks(response.data);
      } catch (error) {
        setError('Erro ao buscar dados');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
    getTasks();
  }, [id]);

  const userTasks = useFindTaskByUserId(tasks, user?.id ?? '');

  const taskTotalTime = calculeTotalTaskDuration(userTasks);

  if (loading) return <LoadingSpinner />;
  if (!user || error) {
    return <PageNotFound />;
  }

  const {
    firstName,
    lastName,
    userName,
    email,
    socialMedia,
    creationDate,
    jobPosition,
    avatar,
  }: UserProps = user;

  return (
    <div>
      <MainHeader pageType={'page3'} />
      <main className="my-12 mx-4 mx-w-[22.6875rem] rounded-3xl bg-[#F6F6F6] opacity-90 py-14 px-8 lg:flex lg:flex-row lg:content-center lg:py-14 lg:px-24 2xl:justify-center">
        <div className="lg:max-w-[38.75rem] lg:pr-6 lg:w-[31.25rem]">
          <UserFace
            avata={avatar}
            firstName={firstName}
            lastName={lastName}
            userName={userName}
          />
          <ProfileData
            firstName={firstName}
            lastName={lastName}
            email={email}
            socialMedia={socialMedia}
            creationDate={creationDate}
            jobPosition={jobPosition}
            id={id!}
          />
        </div>
        <div className="lg:flex lg:flex-col lg:pt-32 lg:pl-4 lg:border-l-2 max-h-[68.75rem]">
          <LastesActivitySection avata={avatar} />
          <WeeklyReport averageWorkTime={taskTotalTime} userTasks={userTasks} />
        </div>
      </main>
      <MainFooter />
    </div>
  );
};

export default ProfilePage;

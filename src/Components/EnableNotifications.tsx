import { useState } from "react";

interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: "notifications" | null, key: "newTasks" | "newMembers" | "weeklyReports", value: boolean) => void;
}

export const EnableNotifications = ({ updateInfosSettings }: UpdateInfosSettingsProps) => {
  const [options, setOptions] = useState({
    notifications: {
      newTasks: false,
      newMembers: false,
      weeklyReports: false,
    },
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    // Atualizando o estado local
    setOptions((prevState) => ({
      ...prevState,
      notifications: {
        ...prevState.notifications,
        [name]: checked, // TypeScript entende que 'name' está entre as chaves válidas
      },
    }));

    // Atualizando as configurações
    updateInfosSettings("notifications", name as "newTasks" | "newMembers" | "weeklyReports", checked);
  };

  return (
    <div className="flex flex-wrap my-6 text-gray-850 lg:mx-11 lg:w-3/6">
      <div>
        <label htmlFor="new-tasks" className="flex items-center">
          <input
            type="checkbox"
            id="new-tasks"
            name="newTasks"
            className="radio-input-tasks"
            checked={options.notifications.newTasks}
            onChange={handleCheckboxChange}
          />
          <p>New tasks</p>
        </label>
        <p>
          Receive an e-mail alert each time a new task is assigned to me in a project.
        </p>
      </div>
      <div>
        <label htmlFor="new-team-members" className="flex items-center">
          <input
            type="checkbox"
            id="new-team-members"
            name="newMembers"
            className="radio-input-tasks"
            checked={options.notifications.newMembers}
            onChange={handleCheckboxChange}
          />
          <p>New team members</p>
        </label>
        <p>
          Receive an e-mail alert each time a team member enters a project I’m assigned to.
        </p>
      </div>

      <div>
        <label htmlFor="weekly-reports" className="flex items-center">
          <input
            type="checkbox"
            id="weekly-reports"
            name="weeklyReports"
            className="radio-input-tasks"
            checked={options.notifications.weeklyReports}
            onChange={handleCheckboxChange}
          />
          <p>Weekly reports</p>
        </label>
        <p>
          Receive a weekly e-mail with a basic report, including estimated time and most active members.
        </p>
      </div>
    </div>
  );
};

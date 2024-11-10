import { useState } from "react";

interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: "notifications" | null, key: "newTasks" | "newMembers" | "weeklyReports", value: boolean) => void;
  data: {
    newTasks: boolean;
    newMembers: boolean;
    weeklyReports: boolean;
  };
}

export const EnableNotifications = ({ updateInfosSettings, data }: UpdateInfosSettingsProps) => {
  const [options, setOptions] = useState(data);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    // Atualizando o estado local
    setOptions((prevState) => ({
      ...prevState,
      [name]: checked,
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
            onChange={handleCheckboxChange}
            checked={options.newTasks}
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
            checked={options.newMembers}
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
            checked={options.weeklyReports}
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
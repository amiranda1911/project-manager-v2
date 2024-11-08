import { useState } from "react"

interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: string | null, key: string, value: string | number | boolean) => void;
}

export const EnableNotifications = ({updateInfosSettings}: UpdateInfosSettingsProps) => {
    const [options, setOptions] = useState({
        //valores reais serao pegos do json serve
        notifications: {
            newTasks: false,
            newMembers: false,
            weeklyReports: false
        }
    })
    
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target

        setOptions((prevState) => ({
            ...prevState,
            values: {
              ...prevState.notifications,
              [name]: checked,
            },
          }));

          updateInfosSettings("notifications", name, checked)

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
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <p>New tasks</p>
              </label>
              <p>
                Receive an e-mail alert each time a new task is assigned to me
                in a project.
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
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <p>New team members</p>
              </label>
              <p>
                Receive an e-mail alert each time a team members enters in a
                project I’m assigned to.
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
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <p>Weekly reports</p>
              </label>
              <p>
                Receive a weekly e-mail with a basic report, including estimated
                time and most active members.
              </p>
            </div>
          </div>
  )
}

export const EnableNotifications = () => {
  return (
    <div className="flex flex-wrap my-6 text-gray-850 lg:mx-11 lg:w-3/6">
            <div>
              <label htmlFor="new-tasks" className="flex items-center">
                <input
                  type="checkbox"
                  id="new-tasks"
                  name="new-tasks"
                  className="radio-input-tasks"
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
                  name="new-team-members"
                  className="radio-input-tasks"
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
                  name="weekly-reports"
                  className="radio-input-tasks"
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

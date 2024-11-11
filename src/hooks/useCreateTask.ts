import { useState } from "react"
import { baseUrl } from '../constants';
import axios from "axios";
import { Priority } from "../utils/EnumPriority";
import { Status } from "../utils/EnumStatus";
import { Bounce, toast } from "react-toastify";

interface TaskProps {
	owner_id: number,
	priority: Priority,
	status: Status,
	title: string,
	members: number[],
	commentsCount: number,
	completedTasksCount: number,
	progress: number,
	start_datetime: number,
	end_datetime: number,
	estimated_time: number,
	image: string
}

export const useCreateTask = () => {
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	
	const createTask = async (data:TaskProps) => {
		setLoading(true)
		setError(null)

		try{
			const response = await axios.post(`${baseUrl}/tasks`, data)
			toast.success('Card added successfully!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
				});
			return response.data
		} catch (err) {
			setError(`Create task error: ${err}`)
			toast.error(error, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
				});
		} finally {
			setLoading(false)
		}
	}

	return {createTask, loading, error}
}
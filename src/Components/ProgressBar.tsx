interface ProgressBarProps {
    progress: number
}

const ProgressBar = ({progress} : ProgressBarProps) => {
    return (
        <div className="w-full max-w-xs">
            
            <div className="relative pt-1">
                <div className="flex h-full bg-gray-200 rounded">
                    <div
                        className="bg-blue-600 h-1 rounded transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        
        </div>
    );
};

export default ProgressBar;
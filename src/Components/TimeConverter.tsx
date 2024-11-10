interface TimeConverterProps {
    seconds: number;
}

const TimeConverter: React.FC<TimeConverterProps> = ({ seconds }) => {
    const formatTime = (totalSeconds: number): string => {
        const minutes = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        
        // Formata minutos e segundos para ficarem no formato 00:00
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(secs).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <p>{formatTime(seconds)}</p>
        </div>
    );
};

export default TimeConverter;
interface TimeConverterProps {
    seconds: number;
}

const TimeConverter: React.FC<TimeConverterProps> = ({ seconds }) => {
    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        // Formata horas, minutos e segundos para ficarem no formato 00:00:00
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}`;
    };

    return (
        <div>
            <p>{formatTime((seconds/1000))}</p>
        </div>
    );
};

export default TimeConverter;

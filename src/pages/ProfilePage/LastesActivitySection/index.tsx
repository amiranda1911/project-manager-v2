import LastesActivityList from './LastesActivityList';

interface LastesActivitySectionProps {
  avata: string;
}

const LastesActivitySection = ({ avata }: LastesActivitySectionProps) => {
  return (
    <section>
      <h2 className="font-medium text-2xl lg:text-[2rem]">Latest activity</h2>
      <p className="opacity-50 text-[0.9375rem] lg:text-[1rem]">
        John Doe’s last interactions
      </p>
      <LastesActivityList avata={avata} />
    </section>
  );
};

export default LastesActivitySection;

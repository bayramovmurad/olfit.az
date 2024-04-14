const BodyPart = ({ item, setBodyPart,bodyPart }) => (
    <button
        type="button"
        className={bodyPart === item ? "border-t-4 border-t-green-500 w-[250px] h-[250px] shadow-lg bg-white flex items-center justify-center flex-col gap-y-2" : "w-[250px] h-[250px] shadow-lg bg-white flex items-center justify-center flex-col gap-y-2"}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src='./assets/images/gym.svg' alt="dumbbell" style={{ width: '80px', height: '80px' }} />
        <h3>{(item).toUpperCase()}</h3>
    </button>
);

export default BodyPart;

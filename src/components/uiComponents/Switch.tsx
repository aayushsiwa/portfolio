interface SwitchProps {
  onClick: () => void;
  isDarkMode: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ onClick, isDarkMode }) => {
  return (
    <div className="flex items-center justify-center -mx-4">
      <label className="relative w-10 h-10 cursor-pointer flex items-center justify-center">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={onClick}
          checked={!isDarkMode}
        />

        {/* Moon */}
        <img
          src="/moon.svg"
          alt="Moon"
          className="
            absolute w-4 h-4
            transition-all duration-500 ease-in-out
            origin-center
            scale-0 rotate-180
            peer-checked:scale-100 peer-checked:rotate-360
          "
        />

        {/* Sun */}
        <img
          src="/sun.svg"
          alt="Sun"
          className="
            absolute w-6 h-6
            transition-all duration-500 ease-in-out
            origin-center
            scale-100 rotate-0
            peer-checked:scale-0 peer-checked:-rotate-180
          "
        />
      </label>
    </div>
  );
};

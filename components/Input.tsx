interface PropsInput {
    id?: string;
    onChange?: (value: any) => void;
    value?: string;
    label: string;
    type: string;
    name: string;
    maxLength?: number;
    disable?: boolean;
  }
  
  const Input = ({
    id,
    onChange,
    value,
    label,
    type,
    maxLength,
    name,
    disable
  }: PropsInput) => {
    return (
      <div className="relative ">
        <input
          required
          maxLength={maxLength}
          onChange={onChange}
          disabled={disable}
          value={value}
          name={name}
          type={type}
          id={id}
          className={`${disable ? "opacity-40" : "opacity-100"} block
          rounded-[20px]
          px-6
          pt-6
          pb-1
          w-full
          text-md
        bg-transparent
          border
        border-mainColor
          shadow-inner
          shadow-mainColor
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          my-6`}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="
            absolute 
            text-md
            duration-150 
            transform 
            -translate-y-3 
            scale-75 
            top-4 
            z-10 
            origin-[0] 
            left-6
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75
            peer-focus:-translate-y-3
          "
        >
          {label}
        </label>
      </div>
    );
  };
  export default Input;
  
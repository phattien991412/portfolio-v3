interface ToolTipProps {
  children: React.ReactNode;
  label: string;
  className?: string;
}

const Tooltip = ({ children, label, className }: ToolTipProps) => {
  return (
    <div className="relative cursor-pointer group/tooltip w-auto">
      {children}

      <div
        className={`z-50 absolute -top-10 xl:top-0 right-7 px-2 w-max bg-white rounded text-xs capitalize hidden group-hover/tooltip:block transition-all duration-300 ${className}`}
      >
        <p className="font-medium text-black">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Tooltip;

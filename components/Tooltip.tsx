interface ToolTipProps {
  children: React.ReactNode;
  label: string;
  className?: string;
}

const Tooltip: React.FC<ToolTipProps> = ({ children, label, className }) => {
  return (
    <div className="relative cursor-pointer group/tooltip w-auto">
      {children}

      <div className={`z-50 absolute -top-10 xl:top-0 right-7 px-2 w-max bg-white rounded text-xs capitalize opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 ${className}`}>
        <p className="font-medium text-black">{label}</p>
      </div>
    </div>
  );
};

export default Tooltip;

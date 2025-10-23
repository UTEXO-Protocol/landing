import Image from "next/image";

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'black';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string; 
  iconOnly?: boolean;
  iconRotation?: string;
  iconSize?: { width: number; height: number };
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  onClick,
  href = null, 
  iconOnly = false,
  iconRotation = '',
  iconSize = { width: 12, height: 10 }
}: ButtonProps) {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'black':
        return {
          background: '#000000',
        };
      case 'secondary':
        return {
          background: 'linear-gradient(180deg, rgba(255, 252, 244, 0.1) 0%, rgba(255, 241, 229, 0.05) 100%)',
          backdropFilter: 'blur(24.63px)',
          WebkitBackdropFilter: 'blur(24.63px)',
        };
      default:
        return {
          background: 'linear-gradient(180deg, rgba(255, 252, 244, 0.1) 0%, rgba(255, 241, 229, 0.05) 100%)',
          backdropFilter: 'blur(24.63px)',
          WebkitBackdropFilter: 'blur(24.63px)',
        };
    }
  };

  const hoverClass = variant === 'black' ? 'hover:bg-gray-800' : 'hover:border-white/30';
  const baseClass = iconOnly 
    ? `text-white transition-all flex items-center justify-center cursor-pointer ${hoverClass}`
    : `w-[144px] h-[55px] text-white text-[13px] font-medium transition-all rounded-lg flex items-center justify-center gap-2 uppercase border border-white/10 cursor-pointer ${hoverClass}`;

  return (
    <button 
      onClick={onClick}
      className={`${baseClass} ${className}`}
      style={{ 
        fontFamily: iconOnly ? undefined : 'Roboto Mono, monospace',
        ...getBackgroundStyle(),
      }}
    >
      {iconOnly ? (
        <Image 
          src="/Vector.png" 
          alt="arrow" 
          width={iconSize.width} 
          height={iconSize.height} 
          className={iconRotation}
        />
      ) : (
        <>
          <span className="font-bold font-mono">{children || 'get started'}</span>
          <Image src="/Vector.png" alt="arrow-right" width={iconSize.width} height={iconSize.height} />
        </>
      )}
    </button>
  );
}


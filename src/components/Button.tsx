import Image from "next/image";

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, className = '' }: ButtonProps) {
  return (
    <button 
      className={`w-[144px] h-[55px] text-white text-[13px] font-medium transition-all rounded-lg flex items-center justify-center gap-2 uppercase border border-white/10 cursor-pointer hover:border-white/30 ${className}`}
      style={{ 
        fontFamily: 'Roboto Mono, monospace',
        background: 'linear-gradient(180deg, rgba(255, 252, 244, 0.1) 0%, rgba(255, 241, 229, 0.05) 100%)',
        backdropFilter: 'blur(24.63px)',
        WebkitBackdropFilter: 'blur(24.63px)',
      }}
    >
      <span className="font-bold">{children || 'get started'}</span>
      <Image src="/Vector.png" alt="arrow-right" width={12} height={10} />
    </button>
  );
}


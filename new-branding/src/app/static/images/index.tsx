import type { SVGProps } from "react";

export const ExpandIcon = ({ className = "", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg className={className} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 0.5H6.5V0H6V0.5ZM0.646447 5.14645C0.451184 5.34171 0.451184 5.65829 0.646447 5.85355C0.841709 6.04882 1.15829 6.04882 1.35355 5.85355L1 5.5L0.646447 5.14645ZM6 6.5H6.5V0.5H6H5.5V6.5H6ZM6 0.5V0H0V0.5V1H6V0.5ZM6 0.5L5.64645 0.146447L0.646447 5.14645L1 5.5L1.35355 5.85355L6.35355 0.853553L6 0.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <span className={`btn__icon-wrapper ${className || ""}`}>
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn__icon btn__icon--default">
        <path
          d="M12.5 4.35355L12.8536 3.99999L13.2071 4.35355L12.8536 4.7071L12.5 4.35355ZM0.5 4.85355C0.223858 4.85355 0 4.62969 0 4.35355C0 4.0774 0.223858 3.85355 0.5 3.85355V4.35355V4.85355ZM8.5 0.353546L8.85355 -7.24196e-06L12.8536 3.99999L12.5 4.35355L12.1464 4.7071L8.14645 0.7071L8.5 0.353546ZM12.5 4.35355L12.8536 4.7071L8.85355 8.7071L8.5 8.35355L8.14645 7.99999L12.1464 3.99999L12.5 4.35355ZM12.5 4.35355V4.85355H0.5V4.35355V3.85355H12.5V4.35355Z"
          fill="currentColor"
        />
      </svg>
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn__icon btn__icon--hover">
        <path
          d="M12.5 4.35355L12.8536 3.99999L13.2071 4.35355L12.8536 4.7071L12.5 4.35355ZM0.5 4.85355C0.223858 4.85355 0 4.62969 0 4.35355C0 4.0774 0.223858 3.85355 0.5 3.85355V4.85355V4.85355ZM8.5 0.353546L8.85355 -7.24196e-06L12.8536 3.99999L12.5 4.35355L12.1464 4.7071L8.14645 0.7071L8.5 0.353546ZM12.5 4.35355L12.8536 4.7071L8.85355 8.7071L8.5 8.35355L8.14645 7.99999L12.1464 3.99999L12.5 4.35355ZM12.5 4.35355V4.85355H0.5V4.35355V3.85355H12.5V4.35355Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export const DollarIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const LayersIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15L9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13C14.7369 13.7987 13.3968 14.4687 12 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12H4C4 12 4.55 8.97002 6 8.00002C7.62 6.92002 11 8.00002 11 8.00002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const LockIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 11.0001L16.89 4.34305C16.7976 4.07719 16.6502 3.83382 16.4573 3.62884C16.2645 3.42387 16.0305 3.26191 15.7708 3.15355C15.511 3.0452 15.2313 2.99288 14.9499 3.00004C14.6686 3.00719 14.3919 3.07364 14.138 3.19505L12.862 3.80505C12.5928 3.93352 12.2983 4.00014 12 4.00005H8.5C8.06434 3.99996 7.64057 4.14213 7.29311 4.40494C6.94565 4.66774 6.6935 5.03682 6.575 5.45605L5 11.0001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 11H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 21C8.65685 21 10 19.6569 10 18C10 16.3431 8.65685 15 7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RocketIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default function EthereumIcon({className = ""}: {className?: string}) {
  return (
    <svg className={className} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="25.25" fill="#E2E2E2" stroke="url(#paint0_linear_553_143)" strokeWidth="1.5" />
      <path d="M25.9441 31.97L18.5801 27.62L25.9431 38L33.3131 27.62L25.9411 31.97H25.9441ZM26.0561 14L18.6901 26.223L26.0551 30.577L33.4201 26.227L26.0561 14Z" fill="black" />
      <defs>
        <linearGradient id="paint0_linear_553_143" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="0.475962" stopColor="#CECECE" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}

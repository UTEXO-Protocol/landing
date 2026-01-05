export default function UtexoIcon({className = "", hideShadow}: {className?: string, hideShadow?: boolean}) {
  return (
    <svg  className={`${hideShadow ? '' : 'drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]'} ${className}`} width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="63.25" fill="black" stroke="url(#paint0_linear_553_105)" strokeWidth="1.5" />
      <path d="M52.293 44H67.421C72.0868 44 75.8691 47.7824 75.8691 52.4481H52.293V44Z" fill="white" />
      <path d="M89.4414 52.453L89.4414 65.017C89.4414 71.0934 84.5155 76.0192 78.4392 76.0192L75.8652 76.0192L75.8652 52.453L89.4414 52.453Z" fill="white" />
      <path d="M75.8691 84.4724L60.7411 84.4724C56.0753 84.4724 52.293 80.69 52.293 76.0243L75.8691 76.0243L75.8691 84.4724Z" fill="white" />
      <path d="M38.7207 76.0193L38.7207 63.4553C38.7207 57.3789 43.6466 52.4531 49.7229 52.4531L52.2969 52.4531L52.2969 76.0193L38.7207 76.0193Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_553_105" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="0.475962" stopColor="#CECECE" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}




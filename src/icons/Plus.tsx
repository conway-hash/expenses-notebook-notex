export function Plus({
  className,
  fill
}:{
  className?: string,
  fill?: string,
}) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2C15 0.89375 14.1063 0 13 0C11.8937 0 11 0.89375 11 2V11H2C0.89375 11 0 11.8937 0 13C0 14.1063 0.89375 15 2 15H11V24C11 25.1063 11.8937 26 13 26C14.1063 26 15 25.1063 15 24V15H24C25.1063 15 26 14.1063 26 13C26 11.8937 25.1063 11 24 11H15V2Z" fill={fill}/>
    </svg>
  )
}
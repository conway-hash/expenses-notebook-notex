export function WaterDrop({
  className,
  fill
}:{
  className?: string,
  fill?: string,
}) {
  return (
    <svg className={className} width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 32C5.375 32 0 26.625 0 20C0 14.3 8.1375 3.60625 10.4125 0.73125C10.7875 0.2625 11.3438 0 11.9438 0H12.0562C12.6562 0 13.2125 0.2625 13.5875 0.73125C15.8625 3.60625 24 14.3 24 20C24 26.625 18.625 32 12 32ZM6 21C6 20.45 5.55 20 5 20C4.45 20 4 20.45 4 21C4 24.8688 7.13125 28 11 28C11.55 28 12 27.55 12 27C12 26.45 11.55 26 11 26C8.2375 26 6 23.7625 6 21Z" fill={fill}/>
    </svg>
  )
}
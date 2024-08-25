export function Plus({
  className,
  fill
}:{
  className?: string,
  fill?: string,
}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
      <polygon fill={fill} points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11"/>
    </svg>
  )
}
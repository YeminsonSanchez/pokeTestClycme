export const types = (type, color) => {
  return (
    <span className={`badge bg-${color} text-light mx-1`} key={type}>
      {type}
    </span>
  )
}

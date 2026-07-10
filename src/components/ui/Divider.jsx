const Divider = ({
  color = '#1a3cff',
  width = 60,
  height = 4,
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    center: 'mx-auto',
    left:   'mr-auto',
    right:  'ml-auto',
  }[align]

  return (
    <div
      className={`rounded-full ${alignClass} ${className}`}
      style={{
        width,
        height,
        background: `linear-gradient(135deg, ${color}, ${color}80)`,
      }}
    />
  )
}

export default Divider
const Container = ({ title }) => {
  return (
    <div style={containerStyle}>{title}</div>
  )
}

const containerStyle = {
    backgroundColor: 'pink',
    color: 'darkgrey',
    textAlign: 'center'
}

export default Container
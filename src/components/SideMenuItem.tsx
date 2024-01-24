interface propsItem {
  title: string,
  subtitle: string
}
const SideMenuItem = ({ title, subtitle }: propsItem) => {
  return (
    <div className='opcItem'>
      <p className='opcItemTitle'>{ title }</p>
      <p className='opcItemSubTitle'>{subtitle}</p>
    </div>
  )
}

export default SideMenuItem
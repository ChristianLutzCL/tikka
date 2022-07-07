export default function IconButton(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      id={props.id}
      aria-expanded={props.ariaExpanded}
      aria-haspopup={props.ariaHasPopup}>
      <div className='flex items-center justify-center w-full h-full'>
        {props.children}
      </div>
    </button>
  )
}

IconButton.defaultProps = {
  className:
    'w-8 h-8 bg-white hover:border border-0 border-gray-200 active:bg-gray-300 rounded-full',
  onClick: undefined,
}

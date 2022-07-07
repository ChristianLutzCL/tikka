export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  disabled: false,
  className:
    'bg-gradient-to-br from-menetrend-blue to-menetrend-pink hover:from-purple-900 hover:to-pink-900 disabled:from-gray-300 disabled:to-gray-300 font-semibold text-xl text-white py-3 px-8 rounded-md w-full',
}

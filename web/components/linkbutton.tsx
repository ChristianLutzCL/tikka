import Link from 'next/link'

export default function LinkButton(props) {
  return (
    <Link passHref href={props.href}>
      <button type={props.type} className={props.className}>
        {props.children}
      </button>
    </Link>
  )
}

LinkButton.defaultProps = {
  type: 'button',
  onClick: undefined,
  disabled: false,
  className:
    'bg-pink-800 w-full text-white font-semibold py-2 px-16 rounded-sm',
}

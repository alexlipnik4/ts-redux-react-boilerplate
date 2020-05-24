import React from 'react'

type Props = {
  active: boolean,
  children: Node,
  onClick: () => void
}

const Link = (props: Props) => (
  <button
    onClick={props.onClick}
    disabled={props.active}
    style={{
      marginLeft: '4px'
    }}
  >
    {props.children}
  </button>
)

export default Link
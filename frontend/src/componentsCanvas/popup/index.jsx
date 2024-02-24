import  React, { useEffect, useRef, useState} from 'react'
import './style.css'
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup'
import { Info } from '@phosphor-icons/react'


export default function Popup() {
  const [anchor, setAnchor] = useState(null)
  const ref = useRef()

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget)
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)){
      setAnchor(null)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined

  return (
    <div className='popup'>
      <button onClick={handleClick}>
        <Info size={32} />
      </button>
      <BasePopup placement="top-start" id={id} open={open} anchor={anchor} ref={ref}>
        <div className="base-info">
          Click and rotate the 3D room-model and choose between our
          high quality floor materials in the dashboard. Adjust the
          wall color to suit your personal situation and play around
          with the light switch for an even more realistic idea.
        </div>
      </BasePopup>
    </div>
  )
}

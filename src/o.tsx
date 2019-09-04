import React from 'react';

const svg : React.FC = () => {
  return (

<svg viewBox="0 0 300 300" width="300" height="300">

{/* fill */}
<g className="fill n" fill="none">
<path d="M90 150C90 116.863 116.863 90 150 90C183.137 90 210 116.863 210 150C210 183.137 183.137 210 150 210C116.863 210 90 183.137 90 150Z" stroke-width="30"/>
</g>

{/* outline */}
<g className="outline n" fill="none">
<path d="M224.5 150C224.5 191.145 191.145 224.5 150 224.5C108.855 224.5 75.5 191.145 75.5 150C75.5 108.855 108.855 75.5 150 75.5C191.145 75.5 224.5 108.855 224.5 150ZM150 195.5C175.129 195.5 195.5 175.129 195.5 150C195.5 124.871 175.129 104.5 150 104.5C124.871 104.5 104.5 124.871 104.5 150C104.5 175.129 124.871 195.5 150 195.5Z"/>
</g>

</svg>
  )
}

export default svg;
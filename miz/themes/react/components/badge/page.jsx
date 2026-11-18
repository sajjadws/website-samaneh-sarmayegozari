// function Badge() {
//   return (
//     <div className="badge-page">

//       <div className="badge-wrapper badge-button">

//         <p>button</p>

//         <span className="badge-top">
//           <i className="fa-solid fa-house badge-icon"></i>
//         </span>

//       </div>

//     </div>
//   );
// }

// function BadgeInside() {
//   return (
//     <div className="badge-page">

//       <div className="badge-wrapper badge-button">

//         <span className="badge-inside">
//           <i className="fa-solid fa-house badge-icon"></i>
//         </span>

//         <p>button</p>

//       </div>

//     </div>
//   );
// }

// export {
//   BadgeInside,
//   Badge
// };






"use client"

import * as React from "react"
import { cn } from "cn"

function Badge({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? "span" : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(
        "badge",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
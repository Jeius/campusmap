import * as React from "react"
const LocationSVG = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 20 20"
        {...props}
    >
        <path
            fill="currentColor"
            d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        />
    </svg>
)
export default LocationSVG
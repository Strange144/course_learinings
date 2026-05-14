import { useState } from "react"

function Varybutton({ color, size, text, disabled, onClick }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
    px-6 py-2 rounded-lg font-medium transition-all duration-300

    ${size === "small" ? "text-sm px-4 py-1" : ""}
    ${size === "large" ? "text-lg px-8 py-3" : ""}

    ${color === "primary"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : ""
                }

    ${color === "secondary"
                    ? "bg-gray-500 hover:bg-gray-600 text-white"
                    : ""
                }

    ${color === "danger"
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : ""
                }

    ${color === "success"
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : ""
                }

    ${disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }
  `}
        >
            {text}
        </button>
    )
}

export default function BasicProps() {
    const [Count, setCount] = useState(0);
    return (
        <>
            <h1 className="text-white">Basic Props</h1>  <p className={`text-white`}>count is {Count}</p>
            <Varybutton color="danger" size="large" text="kathra" onClick={() => setCount(Count + 1)} />
        </>
    )
}
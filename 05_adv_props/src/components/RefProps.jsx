import { useRef, forwardRef } from "react"
const Custominput = forwardRef(({ text, placeholder }, ref) => {
    return (
        <div>
            <label className="text-white">{text}</label>
            <input className="text-white , bg-amber-600" type="text" ref={ref} placeholder={placeholder} />
        </div>
    )
})
Custominput.displayName = "refprof input"
export default function RefProps() {
    const firstinputref = useRef(null)
    const secondinputref = useRef(null)

    function focusonfirst() {
        firstinputref.current?.focus()
        console.log("focused")
    }
    function focusonsecond() {
        secondinputref.current?.focus()
    }
    function selecttext() {
        alert(firstinputref.current?.value)
    }
    function clear() {
        firstinputref.current.value = ""
    }
    return (
        <div className="mt-6">
            <h1 className="text-red-50">Refprop</h1>
            <Custominput ref={firstinputref} placeholder="enter text ..." text="first input" />
            <Custominput ref={secondinputref} placeholder="enter text ..." text="second input" />
            <button className="text-white" onClick={() => focusonfirst()}>focus on first</button>
            <button className="text-white" onClick={() => focusonsecond()}>focus on second</button>
            <button className="text-white" onClick={() => selecttext()}>gettext</button>
            <button className="text-white" onClick={() => clear()}>clear</button>
        </div>
    )
} 
function Card({ children, text, color }) {
    const ColorScheme = {
        blue: "border-blue-500 bg-blue-400",
        red: "border-red-500 bg-red-400",
        green: "border-green-500 bg-green-400",
        purple: "border-purple-500 bg-purple-400"
    }
    return (
        <div className={`${ColorScheme[color]}`}>
            <h2 className="text-white">{text}</h2>
            <div>{children}</div>
        </div>

    )
}

function Container({ children, layout }) {
    const LayoutScheme = {
        vertical: "flex flex-col space-y-4",
        horizontal: "flex flex-row flex-wrap gap-4",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }
    return (
        <div className={`${LayoutScheme[layout]}`}>{children}</div>
    )
}

export default function ChildrenProps() {
    return (
        <>
            <h1 className="text-white">Children Props</h1>
            <Container layout="vertical">
                <Card text="developer" color="blue"><p><strong>name :</strong>Ansul Joshi</p></Card>
                <Card text="intern" color="red"><p><strong>name :</strong>Deepak Joshi</p></Card>

            </Container>
        </>
    )
}
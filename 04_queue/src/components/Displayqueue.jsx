export default function Displayqueue({ details, removeFromQueue, updateStatus }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p>Display Data</p>

            {details.map((item) => (
                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        gap: 100,
                        alignItems: "center",
                        border: "1px solid black",
                        padding: 10,
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p>Name: {item.name}</p>
                        <p>Service: {item.service}</p>
                        <p style={{
                            backgroundColor:
                                item.status === "pending"
                                    ? "yellow"
                                    : item.status === "serve"
                                        ? "blue"
                                        : item.status === "complete"
                                            ? "green"
                                            : "white",
                        }}>Status: {item.status}</p>
                    </div>
                    {
                        item.status === "pending" && (
                            <button onClick={() => updateStatus(item.id, "serve")}>
                                Serve
                            </button>
                        )
                    }

                    {
                        item.status === "serve" && (
                            <button onClick={() => updateStatus(item.id, "complete")}>
                                Complete
                            </button>
                        )
                    }

                    {
                        item.status === "complete" && (
                            <button disabled>
                                Completed
                            </button>
                        )
                    }
                    <div>
                        <button onClick={() => removeFromQueue(item.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
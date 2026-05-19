const res = await fetch("http://localhost:3000/api/profile", {
    method: "GET",
    headers: {
        "Authorization": "Bearer mytoken123"
    }
});

const data = await res.json();
console.log(data);
export default async function ({ params }) {
    const { id, reviewid } = await params
    return (
        <div><p>page : {id}  {reviewid}</p></div>
    )
}
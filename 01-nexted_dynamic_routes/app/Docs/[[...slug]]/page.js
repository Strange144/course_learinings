export default async function page({ params }) {
    const { slug } = await params;
    return (
        <div>
            <p>current page{slug}</p>
        </div>
    )
}
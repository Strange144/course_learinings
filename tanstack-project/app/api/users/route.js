let user = [
    {id:1,name:"Ansul", email:"joshideepak920@gmail.com"},
{id:2,name:"joel",email:'joeljeusu@gmail.com'},
{id:3,name:"Shivam",email:"phoolprashad@gmail.com"}
]

export async function GET(){
    await new Promise((resolve)=>(setTimeout(resolve,1000)))
    return Response.json(user)
}

export async function POST(request){
    const body = await request.json()
    const newUser = { id: user.length + 1, name: body.name, email: body.email }
    user.push(newUser)
    return Response.json(newUser, { status: 201 })
}
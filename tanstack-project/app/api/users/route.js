let user = [
    {id:1,name:"Ansul", email:"joshideepak920@gmail.com"},
{id:2,name:"joel",email:'joeljeusu@gmail.com'},
{id:3,name:"Shivam",email:"phoolprashad@gmail.com"}
]

export async function GET(){
    await new Promise((resolve)=>(setTimeout(resolve,1000)))
    return Response.json(user)
}
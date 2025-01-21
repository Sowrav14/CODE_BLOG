interface Userauth{
    id? : string,
    username : string,
    email? : string,
    password : string
}

interface Userabout{
    uid : string,
    phone? : string,
    email? : string,
    address? : string,
    github? : string,
    linkedin? : string,
    dob? : string,
    gender? : "male" | "female"
}

interface Userprofile{
    uid : string,
    username : string,
    organization? : string,
    tag? : string,
    intro? : string,
    imageUrl? : string
}

interface Userdisplay{
    uid : string,
    likes : Number
    followers : Number,
    blogCount : Number
}

interface Userwork{
    uid : string,
    titlle : string,
    role : string,
    address : string,
    date : string
}

interface Userskill{
    uid : string,
    name : string
}
interface Userfavourite{
    uid : string,
    bid : string
}
interface Userbookmark{
    uid : string,
    bid : string
}
interface Userread{
    uid : string,
    bid : string
}

export { 
    Userauth, 
    Userabout, 
    Userprofile, 
    Userdisplay,
    Userwork,
    Userskill,
    Userfavourite,
    Userbookmark,
    Userread
}
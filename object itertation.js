const myobj={
    js:'javascript',
    rb:'ruby',
    cpp:'c++',
    swift:'apple'

}

for(const key in myobj)
{
    console.log(`${key} :- ${myobj[key]}`)
}
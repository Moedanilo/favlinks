import { useState } from "react"

function Form(props){
    const [name,setName] = useState("")
    const [URL,setURL] = useState("")

    const handleChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleURLChange = (event) => {
        console.log(event.target.value)
        setURL(event.target.value)
    }

    return(
        <form onSubmit={(event)=>{
                event.preventDefault()
                console.log(name,URL)
                // eslint-disable-next-line react/prop-types
                props.onNewLink({name, URL})
            }}>

            <label for="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" onChange={handleChange}/>
            <br />
            <br />
            <label for="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange}/>
            <br/>
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
        }
export default Form

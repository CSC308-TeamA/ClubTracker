import React, {useState} from 'react'


function Form(props) {
    const [person, setPerson] = useState(
        {
            comment: '',
            user: '',
        }
    );

    function handleChange(event) {
        const {name, value} = event.target;
        
        if (name === "user")
            setPerson(
                {comment: person['comment'], user: value}
            );
        else
            setPerson(
                {comment: value, user: person['user']}
            );
    }

    function submitForm() {
        props.handleSubmit(person);
        setPerson(
          {comment: '', user: ''}
        );
    }

    return (
      <>
        <form>
          
            <label htmlFor="name">Comment</label>
            <input
                type="text"
                name="comment"
                id="comment"
                value={person.comment}
                onChange={handleChange} />
            <label htmlFor="job">User</label>
            <input
                type="text"
                name="user"
                id="user"
                value={person.user}
                onChange={handleChange} />
            <input type="button" value="Submit" onClick={submitForm} />
        </form>
        </>
    );
}


export default Form;
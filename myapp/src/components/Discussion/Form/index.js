import React, {useState} from 'react'
import pfp4 from '../../../assets/profiles/pfp4.gif';

function Form(props) {
    const [person, setPerson] = useState(
        {
            picture: pfp4,
            name: '',
            user: '',
            role: '',
            comment: '',
        }
    );

    function handleChange(event) {
        const value = event.target.value;
        setPerson({
          ...person,
          [event.target.name]: value
        });
    }

    function submitForm() {
        props.handleSubmit(person);
        setPerson(
          {name: '', user: '', role: '', comment: ''}
        );
    }

    return (
      <>
        <form>
            <label htmlFor="picture">Picture</label>
                <input
                    type="text"
                    name="picture"
                    id="picture"
                    value={person.picture}
                />

            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={person.name}
                onChange={handleChange} 
            />

            <label htmlFor="user">User</label>
            <input
                type="text"
                name="user"
                id="user"
                value={person.user}
                onChange={handleChange} 
            />

            <label htmlFor="role">Role</label>
            <input
                type="text"
                name="role"
                id="role"
                value={person.role}
                onChange={handleChange} 
            />

            <label htmlFor="comment">Comment</label>
            <input
                type="text"
                name="comment"
                id="comment"
                value={person.comment}
                onChange={handleChange} 
            />

            <input type="button" value="Submit" onClick={submitForm} />

        </form>
        </>
    );
}


export default Form;
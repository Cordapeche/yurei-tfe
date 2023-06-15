import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');    
    const [confirmemail, setConfirmemail] = useState('');

    

    const handleNameChanges = (event) => {
        setName(event.target.value);

    };

    const handleEmailChanges = (event) => {
        setEmail(event.target.value);

    };

    const handleMessageChanges = (event) => {
        setMessage(event.target.value);

    };    

    const handleConfirmEmailChanges = (event) => {
        setConfirmemail(event.target.value);

    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any necessary actions, such as sending the email to a server

        // Clear the input field after submission
        setEmail('');
        setName('');
        setEmail('');        
        setConfirmemail('');
    };

    return (
        <div className='contenue'>
            <div className='flex flex-col gap-y-1 justify-center' id='form'>
            <form 
            onSubmit={handleSubmit} 
            className='flex flex-col font-normal font-poppins'>

                <input
                    data-validetta="required" 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder='Name'
                    value={name}
                    onChange={handleNameChanges}
                    className='bg-black border-solid w-full border-2 p-2  border-white mt-2 lg:mr-3 lg:mb-0'
                />
                <input
                    data-validetta="required,email" 
                    type="text" 
                    id="mail" 
                    name="mail"
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChanges}
                    className='bg-black border-solid w-full border-2 p-2  border-white mt-2 lg:mr-3 lg:mb-0'
                />
                <input
                    data-validetta="required,equalTo[mail],email" 
                    type="text" 
                    id="mailconfi" 
                    name="mailconfi"
                    placeholder='Confirm email'
                    value={confirmemail}
                    onChange={handleConfirmEmailChanges}
                    className='bg-black border-solid w-full border-2 p-2  border-white mt-2 lg:mr-3 lg:mb-0'
                />
                <textarea
                    rows='10'
                    data-validetta="required" 
                    id="message"
                    value={message}
                    onChange={handleMessageChanges}
                    className='bg-black border-solid w-full border-2 p-2  border-white mt-2'
                    placeholder='What can you suggest us'
                />

                <button type='submit' className='text-black iconcssin bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Submit</button>
            </form>
        </div>

        </div>

    );
}

export default ContactForm;
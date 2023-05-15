import { useState } from 'react';

function NewsletterSubscription() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChanges = (event) => {
        setName(event.target.value);

    };

    const handleEmailChanges = (event) => {
        setEmail(event.target.value);

    };

    const handleMessageChanges = (event) => {
        setMessage(event.target.value);

    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any necessary actions, such as sending the email to a server

        // Clear the input field after submission
        setEmail('');
        setName('');
        setEmail('');
    };

    return (
        <div className='flex flex-col gap-y-1 justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col font-normal font-poppins'>

                <input
                    type='name'
                    placeholder='Name'
                    value={name}
                    onChange={handleNameChanges}
                    className='bg-black border-solid w-full border-2 p-2  border-white mt-2 lg:mr-3 lg:mb-0'
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChanges}
                    className='bg-black border-solid w-full border-2 p-2  border-white mt-2 lg:mr-3 lg:mb-0'
                />
                <textarea
                    rows='4'
                    type='email'
                    value={message}
                    onChange={handleMessageChanges}
                    className='bg-black border-solid w-full border-2 p-2  border-white mt-2'
                    placeholder='What can you suggest us'
                />

                <button type='submit' value='Subscribe' className='text-black bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Submit</button>
            </form>
        </div>


    );
}

export default NewsletterSubscription;

{/* <form className='flex flex-col font-normal font-poppins'>
              <input type='text' name='name' placeholder='Name' className='bg-black border-solid border-2 p-2  border-white mt-2' />
              <input type='text' name='email' placeholder='Email' className='bg-black border-solid border-2 p-2  border-white mt-2' />
              <textarea id='message' rows='4' className='bg-black border-solid border-2 p-2  border-white mt-2' placeholder='What can you suggest us'></textarea>
              <button type='submit' value='submit' className='text-black bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Submit</button>
            </form> */}
import { useState } from 'react';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions, such as sending the email to a server

    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div>
      <p>Subscribe to our newsletter</p>
      <form onSubmit={handleSubmit} className='lg:items-end flex flex-col lg:flex-row pt-5'>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
          className='bg-black border-solid border-2 p-2  border-white lg:mr-3 lg:mb-0'
        />
        <button type='submit' value='Subscribe' className='text-black iconcssin bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Subscribe</button>
      </form>
    </div>


  );
}

export default NewsletterSubscription;

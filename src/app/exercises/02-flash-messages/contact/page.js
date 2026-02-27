'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../components/ToastProvider/ToastProvider';

function ContactPage() {
  const router = useRouter();
  const {createToast } = React.useContext(ToastContext);

  function onSubmit(e) {
    e.preventDefault();
    // acknowledge
    createToast('Got it bruh!', 'success');
    // go home
    router.push('/exercises/02-flash-messages');
  }

  return (
    <main>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;

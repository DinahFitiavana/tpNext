import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        numero: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // Affiche les données sur la console
        // Ajoutez ici la logique pour envoyer les données à votre backend ou effectuer d'autres actions
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Contactez-nous</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Nom</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="numero" className="block mb-1">Numéro</label>
                    <input type="tel" id="numero" name="numero" value={formData.numero} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" minLength={5} required />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;

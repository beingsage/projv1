// import { useState } from 'react';

// export default function SubscriptionForm() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle form submission
//         console.log(formData);
//     };

//     return (
//         <section className="py-16 bg-white">
//             <div className="max-w-4xl mx-auto px-4">
//                 <h2 className="text-4xl font-bold text-center mb-12 text-[#0a192f]">
//                     SUBSCRIPTION OPTIONS
//                 </h2>
                
//                 <div className="bg-white p-8 rounded-lg shadow-lg">
//                     <h3 className="text-2xl font-normal mb-8">
//                         From more enquire please connect to us ?
//                     </h3>

//                     <form onSubmit={handleSubmit} className="space-y-8">
                        
//                         <div className="relative">
//                             <label className="absolute -top-3 left-0 text-sm font-medium flex gap-1">
//                                 Full Name <span className="text-red-500">*</span>
//                             </label>
//                             <div className="flex items-center">
//                                 <span className="absolute left-4 text-gray-400">
//                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                                     </svg>
//                                 </span>
//                                 <input 
//                                     type="text"
//                                     placeholder="Full Name"
//                                     className="w-full pl-12 pr-4 py-3 border-b focus:border-b-2 focus:border-blue-500 outline-none transition-colors"
//                                     value={formData.fullName}
//                                     onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                                 />
//                             </div>
//                         </div>

                    
//                         <div className="relative">
//                             <div className="flex items-center">
//                                 <span className="absolute left-4 text-gray-400">
//                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//                                     </svg>
//                                 </span>
//                                 <input 
//                                     type="email"
//                                     placeholder="Email Address"
//                                     className="w-full pl-12 pr-4 py-3 border-b focus:border-b-2 focus:border-blue-500 outline-none transition-colors"
//                                     value={formData.email}
//                                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                                 />
//                             </div>
//                         </div>

//                         <div className="relative">
//                             <label className="absolute -top-3 left-0 text-sm font-medium flex gap-1">
//                                 Subject <span className="text-red-500">*</span>
//                             </label>
//                             <div className="flex items-center">
//                                 <span className="absolute left-4 text-gray-400">
//                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M14 17h7v2h-7zm0-4h7v2h-7zm0-4h7v2h-7zM4 17h6c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h6c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h6c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"/>
//                                     </svg>
//                                 </span>
//                                 <input 
//                                     type="text"
//                                     placeholder="Subject"
//                                     className="w-full pl-12 pr-4 py-3 border-b focus:border-b-2 focus:border-blue-500 outline-none transition-colors"
//                                     value={formData.subject}
//                                     onChange={(e) => setFormData({...formData, subject: e.target.value})}
//                                 />
//                             </div>
//                         </div>

             
//                         <div className="relative">
//                             <label className="absolute -top-3 left-0 text-sm font-medium flex gap-1">
//                                 Message <span className="text-red-500">*</span>
//                             </label>
//                             <div className="flex items-start">
//                                 <span className="absolute left-4 top-3 text-gray-400">
//                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
//                                     </svg>
//                                 </span>
//                                 <textarea 
//                                     placeholder="Message"
//                                     className="w-full pl-12 pr-4 py-3 border-b focus:border-b-2 focus:border-blue-500 outline-none transition-colors min-h-[100px] resize-none"
//                                     value={formData.message}
//                                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                                 />
//                             </div>
//                         </div>

                
//                         <button 
//                             type="submit"
//                             className="w-full bg-[#0a192f] text-white py-4 rounded font-semibold hover:bg-opacity-90 transition-colors"
//                         >
//                             SUBMIT
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function SubscriptionForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                {/* <h2 className="text-4xl font-bold text-center mb-12 text-[#0a192f]">
                    SUBSCRIPTION OPTIONS
                </h2> */}
                
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-normal mb-8">
                        From more enquire please connect to us ?
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                type="text"
                                placeholder="Enter subject"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                placeholder="Enter your message"
                                className="flex w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-600"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-[#0a192f] text-white py-4 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
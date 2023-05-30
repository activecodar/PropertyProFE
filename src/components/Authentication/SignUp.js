import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";



const SignUp = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [password1, setPassword1] = useState('');
      const navigate = useNavigate();


      const handleSignUp = (e) => {
          e.preventDefault();
          if (password !== password1) {
              toast.error("Passwords don't match");
              return;
            }
            fetch('http://127.0.0.1:8000/api/v1/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
            }).then(response => {
                  if (response.ok) {
                      return response.json()
                  } else {
                      throw response.json()
                  }
              }).then(data => {
                  const {email, token} = data;
                  localStorage.setItem('auth_token', token);
                  localStorage.setItem('email', email);
                  navigate('/login');
                console.log(data);
              }).catch(err => {
                  err.then((errorMessage) => {
                        const {errors} = errorMessage;
                        Object.keys(errors).forEach((key) => {
                            const arr = errors[key];
                            arr?.forEach((error) => {
                                console.error(error);
                                toast.error(error);
                            });
                        });
                  });
              });
      };
      return (
            <div className="bg-gray-100">
                <Toaster
             position="top-right"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                className: '',
                duration: 5000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },

                success: {
                  duration: 3000,
                  theme: {
                    primary: 'green',
                    secondary: 'red',
                  },
                },
              }}/>
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        Register
                    </h1>
                    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
                          onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="password"
                                id="password1"
                                name="password1"
                                value={password1}
                                onChange={e => setPassword1(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            className="w-full bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            type="submit">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
}


export default SignUp;
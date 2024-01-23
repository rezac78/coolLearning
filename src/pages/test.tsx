import axios from 'axios';
import { useEffect } from 'react';

const TestPage = () => {
        const Data = {
                "email": "reza.dalvand78@gmail.com",
                "password": "1111111"
        }
        useEffect(() => {
                // Example API call
                axios.post('https://cool-api-75mo.onrender.com/api/auth/login', Data)
                        .then(response => {
                                console.log('Cookie value:', document.cookie);
                        });
        }, []);

        return <div>Test Page</div>;
};

export default TestPage;

import api from "./api";

const sendEmail = async () => {
    try {
        const response = await api.put(`/Email/SendEmail`);

        if (response.status === 200) {
            window.location.reload();
        }
        
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default sendEmail;
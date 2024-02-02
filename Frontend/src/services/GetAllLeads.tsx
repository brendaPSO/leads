import api from "./api";

const getAllLeads = async () => {
    try {
        const response = await api.get('/Leads/GetAllLeads');
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default getAllLeads;
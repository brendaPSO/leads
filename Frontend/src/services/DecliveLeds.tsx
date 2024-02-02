import api from "./api";

const decliveLeds = async (jobId: number) => {
    try {
        const response = await api.put(`/Leads/DecliveLead?id=${jobId}`);

        if (response.status === 200) {
            window.location.reload();
        }
        
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default decliveLeds;
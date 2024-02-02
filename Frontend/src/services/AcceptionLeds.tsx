import api from "./api";
import sendEmail from "./sendEmail";

const acceptedLeds = async (jobId: number, price: number) => {
    try {
        let sql = `/Leads/AcceptLead?id=${jobId}`;

        if (price > 500) {
            const discount = price * 0.1;
            const newPrice = price - discount;
            sql = `/Leads/AcceptLead?id=${jobId}&newPrice=${newPrice}`;
        }

        const response = await api.put(sql);

        if (response.status === 200) {
            sendEmail();
        }

        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default acceptedLeds;
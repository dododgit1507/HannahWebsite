import api from "./api";

export const sendContactForm = async (data) => {
    try {
        const response = await api.post("/contact", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
import leadTypes from "@/types/leadTypes";

export const createNewLead = async (formData: leadTypes) => {
    try {
        const response = await fetch("/api/lead/create-new-lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error("Error");
    }
};

export const getAllLeads = async () => {
    try {
        const response = await fetch("/api/lead/get-leads", {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error("Error");
    }
};

export const updateLead = async (formData: leadTypes) => {
    try {
        const response = await fetch("/api/lead/update-lead", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error("Error");
    }
};

export const leadDelete = async (id: string) => {
    try {
        const res = await fetch(`/api/lead/delete-lead?id=${id}`, {
            method: "DELETE",
        });
        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
    }
};
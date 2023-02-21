import type { ContactForm } from "../types/ContactForm"

export const MapContactForm = (formData: FormData) => {
    return {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    } as ContactForm
}
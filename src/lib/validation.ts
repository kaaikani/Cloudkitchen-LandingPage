// Form validation utilities with English error messages

export interface FormErrors {
    name?: string;
    phone?: string;
    address?: string;
    email?: string;
    message?: string;
    location?: string;
}

export function validateRequired(value: string, fieldName: string): string | undefined {
    if (!value || value.trim().length === 0) {
        return `${fieldName} is required`;
    }
    return undefined;
}

export function validatePhone(phone: string): string | undefined {
    const trimmed = phone.trim();
    if (!trimmed) {
        return 'Phone number is required';
    }
    // Indian phone number validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(trimmed)) {
        return 'Please enter a valid 10-digit mobile number';
    }
    return undefined;
}

export function validateEmail(email: string): string | undefined {
    const trimmed = email.trim();
    if (!trimmed) {
        return 'Email address is required';
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
        return 'Please enter a valid email address';
    }
    return undefined;
}

export function validateOrderForm(formData: {
    name: string;
    phone: string;
    address: string;
    message?: string;
}): FormErrors {
    const errors: FormErrors = {};

    const nameError = validateRequired(formData.name, 'Name');
    if (nameError) errors.name = nameError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) errors.phone = phoneError;

    const addressError = validateRequired(formData.address, 'Delivery address');
    if (addressError) errors.address = addressError;

    return errors;
}

export function validateContactForm(formData: {
    name: string;
    phone?: string;
    email?: string;
    message: string;
}, sendMethod: 'whatsapp' | 'email'): FormErrors {
    const errors: FormErrors = {};

    const nameError = validateRequired(formData.name, 'Name');
    if (nameError) errors.name = nameError;

    const messageError = validateRequired(formData.message, 'Message');
    if (messageError) errors.message = messageError;

    // Validate based on send method
    if (sendMethod === 'whatsapp') {
        if (formData.phone) {
            const phoneError = validatePhone(formData.phone);
            if (phoneError) errors.phone = phoneError;
        }
    } else if (sendMethod === 'email') {
        if (formData.email) {
            const emailError = validateEmail(formData.email);
            if (emailError) errors.email = emailError;
        } else {
            errors.email = 'Email address is required for email send method';
        }
    }

    return errors;
}

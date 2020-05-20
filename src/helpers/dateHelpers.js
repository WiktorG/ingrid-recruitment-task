export const formatDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = `0${(new Date(date).getMonth() + 1)}`.slice(-2);
    const day = `0${(new Date(date).getDate())}`.slice(-2);
    return `${year}-${month}-${day}`;
};

export const isValidDate = (date) => date instanceof Date && typeof date === 'number';

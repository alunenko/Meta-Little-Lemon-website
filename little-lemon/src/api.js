const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month and padding with 0
    const day = date.getDate().toString().padStart(2, '0'); // Padding with 0

    return `${year}-${month}-${day}`;
}

const today = new Date();
const TodayAPI = formatDateToYYYYMMDD(today);
const maxForwardReservationDays = 30;
const maxReservationDate = new Date(today.setDate(today.getDate() + maxForwardReservationDays));
const MaxReservationDateAPI = formatDateToYYYYMMDD(maxReservationDate);

// Function to generate a random number between min (inclusive) and max (exclusive)
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to generate an array of unique random values within a range
const generateUniqueRandomArray = (length, min, max) => {
    const uniqueValues = new Set();

    while (uniqueValues.size < length) {
        const randomValue = getRandomNumber(min, max);
        uniqueValues.add(randomValue);
    }

    return Array.from(uniqueValues);
}

const fetchAPI = (date) => {
    let result = [];

        if(date) {
            date = new Date(date);
            const dayOfWeekFriday = 5;
            const dayOfWeekSaturday = 6;
            const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
            const hours = (dayOfWeek === dayOfWeekFriday) ? generateUniqueRandomArray(getRandomNumber(1,23-8), 8, 22) :
                            (dayOfWeek === dayOfWeekSaturday) ? generateUniqueRandomArray(getRandomNumber(1,23-10), 10, 22) :
                            generateUniqueRandomArray(getRandomNumber(1,21-8), 8, 20); // Monday to Thursday

            result = hours.map(hour => `${hour < 10 ? '0'+hour : hour}:00`).sort();
        }

        return(result);
};

const submitAPI = (formData) => new Promise(
    (resolve, reject) => {
        resolve(JSON.stringify(true));
    }
);

export {
    TodayAPI,
    MaxReservationDateAPI,
    fetchAPI,
    submitAPI
}

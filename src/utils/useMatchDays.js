export const useMatchDays = (shedual, availableDays) => {
    const shedualDays = shedual.available_days
    console.log('shedualDays', shedual);
    const newDays = availableDays
    const matchedDays = shedualDays.filter(day => newDays.includes(day));
    return matchedDays;
}
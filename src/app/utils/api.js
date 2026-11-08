export const getAllWorkouts = async () => {
    const res=await fetch ("https://api.abcz.workers.dev/api/fitlog",
    {cache:"no-store"})
    return res.json();
};

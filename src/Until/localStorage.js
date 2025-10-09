import { toast } from "react-toastify";

export const getDate = () => {
    try{
        const data = localStorage.getItem("installed")
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err);
        return []
    }
}

export const setData = app => {
    const installedData = getDate()
    console.log(installedData);
    try{
        const checkData = installedData.some( ap => ap.id === app.id)
        if(checkData) alert("Already installed")
        const updatedInstalledApps = [...installedData, app.id]
        console.log(updatedInstalledApps);
        alert("installing")
        localStorage.setItem('installed', JSON.stringify(updatedInstalledApps))
    } catch (err) {
        console.log(err);
    }
}
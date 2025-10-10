
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
        const checkData = installedData.some( ap => ap === app.id)
        if(checkData) return
        const updatedInstalledApps = [...installedData, app.id]
        console.log(updatedInstalledApps);
        localStorage.setItem('installed', JSON.stringify(updatedInstalledApps))
    } catch (err) {
        console.log(err);
    }
}


export const uninstallApp = app => {
    const installedData = getDate()
    try{
        const updatedInstalledApps = installedData.filter(ap => ap.id !== app.id)
        localStorage.setItem('installed', JSON.stringify(updatedInstalledApps))
    } catch (error) {
        console.log(error);
    }

}
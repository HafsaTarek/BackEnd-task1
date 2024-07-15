const fs=require("fs")

const addStudent=(id,fname,lname,city,age)=>{
    const allData=loadData();

    const duplicateID=allData.filter(stud=>{
    return stud.id===id;
    })

    if(duplicateID.length===0){
    allData.push({
        id,
        fname,
        lname,
        city,
        age
    })
    saveAllData(allData);
}else{
    console.log("Error: Duplicate ID, try again")
}
}

const loadData=()=>{
    try{
        const dataJson=fs.readFileSync("data.json").toString();
        return JSON.parse(dataJson)
    }catch{
        return [];
    }
}

const saveAllData=(allData)=>{
    const dataJSON=JSON.stringify(allData)
    fs.writeFileSync("data.json",dataJSON)
}


const deleteStud=(id)=>{
    const allData=loadData()
    const dataToSave=allData.filter(stud=>{
        return stud.id!==id
    })
    saveAllData(dataToSave)
}

const displayData=(id)=>{
    const allData=loadData()
    const specifiedStud=allData.find(stud=>{
        return stud.id===id
    })
    console.log(specifiedStud)
}


const filter=()=>{
    const allData=loadData()
    allData.map(stud=>{
        console.log("Student Name:",stud.fname,stud.lname,", Student ID:",stud.id)
    })
}

module.exports={
    addStudent,
    deleteStud,
    displayData,
    filter
}




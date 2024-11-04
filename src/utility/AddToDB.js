import { toast } from 'react-toastify'; 

const getstoreToReadList = () => {
    const storedListStr = localStorage.getItem("read-List");
    if(storedListStr){
        return JSON.parse(storedListStr);
    }
    else{
        return [];
    }
};

const AddstoreToReadList = (id) => {
    const storedList =  getstoreToReadList();
    if(storedList.includes(id)){
        console.log("Store already added");
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-List", storedListStr);
        toast('The book added to the store'); 
    } 
};

export { AddstoreToReadList, getstoreToReadList };
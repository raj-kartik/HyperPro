import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formDataList: []
}

export const formSlice = createSlice({
    name:"form",
    initialState,
    reducers:{
        addFormData : (state, action)=>{
            state.formDataList.push(action.payload);
        },
        updateFormData : (state,action)=>{
            const {id, newData} = action.payload;
            const index = state.formDataList.findIndex(data => data.id === id);

            if(index !== -1){
                state.formDataList[index] = { ...state, newData};
            }
        },
        deleteFormData: (state,action)=>{
            const id = action.payload;
            state.formDataList = state.formDataList.filter(data=> data.id !== id)
        },
        resetFormData: (state)=>{
            state.formDataList = [];
        },
        
    }
})

export const {addFormData,updateFormData,deleteFormData,resetFormData} = formSlice.actions;
export default formSlice.reducer;
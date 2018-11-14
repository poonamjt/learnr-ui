 export const getEmployees = () => {
     return  fetch('/employees')
         .then(response => response.json())
         .then(data => {
             return {employees: data};
         });
 };

 export const getEmployee = (id) => {
        return fetch(`/employees/${id}`)
            .then(response => response.json())
            .then(data => data)
 };

 export const getTrainings = () => {
     return fetch('/trainings')
         .then(response => response.json())
         .then(data => {
             return {trainings: data};
         });
 };





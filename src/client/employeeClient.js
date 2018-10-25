 export const getEmployees = function() {
     return   fetch('/employees')
         .then(response => response.json())
         .then(data => {
             return {employees: data};
         });
 };

 export const getEmployee = function(id) {
        return fetch('/employee/id')
            .then(response => response.json())
            .then(data => data)
 };





let date_of_modified = new Date(document.lastModified);
let new_date = date_of_modified;
new_date.toISOString().split("T")[0];

console.log(date_of_modified);
console.log(new_date);
document.getElementById('update').innerHTML =`Last Updated: ${date_of_modified}`;
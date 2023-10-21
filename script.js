
function submitForm() {
    const form = document.getElementById('question-form');
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        if (!data[key]) {
            data[key] = [value];
        } else {
            data[key].push(value);
        }
    });

    console.log(data);
    // You can send this data to your server for processing or perform any desired actions.
}

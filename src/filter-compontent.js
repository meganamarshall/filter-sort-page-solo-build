const filterForm = document.getElementById('filter');

export default function loadFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const filter = {
            lastName: formData.get('last-name')
        };
        callback(filter);
    });
}
const searchInput = document.getElementById('searchInput');
const rows = document.querySelectorAll('.search-table tbody tr');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  rows.forEach(function(row) {
    const name= row.querySelector('td:first-child').textContent.toLowerCase();
    const location = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
    const profession = row.querySelector('td:nth-child(3)').textContent.toLowerCase();

    if (name.includes(searchTerm)||location.includes(searchTerm) || profession.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

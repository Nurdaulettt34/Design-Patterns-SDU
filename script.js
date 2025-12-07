// Login logic
const loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click', () => {
	const role = document.getElementById('roleSelect').value
	const user = document.getElementById('username').value
	const pass = document.getElementById('password').value

	if (!role || !user || !pass) {
		alert('Please fill all fields.')
		return
	}

	document.getElementById('login').style.display = 'none'
	document.getElementById('dashboard').style.display = 'block'

	// Show chosen dashboard
	document.querySelectorAll('.panel').forEach(p => (p.style.display = 'none'))
	document.getElementById(role).style.display = 'block'

	// Highlight tab
	document.querySelectorAll('.tab').forEach(t => {
		t.classList.remove('active')
		if (t.dataset.tab === role) t.classList.add('active')
	})
})

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
	tab.addEventListener('click', () => {
		document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
		tab.classList.add('active')

		const id = tab.dataset.tab
		document.querySelectorAll('.panel').forEach(p => (p.style.display = 'none'))
		document.getElementById(id).style.display = 'block'
	})
})
function markDayOff() {
  const date = document.getElementById("dayOff").value;
  if (!date) {
    alert("Please select a date.");
    return;
  }
  alert("Day off marked: " + date);
  // Здесь можно добавить логику сохранения в базу или отправки на сервер
}
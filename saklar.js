function saklar() {
    for (let i = 1; i <= 10; i++) {
        let checkbox = document.getElementById('default-toggle' + i);
        let lampu = document.getElementById('lampu' + i);
        if (checkbox && lampu) {
            lampu.src = checkbox.checked ? 'assets/images/on.gif' : 'assets/images/off.gif';
        }
    }
    // Sync group toggles with their children
    syncGroupToggles();
}

function toggleGroup(group) {
    let checkboxes = document.querySelectorAll('.group-' + group);
    let groupToggle = document.getElementById('group-toggle-' + group);
    checkboxes.forEach(cb => {
        cb.checked = groupToggle.checked;
    });
    saklar();
}

function syncGroupToggles() {
    // keluarga
    let keluargaCbs = document.querySelectorAll('.group-keluarga');
    let keluargaToggle = document.getElementById('group-toggle-keluarga');
    keluargaToggle.checked = Array.from(keluargaCbs).every(cb => cb.checked);
    // makan
    let makanCbs = document.querySelectorAll('.group-makan');
    let makanToggle = document.getElementById('group-toggle-makan');
    makanToggle.checked = Array.from(makanCbs).every(cb => cb.checked);
    // tidur
    let tidurCbs = document.querySelectorAll('.group-tidur');
    let tidurToggle = document.getElementById('group-toggle-tidur');
    tidurToggle.checked = Array.from(tidurCbs).every(cb => cb.checked);
    // tamu
    let tamuCbs = document.querySelectorAll('.group-tamu');
    let tamuToggle = document.getElementById('group-toggle-tamu');
    tamuToggle.checked = Array.from(tamuCbs).every(cb => cb.checked);
}
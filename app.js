const modal=document.getElementById('taskModal');
document.getElementById('taskButton').addEventListener('click',()=>modal.classList.remove('hidden'));
document.getElementById('closeModal').addEventListener('click',()=>modal.classList.add('hidden'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.add('hidden')});
document.querySelectorAll('.check:not(.checked)').forEach(button=>button.addEventListener('click',()=>{button.classList.add('checked');button.textContent='✓';button.closest('.task-row').classList.add('done')}));
document.querySelectorAll('.quick-grid button').forEach(button=>button.addEventListener('click',()=>{document.getElementById('taskButton').click()}));
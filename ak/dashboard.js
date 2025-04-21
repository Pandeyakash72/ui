// Check if user is authenticated
if (!localStorage.getItem('isAuthenticated')) {
    window.location.href = 'index.html';
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'index.html';
});

// File upload and preview functionality
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('preview');

fileInput.addEventListener('change', function(e) {
    const files = e.target.files;
    
    // Clear previous previews
    previewContainer.innerHTML = '';
    
    for (let file of files) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const previewElement = document.createElement(file.type.startsWith('image/') ? 'img' : 'video');
            previewElement.classList.add('preview-item');
            previewElement.src = e.target.result;
            
            if (previewElement.tagName === 'VIDEO') {
                previewElement.controls = true;
            }
            
            previewContainer.appendChild(previewElement);
        }
        
        reader.readAsDataURL(file);
    }
}); 
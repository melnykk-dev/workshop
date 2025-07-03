// Universal script for task pages

function runCode() {
  const codeBox = document.getElementById('code');
  const outputBox = document.getElementById('output');
  const code = codeBox.value;

  try {
    const oldLog = console.log;
    let result = '';
    console.log = (...args) => { result += args.join(' ') + '\n'; };
    new Function(code)(); // Executes user's code
    console.log = oldLog;

    outputBox.textContent = result || '(No output)';
    outputBox.style.color = '#90ee90'; // success color
  } catch (e) {
    outputBox.textContent = 'Error: ' + e.message;
    outputBox.style.color = '#ff6b6b'; // error color
  }
}

// Optional: simple toast message
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#333';
  toast.style.color = '#fff';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '8px';
  toast.style.zIndex = '9999';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s';

  document.body.appendChild(toast);
  setTimeout(() => (toast.style.opacity = '1'), 100);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

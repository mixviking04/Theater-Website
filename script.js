// Handle newsletter subscription
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // In a real application, this would send data to a backend
    alert(`Thank you for subscribing with ${email}! We'll keep you updated on our shows.`);
    event.target.reset();
}

// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // In a real application, this would send data to a backend
    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = 'Thank you for your message! We will get back to you soon.';
    messageDiv.classList.add('success');
    
    event.target.reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
        messageDiv.classList.remove('success');
        messageDiv.textContent = '';
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Booking button functionality
document.querySelectorAll('.booking-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Ticket booking will be available soon! Please call us at (555) 123-4567 to reserve your seats.');
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.show-card, .show-item, .info-card').forEach(el => {
    observer.observe(el);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
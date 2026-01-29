// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-brand-black/95', 'nav-blur', 'shadow-lg');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-2');
    } else {
        navbar.classList.remove('bg-brand-black/95', 'nav-blur', 'shadow-lg', 'py-2');
        navbar.classList.add('py-4');
    }
});

// Timetable Data
const timetableData = {
    mon: [
        { time: '06:00 - 07:00', class: 'HIIT Blast' },
        { time: '18:00 - 19:00', class: 'MMA Basics' },
        { time: '19:00 - 20:00', class: 'Powerlifting' },
        { time: '20:00 - 21:00', class: 'Night Warrior' }
    ],
    tue: [
        { time: '06:00 - 07:00', class: 'Strength 101' },
        { time: '18:00 - 19:00', class: 'CrossFit' },
        { time: '19:00 - 20:00', class: 'MMA Advanced' },
        { time: '20:00 - 21:00', class: 'Night Warrior' }
    ],
    wed: [
        { time: '06:00 - 07:00', class: 'Boxing' },
        { time: '18:00 - 19:00', class: 'MMA Basics' },
        { time: '19:00 - 20:00', class: 'Powerlifting' },
        { time: '20:00 - 21:00', class: 'Night Warrior' }
    ],
    thu: [
        { time: '06:00 - 07:00', class: 'HIIT Blast' },
        { time: '18:00 - 19:00', class: 'CrossFit' },
        { time: '19:00 - 20:00', class: 'MMA Advanced' },
        { time: '20:00 - 21:00', class: 'Night Warrior' }
    ],
    fri: [
        { time: '06:00 - 07:00', class: 'Yoga Flow' },
        { time: '18:00 - 19:00', class: 'Boxing' },
        { time: '19:00 - 20:00', class: 'Kettlebell' },
        { time: '20:00 - 21:00', class: 'Open Mat' }
    ],
    sat: [
        { time: '06:00 - 07:00', class: 'Open Gym' },
        { time: '18:00 - 19:00', class: 'Strength Camp' },
        { time: '19:00 - 20:00', class: 'Cardio Kick' }
    ],
    sun: [
        { time: '06:00 - 07:00', class: 'Open Gym' },
        { time: 'All Day', class: 'Rest & Recovery' }
    ]
};

// Mobile Timetable Function
function showDay(day) {
    // Update buttons
    document.querySelectorAll('.day-btn').forEach(btn => {
        if (btn.dataset.day === day) {
            btn.classList.remove('bg-gray-800', 'text-white');
            btn.classList.add('bg-brand-teal', 'text-black');
        } else {
            btn.classList.add('bg-gray-800', 'text-white');
            btn.classList.remove('bg-brand-teal', 'text-black');
        }
    });

    // Update content
    const container = document.getElementById('mobile-timetable');
    const classes = timetableData[day];
    const dayNames = {
        mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', 
        thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday'
    };
    
    let html = `<h3 class="text-brand-teal font-bold uppercase mb-4 text-lg">${dayNames[day]}</h3>`;
    
    classes.forEach(session => {
        html += `
            <div class="flex justify-between items-center p-4 bg-brand-black border border-gray-800">
                <span class="text-brand-teal font-bold">${session.time}</span>
                <span class="text-white">${session.class}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Initialize Monday
showDay('mon');

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

// Observe elements for fade-in
document.querySelectorAll('section > div').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});

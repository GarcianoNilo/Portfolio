// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Check if profile image exists and fetch Facebook profile picture
    checkProfileImage();
    
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('burger-active');
            }
        });
    });
    
    // Typing effect
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    const textArray = ['Web Developer', 'Mobile App Developer', 'Problem Solver', 'Freelancer'];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    if(textArray.length) setTimeout(type, newTextDelay + 250);
    
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Skill Bar Animation
    const skillSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && 
            rect.bottom >= 0
        );
    }
    
    // Initial check for skill section
    function checkSkillsVisible() {
        if (isInViewport(skillSection)) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = "0%";
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
            window.removeEventListener('scroll', checkSkillsVisible);
        }
    }
    
    window.addEventListener('scroll', checkSkillsVisible);
    checkSkillsVisible(); // Check on initial load
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple form validation
            if (name && email && subject && message) {
                // In a real app, you would send this data to your backend
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
      // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            header.style.background = 'rgba(18, 18, 18, 0.97)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(18, 18, 18, 0.97)';
        }
          lastScrollTop = scrollTop;
    });    // Setup refresh profile picture button
    const refreshProfilePicBtn = document.getElementById('refreshProfilePic');
    if (refreshProfilePicBtn) {
        refreshProfilePicBtn.addEventListener('click', function() {
            // Add force refresh attribute to skip cache
            this.setAttribute('data-force-refresh', 'true');
            fetchFacebookProfilePicture();
            // Remove the attribute after fetching
            setTimeout(() => this.removeAttribute('data-force-refresh'), 1000);
        });
    }
      // Function to check if the local profile image exists
    function checkProfileImage() {
        const profilePicture = document.getElementById('profilePicture');
        if (!profilePicture) return;
        
        // Create placeholder SVG with initials "NG" for Nilo Garciano
        const createPlaceholder = () => {
            console.warn('Using placeholder image');
            const initialsSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                <rect width="400" height="400" fill="#212121"/>
                <text x="200" y="220" font-family="Arial" font-size="120" font-weight="bold" fill="#00e676" text-anchor="middle">NG</text>
            </svg>
            `;
            
            // Convert SVG to data URL
            return 'data:image/svg+xml;base64,' + btoa(initialsSvg);
        };
        
        // Check if we have a cached URL in localStorage
        const cachedUrl = localStorage.getItem('profilePictureUrl');
        if (cachedUrl) {
            // If we have a cached URL, use it immediately
            profilePicture.src = cachedUrl;
        } else {
            // If no cached URL, use placeholder immediately instead of waiting for the error
            profilePicture.src = createPlaceholder();
        }
        
        // Regardless of cache, attempt to fetch a fresh image from Facebook
        fetchFacebookProfilePicture();
        
        // Add error handling to the image
        profilePicture.onerror = function() {
            // If the image fails to load (including the Facebook fetch), use a data URL for a placeholder
            console.warn('Profile image failed to load, using placeholder');
            profilePicture.src = createPlaceholder();
        };
    }
    
    // Function to fetch Facebook profile picture
    function fetchFacebookProfilePicture() {
        const profilePicture = document.getElementById('profilePicture');
        const loadingOverlay = document.querySelector('.loading-overlay');
        const refreshBtn = document.getElementById('refreshProfilePic');
        
        if (!profilePicture) return;
        
        // Disable the refresh button during loading
        if (refreshBtn) {
            refreshBtn.disabled = true;
            refreshBtn.querySelector('i').classList.add('fa-spin');
        }
        
        // Show loading state
        loadingOverlay.classList.add('active');
        
        // Facebook username from your profile URL
        const fbUsername = 'TheShadowLord8080';
        
        // Use a timestamp to prevent caching
        const timestamp = new Date().getTime();
        
        // Use multiple approaches to try to fetch the profile picture
        const approaches = [
            // Approach 1: Direct Facebook Graph API
            `https://graph.facebook.com/${fbUsername}/picture?type=large&_=${timestamp}`,
            
            // Approach 2: Alternative format
            `https://graph.facebook.com/v15.0/${fbUsername}/picture?height=500&_=${timestamp}`
        ];
        
        // Function to display success message
        function showSuccessMessage() {
            // Show a subtle notification to the user
            const aboutSection = document.querySelector('.about-text h3');
            if (aboutSection) {
                const notification = document.createElement('span');
                notification.className = 'profile-pic-notification';
                notification.innerHTML = '✓ Updated profile picture';
                notification.style.fontSize = '0.8rem';
                notification.style.marginLeft = '10px';
                notification.style.color = 'var(--primary-color)';
                notification.style.transition = 'opacity 1s ease';
                
                // Remove any existing notification
                const existingNotification = document.querySelector('.profile-pic-notification');
                if (existingNotification) {
                    existingNotification.remove();
                }
                
                aboutSection.appendChild(notification);
                
                // Fade out notification after 5 seconds
                setTimeout(() => {
                    notification.style.opacity = '0';
                    setTimeout(() => notification.remove(), 1000);
                }, 5000);
            }
        }
        
        // Try each approach in sequence
        function tryNextApproach(index = 0) {
            if (index >= approaches.length) {
                // All approaches failed
                console.warn('All approaches failed to load the Facebook profile picture');
                loadingOverlay.classList.remove('active');
                
                // Re-enable the refresh button
                if (refreshBtn) {
                    refreshBtn.disabled = false;
                    refreshBtn.querySelector('i').classList.remove('fa-spin');
                }
                
                return;
            }
            
            const url = approaches[index];
            const tempImg = new Image();
            
            tempImg.onload = function() {
                // Success! Update the profile picture
                profilePicture.src = url;
                loadingOverlay.classList.remove('active');
                showSuccessMessage();
                
                // Store the successful URL in localStorage for future use
                localStorage.setItem('profilePictureUrl', url);
                localStorage.setItem('profilePictureTimestamp', timestamp);
                
                // Re-enable the refresh button
                if (refreshBtn) {
                    refreshBtn.disabled = false;
                    refreshBtn.querySelector('i').classList.remove('fa-spin');
                }
            };
            
            tempImg.onerror = function() {
                // This approach failed, try the next one
                console.warn(`Approach ${index + 1} failed, trying next approach`);
                tryNextApproach(index + 1);
            };
                  // Start loading
            tempImg.src = url;
        }
        
        // Check if we have a cached URL that's less than 24 hours old
        const cachedUrl = localStorage.getItem('profilePictureUrl');
        const cachedTimestamp = localStorage.getItem('profilePictureTimestamp');
        
        const oneDayInMs = 24 * 60 * 60 * 1000;
        const isCacheValid = cachedUrl && cachedTimestamp && 
            (timestamp - cachedTimestamp < oneDayInMs);
            
        if (isCacheValid && !refreshBtn?.hasAttribute('data-force-refresh')) {
            // Use the cached URL if it's recent and not a forced refresh
            profilePicture.src = cachedUrl;
            
            // Add a load event to handle offline cases
            profilePicture.onload = function() {
                // Image loaded successfully from cache
                loadingOverlay.classList.remove('active');
            };
            
            // Add a specific error event listener for cached URLs
            profilePicture.onerror = function() {
                console.warn('Cached profile image failed to load, trying fresh fetch');
                // If cached image fails, try a fresh fetch
                tryNextApproach();
            };
            
            // Re-enable the refresh button
            if (refreshBtn) {
                refreshBtn.disabled = false;
                refreshBtn.querySelector('i')?.classList.remove('fa-spin');
            }        } else {
            // Try the approaches in sequence
            tryNextApproach();
        }
    }
});
// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.product-card, .testimonial-card, .feature, .contact-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Enhanced product card interactions
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.03)';
        
        // Add sparkle effect
        const sparkles = document.createElement('div');
        sparkles.className = 'sparkles';
        sparkles.innerHTML = '✨✨✨';
        sparkles.style.cssText = `
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.2rem;
            animation: sparkle 1s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        card.appendChild(sparkles);
        
        setTimeout(() => {
            if (sparkles.parentNode) {
                sparkles.parentNode.removeChild(sparkles);
            }
        }, 1000);
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { opacity: 0; transform: translateX(-50%) translateY(0) scale(0.5); }
        50% { opacity: 1; transform: translateX(-50%) translateY(-10px) scale(1); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px) scale(0.5); }
    }
`;
document.head.appendChild(style);

// Newsletter form submission with Indian flair
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        const submitBtn = e.target.querySelector('button');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>Subscribing...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<span>धन्यवाद! Subscribed!</span> <i class="fas fa-check"></i>';
            submitBtn.style.background = 'linear-gradient(45deg, #228b22, #32cd32)';
            
            // Add celebration effect
            createCelebration(submitBtn);
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                e.target.reset();
            }, 3000);
        }, 1500);
        
        console.log('Newsletter subscription:', email);
    });
}

// Contact form submission with Indian touch
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<span>संदेश भेजा गया! Message Sent!</span> <i class="fas fa-check"></i>';
            submitBtn.style.background = 'linear-gradient(45deg, #228b22, #32cd32)';
            
            createCelebration(submitBtn);
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                e.target.reset();
            }, 4000);
        }, 2000);
        
        console.log('Contact form submission:', formObject);
    });
}

// Celebration effect function
function createCelebration(element) {
    const celebration = document.createElement('div');
    celebration.innerHTML = '🎉 🌸 ✨ 🪷 🎊';
    celebration.style.cssText = `
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.5rem;
        animation: celebrate 2s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    const celebrateStyle = document.createElement('style');
    celebrateStyle.textContent = `
        @keyframes celebrate {
            0% { opacity: 0; transform: translateX(-50%) translateY(0) scale(0.5); }
            50% { opacity: 1; transform: translateX(-50%) translateY(-20px) scale(1); }
            100% { opacity: 0; transform: translateX(-50%) translateY(-40px) scale(0.5); }
        }
    `;
    document.head.appendChild(celebrateStyle);
    
    element.style.position = 'relative';
    element.appendChild(celebration);
    
    setTimeout(() => {
        if (celebration.parentNode) {
            celebration.parentNode.removeChild(celebration);
        }
    }, 2000);
}

// Enhanced parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    if (heroImage && heroContent) {
        const rate = scrolled * -0.3;
        heroImage.style.transform = `translateY(${rate}px)`;
        heroContent.style.transform = `translateY(${rate * 0.2}px)`;
    }
    
    // Animate floating elements
    floatingElements.forEach((element, index) => {
        const rate = scrolled * (0.1 + index * 0.05);
        element.style.transform = `translateY(${rate}px) rotate(${rate * 0.5}deg)`;
    });
});

// Loading animation with Indian theme
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add special effects for different elements
            if (entry.target.classList.contains('product-card')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            } else if (entry.target.classList.contains('testimonial-card')) {
                entry.target.style.animation = 'fadeInRight 0.6s ease-out';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .testimonial-card, .feature, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Interactive testimonial rotation with Indian touch
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

const rotateTestimonials = () => {
    testimonials.forEach((testimonial, index) => {
        if (index === currentTestimonial) {
            testimonial.style.transform = 'scale(1.05) translateY(-10px)';
            testimonial.style.zIndex = '10';
            testimonial.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.3)';
        } else {
            testimonial.style.transform = 'scale(1) translateY(0)';
            testimonial.style.zIndex = '1';
            testimonial.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.15)';
        }
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
};

if (testimonials.length > 0) {
    setInterval(rotateTestimonials, 4000);
}

// Enhanced image lazy loading with fade effect
const images = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.onload = () => {
                img.style.opacity = '1';
            };
            
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Enhanced scroll to top button with Indian styling
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '🚀';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 120px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #d4af37, #ff6b35);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.transform = 'translateY(0) scale(1)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.transform = 'translateY(20px) scale(0.8)';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Add celebration effect
    scrollTopBtn.innerHTML = '✨';
    setTimeout(() => {
        scrollTopBtn.innerHTML = '🚀';
    }, 500);
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.background = 'linear-gradient(45deg, #ff6b35, #d4af37)';
    scrollTopBtn.style.transform = 'scale(1.1) translateY(0)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.background = 'linear-gradient(45deg, #d4af37, #ff6b35)';
    scrollTopBtn.style.transform = 'scale(1) translateY(0)';
});

// Interactive Chatbot with Indian Character
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Chatbot responses with Indian context
const chatbotResponses = {
    'skin-type': {
        message: "Let me help you discover your skin type! 🌟 In Ayurveda, we believe every person has a unique constitution. Please tell me:",
        options: [
            "My skin feels oily (Pitta dominant)",
            "My skin feels dry (Vata dominant)", 
            "My skin feels normal/combination (Kapha dominant)",
            "I'm not sure about my skin type"
        ]
    },
    'product-recommendation': {
        message: "Wonderful! 🪷 Based on Ayurvedic principles, I can recommend the perfect products for you. What's your main skin concern?",
        options: [
            "Acne and blemishes",
            "Dryness and dullness",
            "Anti-aging and wrinkles",
            "Sensitive skin issues"
        ]
    },
    'ayurveda-tips': {
        message: "Here are some beautiful Ayurvedic beauty secrets! ✨",
        tips: [
            "🌅 Start your day with warm water and lemon for inner glow",
            "🧘‍♀️ Practice daily face massage with natural oils",
            "🌿 Use turmeric and honey masks twice a week",
            "💧 Drink plenty of water infused with mint and cucumber",
            "🌙 Follow a consistent nighttime skincare routine"
        ]
    },
    'oily': {
        message: "Perfect! For Pitta-dominant (oily) skin, I recommend our Neem Tulsi Cleanser and Kumkumadi Tailam. These will balance your skin's natural oils while providing deep cleansing. 🌿",
        products: ["Neem Tulsi Cleanser", "Kumkumadi Tailam"]
    },
    'dry': {
        message: "Excellent choice! For Vata-dominant (dry) skin, our Chandanadi Night Cream and Gulab Hydrating Mist will provide deep nourishment and hydration. 🌹",
        products: ["Chandanadi Night Cream", "Gulab Hydrating Mist"]
    },
    'combination': {
        message: "Great! For Kapha-dominant (combination) skin, I suggest starting with our Kumkumadi Tailam and Gulab Hydrating Mist for balanced care. 🪷",
        products: ["Kumkumadi Tailam", "Gulab Hydrating Mist"]
    }
};

// Chatbot toggle functionality
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
    chatbotToggle.style.display = 'none';
    
    // Animate avatar
    const avatar = document.querySelector('.avatar-character');
    if (avatar) {
        avatar.style.animation = 'bounce 0.5s ease-out';
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
    chatbotToggle.style.display = 'flex';
});

// Handle option button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn')) {
        const option = e.target.getAttribute('data-option');
        const optionText = e.target.textContent;
        
        // Add user message
        addMessage(optionText, 'user');
        
        // Remove option buttons
        e.target.parentElement.remove();
        
        // Show typing indicator
        showTypingIndicator();
        
        // Respond based on option
        setTimeout(() => {
            hideTypingIndicator();
            handleChatbotResponse(option);
        }, 1500);
    }
});

// Handle text input
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        showTypingIndicator();
        
        setTimeout(() => {
            hideTypingIndicator();
            handleTextResponse(message);
        }, 1000);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addBotMessageWithOptions(text, options) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${text}</p>`;
    
    if (options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chatbot-options';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.setAttribute('data-option', option.toLowerCase().replace(/\s+/g, '-'));
            optionsDiv.appendChild(button);
        });
        
        contentDiv.appendChild(optionsDiv);
    }
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-message';
    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingMessage = document.querySelector('.typing-message');
    if (typingMessage) {
        typingMessage.remove();
    }
}

function handleChatbotResponse(option) {
    const response = chatbotResponses[option];
    
    if (response) {
        if (response.options) {
            addBotMessageWithOptions(response.message, response.options);
        } else if (response.tips) {
            let message = response.message + "<br><br>";
            response.tips.forEach(tip => {
                message += tip + "<br>";
            });
            addMessage(message, 'bot');
        } else if (response.products) {
            let message = response.message + "<br><br>Would you like to know more about these products?";
            addMessage(message, 'bot');
        } else {
            addMessage(response.message, 'bot');
        }
    } else {
        // Handle specific skin type responses
        if (option.includes('oily') || option.includes('pitta')) {
            handleChatbotResponse('oily');
        } else if (option.includes('dry') || option.includes('vata')) {
            handleChatbotResponse('dry');
        } else if (option.includes('combination') || option.includes('kapha')) {
            handleChatbotResponse('combination');
        } else {
            addMessage("That's interesting! Let me connect you with our Ayurveda expert for personalized advice. In the meantime, would you like to explore our product collection? 🌿", 'bot');
        }
    }
}

function handleTextResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste')) {
        addMessage("नमस्ते! 🙏 Welcome to Ayurveda Glow! I'm so happy to help you on your natural beauty journey. How can I assist you today? ✨", 'bot');
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        addMessage("Our products are priced between ₹649 to ₹2,499, reflecting the premium quality of our authentic Ayurvedic ingredients. We often have special offers too! 💰", 'bot');
    } else if (lowerMessage.includes('ingredients') || lowerMessage.includes('natural')) {
        addMessage("All our products contain 100% natural Ayurvedic ingredients like Saffron, Turmeric, Neem, Tulsi, Sandalwood, and Rose. No harmful chemicals ever! 🌿", 'bot');
    } else if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping')) {
        addMessage("We deliver across India! Free shipping on orders above ₹1,500. Express delivery available in major cities. 🚚", 'bot');
    } else if (lowerMessage.includes('skin type') || lowerMessage.includes('dosha')) {
        handleChatbotResponse('skin-type');
    } else {
        addMessage("That's a great question! Our Ayurvedic experts would love to help you personally. You can also explore our products or ask me about skin types, ingredients, or delivery! 😊", 'bot');
    }
}

// Product Modal Functionality
const productModal = document.getElementById('product-modal');
const modalClose = document.querySelector('.modal-close');

// Product data
const productData = {
    'kumkumadi': {
        name: 'Kumkumadi Tailam',
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'A luxurious saffron-infused face oil based on the ancient Ayurvedic formula. This precious oil combines 16 rare herbs to give you radiant, glowing skin.',
        ingredients: ['Saffron', 'Lotus', 'Sandalwood', 'Manjistha', 'Licorice'],
        benefits: [
            'Reduces dark spots and pigmentation',
            'Improves skin texture and radiance',
            'Anti-aging properties',
            'Suitable for all skin types',
            'Based on classical Ayurvedic texts'
        ],
        price: '₹2,499',
        originalPrice: '₹3,199'
    },
    'neem-tulsi': {
        name: 'Neem Tulsi Cleanser',
        image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'A gentle yet effective cleanser that purifies and balances your skin using the power of sacred Neem and Tulsi leaves.',
        ingredients: ['Neem', 'Tulsi', 'Rose Water', 'Aloe Vera', 'Coconut Oil'],
        benefits: [
            'Deep cleanses without stripping natural oils',
            'Antibacterial and antifungal properties',
            'Reduces acne and blemishes',
            'Balances oily and combination skin',
            'Gentle enough for daily use'
        ],
        price: '₹899',
        originalPrice: '₹1,199'
    }
};

// Handle product card clicks
document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productCard = e.target.closest('.product-card');
        const productId = productCard.getAttribute('data-product');
        showProductModal(productId);
    });
});

function showProductModal(productId) {
    const product = productData[productId];
    if (!product) return;
    
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-description').textContent = product.description;
    
    // Update ingredients
    const ingredientsContainer = document.getElementById('modal-ingredients');
    ingredientsContainer.innerHTML = '';
    product.ingredients.forEach(ingredient => {
        const span = document.createElement('span');
        span.className = 'ingredient';
        span.textContent = ingredient;
        ingredientsContainer.appendChild(span);
    });
    
    // Update benefits
    const benefitsList = document.getElementById('modal-benefits-list');
    benefitsList.innerHTML = '';
    product.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // Update price
    document.getElementById('modal-price').innerHTML = `
        <span class="price">${product.price}</span>
        <span class="original-price">${product.originalPrice}</span>
    `;
    
    productModal.classList.add('active');
}

modalClose.addEventListener('click', () => {
    productModal.classList.remove('active');
});

productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.classList.remove('active');
    }
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart, .modal-add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Added to Cart!</span> <i class="fas fa-check"></i>';
        btn.style.background = 'linear-gradient(45deg, #228b22, #32cd32)';
        
        // Create celebration effect
        createCelebration(btn);
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    });
});

// Performance optimization with debounce
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounce scroll events for better performance
window.addEventListener('scroll', debounce(() => {
    // Handle scroll events here if needed
}, 16)); // 60fps

// Preload critical images
const criticalImages = [
    'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
];

criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Add some fun Indian festival effects
function createDiwaliEffect() {
    const colors = ['#d4af37', '#ff6b35', '#ff9933', '#ffd700'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                font-size: ${Math.random() * 20 + 10}px;
                color: ${colors[Math.floor(Math.random() * colors.length)]};
                pointer-events: none;
                z-index: 9999;
                animation: sparklefall 3s linear forwards;
            `;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 3000);
        }, i * 100);
    }
}

// Add sparklefall animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparklefall {
        0% { 
            opacity: 1; 
            transform: translateY(-20px) rotate(0deg); 
        }
        100% { 
            opacity: 0; 
            transform: translateY(100vh) rotate(360deg); 
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Trigger celebration effect on special occasions
const today = new Date();
const isDiwali = (today.getMonth() === 10 && today.getDate() >= 1 && today.getDate() <= 5); // Approximate Diwali dates
const isHoli = (today.getMonth() === 2 && today.getDate() >= 8 && today.getDate() <= 10); // Approximate Holi dates

if (isDiwali || isHoli) {
    setTimeout(createDiwaliEffect, 2000);
}

// Add some motivational messages in Hindi/English
const motivationalMessages = [
    "आपकी त्वचा आपकी सुंदरता को दर्शाती है! ✨",
    "Natural beauty comes from within! 🌿",
    "Ayurveda is the science of life and longevity! 🧘‍♀️",
    "Your skin deserves the best of nature! 🌸"
];

// Show random motivational message
function showMotivationalMessage() {
    const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #d4af37, #ff6b35);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.5s ease-out, fadeOut 0.5s ease-out 4.5s forwards;
        box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    `;
    
    const messageStyle = document.createElement('style');
    messageStyle.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(messageStyle);
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 5000);
}

// Show motivational message after page load
setTimeout(showMotivationalMessage, 5000);

// Show another message every 2 minutes
setInterval(showMotivationalMessage, 120000);

console.log('🕉️ Welcome to Ayurveda Glow! Your journey to natural beauty begins here! ✨');
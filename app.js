// ===== STATE MANAGEMENT =====
const AppState = {
    currentScreen: 'welcome',
    language: 'en',
    pregnancyData: null,
    reminders: [],
    currentTab: 'dashboard',
    searchQuery: '',
    selectedFilter: 'all',
    showEmergencyModal: false
};

// ===== TRANSLATIONS & COPY =====
const translations = {
    en: {
        appName: 'MamaCare',
        welcomeTitle: 'MamaCare',
        welcomeSubtitle: 'Your safe space for a beautiful journey',
        getStarted: 'Start My Journey',

        eddTitle: 'When is your little one arriving?',
        eddDescription: 'We’ll help you track every beautiful moment until then.',
        eddLabel: 'My Due Date',
        continue: 'Continue',

        greeting: 'Hi, Mama 🌸',
        trimester1: 'First Trimester',
        trimester2: 'Second Trimester',
        trimester3: 'Third Trimester',
        week: 'Week',
        weeksPregnant: 'weeks of love',
        daysRemaining: 'days to go',

        todayReminders: "A Little Care for Today",
        allReminders: 'My Care Journal',
        noReminders: 'All caught up! Time to relax. ☕',

        dashboard: 'My Space',
        reminders: 'Care',
        hospitals: 'Help',
        settings: 'Profile',

        hospitalsTitle: 'Safe Places Nearby',
        searchHospitals: 'Find a safe place...',
        allHospitals: 'All',
        emergencyOnly: '24/7 Care',
        government: 'Government',
        private: 'Private',
        callNow: 'Call Support',
        getDirections: 'See Map',
        services: 'Available Services',

        emergencyTitle: 'We Are Here For You',
        emergencySubtitle: 'Help is just a tap away. You are not alone.',
        closeButton: 'I’m Okay Now',

        settingsTitle: 'My Profile',
        editDueDate: 'Update Due Date',
        editDueDateDesc: 'Did the doctor change the date? Update it here.',
        changeLanguage: 'Language / भाषा',
        changeLanguageDesc: 'Switch to Nepali or English',
        aboutApp: 'About MamaCare',
        aboutAppDesc: 'Made with ❤️ for you',
        resetData: 'Start Fresh',
        resetDataDesc: 'Clear my data and start over'
    },
    ne: {
        appName: 'मामाकेयर',
        welcomeTitle: 'मामाकेयर',
        welcomeSubtitle: 'तपाईंको सुन्दर यात्राको लागि सुरक्षित स्थान',
        getStarted: 'यात्रा सुरु गर्नुहोस्',

        eddTitle: 'तपाईंको सानो पाहुना कहिले आउँदैछ?',
        eddDescription: 'हामी त्यस दिनसम्मको हरेक पललाई साथ दिनेछौं।',
        eddLabel: 'मेरो प्रसूति मिति',
        continue: 'अगाडि बढ्नुहोस्',

        greeting: 'नमस्ते, आमा 🌸',
        trimester1: 'पहिलो त्रैमासिक',
        trimester2: 'दोस्रो त्रैमासिक',
        trimester3: 'तेस्रो त्रैमासिक',
        week: 'हप्ता',
        weeksPregnant: 'हप्ताको माया',
        daysRemaining: 'दिन बाँकी',

        todayReminders: 'आजको लागि मायालु स्याहार',
        allReminders: 'मेरो स्याहार डायरी',
        noReminders: 'सबै काम सकियो! अब आराम गर्नुहोस्। ☕',

        dashboard: 'मेरो स्थान',
        reminders: 'स्याहार',
        hospitals: 'सहयोग',
        settings: 'प्रोफाइल',

        hospitalsTitle: 'नजिकैका सुरक्षित ठाउँहरू',
        searchHospitals: 'सुरक्षित ठाउँ खोज्नुहोस्...',
        allHospitals: 'सबै',
        emergencyOnly: '२४/७ सेवा',
        government: 'सरकारी',
        private: 'निजी',
        callNow: 'सम्पर्क गर्नुहोस्',
        getDirections: 'नक्सा हेर्नुहोस्',
        services: 'उपलब्ध सेवाहरू',

        emergencyTitle: 'हामी तपाईंको साथमा छौं',
        emergencySubtitle: 'सहयोग मात्र एक क्लिक टाढा छ। तपाईं एक्लै हुनुहुन्न।',
        closeButton: 'म ठीक छु',

        settingsTitle: 'मेरो प्रोफाइल',
        editDueDate: 'मिति सच्याउनुहोस्',
        editDueDateDesc: 'के डाक्टरले मिति परिवर्तन गर्नुभयो? यहाँ अद्यावधिक गर्नुहोस्।',
        changeLanguage: 'भाषा परिवर्तन',
        changeLanguageDesc: 'नेपाली वा अंग्रेजीमा स्विच गर्नुहोस्',
        aboutApp: 'मामाकेयरको बारेमा',
        aboutAppDesc: 'तपाईंको लागि मायाका साथ बनाइएको',
        resetData: 'नयाँ सुरुवात गर्नुहोस्',
        resetDataDesc: 'मेरो डाटा हटाउनुहोस् र फेरि सुरु गर्नुहोस्'
    }
};

// ===== GENTLE NUDGES (Reminders) =====
const reminderTemplates = {
    trimester1: [
        { icon: '💊', title: 'Folic Acid Time', titleNe: 'फोलिक एसिडको समय', description: 'Just a little pill for a big future.', descriptionNe: 'ठूलो भविष्यको लागि सानो चक्की।', time: '09:00' },
        { icon: '🥗', title: 'Nourish Yourself', titleNe: 'आफूलाई पोषण दिनुहोस्', description: 'A healthy breakfast makes a happy baby.', descriptionNe: 'स्वस्थ नाश्ता, खुसी बच्चा।', time: '08:00' },
        { icon: '💧', title: 'Sip Some Water', titleNe: 'पानी पिउनुहोस्', description: 'Hydration is self-love today.', descriptionNe: 'पानी पिउनु आजको आत्म-माया हो।', time: '10:00' },
        { icon: '😴', title: 'Moment of Rest', titleNe: 'आरामको पल', description: 'Close your eyes for 5 mins. You deserve it.', descriptionNe: '५ मिनेट आँखा बन्द गर्नुहोस्। तपाईं यसको हकदार हुनुहुन्छ।', time: '14:00' },
        { icon: '🍊', title: 'Vitamin Boost', titleNe: 'भिटामिनको शक्ति', description: 'Some fresh fruit would be lovely now.', descriptionNe: 'ताजा फलफूल अहिले धेरै राम्रो हुनेछ।', time: '16:00' },
        { icon: '🏥', title: 'First Checkup', titleNe: 'पहिलो भेट', description: 'Time to meet the doctor? (Week 8-10)', descriptionNe: 'डाक्टरलाई भेट्ने समय भयो? (हप्ता ८-१०)', time: '11:00' }
    ],
    trimester2: [
        { icon: '💊', title: 'Iron & Love', titleNe: 'आइरन र माया', description: 'Strong mama, constant care.', descriptionNe: 'बलियो आमा, निरन्तर स्याहार।', time: '09:00' },
        { icon: '🥛', title: 'Calcium for Two', titleNe: 'दुई जनाको लागि क्याल्सियम', description: 'Milk or curd helps bones grow.', descriptionNe: 'दूध वा दहीले हड्डी बलियो बनाउँछ।', time: '10:00' },
        { icon: '🚶‍♀️', title: 'Gentle Walk', titleNe: 'हल्का हिडडुल', description: 'Let’s move a little, feels good!', descriptionNe: 'थोरै हिडडुल गरौं, राम्रो महसुस हुन्छ!', time: '17:00' },
        { icon: '🥗', title: 'Healthy Plate', titleNe: 'स्वस्थ खाना', description: 'Colors on your plate mean health.', descriptionNe: 'तपाईंको थालमा रङ भनेको स्वास्थ्य हो।', time: '13:00' },
        { icon: '💧', title: 'Keep Sipping', titleNe: 'पिउँदै गर्नुहोस', description: 'Water helps everything flow better.', descriptionNe: 'पानीले शरीरलाई सहज बनाउँछ।', time: '15:00' },
        { icon: '🏥', title: 'Checkup Reminder', titleNe: 'जाँचको सम्झना', description: 'Is it time for your monthly visit?', descriptionNe: 'के यो तपाईंको मासिक जाँचको समय हो?', time: '11:00' }
    ],
    trimester3: [
        { icon: '💊', title: 'Daily Strength', titleNe: 'दैनिक शक्ति', description: 'Vitamins for the final stretch.', descriptionNe: 'अन्तिम चरणको लागि भिटामिनहरू।', time: '09:00' },
        { icon: '🎒', title: 'Ready the Bag', titleNe: 'झोला तयारी', description: 'Maybe pack one small thing today?', descriptionNe: 'सायद आज एउटा सानो सामान प्याक गर्ने?', time: '10:00' },
        { icon: '⚠️', title: 'Listen to Body', titleNe: 'शरीरको कुरा सुन्नुहोस्', description: 'Feeling odd? It’s okay to call the doctor.', descriptionNe: 'असहज महसुस हुँदैछ? डाक्टरलाई कल गर्दा हुन्छ।', time: '12:00' },
        { icon: '😴', title: 'Feet Up', titleNe: 'खुट्टा माथि', description: 'Prop those feet up and breathe.', descriptionNe: 'खुट्टा माथि राख्नुहोस् र लामो सास फेर्नुहोस्।', time: '14:00' },
        { icon: '💧', title: 'Water is Life', titleNe: 'पानी जीवन हो', description: 'Keep drinking, you’re doing great.', descriptionNe: 'पिउँदै गर्नुहोस्, तपाईं राम्रो गर्दै हुनुहुन्छ।', time: '16:00' },
        { icon: '🏥', title: 'Weekly Visit', titleNe: 'साप्ताहिक भेट', description: 'Almost there! Time for a checkup?', descriptionNe: 'पुग्नै लाग्यो! के जाँचको समय भयो?', time: '11:00' },
        { icon: '🤱', title: 'Birth Wishes', titleNe: 'जन्मको चाहना', description: 'Thinking about how you want to meet baby?', descriptionNe: 'बच्चालाई कसरी भेट्न चाहनुहुन्छ सोच्दै हुनुहुन्छ?', time: '15:00' }
    ]
};

// ===== UTILITY FUNCTIONS =====
function t(key) {
    return translations[AppState.language][key] || key;
}

function calculatePregnancyWeek(edd) {
    const dueDate = new Date(edd);
    const today = new Date();
    const pregnancyStart = new Date(dueDate);
    pregnancyStart.setDate(dueDate.getDate() - 280); // 40 weeks = 280 days

    const diffTime = today - pregnancyStart;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const week = Math.floor(diffDays / 7) + 1;

    return Math.max(1, Math.min(40, week));
}

function calculateDaysRemaining(edd) {
    const dueDate = new Date(edd);
    const today = new Date();
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return Math.max(0, diffDays);
}

function getTrimester(week) {
    if (week <= 13) return 1;
    if (week <= 27) return 2;
    return 3;
}

function getTrimesterKey(trimester) {
    return `trimester${trimester}`;
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function scheduleNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notifications enabled');
            }
        });
    }
}

// ===== RENDER FUNCTIONS =====
function renderWelcomeScreen() {
    return `
        <div class="screen welcome-screen">
            <div class="container">
                <div class="welcome-icon">🤰</div>
                <h1 class="welcome-title">${t('welcomeTitle')}</h1>
                <p class="welcome-subtitle">${t('welcomeSubtitle')}</p>
                
                <div class="language-selector">
                    <button class="language-btn ${AppState.language === 'en' ? 'active' : ''}" 
                            onclick="setLanguage('en')">
                        English
                    </button>
                    <button class="language-btn ${AppState.language === 'ne' ? 'active' : ''}" 
                            onclick="setLanguage('ne')">
                        नेपाली
                    </button>
                </div>
                
                <button class="btn btn-primary btn-full" onclick="navigateTo('edd')">
                    ${t('getStarted')}
                </button>
            </div>
        </div>
    `;
}

function renderEDDScreen() {
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 10);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    return `
        <div class="screen edd-screen">
            <div class="container">
                <div class="screen-header">
                    <h1 class="screen-title">${t('eddTitle')}</h1>
                    <p class="screen-description">${t('eddDescription')}</p>
                </div>
                
                <div class="card">
                    <div class="form-group">
                        <label class="form-label" for="edd-input">${t('eddLabel')}</label>
                        <input type="date" 
                               id="edd-input" 
                               class="form-input" 
                               min="${today}"
                               max="${maxDateStr}"
                               required>
                    </div>
                    
                    <button class="btn btn-primary btn-full" onclick="saveEDD()">
                        ${t('continue')}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== HUMAN TOUCH HELPERS =====
function getWarmGreeting(name) {
    const hours = new Date().getHours();
    const timeGreeting = hours < 12 ? 'Good Morning' : (hours < 18 ? 'Good Afternoon' : 'Good Evening');

    // In future: we can use the name if profile is set "Hi, ${name} 🌸"
    // For now, random affectionate greetings
    const greetingsEn = [
        "Hi, Mama 🌸",
        "You're doing great 💖",
        "Hello, Beautiful ✨",
        "Sending you love 🌷",
        `${timeGreeting}, Mama ☀️`
    ];

    const greetingsNe = [
        "नमस्ते, आमा 🌸",
        "तपाईं राम्रो गर्दै हुनुहुन्छ 💖",
        "नमस्ते, सुन्दर आमा ✨",
        "तपाईंलाई धेरै माया 🌷",
        "नमस्ते ☀️"
    ];

    const list = AppState.language === 'ne' ? greetingsNe : greetingsEn;
    return list[Math.floor(Math.random() * list.length)];
}

function renderDashboardScreen() {
    const { edd, week, trimester, daysRemaining } = AppState.pregnancyData;
    const trimesterText = t(`trimester${trimester}`);
    const progress = (week / 40) * 100;
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (progress / 100) * circumference;

    const todayReminders = getRemindersForTrimester(trimester);
    const greeting = getWarmGreeting(); // Use random greeting

    return `
        <div class="screen dashboard-screen">
            <div class="dashboard-header" style="padding-bottom: 2rem;">
                <div class="greeting slide-up">${greeting}</div>
                <div class="pregnancy-info slide-up" style="animation-delay: 0.1s;">
                    <div class="trimester-badge" style="background: rgba(255,255,255,0.3); backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.4);">${trimesterText}</div>
                    <div class="week-display">${t('week')} ${week}</div>
                </div>
            </div>
            
            <div class="container" style="margin-top: -1rem;">
                <!-- PROGRESS CARD -->
                <div class="card slide-up" style="animation-delay: 0.2s; display: flex; align-items: center; justify-content: space-around; padding: 1.5rem;">
                    <div class="progress-circle" style="transform: scale(0.8); margin: 0;">
                        <svg width="200" height="200">
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:var(--primary-rose);stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:var(--primary-rose-light);stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <circle class="progress-circle-bg" cx="100" cy="100" r="90" style="stroke: var(--bg-soft);"></circle>
                            <circle class="progress-circle-fill" 
                                    cx="100" cy="100" r="90"
                                    stroke-dasharray="${circumference}"
                                    stroke-dashoffset="${offset}"
                                    style="stroke: url(#progressGradient);"></circle>
                        </svg>
                        <div class="progress-text">
                            <div class="progress-weeks" style="color: var(--sage-dark);">${week}</div>
                            <div class="progress-label" style="color: var(--sage-text);">${t('weeksPregnant')}</div>
                        </div>
                    </div>
                    
                    <div class="days-display" style="text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary-rose); line-height: 1;">${daysRemaining}</div>
                        <div style="font-size: 0.85rem; color: var(--sage-text); max-width: 80px;">${t('daysRemaining')}</div>
                    </div>
                </div>
                
                <h2 class="section-header" style="margin-top: 2rem; color: var(--sage-dark);">${t('todayReminders')}</h2>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${todayReminders.length > 0
            ? todayReminders.map((reminder, index) => renderReminderCard(reminder, index)).join('')
            : `<div class="empty-state">
                         <div class="empty-icon">☕</div>
                         <div class="empty-text">${t('noReminders')}</div>
                       </div>`
        }
                </div>
            </div>
            
            ${renderBottomNav()}
        </div>
    `;
}

function renderRemindersScreen() {
    const { trimester } = AppState.pregnancyData;
    const allReminders = getRemindersForTrimester(trimester);

    return `
        <div class="screen dashboard-screen">
            <div class="dashboard-header">
                <div class="greeting">${t('allReminders')}</div>
                <div style="font-size: 1rem; margin-top: 0.5rem; opacity: 0.9;">
                   🌸 ${t(`trimester${trimester}`)}
                </div>
            </div>
            
            <div class="container">
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    ${allReminders.map((reminder, index) => renderReminderCard(reminder, index)).join('')}
                </div>
            </div>
            
            ${renderBottomNav()}
        </div>
    `;
}

function renderSettingsScreen() {
    return `
        <div class="screen dashboard-screen">
            <div class="dashboard-header">
                <div class="greeting">${t('settingsTitle')}</div>
            </div>
            
            <div class="settings-list">
                <div class="settings-item" onclick="editDueDate()">
                    <div class="settings-item-content">
                        <div class="settings-item-title">${t('editDueDate')}</div>
                        <div class="settings-item-description">${t('editDueDateDesc')}</div>
                    </div>
                    <div class="settings-item-arrow">›</div>
                </div>
                
                <div class="settings-item" onclick="toggleLanguage()">
                    <div class="settings-item-content">
                        <div class="settings-item-title">${t('changeLanguage')}</div>
                        <div class="settings-item-description">${t('changeLanguageDesc')}</div>
                    </div>
                    <div class="settings-item-arrow">›</div>
                </div>
                
                <div class="settings-item">
                    <div class="settings-item-content">
                        <div class="settings-item-title">${t('aboutApp')}</div>
                        <div class="settings-item-description">${t('aboutAppDesc')}</div>
                    </div>
                </div>
                
                <div class="settings-item" onclick="resetAppData()" style="border: 2px solid var(--primary-pink);">
                    <div class="settings-item-content">
                        <div class="settings-item-title" style="color: var(--primary-pink);">${t('resetData')}</div>
                        <div class="settings-item-description">${t('resetDataDesc')}</div>
                    </div>
                    <div class="settings-item-arrow" style="color: var(--primary-pink);">›</div>
                </div>
            </div>
            
            ${renderBottomNav()}
        </div>
    `;
}

function renderReminderCard(reminder) {
    const lang = AppState.language;
    const title = lang === 'ne' && reminder.titleNe ? reminder.titleNe : reminder.title;
    const description = lang === 'ne' && reminder.descriptionNe ? reminder.descriptionNe : reminder.description;

    return `
        <div class="reminder-card slide-up">
            <div class="reminder-icon">${reminder.icon}</div>
            <div class="reminder-content">
                <div class="reminder-title">${title}</div>
                <div class="reminder-description">${description}</div>
            </div>
            <div class="reminder-time">${reminder.time}</div>
        </div>
    `;
}

// ===== NEW RENDER FUNCTIONS =====
function renderProfileScreen() {
    const profile = AppState.userProfile || { name: 'Mama', bio: 'Waiting for my sunshine ☀️', week: AppState.pregnancyData.week };

    return `
        <div class="screen dashboard-screen">
            <div class="dashboard-header" style="height: 180px; align-items: flex-start; padding-top: 2rem;">
                <div class="greeting">${t('settingsTitle')}</div>
            </div>
            
            <div class="container" style="margin-top: -80px;">
                <!-- Profile Card -->
                <div class="card slide-up" style="text-align: center; padding: 2rem 1rem;">
                    <div class="profile-avatar" style="width: 100px; height: 100px; background: var(--bg-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; border: 4px solid white; box-shadow: var(--shadow-sm);">
                        👩‍🍼
                    </div>
                    <h2 style="color: var(--sage-dark); margin-bottom: 0.25rem;">${profile.name} <span onclick="editProfileName()" style="font-size: 1rem; opacity: 0.5; cursor: pointer;">✎</span></h2>
                    <p style="color: var(--sage-text); font-style: italic;">"${profile.bio}"</p>
                    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: center;">
                        <span class="service-tag">Week ${profile.week}</span>
                        <span class="service-tag">Due ${new Date(AppState.pregnancyData.edd).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>

                <!-- Settings Section -->
                <h3 class="section-header" style="margin-top: 2rem;">Preferences</h3>
                <div class="settings-list">
                    <div class="settings-item" onclick="editDueDate()">
                        <div class="settings-item-content">
                            <div class="settings-item-title">${t('editDueDate')}</div>
                            <div class="settings-item-description">${t('editDueDateDesc')}</div>
                        </div>
                        <div class="settings-item-arrow">›</div>
                    </div>
                    
                    <div class="settings-item" onclick="toggleLanguage()">
                        <div class="settings-item-content">
                            <div class="settings-item-title">${t('changeLanguage')}</div>
                            <div class="settings-item-description">${t('changeLanguageDesc')}</div>
                        </div>
                        <div class="settings-item-arrow">›</div>
                    </div>
                    
                    <div class="settings-item" onclick="resetAppData()" style="border: 1px solid var(--urgent-coral); background: #FFF5F5;">
                        <div class="settings-item-content">
                            <div class="settings-item-title" style="color: var(--urgent-coral);">${t('resetData')}</div>
                            <div class="settings-item-description">${t('resetDataDesc')}</div>
                        </div>
                    </div>
                </div>
            </div>
            ${renderBottomNav()}
        </div>
    `;
}

function renderCommunityScreen() {
    return `
        <div class="screen dashboard-screen">
            <div class="dashboard-header">
                <div class="greeting">Sisterhood 👯‍♀️</div>
                <div style="font-size: 1rem; margin-top: 0.5rem; opacity: 0.9;">Safe space to share</div>
            </div>
            
            <div class="container">
                <!-- Tabs -->
                <div class="filter-chips" style="margin-bottom: 1.5rem;">
                    <button class="filter-chip active">Friends Chat</button>
                    <button class="filter-chip">Anonymous Space</button>
                </div>

                <!-- Chat List Mock -->
                <div class="card slide-up" style="margin-bottom: 1rem; padding: 1rem; display: flex; gap: 1rem; align-items: center;">
                    <div style="width: 50px; height: 50px; background: #E6E6FA; border-radius: 50%; display: flex; align-items: center; justify-content: center;">👩</div>
                    <div style="flex: 1;">
                        <div style="font-weight: 700; color: var(--sage-dark);">Sita (Week 24)</div>
                        <div style="font-size: 0.9rem; color: var(--sage-text);">How are you feeling today? 🌸</div>
                    </div>
                    <div style="font-size: 0.8rem; color: #999;">10:30</div>
                </div>
                
                <div class="card slide-up" style="margin-bottom: 1rem; padding: 1rem; display: flex; gap: 1rem; align-items: center;">
                    <div style="width: 50px; height: 50px; background: #FFDAB9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">👩‍🦱</div>
                    <div style="flex: 1;">
                        <div style="font-weight: 700; color: var(--sage-dark);">Gita (Week 32)</div>
                        <div style="font-size: 0.9rem; color: var(--sage-text);">I found a great yoga video!</div>
                    </div>
                    <div style="font-size: 0.8rem; color: #999;">Yesterday</div>
                </div>
                
                <div style="text-align: center; margin-top: 2rem; color: var(--sage-text); font-style: italic;">
                    Connect with more mamas nearby...
                </div>
            </div>
            ${renderBottomNav()}
        </div>
    `;
}

function renderShopScreen() {
    return `
        <div class="screen dashboard-screen">
            <div class="dashboard-header">
                <div class="greeting">Mama Shop 🛍️</div>
                <div style="font-size: 1rem; margin-top: 0.5rem; opacity: 0.9;">Curated essentials for you</div>
            </div>
            
            <div class="container">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <!-- Shop Item 1 -->
                    <div class="card slide-up" style="padding: 0; overflow: hidden;">
                        <div style="height: 120px; background: #F0F0F0; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🤰</div>
                        <div style="padding: 1rem;">
                            <h4 style="font-size: 0.9rem; margin-bottom: 0.25rem;">Pregnancy Pillow</h4>
                            <div style="color: var(--primary-rose); font-weight: 700;">Rs. 2,500</div>
                        </div>
                    </div>
                    
                    <!-- Shop Item 2 -->
                    <div class="card slide-up" style="padding: 0; overflow: hidden; animation-delay: 0.1s;">
                        <div style="height: 120px; background: #F0F0F0; display: flex; align-items: center; justify-content: center; font-size: 3rem;">💊</div>
                        <div style="padding: 1rem;">
                            <h4 style="font-size: 0.9rem; margin-bottom: 0.25rem;">Folic Acid Pack</h4>
                            <div style="color: var(--primary-rose); font-weight: 700;">Rs. 450</div>
                        </div>
                    </div>
                    
                    <!-- Shop Item 3 -->
                    <div class="card slide-up" style="padding: 0; overflow: hidden; animation-delay: 0.2s;">
                        <div style="height: 120px; background: #F0F0F0; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🧴</div>
                        <div style="padding: 1rem;">
                            <h4 style="font-size: 0.9rem; margin-bottom: 0.25rem;">Stretch Mark Oil</h4>
                            <div style="color: var(--primary-rose); font-weight: 700;">Rs. 1,200</div>
                        </div>
                    </div>
                    
                    <!-- Shop Item 4 -->
                    <div class="card slide-up" style="padding: 0; overflow: hidden; animation-delay: 0.3s;">
                        <div style="height: 120px; background: #F0F0F0; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🧘‍♀️</div>
                        <div style="padding: 1rem;">
                            <h4 style="font-size: 0.9rem; margin-bottom: 0.25rem;">Yoga Mat</h4>
                            <div style="color: var(--primary-rose); font-weight: 700;">Rs. 1,800</div>
                        </div>
                    </div>
                </div>
            </div>
            ${renderBottomNav()}
        </div>
    `;
}

function renderBottomNav() {
    return `
        <nav class="bottom-nav">
            <button class="nav-item ${AppState.currentTab === 'dashboard' ? 'active' : ''}" 
                    onclick="switchTab('dashboard')">
                <div class="nav-icon">🏠</div>
                <div class="nav-label">${t('dashboard')}</div>
            </button>
            <button class="nav-item ${AppState.currentTab === 'community' ? 'active' : ''}" 
                    onclick="switchTab('community')">
                <div class="nav-icon">👯‍♀️</div>
                <div class="nav-label">Sisterhood</div>
            </button>
            <button class="nav-item ${AppState.currentTab === 'hospitals' ? 'active' : ''}" 
                    onclick="switchTab('hospitals')">
                <div class="nav-icon">🏥</div>
                <div class="nav-label">${t('hospitals')}</div>
            </button>
            <button class="nav-item ${AppState.currentTab === 'shop' ? 'active' : ''}" 
                    onclick="switchTab('shop')">
                <div class="nav-icon">🛍️</div>
                <div class="nav-label">Shop</div>
            </button>
            <button class="nav-item ${AppState.currentTab === 'settings' ? 'active' : ''}" 
                    onclick="switchTab('settings')">
                <div class="nav-icon">👤</div>
                <div class="nav-label">${t('settings')}</div>
            </button>
        </nav>
        ${renderEmergencyButton()}
    `;
}

function getRemindersForTrimester(trimester) {
    const key = getTrimesterKey(trimester);
    return reminderTemplates[key] || [];
}

// ===== PHASE 2: HOSPITAL FUNCTIONS =====
function renderHospitalsScreen() {
    const filteredHospitals = filterHospitals();

    return `
        <div class="screen hospital-screen">
            <div class="dashboard-header">
                <div class="greeting">${t('hospitalsTitle')}</div>
                <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.9;">
                    ${filteredHospitals.length} hospitals found
                </div>
            </div>
            
            <div class="search-container">
                <input type="text" 
                       class="search-input" 
                       placeholder="${t('searchHospitals')}"
                       value="${AppState.searchQuery}"
                       oninput="handleSearch(event)">
            </div>
            
            <div class="filter-chips">
                <button class="filter-chip ${AppState.selectedFilter === 'all' ? 'active' : ''}" 
                        onclick="setFilter('all')">
                    ${t('allHospitals')}
                </button>
                <button class="filter-chip ${AppState.selectedFilter === 'emergency' ? 'active' : ''}" 
                        onclick="setFilter('emergency')">
                    ⚡ ${t('emergencyOnly')}
                </button>
                <button class="filter-chip ${AppState.selectedFilter === 'government' ? 'active' : ''}" 
                        onclick="setFilter('government')">
                    ${t('government')}
                </button>
                <button class="filter-chip ${AppState.selectedFilter === 'private' ? 'active' : ''}" 
                        onclick="setFilter('private')">
                    ${t('private')}
                </button>
            </div>
            
            <div>
                ${filteredHospitals.map(hospital => renderHospitalCard(hospital)).join('')}
            </div>
            
            ${renderBottomNav()}
        </div>
    `;
}

function renderHospitalCard(hospital) {
    const lang = AppState.language;
    const name = lang === 'ne' && hospital.nameNe ? hospital.nameNe : hospital.name;
    const address = lang === 'ne' && hospital.addressNe ? hospital.addressNe : hospital.address;
    const type = lang === 'ne' && hospital.typeNe ? hospital.typeNe : hospital.type;
    const services = lang === 'ne' && hospital.servicesNe ? hospital.servicesNe : hospital.services;

    return `
        <div class="hospital-card slide-up">
            <div class="hospital-header">
                <div>
                    <div class="hospital-name">${name}</div>
                    <div class="hospital-type">${type}</div>
                </div>
                ${hospital.emergency ? '<div class="emergency-badge">⚡ 24/7</div>' : ''}
            </div>
            
            <div class="hospital-info">
                <div class="info-row">
                    <div class="info-icon">📍</div>
                    <div>${address}</div>
                </div>
                <div class="info-row">
                    <div class="info-icon">📞</div>
                    <div>${hospital.phone}</div>
                </div>
            </div>
            
            <div class="hospital-services">
                ${services.slice(0, 3).map(service =>
        `<span class="service-tag">${service}</span>`
    ).join('')}
                ${services.length > 3 ? `<span class="service-tag">+${services.length - 3} more</span>` : ''}
            </div>
            
            <div class="hospital-actions">
                <button class="btn-call" onclick="callHospital('${hospital.phone}')">
                    📞 ${t('callNow')}
                </button>
                <button class="btn-directions" onclick="getDirections(${hospital.lat}, ${hospital.lng})">
                    🗺️ ${t('getDirections')}
                </button>
            </div>
        </div>
    `;
}

function filterHospitals() {
    let filtered = nepalHospitals;

    // Apply search query
    if (AppState.searchQuery) {
        const query = AppState.searchQuery.toLowerCase();
        filtered = filtered.filter(hospital =>
            hospital.name.toLowerCase().includes(query) ||
            hospital.district.toLowerCase().includes(query) ||
            hospital.address.toLowerCase().includes(query) ||
            (hospital.nameNe && hospital.nameNe.includes(query))
        );
    }

    // Apply filter
    switch (AppState.selectedFilter) {
        case 'emergency':
            filtered = filtered.filter(h => h.emergency);
            break;
        case 'government':
            filtered = filtered.filter(h => h.type === 'Government Hospital');
            break;
        case 'private':
            filtered = filtered.filter(h => h.type === 'Private Hospital');
            break;
    }

    return filtered;
}

function handleSearch(event) {
    AppState.searchQuery = event.target.value;
    render();
}

function setFilter(filter) {
    AppState.selectedFilter = filter;
    render();
}

function callHospital(phone) {
    window.location.href = `tel:${phone}`;
}

function getDirections(lat, lng) {
    // Open Google Maps with coordinates
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
}

// ===== PHASE 2: EMERGENCY FUNCTIONS =====
function renderEmergencyButton() {
    return `
        <button class="emergency-fab" onclick="toggleEmergencyModal()" title="Emergency Help">
            🚨
        </button>
        ${AppState.showEmergencyModal ? renderEmergencyModal() : ''}
    `;
}

function renderEmergencyModal() {
    const lang = AppState.language;

    return `
        <div class="emergency-modal" onclick="closeModalOnBackdrop(event)">
            <div class="emergency-modal-content">
                <div class="emergency-modal-header">
                    <div class="emergency-icon">🚨</div>
                    <div class="emergency-title">${t('emergencyTitle')}</div>
                    <div class="emergency-subtitle">${t('emergencySubtitle')}</div>
                </div>
                
                ${emergencyContacts.map(contact => {
        const name = lang === 'ne' && contact.nameNe ? contact.nameNe : contact.name;
        const desc = lang === 'ne' && contact.descriptionNe ? contact.descriptionNe : contact.description;

        return `
                        <div class="emergency-contact-card">
                            <div class="emergency-contact-info">
                                <div class="emergency-contact-name">${name}</div>
                                <div class="emergency-contact-number">${contact.number}</div>
                                <div class="emergency-contact-desc">${desc}</div>
                            </div>
                            <button class="btn-emergency-call" onclick="callEmergency('${contact.number}')">
                                📞
                            </button>
                        </div>
                    `;
    }).join('')}
                
                <button class="btn-close-modal" onclick="toggleEmergencyModal()">
                    ${t('closeButton')}
                </button>
            </div>
        </div>
    `;
}

function toggleEmergencyModal() {
    AppState.showEmergencyModal = !AppState.showEmergencyModal;
    render();
}

function closeModalOnBackdrop(event) {
    if (event.target.classList.contains('emergency-modal')) {
        toggleEmergencyModal();
    }
}

function callEmergency(number) {
    if (confirm(`Call ${number}?`)) {
        window.location.href = `tel:${number}`;
    }
}

// ===== EVENT HANDLERS =====
function setLanguage(lang) {
    AppState.language = lang;
    saveToLocalStorage('language', lang);
    render();
}

function navigateTo(screen) {
    AppState.currentScreen = screen;
    render();
}

function switchTab(tab) {
    AppState.currentTab = tab;
    render();
}

function saveEDD() {
    const eddInput = document.getElementById('edd-input');
    const edd = eddInput.value;

    if (!edd) {
        alert('Please select your expected due date');
        return;
    }

    const week = calculatePregnancyWeek(edd);
    const trimester = getTrimester(week);
    const daysRemaining = calculateDaysRemaining(edd);

    AppState.pregnancyData = {
        edd,
        week,
        trimester,
        daysRemaining
    };

    saveToLocalStorage('pregnancyData', AppState.pregnancyData);
    scheduleNotifications();

    AppState.currentScreen = 'dashboard';
    render();
}

function editDueDate() {
    const newEDD = prompt('Enter new due date (YYYY-MM-DD):', AppState.pregnancyData.edd);
    if (newEDD) {
        const week = calculatePregnancyWeek(newEDD);
        const trimester = getTrimester(week);
        const daysRemaining = calculateDaysRemaining(newEDD);

        AppState.pregnancyData = {
            edd: newEDD,
            week,
            trimester,
            daysRemaining
        };

        saveToLocalStorage('pregnancyData', AppState.pregnancyData);
        render();
    }
}

function toggleLanguage() {
    const newLang = AppState.language === 'en' ? 'ne' : 'en';
    setLanguage(newLang);
}

function resetAppData() {
    if (confirm('Are you sure you want to reset all data?')) {
        localStorage.clear();
        AppState.pregnancyData = null;
        AppState.currentScreen = 'welcome';
        render();
    }
}

// ===== MAIN RENDER =====
function render() {
    const app = document.getElementById('app');

    if (!AppState.pregnancyData && AppState.currentScreen !== 'welcome' && AppState.currentScreen !== 'edd') {
        AppState.currentScreen = 'welcome';
    }

    let content = '';

    switch (AppState.currentScreen) {
        case 'welcome':
            content = renderWelcomeScreen();
            break;
        case 'edd':
            content = renderEDDScreen();
            break;
        case 'dashboard':
            if (AppState.currentTab === 'dashboard') {
                content = renderDashboardScreen();
            } else if (AppState.currentTab === 'reminders') {
                content = renderRemindersScreen();
            } else if (AppState.currentTab === 'hospitals') {
                content = renderHospitalsScreen();
            } else if (AppState.currentTab === 'community') {
                content = renderCommunityScreen();
            } else if (AppState.currentTab === 'shop') {
                content = renderShopScreen();
            } else if (AppState.currentTab === 'settings') {
                content = renderProfileScreen();
            }
            break;
        default:
            content = renderWelcomeScreen();
    }

    app.innerHTML = content;
}

// ===== PROFILE LOGIC =====
function editProfileName() {
    const currentName = AppState.userProfile ? AppState.userProfile.name : 'Mama';
    const newName = prompt('What should we call you? 🌸', currentName);

    if (newName && newName.trim() !== '') {
        const currentBio = AppState.userProfile ? AppState.userProfile.bio : 'Waiting for my sunshine ☀️';

        AppState.userProfile = {
            name: newName,
            bio: currentBio,
            week: AppState.pregnancyData.week
        };

        saveToLocalStorage('userProfile', AppState.userProfile);
        render();
    }
}

// ===== INITIALIZATION =====
function init() {
    // Load saved data
    const savedLanguage = getFromLocalStorage('language');
    if (savedLanguage) {
        AppState.language = savedLanguage;
    }

    const savedPregnancyData = getFromLocalStorage('pregnancyData');
    if (savedPregnancyData) {
        // Recalculate current week and days remaining
        const week = calculatePregnancyWeek(savedPregnancyData.edd);
        const trimester = getTrimester(week);
        const daysRemaining = calculateDaysRemaining(savedPregnancyData.edd);

        AppState.pregnancyData = {
            edd: savedPregnancyData.edd,
            week,
            trimester,
            daysRemaining
        };

        AppState.currentScreen = 'dashboard';
    }

    // Load Profile
    const savedProfile = getFromLocalStorage('userProfile');
    if (savedProfile) {
        AppState.userProfile = savedProfile;
        // Update week in profile just in case
        if (AppState.pregnancyData) {
            AppState.userProfile.week = AppState.pregnancyData.week;
        }
    }

    // Request notification permissions
    scheduleNotifications();

    // Initial render
    render();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

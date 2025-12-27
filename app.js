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

// ===== TRANSLATIONS =====
const translations = {
    en: {
        appName: 'MamaCare',
        welcomeTitle: 'MamaCare',
        welcomeSubtitle: 'Your caring companion throughout your pregnancy journey',
        getStarted: 'Get Started',

        eddTitle: 'When is your baby due?',
        eddDescription: 'Enter your expected due date so we can provide personalized care reminders',
        eddLabel: 'Expected Due Date',
        continue: 'Continue',

        greeting: 'Hello, Mama! 💕',
        trimester1: '1st Trimester',
        trimester2: '2nd Trimester',
        trimester3: '3rd Trimester',
        week: 'Week',
        weeksPregnant: 'weeks pregnant',
        daysRemaining: 'days until your due date',

        todayReminders: "Today's Care Reminders",
        allReminders: 'All Reminders',
        noReminders: 'No reminders for today. Take care! 💕',

        dashboard: 'Home',
        reminders: 'Reminders',
        hospitals: 'Hospitals',
        settings: 'Settings',

        hospitalsTitle: 'Maternity Hospitals',
        searchHospitals: 'Search hospitals...',
        allHospitals: 'All',
        emergencyOnly: 'Emergency',
        government: 'Government',
        private: 'Private',
        callNow: 'Call Now',
        getDirections: 'Directions',
        services: 'Services',

        emergencyTitle: 'Emergency Help',
        emergencySubtitle: 'Quick access to emergency contacts',
        closeButton: 'Close',

        settingsTitle: 'Settings',
        editDueDate: 'Edit Due Date',
        editDueDateDesc: 'Update your expected delivery date',
        changeLanguage: 'Language',
        changeLanguageDesc: 'Switch between English and Nepali',
        aboutApp: 'About MamaCare',
        aboutAppDesc: 'Version 1.0 - Made with love for Nepal',
        resetData: 'Reset App Data',
        resetDataDesc: 'Clear all data and start over'
    },
    ne: {
        appName: 'मामाकेयर',
        welcomeTitle: 'मामाकेयर',
        welcomeSubtitle: 'तपाईंको गर्भावस्था यात्रामा तपाईंको हेरचाह साथी',
        getStarted: 'सुरु गर्नुहोस्',

        eddTitle: 'तपाईंको बच्चा कहिले जन्मने छ?',
        eddDescription: 'हामी व्यक्तिगत हेरचाह सम्झनाहरू प्रदान गर्न सक्नको लागि तपाईंको अपेक्षित प्रसूति मिति प्रविष्ट गर्नुहोस्',
        eddLabel: 'अपेक्षित प्रसूति मिति',
        continue: 'जारी राख्नुहोस्',

        greeting: 'नमस्ते, आमा! 💕',
        trimester1: 'पहिलो त्रैमासिक',
        trimester2: 'दोस्रो त्रैमासिक',
        trimester3: 'तेस्रो त्रैमासिक',
        week: 'हप्ता',
        weeksPregnant: 'हप्ता गर्भवती',
        daysRemaining: 'दिन बाँकी छ',

        todayReminders: 'आजको हेरचाह सम्झनाहरू',
        allReminders: 'सबै सम्झनाहरू',
        noReminders: 'आजको लागि कुनै सम्झना छैन। हेरचाह गर्नुहोस्! 💕',

        dashboard: 'गृह',
        reminders: 'सम्झनाहरू',
        hospitals: 'अस्पतालहरू',
        settings: 'सेटिङहरू',

        hospitalsTitle: 'प्रसूति अस्पतालहरू',
        searchHospitals: 'अस्पतालहरू खोज्नुहोस्...',
        allHospitals: 'सबै',
        emergencyOnly: 'आपतकालीन',
        government: 'सरकारी',
        private: 'निजी',
        callNow: 'अहिले कल गर्नुहोस्',
        getDirections: 'दिशा निर्देशन',
        services: 'सेवाहरू',

        emergencyTitle: 'आपतकालीन सहायता',
        emergencySubtitle: 'आपतकालीन सम्पर्कहरूमा द्रुत पहुँच',
        closeButton: 'बन्द गर्नुहोस्',

        settingsTitle: 'सेटिङहरू',
        editDueDate: 'प्रसूति मिति सम्पादन गर्नुहोस्',
        editDueDateDesc: 'तपाईंको अपेक्षित प्रसूति मिति अद्यावधिक गर्नुहोस्',
        changeLanguage: 'भाषा',
        changeLanguageDesc: 'अंग्रेजी र नेपाली बीच स्विच गर्नुहोस्',
        aboutApp: 'मामाकेयर बारे',
        aboutAppDesc: 'संस्करण १.० - नेपालको लागि माया संग बनाइएको',
        resetData: 'एप डेटा रिसेट गर्नुहोस्',
        resetDataDesc: 'सबै डेटा हटाउनुहोस् र फेरि सुरु गर्नुहोस्'
    }
};

// ===== REMINDER DATA =====
const reminderTemplates = {
    trimester1: [
        { icon: '💊', title: 'Folic Acid', titleNe: 'फोलिक एसिड', description: 'Take your daily folic acid supplement', descriptionNe: 'तपाईंको दैनिक फोलिक एसिड पूरक लिनुहोस्', time: '09:00' },
        { icon: '🥗', title: 'Healthy Breakfast', titleNe: 'स्वस्थ नाश्ता', description: 'Eat a nutritious breakfast with protein', descriptionNe: 'प्रोटीन संग पौष्टिक नाश्ता खानुहोस्', time: '08:00' },
        { icon: '💧', title: 'Hydration', titleNe: 'पानी पिउनुहोस्', description: 'Drink a glass of water', descriptionNe: 'एक गिलास पानी पिउनुहोस्', time: '10:00' },
        { icon: '😴', title: 'Rest Time', titleNe: 'आराम समय', description: 'Take a short rest to manage fatigue', descriptionNe: 'थकान व्यवस्थापन गर्न छोटो आराम लिनुहोस्', time: '14:00' },
        { icon: '🍊', title: 'Vitamin C', titleNe: 'भिटामिन सी', description: 'Have some citrus fruits or juice', descriptionNe: 'केही सिट्रस फलफूल वा जुस लिनुहोस्', time: '16:00' },
        { icon: '🏥', title: 'First Checkup', titleNe: 'पहिलो जाँच', description: 'Schedule your first prenatal visit (Week 8-10)', descriptionNe: 'तपाईंको पहिलो प्रसवपूर्व भ्रमण तालिका बनाउनुहोस्', time: '11:00' }
    ],
    trimester2: [
        { icon: '💊', title: 'Iron Supplement', titleNe: 'आइरन पूरक', description: 'Take your iron and folic acid tablet', descriptionNe: 'तपाईंको आइरन र फोलिक एसिड ट्याब्लेट लिनुहोस्', time: '09:00' },
        { icon: '🥛', title: 'Calcium Intake', titleNe: 'क्याल्सियम सेवन', description: 'Have milk or dairy products for calcium', descriptionNe: 'क्याल्सियमको लागि दूध वा डेयरी उत्पादनहरू लिनुहोस्', time: '10:00' },
        { icon: '🚶‍♀️', title: 'Gentle Exercise', titleNe: 'हल्का व्यायाम', description: 'Take a 15-minute walk', descriptionNe: '१५ मिनेट हिड्नुहोस्', time: '17:00' },
        { icon: '🥗', title: 'Nutritious Meal', titleNe: 'पौष्टिक खाना', description: 'Eat a balanced meal with vegetables', descriptionNe: 'तरकारी संग सन्तुलित खाना खानुहोस्', time: '13:00' },
        { icon: '💧', title: 'Stay Hydrated', titleNe: 'हाइड्रेटेड रहनुहोस्', description: 'Drink water regularly throughout the day', descriptionNe: 'दिनभर नियमित रूपमा पानी पिउनुहोस्', time: '15:00' },
        { icon: '🏥', title: 'Regular Checkup', titleNe: 'नियमित जाँच', description: 'Monthly prenatal checkup reminder', descriptionNe: 'मासिक प्रसवपूर्व जाँच सम्झना', time: '11:00' }
    ],
    trimester3: [
        { icon: '💊', title: 'Daily Supplements', titleNe: 'दैनिक पूरकहरू', description: 'Take your prenatal vitamins and iron', descriptionNe: 'तपाईंको प्रसवपूर्व भिटामिन र आइरन लिनुहोस्', time: '09:00' },
        { icon: '🎒', title: 'Hospital Bag', titleNe: 'अस्पताल झोला', description: 'Prepare items for your hospital bag', descriptionNe: 'तपाईंको अस्पताल झोलाको लागि वस्तुहरू तयार गर्नुहोस्', time: '10:00' },
        { icon: '⚠️', title: 'Danger Signs', titleNe: 'खतरा संकेतहरू', description: 'Be aware: severe headache, bleeding, reduced movement', descriptionNe: 'सचेत रहनुहोस्: गम्भीर टाउको दुखाइ, रक्तस्राव, कम आन्दोलन', time: '12:00' },
        { icon: '😴', title: 'Rest & Elevate', titleNe: 'आराम र उचाई', description: 'Rest with feet elevated to reduce swelling', descriptionNe: 'सुन्निने कम गर्न खुट्टा माथि राखेर आराम गर्नुहोस्', time: '14:00' },
        { icon: '💧', title: 'Hydration', titleNe: 'पानी पिउनुहोस्', description: 'Drink plenty of water', descriptionNe: 'धेरै पानी पिउनुहोस्', time: '16:00' },
        { icon: '🏥', title: 'Weekly Checkup', titleNe: 'साप्ताहिक जाँच', description: 'Weekly prenatal visit (Week 36+)', descriptionNe: 'साप्ताहिक प्रसवपूर्व भ्रमण', time: '11:00' },
        { icon: '🤱', title: 'Birth Plan', titleNe: 'जन्म योजना', description: 'Discuss birth preferences with your doctor', descriptionNe: 'तपाईंको डाक्टरसँग जन्म प्राथमिकताहरू छलफल गर्नुहोस्', time: '15:00' }
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

function renderDashboardScreen() {
    const { edd, week, trimester, daysRemaining } = AppState.pregnancyData;
    const trimesterText = t(`trimester${trimester}`);
    const progress = (week / 40) * 100;
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (progress / 100) * circumference;

    const todayReminders = getRemindersForTrimester(trimester);

    return `
        <div class="screen dashboard-screen">
            <div class="dashboard-header">
                <div class="greeting">${t('greeting')}</div>
                <div class="pregnancy-info">
                    <div class="trimester-badge">${trimesterText}</div>
                    <div class="week-display">${t('week')} ${week}</div>
                </div>
            </div>
            
            <div class="container">
                <div class="progress-container">
                    <div class="progress-circle">
                        <svg width="200" height="200">
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#FFB3C6;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#E0BBE4;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <circle class="progress-circle-bg" cx="100" cy="100" r="90"></circle>
                            <circle class="progress-circle-fill" 
                                    cx="100" cy="100" r="90"
                                    stroke-dasharray="${circumference}"
                                    stroke-dashoffset="${offset}"></circle>
                        </svg>
                        <div class="progress-text">
                            <div class="progress-weeks">${week}</div>
                            <div class="progress-label">${t('weeksPregnant')}</div>
                        </div>
                    </div>
                </div>
                
                <div class="card text-center">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">📅</div>
                    <div style="font-size: 1.5rem; font-weight: 600; color: var(--primary-pink);">
                        ${daysRemaining}
                    </div>
                    <div style="color: var(--text-secondary);">${t('daysRemaining')}</div>
                </div>
                
                <h2 class="section-header">${t('todayReminders')}</h2>
                ${todayReminders.length > 0
            ? todayReminders.map(reminder => renderReminderCard(reminder)).join('')
            : `<div class="empty-state">
                         <div class="empty-icon">💕</div>
                         <div class="empty-text">${t('noReminders')}</div>
                       </div>`
        }
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
                <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.9;">
                    ${t(`trimester${trimester}`)}
                </div>
            </div>
            
            <div class="container">
                ${allReminders.map(reminder => renderReminderCard(reminder)).join('')}
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

function renderBottomNav() {
    return `
        <nav class="bottom-nav">
            <button class="nav-item ${AppState.currentTab === 'dashboard' ? 'active' : ''}" 
                    onclick="switchTab('dashboard')">
                <div class="nav-icon">🏠</div>
                <div class="nav-label">${t('dashboard')}</div>
            </button>
            <button class="nav-item ${AppState.currentTab === 'reminders' ? 'active' : ''}" 
                    onclick="switchTab('reminders')">
                <div class="nav-icon">🔔</div>
                <div class="nav-label">${t('reminders')}</div>
            </button>
            <button class="nav-item ${AppState.currentTab === 'hospitals' ? 'active' : ''}" 
                    onclick="switchTab('hospitals')">
                <div class="nav-icon">🏥</div>
                <div class="nav-label">${t('hospitals')}</div>
            </button>
            <button class="nav-item ${AppState.currentTab === 'settings' ? 'active' : ''}" 
                    onclick="switchTab('settings')">
                <div class="nav-icon">⚙️</div>
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
            } else if (AppState.currentTab === 'settings') {
                content = renderSettingsScreen();
            }
            break;
        default:
            content = renderWelcomeScreen();
    }

    app.innerHTML = content;
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

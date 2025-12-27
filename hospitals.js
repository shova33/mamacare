// Nepal Maternity Hospitals and Health Posts Database
const nepalHospitals = [
    // Kathmandu Valley
    {
        id: 1,
        name: 'Paropakar Maternity and Women\'s Hospital',
        nameNe: 'परोपकार प्रसूति तथा स्त्री रोग अस्पताल',
        district: 'Kathmandu',
        districtNe: 'काठमाडौं',
        address: 'Thapathali, Kathmandu',
        addressNe: 'ठापाथली, काठमाडौं',
        phone: '01-4266981',
        emergency: true,
        type: 'Government Hospital',
        typeNe: 'सरकारी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Ultrasound', 'Lab Services'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'अल्ट्रासाउन्ड', 'प्रयोगशाला सेवाहरू'],
        lat: 27.6954,
        lng: 85.3157
    },
    {
        id: 2,
        name: 'Patan Hospital',
        nameNe: 'पाटन अस्पताल',
        district: 'Lalitpur',
        districtNe: 'ललितपुर',
        address: 'Lagankhel, Lalitpur',
        addressNe: 'लगनखेल, ललितपुर',
        phone: '01-5522266',
        emergency: true,
        type: 'Government Hospital',
        typeNe: 'सरकारी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Gynecology', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'स्त्री रोग', 'अल्ट्रासाउन्ड'],
        lat: 27.6734,
        lng: 85.3246
    },
    {
        id: 3,
        name: 'Tribhuvan University Teaching Hospital',
        nameNe: 'त्रिभुवन विश्वविद्यालय शिक्षण अस्पताल',
        district: 'Kathmandu',
        districtNe: 'काठमाडौं',
        address: 'Maharajgunj, Kathmandu',
        addressNe: 'महाराजगंज, काठमाडौं',
        phone: '01-4412303',
        emergency: true,
        type: 'Teaching Hospital',
        typeNe: 'शिक्षण अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'High-Risk Pregnancy', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'उच्च जोखिम गर्भावस्था', 'अल्ट्रासाउन्ड'],
        lat: 27.7353,
        lng: 85.3333
    },
    {
        id: 4,
        name: 'Nepal Medical College',
        nameNe: 'नेपाल मेडिकल कलेज',
        district: 'Kathmandu',
        districtNe: 'काठमाडौं',
        address: 'Jorpati, Kathmandu',
        addressNe: 'जोरपाटी, काठमाडौं',
        phone: '01-4911008',
        emergency: true,
        type: 'Private Hospital',
        typeNe: 'निजी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Ultrasound', 'Lab Services'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'अल्ट्रासाउन्ड', 'प्रयोगशाला सेवाहरू'],
        lat: 27.7286,
        lng: 85.3686
    },
    {
        id: 5,
        name: 'Grande International Hospital',
        nameNe: 'ग्रान्डे अन्तर्राष्ट्रिय अस्पताल',
        district: 'Kathmandu',
        districtNe: 'काठमाडौं',
        address: 'Dhapasi, Kathmandu',
        addressNe: 'ढपासी, काठमाडौं',
        phone: '01-5159266',
        emergency: true,
        type: 'Private Hospital',
        typeNe: 'निजी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Gynecology', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'स्त्री रोग', 'अल्ट्रासाउन्ड'],
        lat: 27.7425,
        lng: 85.3234
    },
    {
        id: 6,
        name: 'Kathmandu Medical College',
        nameNe: 'काठमाडौं मेडिकल कलेज',
        district: 'Kathmandu',
        districtNe: 'काठमाडौं',
        address: 'Sinamangal, Kathmandu',
        addressNe: 'सिनामंगल, काठमाडौं',
        phone: '01-4469404',
        emergency: true,
        type: 'Teaching Hospital',
        typeNe: 'शिक्षण अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Ultrasound', 'Lab Services'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'अल्ट्रासाउन्ड', 'प्रयोगशाला सेवाहरू'],
        lat: 27.6969,
        lng: 85.3506
    },

    // Pokhara
    {
        id: 7,
        name: 'Gandaki Medical College',
        nameNe: 'गण्डकी मेडिकल कलेज',
        district: 'Kaski',
        districtNe: 'कास्की',
        address: 'Pokhara, Kaski',
        addressNe: 'पोखरा, कास्की',
        phone: '061-520111',
        emergency: true,
        type: 'Teaching Hospital',
        typeNe: 'शिक्षण अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Gynecology', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'स्त्री रोग', 'अल्ट्रासाउन्ड'],
        lat: 28.2380,
        lng: 83.9956
    },
    {
        id: 8,
        name: 'Western Regional Hospital',
        nameNe: 'पश्चिमाञ्चल क्षेत्रीय अस्पताल',
        district: 'Kaski',
        districtNe: 'कास्की',
        address: 'Ramghat, Pokhara',
        addressNe: 'रामघाट, पोखरा',
        phone: '061-520066',
        emergency: true,
        type: 'Government Hospital',
        typeNe: 'सरकारी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Ultrasound', 'Lab Services'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'अल्ट्रासाउन्ड', 'प्रयोगशाला सेवाहरू'],
        lat: 28.2096,
        lng: 83.9856
    },

    // Chitwan
    {
        id: 9,
        name: 'Bharatpur Hospital',
        nameNe: 'भरतपुर अस्पताल',
        district: 'Chitwan',
        districtNe: 'चितवन',
        address: 'Bharatpur, Chitwan',
        addressNe: 'भरतपुर, चितवन',
        phone: '056-521333',
        emergency: true,
        type: 'Government Hospital',
        typeNe: 'सरकारी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Gynecology', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'स्त्री रोग', 'अल्ट्रासाउन्ड'],
        lat: 27.6782,
        lng: 84.4351
    },
    {
        id: 10,
        name: 'College of Medical Sciences',
        nameNe: 'कलेज अफ मेडिकल साइन्सेस',
        district: 'Chitwan',
        districtNe: 'चितवन',
        address: 'Bharatpur, Chitwan',
        addressNe: 'भरतपुर, चितवन',
        phone: '056-525555',
        emergency: true,
        type: 'Teaching Hospital',
        typeNe: 'शिक्षण अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'High-Risk Pregnancy', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'उच्च जोखिम गर्भावस्था', 'अल्ट्रासाउन्ड'],
        lat: 27.6915,
        lng: 84.4289
    },

    // Biratnagar
    {
        id: 11,
        name: 'Nobel Medical College',
        nameNe: 'नोबेल मेडिकल कलेज',
        district: 'Morang',
        districtNe: 'मोरङ',
        address: 'Biratnagar, Morang',
        addressNe: 'विराटनगर, मोरङ',
        phone: '021-525252',
        emergency: true,
        type: 'Teaching Hospital',
        typeNe: 'शिक्षण अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Gynecology', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'स्त्री रोग', 'अल्ट्रासाउन्ड'],
        lat: 26.4525,
        lng: 87.2718
    },

    // Butwal
    {
        id: 12,
        name: 'Lumbini Provincial Hospital',
        nameNe: 'लुम्बिनी प्रादेशिक अस्पताल',
        district: 'Rupandehi',
        districtNe: 'रुपन्देही',
        address: 'Butwal, Rupandehi',
        addressNe: 'बुटवल, रुपन्देही',
        phone: '071-540333',
        emergency: true,
        type: 'Government Hospital',
        typeNe: 'सरकारी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Ultrasound', 'Lab Services'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'अल्ट्रासाउन्ड', 'प्रयोगशाला सेवाहरू'],
        lat: 27.7000,
        lng: 83.4500
    },

    // Dharan
    {
        id: 13,
        name: 'B.P. Koirala Institute of Health Sciences',
        nameNe: 'बी.पी. कोइराला स्वास्थ्य विज्ञान प्रतिष्ठान',
        district: 'Sunsari',
        districtNe: 'सुनसरी',
        address: 'Dharan, Sunsari',
        addressNe: 'धरान, सुनसरी',
        phone: '025-525555',
        emergency: true,
        type: 'Teaching Hospital',
        typeNe: 'शिक्षण अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'High-Risk Pregnancy', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'उच्च जोखिम गर्भावस्था', 'अल्ट्रासाउन्ड'],
        lat: 26.8124,
        lng: 87.2847
    },

    // Janakpur
    {
        id: 14,
        name: 'Janakpur Provincial Hospital',
        nameNe: 'जनकपुर प्रादेशिक अस्पताल',
        district: 'Dhanusha',
        districtNe: 'धनुषा',
        address: 'Janakpur, Dhanusha',
        addressNe: 'जनकपुर, धनुषा',
        phone: '041-520111',
        emergency: true,
        type: 'Government Hospital',
        typeNe: 'सरकारी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Gynecology', 'Ultrasound'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'स्त्री रोग', 'अल्ट्रासाउन्ड'],
        lat: 26.7288,
        lng: 85.9244
    },

    // Nepalgunj
    {
        id: 15,
        name: 'Bheri Hospital',
        nameNe: 'भेरी अस्पताल',
        district: 'Banke',
        districtNe: 'बाँके',
        address: 'Nepalgunj, Banke',
        addressNe: 'नेपालगंज, बाँके',
        phone: '081-520066',
        emergency: true,
        type: 'Government Hospital',
        typeNe: 'सरकारी अस्पताल',
        services: ['24/7 Emergency', 'Maternity Ward', 'NICU', 'Ultrasound', 'Lab Services'],
        servicesNe: ['२४/७ आपतकालीन', 'प्रसूति वार्ड', 'एनआईसीयू', 'अल्ट्रासाउन्ड', 'प्रयोगशाला सेवाहरू'],
        lat: 28.0500,
        lng: 81.6167
    }
];

// Emergency contacts for Nepal
const emergencyContacts = [
    {
        name: 'Ambulance Service',
        nameNe: 'एम्बुलेन्स सेवा',
        number: '102',
        description: 'National ambulance service',
        descriptionNe: 'राष्ट्रिय एम्बुलेन्स सेवा'
    },
    {
        name: 'Police Emergency',
        nameNe: 'प्रहरी आपतकालीन',
        number: '100',
        description: 'Nepal Police emergency hotline',
        descriptionNe: 'नेपाल प्रहरी आपतकालीन हटलाइन'
    },
    {
        name: 'Women Helpline',
        nameNe: 'महिला हेल्पलाइन',
        number: '1145',
        description: 'National Women Commission helpline',
        descriptionNe: 'राष्ट्रिय महिला आयोग हेल्पलाइन'
    },
    {
        name: 'Paropakar Maternity Hospital',
        nameNe: 'परोपकार प्रसूति अस्पताल',
        number: '01-4266981',
        description: 'Main maternity hospital in Kathmandu',
        descriptionNe: 'काठमाडौंको मुख्य प्रसूति अस्पताल'
    }
];

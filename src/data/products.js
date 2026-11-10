export const productsData = [
  {
    id: 'hb-01',
    name: {
      en: 'Holybotics Alpha 4WD Rover Kit',
      ml: 'ഹോളിബോട്ടിക്സ് ആൽഫ 4WD റോവർ കിറ്റ്',
      hi: 'होलीबोटिक्स अल्फा 4WD रोवर किट'
    },
    category: 'robotics',
    price: 1899,
    status: 'inStock',
    badge: 'Flagship Starter',
    tags: ['Robotics', 'Arduino', 'Bluetooth', '4WD', 'Obstacle Avoidance'],
    shortDesc: {
      en: 'Complete four-wheel drive programmable robot chassis with ultrasonic distance sensor and mobile app control.',
      ml: 'മൊബൈൽ ആപ്പ് നിയന്ത്രണവും അൾട്രാസോണിക് സെൻസറുമുള്ള ഫോർ-വീൽ ഡ്രൈവ് പ്രോഗ്രാമബിൾ റോബോട്ട് കിറ്റ്.',
      hi: 'मोबाइल ऐप नियंत्रण और अल्ट्रासोनिक दूरी सेंसर के साथ पूर्ण 4-व्हील ड्राइव रोबोट किट।'
    },
    specs: [
      'Microcontroller: Arduino Uno R3 Compatible',
      'Motors: 4x High Torque 1:48 Geared DC Motors',
      'Sensors: HC-SR04 Ultrasonic & 2-Channel Line Tracking',
      'Power: Dual 18650 Li-ion holder with charging BMS',
      'Communication: HC-05 Bluetooth 4.0 Module'
    ],
    inTheBox: [
      'Laser-cut acrylic dual chassis',
      '4x Wheels + Geared DC Motors',
      'L298N Motor Driver Shield',
      'Sensor mounting brackets & jumpers',
      'Holybotics Quickstart Guide & Code Samples'
    ],
    color: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'hb-02',
    name: {
      en: 'Smart Plant Care IoT Node',
      ml: 'സ്മാർട്ട് പ്ലാന്റ് കെയർ IoT നോഡ്',
      hi: 'स्मार्ट प्लांट केयर IoT नोड'
    },
    category: 'iot',
    price: 949,
    status: 'inStock',
    badge: 'Eco-Tech',
    tags: ['IoT', 'ESP32', 'WiFi', 'Soil Moisture', 'MQTT'],
    shortDesc: {
      en: 'Student-built automated irrigation and soil fertility telemetry unit with live smartphone alerts.',
      ml: 'സ്മാർട്ട്‌ഫോൺ അലേർട്ടുകളുള്ള ഓട്ടോമേറ്റഡ് ചെടി നനയ്ക്കൽ മണ്ണ് ഈർപ്പ മോണിറ്ററിംഗ് ഉപകരണം.',
      hi: 'स्मार्टफोन अलर्ट और स्वचालित सिंचाई के साथ छात्र-निर्मित मिट्टी नमी निगरानी प्रणाली।'
    },
    specs: [
      'MCU: ESP32-WROOM-32 with integrated 2.4GHz WiFi & BLE',
      'Capacitive anti-corrosion soil moisture probe',
      'OLED 0.96 inch live telemetry display',
      'Micro 5V water pump driver relay',
      'Web Dashboard and Telegram notification support'
    ],
    inTheBox: [
      'Holybotics ESP32 Node PCB',
      'Capacitive soil sensor with cable',
      'Submersible 5V water pump with silicone pipe',
      'USB-C programming cable'
    ],
    color: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    id: 'hb-03',
    name: {
      en: 'OmniWheel Maze Runner Prototype',
      ml: 'ഓമ്‌നിവീൽ മെയ്സ് റണ്ണർ പ്രോട്ടോടൈപ്പ്',
      hi: 'ओम्नी-व्हील भूलभुलैया सॉल्वर प्रोटोटाइप'
    },
    category: 'robotics',
    price: 3200,
    status: 'customOrder',
    badge: 'Competition Grade',
    tags: ['OmniWheel', 'PID Control', 'High Speed', 'Encoders'],
    shortDesc: {
      en: '3-wheel holonomic omni-directional platform engineered for autonomous labyrinth solving and agility contests.',
      ml: 'മത്സരങ്ങൾക്കായി പ്രത്യേകം നിർമ്മിച്ച 3-വീൽ ഓമ്‌നി ഡയറക്ഷണൽ ഹൈ-സ്പീഡ് റോബോട്ടിക് പ്ലാറ്റ്‌ഫോം.',
      hi: 'स्वायत्त भूलभुलैया नेविगेशन के लिए 3-पहिया ऑम्नी-दिशात्मक उच्च गति रोबोट प्लेटफॉर्म।'
    },
    specs: [
      'Holonomic 3-Axis 58mm Omni wheels',
      'High-speed N20 metal gear motors with optical encoders',
      'STM32 ARM Cortex-M4 processor module',
      '6x ToF (Time of Flight) laser distance sensors'
    ],
    inTheBox: [
      'Assembled lightweight carbon-aluminum chassis',
      'Pre-flashed Holybotics PID navigation firmware',
      'LiPo 3S 11.1V 1000mAh battery pack with balance charger'
    ],
    color: 'from-violet-500/20 to-indigo-500/10'
  },
  {
    id: 'hb-04',
    name: {
      en: 'Holybotics Modular Sensor Shield',
      ml: 'ഹോളിബോട്ടിക്സ് മോഡുലാർ സെൻസർ ഷീൽഡ്',
      hi: 'होलीबोटिक्स मॉड्यूलर सेंसर शील्ड'
    },
    category: 'tools',
    price: 499,
    status: 'inStock',
    badge: 'Prototyping',
    tags: ['PCB', 'Breadboard-Free', 'Plug & Play', 'Sensors'],
    shortDesc: {
      en: 'Custom designed expansion board that lets beginners wire up sensors without messy jumper tangle or soldering.',
      ml: 'സോൾഡറിംഗ് ഇല്ലാതെ സെൻസറുകൾ എളുപ്പത്തിൽ ഘടിപ്പിക്കാൻ സഹായിക്കുന്ന കസ്റ്റം എക്സ്പാൻഷൻ ബോർഡ്.',
      hi: 'बिना सोल्डरिंग के सेंसर को आसानी से जोड़ने के लिए कस्टम डिज़ाइन किया गया एक्सपेंशन बोर्ड।'
    },
    specs: [
      'Standard 2.54mm Grove and XH2.54 compatible headers',
      'Dedicated 5V and 3.3V rail selector with circuit fuse protection',
      'I2C, SPI, and Analog breakout terminal screw blocks'
    ],
    inTheBox: [
      '1x Holybotics Modular Sensor PCB',
      '6x JST-to-female terminal ribbon cables',
      'Pinout quick-reference cheat sheet'
    ],
    color: 'from-amber-500/20 to-yellow-500/10'
  },
  {
    id: 'hb-05',
    name: {
      en: 'Home Automation Smart Relay 4-CH',
      ml: 'ഹോം ഓട്ടോമേഷൻ സ്മാർട്ട് റിലേ 4-CH',
      hi: 'होम ऑटोमेशन 4-चैनल स्मार्ट रिले'
    },
    category: 'iot',
    price: 1250,
    status: 'inStock',
    badge: 'Smart Home',
    tags: ['Home Automation', 'WiFi', 'Relay', 'Alexa/HomeAssistant'],
    shortDesc: {
      en: 'Control 4 independent home appliances via smartphone or voice assistant with dual physical toggle switch feedback.',
      ml: 'മൊബൈൽ ഫോൺ വഴിയോ ശബ്ദ നിയന്ത്രണം വഴിയോ വീട്ടുപകരണങ്ങൾ പ്രവർത്തിപ്പിക്കാവുന്ന സ്മാർട്ട് റിലേ.',
      hi: 'स्मार्टफोन या वॉयस असिस्टेंट के जरिए घरेलू उपकरणों को नियंत्रित करने वाला 4-चैनल स्मार्ट रिले।'
    },
    specs: [
      'ESP8266 Wi-Fi Core with Over-The-Air (OTA) updates',
      '4x 10A 250V AC Optocoupler-isolated mechanical relays',
      'Flame-retardant DIN rail mountable casing',
      'Works with Home Assistant, Tasmota, or Holybotics Web App'
    ],
    inTheBox: [
      'Enclosed 4-Channel Relay Unit',
      'Quick Installation wiring diagram',
      'Cloud setup token & manual'
    ],
    color: 'from-blue-500/20 to-cyan-500/10'
  },
  {
    id: 'hb-06',
    name: {
      en: 'Holybotics Student Inventor Kit & Handbook',
      ml: 'ഹോളിബോട്ടിക്സ് ഇൻവെന്റർ കിറ്റും ഹാൻഡ്‌ബുക്കും',
      hi: 'होलीबोटिक्स छात्र आविष्कारक किट और हैंडबुक'
    },
    category: 'learning',
    price: 1450,
    status: 'inStock',
    badge: 'Top Educator Choice',
    tags: ['Education', 'Handbook', '30 Projects', 'Beginners'],
    shortDesc: {
      en: 'Curated 35+ component kit bundled with our Holy Trinity student-authored 120-page electronics & robotics guide.',
      ml: '35-ലധികം ഘടകങ്ങളും വിദ്യാർത്ഥികൾ തയ്യാറാക്കിയ സമഗ്രമായ 120 പേജ് റോബോട്ടിക്സ് പുസ്തകവും അടങ്ങിയ കിറ്റ്.',
      hi: '35+ घटकों और 120 पृष्ठों की छात्र-लिखित इलेक्ट्रॉनिक्स व रोबोटिक्स गाइड से युक्त संपूर्ण किट।'
    },
    specs: [
      'Covers 30 step-by-step beginner-to-advanced hands-on projects',
      'Includes Breadboard, LEDs, Resistors, LDR, Buzzer, Ultrasonic & Motors',
      'Includes full color printed handbook in English with Malayalam glossary'
    ],
    inTheBox: [
      'Comprehensive component box with organizer compartments',
      '120-Page Spiral-Bound Illustrated Handbook',
      'Certificate of Workshop Completion voucher'
    ],
    color: 'from-rose-500/20 to-pink-500/10'
  }
];


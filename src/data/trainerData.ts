import { ServiceItem, TestimonialItem, TrainerStat } from '../types';

export const BRAND_INFO = {
  name: 'Training by Trav',
  tagline: 'Personal journeys. Lasting results.',
  subtitle: 'Offering personal training, goal-setting, and online coaching designed to help you meet your goals.',
  trainerName: 'Travis "Trav"',
  city: 'Greater Orlando Area, FL',
  phoneDisplay: '(718) 787-7721',
  phoneRaw: '+17187877721',
  email: 'trav@trainingbytrav.com',
  instagramHandle: '@training_by_trav',
  instagramUrl: 'https://instagram.com/training_by_trav',
  facebookUrl: 'https://facebook.com/trainingbytrav',
  threadsUrl: 'https://threads.net/@training_by_trav',
  hours: {
    days: 'Monday through Sunday',
    time: '6:00 am – 9:00 pm',
    note: 'By Appointment Only',
  },
  missionStatement:
    'Our goal is to guide you towards a healthier lifestyle through engaging, tailored workouts that not only enhance your physical well-being but also foster a lasting, positive relationship with exercise.',
  freeSessionOffer: {
    title: 'First Session 100% Free',
    badge: 'Risk-Free Consultation & Assessment',
    description:
      'Experience personalized coaching with zero upfront commitment. We will discuss your goals, evaluate movement patterns, and design your initial custom game plan.',
  },
};

const EMAIL_BODY_TEMPLATE = `Hi Trav,

I'd like to get started with personal training! Here are my details:

Name:
Phone:
Primary Goal:
Fitness Level:
Preferred Training Time:
Location Preference (In-Studio: Mills 50 Fitness, Orlando, FL / Other):
Additional Notes:

Thanks!`;

export const MAILTO_LINK = `mailto:${BRAND_INFO.email}?cc=${BRAND_INFO.email}&subject=${encodeURIComponent(
  'Personal Training Inquiry'
)}&body=${encodeURIComponent(EMAIL_BODY_TEMPLATE)}`;

export const TRAINER_STATS: TrainerStat[] = [
  {
    value: '2011',
    label: 'Coaching Since',
    sublabel: 'Over 14+ years of dedicated professional training',
  },
  {
    value: '60+ lbs',
    label: 'Personal Weight Loss',
    sublabel: 'Walked the path from scratch to peak fitness',
  },
  {
    value: '100%',
    label: 'Tailored Programs',
    sublabel: 'Zero cookie-cutter routines or generic plans',
  },
  {
    value: '7 Days',
    label: 'Flexible Schedule',
    sublabel: '6:00 AM – 9:00 PM by private appointment',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'one-on-one',
    title: 'One-on-One Training',
    subtitle: 'Exercise Fitness & Dedicated 1:1 Attention',
    description:
      'Discover the power of tailored fitness through one-on-one personal training, where your dedicated trainer crafts a workout plan uniquely aligned with your individual goals, biomechanics, and pace.',
    iconName: 'Dumbbell',
    tag: 'Most Popular',
    benefits: [
      'Private 1-on-1 coaching with real-time form correction',
      'Progressive overload customized to your anatomy',
      'Overcoming gym intimidation and building genuine confidence',
      'Comprehensive nutrition and lifestyle accountability',
    ],
    idealFor: 'Individuals wanting focused attention, injury prevention, and accelerated results.',
    highlightText: 'First Session Free',
  },
  {
    id: 'partner-training',
    title: 'Partner Training',
    subtitle: 'Two People / Couple & Friend Workouts',
    description:
      'Transform your fitness journey with a friend, spouse, or loved one. Enjoy shared workouts that are fun, challenging, and tailored to meet each of your unique goals in a motivating, supportive environment.',
    iconName: 'Users',
    tag: 'High Energy & Fun',
    benefits: [
      'Shared motivation, accountability, and camaraderie',
      'Individualized modifications for different fitness levels',
      'Cost-effective premium personal training structure',
      'Dynamic partner-assisted drills and core work',
    ],
    idealFor: 'Friends, couples, or family members who thrive on mutual encouragement.',
    highlightText: 'Train Together & Save',
  },
  {
    id: 'online-coaching',
    title: 'Online Coaching & Support',
    subtitle: 'Remote Fitness & Weekly Check-Ins',
    description:
      'Online coaching and support offers tailored workout programming and regular check-ins with personalized feedback to help you reach your goals, no matter how big, small, or where you travel.',
    iconName: 'Laptop',
    tag: 'Maximum Flexibility',
    benefits: [
      'Customized app/schedule-based workout programming',
      'Video form analysis and exercise execution critique',
      'Weekly progress check-ins with strategic plan adjustments',
      'Direct messaging support whenever questions arise',
    ],
    idealFor: 'Busy professionals, frequent travelers, or those training at home/local gyms.',
    highlightText: 'Train Anywhere',
  },
  {
    id: 'goal-setting',
    title: 'Customized Goal-Setting',
    subtitle: 'Roadmap, Metrics & Sustainable Habit Architecture',
    description:
      'Customized goal-setting designed to align directly with your life aspirations. We help you define clear, achievable targets, providing the step-by-step roadmap to turn your fitness dreams into lasting reality.',
    iconName: 'Target',
    tag: 'Strategic Foundation',
    benefits: [
      'SMART fitness goal definition and milestone scheduling',
      'Body composition, strength, and endurance benchmarking',
      'Overcoming psychological barriers and habit loops',
      'Long-term sustainable lifestyle integration',
    ],
    idealFor: 'Anyone feeling stuck, restarting fitness, or needing clear measurable direction.',
    highlightText: 'Blueprint Included',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'shari',
    author: 'Shari',
    role: '1-on-1 Personal Training Client',
    highlightTag: 'Deadlift: 60lbs → 225lbs',
    rating: 5,
    resultMetric: '1-on-1 Training',
    quote:
      'Trav is a highly-skilled, motivating, and empathetic trainer. He listened to my specific needs and helped me overcome a lot of mental and physical obstacles. My deadlift went from 60lbs to 225lbs in about 7 months of dedicated programming—there\'s no way I would have gotten there on my own. I\'m really grateful for his skills and hard work, and I recommend him to everyone needing a push to be their best self.',
  },
  {
    id: 'susan',
    author: 'Susan',
    role: 'Long-term Fitness Client',
    highlightTag: 'Patient & Motivating',
    rating: 5,
    resultMetric: 'At Home Training',
    quote:
      'Trav is an excellent trainer. I was really lucky to work with him. He is amazing at understanding what you need to do to reach your goals. He is really smart and patient and he makes workouts fun and motivating. I am always impressed that he never stops reading or learning and is open to new ideas. He knows how to listen and he knows how to figure out how to say things in a way that his individual client can understand, process, and put into practice.',
  },
  {
    id: 'joe',
    author: 'Joe',
    role: 'Personal Training Client',
    highlightTag: 'New PRs & Leaner Physique',
    rating: 5,
    resultMetric: 'Virtual Training',
    quote:
      'I’ve been "spinning my wheels" in the gym for years. After a few months working with Travis I reached new PRs and experienced a leaner physique. I thought I knew how to "workout" but after communicating my goals and aspirations I was quickly humbled and impressed.',
  },
  {
    id: 'anthony',
    author: 'Anthony',
    role: 'Powerlifting Client',
    highlightTag: '10+ Years Lifting, Still Leveling Up',
    rating: 5,
    resultMetric: 'Virtual Training',
    quote:
      'I have been lifting for over 10 years and Trav still has helped me through large plateaus during my powerlifting journey. He always has an answer in regards to dietary recommendations, movements, exercises and most importantly form. He’s been my number 1 resource above other trainers or social media. The responses have been quick and the results have been extraordinary. I cannot recommend this man any more. He’s a pro. Best part about it is he’s just kind. And kindness goes a long way with me.',
  },
  {
    id: 'thomas',
    author: 'Thomas',
    role: 'Performance & Racing Client',
    highlightTag: 'Racetrack Performance',
    rating: 5,
    resultMetric: '1-on-1 Training',
    quote:
      'In 2020, I decided to enhance my racetrack performance by diving into a fitness routine. Noticing my need for guidance, Trav stepped in with valuable advice that gradually improved my performance. Encouraged by this progress, I fully committed to a structured program. Fast forward, and the transformation has been astounding—my strength, endurance, and lap times have all improved to levels I never thought possible!',
  },
  {
    id: 'iskian',
    author: 'Iskian',
    role: 'Personal Training Client',
    highlightTag: 'Beginner to Pro Athlete Coaching',
    rating: 5,
    resultMetric: '1-on-1 Training',
    quote:
      'Amazing trainer, teaches safety, and encourages you to push yourself in way that will make you want to work out even more. Highly recommend from beginners to pro athletes. Ps. Thank you for teaching me how to deadlift.',
  },
];

export const GOAL_OPTIONS = [
  'Weight Loss & Body Recomposition',
  'Strength & Muscle Toning',
  'Building Gym Confidence & Overcoming Anxiety',
  'Cardiovascular Health & Energy',
  'Partner / Couple Fitness Routine',
  'Online Accountability & Remote Coaching',
  'Post-Rehab & Mobility / Functional Movement',
];

export const TIME_PREFERENCES = [
  'Early Morning (6:00 AM – 9:00 AM)',
  'Mid-Day (10:00 AM – 2:00 PM)',
  'Late Afternoon / Evening (3:00 PM – 9:00 PM)',
  'Weekend Flexible',
  'Online / Remote (Anytime)',
];

export const EXPERIENCE_LEVELS = [
  'Complete Beginner (Never trained or returning after long break)',
  'Intermediate (Some gym background, need structure & results)',
  'Advanced (Looking for plateaus breakthrough & strict coaching)',
];

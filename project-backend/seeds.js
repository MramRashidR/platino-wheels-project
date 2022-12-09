require('dotenv').config()
require('./config/database')
const Car = require('./models/Car')
Car.deleteMany().then(() => {

    Car.insertMany([
        {
            Photo: 'https://imgur.com/QGJsVZn',
            Brand: 'Lamborghini',
            Year: '2015 ',
            Price: 'Price On Request',
            Description: 'Lamborghini Huracan | Smoke free Carfax | LP610-4 coupe equipped | 5.2L 610HP V10 engine | 7-speed LDS dual-clutch | Auto paddle shift transmission and AWD',
            Contact: '+973 3431 0225'
        },
    
        {
            Photo:'https://imgur.com/mVD0uik',
            Brand: 'Lamborghini',
            Year: '2021',
            Price: '$ 3,500,000',
            Description: 'Lamborghini Sian | The indomitable V12 engine of the Sián Roadster incorporates titanium intake valves and is uprated to 785 CV (577 kW) at 8,500 rpm| The most powerful Lamborghini engine ever made | delivering a total of 819 CV (602 kW) | Reaching a top speed of over 350 km/h',
            Contact: '+973 3566 6878'
        },
    
        {
            Photo:'https://imgur.com/MCNPEHm',
            Brand: 'Bugatti',
            Year: '2019',
            Price: '$ 3,819,854',
            Description: '2019 Bugati Chiron Sport Ultra rare sport | Only 4k miles',
            Contact: '+973 3386 0444'
        },
        {
            Photo:'https://i.imgur.com/ecvtwUD.jpg',
            Brand: 'Bugatti',
            Year: '2021',
            Price: '$ 13,400,000',
            Description: ' Bugatti La Voiture Noire | Specs are built upon a proven Bugatti chassis | This car is destined for a private collection| Given the performance of similar models| Will estimate 0-60 time of under 3 seconds | With a low-9 second 1/4 mile',
            Contact: '+973 3386 5587',
        },
    
        {
            Photo:'https://imgur.com/tH14t2G',
            Brand: 'Ferrari',
            Year: '2020',
            Price:'$ 381,469',
            Description: 'Ferrari 812 Superfast | Grigio Scuro | Added a “Historical Color” to superfast high-tech material | 812 Superfast includes Carbon Racing Seats with Tricolore striping, a Suspension Lifter | JBL sound system | full carbon interior |spec and 800 hp non-turbo-power on the rear wheels',
            Contact: '+973 3775 6671'
        },
        {
            Photo:'https://i.imgur.com/4nTtJXK.jpg',
            Brand: 'Ferrari',
            Year: '2020',
            Price:'$ 599,252',
            Description: 'Emission Standard | Euro 6 Fuel Consumption (comb.)| 12.0 l/100 km Fuel Consumption (in town)| 16.9 l/100 km Fuel Consumption (out of town)| 9.2 l/100 km CO₂ Emissions (comb.)| 273.0 g/km CO₂ Efficiency Rating',
            Contact: '+973 3775 6671'
        },
    
        {
            Photo:'https://imgur.com/8JxcCdQ',
            Brand: 'RollsRoyce',
            Year: '2019',
            Price:'$ 647,967',
            Description: 'Rolls-Royce Motor Cars Beverly Hills is pleased to present for sale this stunning 2019 Rolls-Royce Cullinan as part of our hand-selected pre-owned lineup. This gorgeous example is finished in the Black Diamond exterior paint and Creme Light interior / mileage 14K Mi / Engine: 12 Cylinder / Gearbox:Automatic /Fueltype:Petrol',
            Contact:'+973 6662 2691'
        },
        {
            Photo:'https://imgur.com/1rmO5e7',
            Brand: 'RollsRoyce',
            Year: '2018',
            Price:'Price On Request',
            Description: '2018 Rolls-Royce Wraith | 2dr Black Badge with Starlight Headliner features a 6.6L 12 CYLINDER 12cyl Gasoline engine. It is equipped with a 8 Speed Automatic transmission. The vehicle is Diamond Black Metallic with a Cobalto Blue / Black Leather interior. - Climate Control, Dual Zone Climate Control, Cruise Control, Power Steering, Power Mirrors, Leather Steering Wheel, Rear Air Conditioning, Wood Trim, Clock, Tachometer, Telescoping Steering Wheel,',
            Contact:'+973 6668 8741'
        },
    
        {
            Photo:'https://i.imgur.com/Hra0uzc.jpg',
            Brand: 'AstonMartin',
            Year: '2021',
            Price:'$ 148,809',
            Description:'Aston Martin Vantage Roadster | Caribbean Blue Pearl Thanks to this insanely magnificent Aston Martin Vantage Roadster, you dont have to travel to the Bahamas to get the ultimate holiday feeling. Between the luxury yachts at the Côte dAzur, this bright blue AM Vantage will also make the difference,What a gem!',
            Contact:'+973 3431 0225'
        },
        {
            Photo:'https://i.imgur.com/EaIzPLi.jpg',
            Brand: 'AstonMartin',
            Year: '2012',
            Price:'$ 355,917',
            Description:'2012 Aston Martin Vanquish | Inspired by the Aston Martin designs of the 1980s and 90s, the Vengeance is the culmination of Kahns lifelong pursuit to create the car he has always wanted to drive. His personality is evident in every curve of the coachbuilt body, the result of a painstaking design process, working and reworking each line and surface to the point of perfection.',
    
            Contact:'+973 3456 7489'
        },
    
        // {
        //     Photo:'https://imgur.com/dIWOBrK',
        //     Brand:'Rivian',
        //     Year:'2022',
        //     Price:'$ 99,595',
        //     Description:'Rivian R1T Adventure Package AWD | Excellent condition with only 184 miles. 2022 Rivian R1T Adventure Edition. LA Silver with Black Mountain and Dark Ash wood interior. Large battery pack, 21 wheel and tire package, tow hooks, and quad -motor AWD. Please call to set up an appointment today! Errors and Omissions Disclaimer:Our dealership is not responsible for voided factory warranties. Dealer is not responsible for any option listed in the ad. Please verify the options at the time of purchase. ',
        //     Contact:'Slack KAREEM'
        // },
        {
            Photo:'https://i.imgur.com/Srq0PHm.jpg',
            Brand:'Rivian',
            Year:'2022',
            Price:'$ 144,950',
            Description:'Rivian R1S Launch Edition | 2022 Rivian R1S Launch Edition the Most Eagerly Anticipated New SUV On The Market! * Beautiful Launch Green Paint Over Black Mountain and Dark Ash Wood Interior * Launch Edition Comes Nearly Fully Loaded With All The Desirable Options! *R1S Launch Edition Features* * Large Battery Pack * 316 Miles of Range * 20” All-Terrain Wheels and Tires * Special Interior Badging * Adventure Package * Premium Interior * Heated and Cooled Vegan Leather Seats * Air Compressor With Accessory Kit * Heated Steering Wheel * Natural Ash Grain Wood Interior * Rivian Elevation by Meridian Audio System * Removable Bluetooth Speaker *Additional Information* * Safety Guide Booklet * Original Window Sticker *Standard Features* * 128.9-kWh Battery Pack * 316 Mile Range * Quad Motors * 835hp/908 Lb-Ft of Torque  ',
            Contact:'KAREEM PHONE NUMBER'
        },
    
        {
            Photo:'https://i.imgur.com/kZRcIzR.jpg',
            Brand:'Corvette',
            Year:'2023',
            Price:'$ 116,000',
            Description:'Chevorlet Corvet C8 Z06 | 5.5L LT6 V8 Naturally aspirated, 0 to 100 KM/PH in 2.6 seconds 670 horse power',
            Contact:'+973 6633 1237',
        },
        {
            Photo:'https://i.imgur.com/92wn6JT.jpg',
            Brand:'Corvette',
            Year:'2023',
            Price:'$ 63,195',
            Description:'chevrolet Corvett Sting Ray | The 2023 model year marks the return of the high-performance Z06 but this time with a different kind of engine. Its powered by a 5.5-liter V-8 inspired by the Corvette racing program. Equipped with a flat-plane crank, it can rev to 8,600 rpm and produces 670 hp and 460 lb-ft of torque',
            Contact:'+973 6633 3892',
        },
    
        {
            Photo:'https://i.imgur.com/t5bGoYF.jpg',
            Brand:'McLaren',
            Year:'2022',
            Price:'$ 1,315,000',
            Description:'McLaren Spider 720S | The McLaren 720S is a force of nature| 4.0L twin-turbocharged V8 delivers 720PS and 770Nm of torque | 0-60mph takes just 2.8 seconds. And 124mph arrives in an astonishing 7.8 seconds',
            Contact:'+973 3399 0033',
        },
        {
            Photo:'https://i.imgur.com/7jLAsf7.jpg',
            Brand:'McLaren',
            Year:'2022',
            Price:'$ 1,979,098',
            Description:'MCLAREN ELVA |The Elva can accelerate to 100 km/h (62 mph) in less than three seconds and to 200 km/h (124 mph) in 6.7 seconds. Fuel Consumption (comb.): 11.9 l/100 km. Fuel Consumption (in town): 20.6 l/100 km, Fuel Consumption (out of town): 10.7 l/100 km, CO₂ Emissio(comb.): 270.0 g/km,CO₂ Efficiency. Rating: G',
            Contact:'+973 3329 2288',
        },
     
    
    ])
    .then(() => console.log('Data added successfully!'))
    .catch(err => console.log(err))
})


const fotoGalerij = [
    'https://www.goturkey.com/assets/uploads/destinations/istanbul-detail-image-2.jpg',
    'https://www.goturkey.com/assets/uploads/destinations/istanbul-night.jpg',
    'https://www.goturkey.com/assets/uploads/destinations/istanbul-bazaar.jpg',
    'https://d12dkjq56sjcos.cloudfront.net/pub/media/magefan_blog/sightseeing/Istanbul-Landmark-Galata-Tower-Big-Bus-Tours.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbul-gezilecek-yerler-sultanahmet-meydani.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbul-gezilecek-yerler-istiklal-caddesi.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbul-gezilecek-yerler-topkapi-sarayi.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbul-gezilecek-yerler-yildiz-sarayi.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2015/10/Fatih-Camii-Resimleri-03.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2015/11/Japon-Bahcesi-Resimleri-06.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2015/08/Yesilkoy-Havacilik-Muzesi-Resimleri-07.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2015/05/istanbul-panorama-1453-tarih-muzesi-resimleri-3.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbul-gezilecek-yerler-arkeoloji-muzesi.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbul-gezilecek-yerler-rumeli-hisari.jpg',
    'https://lh3.googleusercontent.com/proxy/wmyDXVDj6qY9b8yW7UfrZOJekzdAcSXua2gn6bP69phriq06rQgNhenmpH-5Cea2AEbv3OMv6_E9DVeRO5imrbfJi0QV4vSnF6iq7ckqbacEhlpPAEhaj8TO',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbul-gezilecek-yerler-eminonu.jpg',
    'https://seyahatdergisi.com/wp-content/uploads/2016/04/istanbulda-gezilecek-yerler-1024x576.jpg',
    'http://i.radikal.com.tr/542x290/2015/03/06/fft81_mf3714079.Jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgbUrm0CV25COd3kM6YsvYTJunWwpzRUcrRmmLkswkq7X7f4Ha',
    'https://www.emlakrotasi.com.tr/Galeries/PhotoPools/vodafone.jpg'
];

const kader = document.getElementById('container');

function plaatsBepaler(url) {
    let object = document.createElement('div');
    object.className ='object';
    let afbeelding = document.createElement('img');
    afbeelding.src = url;
    afbeelding.alt = 'Istanbul';
    object.append(afbeelding);
    kader.append(object);
}

for(let i=fotoGalerij.length; i>0; i--) {
    let cijfer = Math.floor(Math.random()*fotoGalerij.length);
    plaatsBepaler( fotoGalerij[cijfer] );
    fotoGalerij.splice(cijfer,1);
}
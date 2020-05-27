function attraction(nr, name, lat, long, addr, desc, hours, admission, reviewsrc, taurl, imgsrc) {
  this.nr = nr;
  this.name = name;
  this.lat = lat;
  this.long = long;
  this.addr = addr;
  this.desc = desc;
  this.hours = hours; 
  this.admission = admission;
  this.reviewsrc = reviewsrc;
  this.taurl = taurl;  
  this.imgsrc = imgsrc; 
}

function day(name, lat, long, adr, desc, hours, taurl, imgsrc) {
  this.name = name;
  this.lat = lat;
  this.long = long;
  this.adr = adr;
  this.desc = desc;
  this.hours = hours; 
  this.taurl = taurl;  
  this.imgsrc = imgsrc; 
}



const top15 = [0,

new attraction(
  1,
  'Real Alcazar de Sevilla',
  37.383061,
  -5.990218,
  'Patio de Banderas, s/n, 41004 Sevilla, Spania',
  'The Alcázar of Seville, commonly known as the Royal\
    Alcázars of Seville is a royal palace in Seville, Spain,\
    built for the Christian king Peter of Castile. It was built\
    by Castilian Christians on the site of an Abbadid Muslim\
    residential fortress destroyed after the Christian conquest\
    of Seville. The palace is a preeminent example of Mudéjar\
    architecture in the Iberian Peninsula but features Gothic,\
    Renaissance and Romanesque design elements from previous\
    stages of construction. The upper storeys of the Alcazar\
    are still occupied by the royal family when they are in\
    Seville, and are administered by the Patrimonio Nacional.\
    It was registered in 1987 by UNESCO as a World Heritage Site,\
    along with the adjoining Seville Cathedral and the\
    General Archive of the Indies.',

  '<strong>Sunday to Saturday:</strong> 09:30 - 17:00',
  8.61,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d191139-Reviews-Real_Alcazar_de_Sevilla-Seville_Province_of_Seville_Andalucia.html',
  'img/1.png'),


 new attraction(
  2,
  'Plaza de Espana',
  37.377247,
  -5.986882,
  'Av de Isabel la Católica, 41004 Sevilla, Spain',
  'The Plaza de España ("Spain Square", in English)\
    is a plaza in the Parque de María Luisa, in Seville,\
    Spain, built in 1928 for the Ibero-American Exposition\
    of 1929. It is a landmark example of the Regionalism\
    Architecture, mixing elements of the Baroque Revival,\
    Renaissance Revival and Moorish Revival (Neo-Mudéjar)\
    styles of Spanish architecture. From 2007 to 2010,\
    the Seville City Council invested 9 million euros in\
    the restoration of the Plaza de España. The objective\
    was to recover the original monument as the architect,\
    Aníbal González; conceived it. To restore it, the\
    restoration team worked to recover pieces like the\
    ceramic streetlights, benches or even pavements. The\
    reproduction was made based on photographs and postcards\
    from the municipal newspaper library. Cefoarte and Diaz\
    Cubero were some of the experts who, in multidisciplinary\
    teams; achieved the challenge of bringing back to life\
    the Plaza de España.',

  '<strong>Sunday to Saturday:</strong> Open 24 hours',
  0,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d246510-Reviews-Plaza_de_Espana-Seville_Province_of_Seville_Andalucia.html',
  'img/2.png'),

  
 new attraction(
  3,
  'Catedral de Sevilla',
  37.385859,
  -5.993096,
  'Avenida de la Constitucion s/n, 41001 Seville, Spain',
  'The Cathedral of Saint Mary of the Sea, better known as Seville Cathedral,\
   is a Roman Catholic cathedral in Seville, Andalusia, Spain. The Cathedral \
   of Santa María de la Sede in Seville is the largest Christian Gothic cathedral \
   in the world. In 1987 it was declared a World Heritage Site by UNESCO. After \
   its completion in the early 16th century, Seville Cathedral supplanted Hagia \
   Sophia as the largest cathedral in the world, a title the Byzantine church \
   had held for nearly a thousand years. The total area occupied by the building \
   is 11,520 square metres. The Gothic section alone has a length of 126 metres, \
   a width of 76 metres  and its maximum height in the center of the transept \
   is 42 metres. The total height of the Giralda tower from the ground \
   to the weather vane is 104.5 metres. Since the world\'s two largest \
   churches, St. Peter\'s Basilica and the Basilica of the National \
   Shrine of the Immaculate Conception, are not the seats of bishops, Seville Cathedral is still the largest cathedral in the world.',
  '<strong>Sunday to Saturday:</strong> 08:00 - 19:00',
  9.50,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d191137-Reviews-Catedral_de_Sevilla-Seville_Province_of_Seville_Andalucia.html',
  'img/3.png'),
    

 new attraction(
  4,
  'Barrio Santa Cruz',
  37.386241,
  -5.989927,
  'Sevilla',
  'The Barrio Santa Cruz used to be the Jewish quarter. The \
  streets are narrow and form a labyrinth. It’s easy to get \
  lost among the jasmine-scented streets only to discover a \
  convent or a palace or a hotel. Many of the palaces have \
  wrought iron gates suitable for peeping into their beautiful \
  patios. There are many small stores and some artisan shops, \
  as well as good art galleries.\n Santa Cruz, is the primary tourist neighborhood of Seville, \
  Spain, and the former Jewish quarter of the medieval city. Santa Cruz \
  is bordered by the Jardines de Murillo, the Real Alcázar, Calle Mateos Gago, \
  and Calle Santa María La Blanca/San José. The neighbourhood is the location of many of \
  Seville\'s oldest churches and is home to the Cathedral of Seville, \
  including the converted minaret of the old Moorish mosque Giralda.',
  '',
  0,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d191138-Reviews-Barrio_Santa_Cruz-Seville_Province_of_Seville_Andalucia.html',
  'img/4.png'),
    

 new attraction(
  5,
  'Torre Giralda',
  37.386204,
  -5.992614,
  'Avenida La Constitucion S/N, 41001 Seville, Spain',
  'This lovely structure was originally built as a minaret for a mosque, although it has since been converted into a bell tower. The Giralda is the bell\
   tower of Seville Cathedral in Seville, Spain. It was built as the minaret for the Great Mosque of Seville in al-Andalus, Moorish Spain, during the reign\
    of the Almohad dynasty, with a Renaissance-style top added by the Catholics after the expulsion of the Muslims from the area. The Giralda was registered \
    in 1987 as a World Heritage Site by UNESCO, along with the Alcázar and the General Archive of the Indies. The tower is 104.1 m (342 ft) in height and remains \
    one of the most important symbols of the city, as it has been since the Middle Ages.',
  '<strong>Sunday:</strong> 14:30 - 18:00 <br>\
    <strong>Monday:</strong> 11:00 - 15:30pm <br>\
    <strong>Tuesday to Saturday:</strong> 11:00 - 17:00',
  0,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d195119-Reviews-Torre_Giralda-Seville_Province_of_Seville_Andalucia.html',
  'img/5.png'),
    

 new attraction(
  6,
  'Parque de Maria Luisa',
  37.374671,
  -5.988677,
  'Paseo de las Delicias, s/n, 41013 Seville, Spain',
  'The Parque de María Luisa (María Luisa Park) is a public park that stretches along the Guadalquivir \
  River in Seville, Spain. It is Seville\'s principal green area. \n Most of the grounds that were used \
  for the park were formerly the gardens of the Palace of San Telmo. They were donated to the city of \
  Seville in 1893 by the Infanta Luisa Fernanda, Duchess of Montpensier, for use as a public park. \
  Starting in 1911, Jean-Claude Nicolas Forestier rearranged the gardens into their present shapes. \
  In 1914 the architect Aníbal Gonzalez began construction for the Ibero-American Exposition of 1929, \
  which was held partly within the park. The new buildings of the Plaza de España were used as \
  the office of the fair. \n The park serves as a botanical garden. Many plant species, native or exotic, \
  are represented, along with educational panels to inform the visitors to the park. Many birds make their \
  home in the park, which is known for its large population of doves. There are also many parakeets living \
  in the centre of the park, and ducks and swans in the fountains and lakes.',
  '<strong>Sunday to Saturday:</strong> 08:00 - 22:00',
  0,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d191139-Reviews-Real_Alcazar_de_Sevilla-Seville_Province_of_Seville_Andalucia.html',
  'img/6.png'),


 new attraction(
  7,
  'Iglesia Colegial del Salvador',
  37.389986,
  -5.992876,
  'Plaza del Salvador, 41004 Seville, Spain',
  'Former mosque, now a baroque Roman Catholic church with an elaborate altar & a soaring nave. The \
  Iglesia Arciprestal del Salvador (Archiprestal Church of the Savior) is Renaissance-style, Roman \
  Catholic church in Requena, province of Valencia, Spain. The church was erected in the 15th century \
  in Isabelline Gothic architecture, although it underwent baroque refurbishment in the 18th century, \
  including the addition of the Chapel of the Communion, and the bell-tower. It was declared in 1966, \
  along with the town a Conjunto Histórico-Artístico Nacional. The church has three naves with side \
  chapels. The main façade has three highly sculpted portals.',
  '<strong>Sun:<strong> 15:00 - 19:30 <br>\
  <strong>Mon to Sat:</strong> 11:00 - 18:00',
  10,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d2167889-Reviews-Iglesia_Colegial_del_Salvador-Seville_Province_of_Seville_Andalucia.html',
  'img/7.png'),

  
 new attraction(
  8,
  'Centro Historico de Sevilla ',
  37.387426,
  -5.986035,
  'Downtown Sevilla',
  'Stroll cobblestone streets, stop for tapas, and marvel at centuries-old architecture in Seville\'s Historic Center \
  (Centro Historico de Sevilla). This destination may be best known for its trio of UNESCO World Heritage Sites—the \
  Cathedral, Alcázar, and the Archivo de Indias—making it a prime destination to uncover Spanish history.',
  '',
  0,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d8517202-Reviews-Centro_Historico_de_Sevilla-Seville_Province_of_Seville_Andalucia.html',
  'img/8.png'),


 new attraction(
  9,
  'Triana',
  37.385710,
  -6.003632,
  'Old Quarter, Sevilla',
  'For a more authentic and decidedly less well-scrubbed experience, it’s worth crossing the river to explore this scruffy \
  but vibrant old quarter, historically the centre of azulejo, or glazed-tile production. There are plenty of tapas bars \
  for sustenance to sustain your ceramic shopping, and it’s fun to seek out the surviving corrales. These tiny buildings \
  with flower-smothered courtyards once housed extended the gypsy families from which emerged Spain’s greatest flamenco \
  dynasties.',
  '',
  8.50,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d624428-Reviews-Triana-Seville_Province_of_Seville_Andalucia.html',
  'img/9.png'),


 new attraction(
  10,
  'Palacio de Las Dueñas',
  37.394824,
  -5.989289,
  'Calle Duenas 5 | Palacio de Las Dueñas, 41003 Seville, Spain',
  'Las Dueñas Palace, House of Alba\'s current residence in Seville, was built between the 15th and 16th centuries and is \
  one of the greatest historical attractions of the city. The building itself, including styles from Gothic-Mudejar to \
  the Renaissance, has significant architectural interest as its several gardens and patios with a special charm . With \
  a diverse collection of painting and sculpture, the house also treasures many family memories. The current configuration \
  of its pieces has remained true to its actual distribution before the opening, making the Palace a unique and different place to visit.',
  '<strong>Sun to Sat:</strong> 10:00 - 17:15',
  15,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d10076102-Reviews-Las_Duenas-Seville_Province_of_Seville_Andalucia.html',
  'img/10.png'),

  
 new attraction(
  11,
  'Museo de Bellas Artes de Sevilla',
  37.392515,
  -6.000022,
  'Plaza Museo 9, 41001 Seville, Spain',
  'The Museum of Fine Arts of Seville, founded in 1839, contains a collection of works from medieval times through the early \
  20th century. It displays a choice selection of works by Spanish artists from the 17th century, the so-called Golden \
  Age of Sevillian painting.',
  '<strong>Sun:</strong> 10:00 - 16:45 <br>\
  <strong>Tue to Sat:</strong> 10:00 - 20:15',
  1.5,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d191199-Reviews-Museo_De_Bellas_Artes_De_Sevilla-Seville_Province_of_Seville_Andalucia.html',
  'img/11.png'),

  
 new attraction(
  12,
  'Basilica de la Macarena',
  37.402457,
  -5.989481,
  'Plaza de la Esperanza Macarena, 1, 2, 41002 Sevilla, Spania',
  'The Basilica of Santa María de la Esperanza Macarena, also known popularly as Basilica de La Macarena, is a \
  Catholic temple located at Calle Bécquer, number 1, in the La Macarena neighborhood. The building is the headquarters \
  of the Brotherhood of La Esperanza Macarena, which begins its season of penance in the early morning on Good Friday \
  with the icons of the María Santísima de la Esperanza Macarena and Nuestro Padre Jesús de la Sentencia. Its \
  construction began in 1941, when on April 13, Pedro Segura y Sáenz, Archbishop of Seville, blessed the land on \
  which the first stone of the temple was built and placed; and ended in 1949, being blessed on March 18 by the same \
  Archbishop, with Queipo de Llano and Serafina Salcedo acting as its godparents. It was consecrated by Cardinal \
  José María Bueno Monreal, Archbishop of the city, on October 7, 1966. The work was completed by Sevillian architect \
  Aurelio Gómez Millán, and it is a single nave building with side chapels. The temple received the dignity of \
  Minor Basilica by the papal bull of November 12, 1966, granted by Pope Paul VI, being the first Sevillian temple \
  to receive this dignity.',
  '<strong>Sun to Sat:</strong> 9:00 - 14:00 and 17:00 - 21:00',
  0,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d207833-Reviews-Basilica_de_la_Macarena-Seville_Province_of_Seville_Andalucia.html',
  'img/12.png'),

  
 new attraction(
  13,
  'Setas de Sevilla',
  37.393364,
  -5.991788,
  'Plaza de la Encarnacion, 41003 Seville, Spain',
  'Setas is located in lively central part of Seville. The area around here is throbbing with \
  activity! Metropol Parasol is a wooden structure located at La Encarnación square, in the old \
  quarter of Seville, Spain. It was designed by the German architect Jürgen Mayer and completed in April 2011.',
  '<strong>Sun to Thu:</strong> 9:30 - 22:30 <br>\
  <strong>Fri to Sat:</strong> 9:30 - 23:30',
  3,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d1015407-Reviews-Setas_de_Sevilla_Metropol_Parasol-Seville_Province_of_Seville_Andalucia.html',
  'img/13.png'),

  
 new attraction(
  14,
  'Casa de Pilatos',
  37.390007,
  -5.987210,
  'Plaza Pilatos 1, 41003 Seville, Spain',
  'The Casa de Pilatos is a palace located in the Spanish city of Seville , in Andalusia belonging \
  to the Casa de Medinaceli . It constitutes one of the most emblematic buildings of Andalusian civil \
  architecture of the 16th century and presents a combination of the Italian Renaissance and Spanish Mudejar styles.',
  '<strong>Sun to Sat:</strong> 9:00 - 18:00',
  8,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d191201-Reviews-Casa_de_Pilatos-Seville_Province_of_Seville_Andalucia.html',
  'img/14.png'),

  
 new attraction(
  15,
  'Plaza de Toros de la Maestranza',
  37.386017,
  -5.998398,
  'Paseo de Cristobal Colon 12 | Paseo de Colón, 2, 41001 Seville, Spain',
  'The Plaza de toros de la Real Maestranza de Caballería de Sevilla is a 12,000-capacity bullring in Seville, \
  Spain. During the annual Sevilla Fair in Seville, it is the site of one of the most well-known bullfighting \
  festivals in the world. It is a part of the Real Maestranza de Caballería de Sevilla, a noble guild established \
  for traditional cavalry training. The ring itself is considered one of the city\'s most enjoyable tourist \
  attractions and is certainly one of the most visited. As a stage for bullfighting, it is considered one of \
  the world\'s most challenging environments because of its history, characteristics, and viewing public, \
  which is considered one of the most unforgiving in all of bullfighting fandom.',
  '<strong>Sun to Sat:</strong> 9:30 - 19:00',
  5,
  'elfsight-app-4b77e341-d475-4bd6-b8c1-82e8b85827a8',
  'https://www.tripadvisor.com/Attraction_Review-g187443-d539272-Reviews-Plaza_de_Toros_de_la_Maestranza-Seville_Province_of_Seville_Andalucia.html',
  'img/15.png'),
 
];

// Script to create the cards on the website
for(var i=1; i < top15.length; i++){
  $('.row').append('<div id="c' + i + '" class="cardcontainer"></div>');
  $('#c' + i).append('<div id="cc' + i + '" class="card"></div>');
  $('#cc' + i).append('<img id="ccc' + i + '" class="cardimage" src="' + top15[i].imgsrc + '">');
  $('#c' + i).append('<div id="cccc' + i + '" class="cardnumber">' + i + '</div>');
  $('#cc' + i).append('<div id="ccccc' + i + '" class="cardtext"><h1>' + top15[i].name + '</h1></div>');
  $('#ccccc' + i).append('<div id="cccccc' + i + '" class="cardwrapper"></div>');
  $('#cccccc' + i).append('<div id="ccccccc' + i + '" class="cardhours"></div>');
  $('#ccccccc' + i).append('<i class="far fa-clock"></i><div id="cccccccc' + i + '" class="text hours' + i + '">Not available</div>');
  $('#cccccc' + i).append('<input type="button" class="infobutton" id="' + i + '" value="More Info"/>');
};


// When 'More info' is clicked
$('.infobutton').click(function info(){

  $('.hours_full').hide();
  $('.exchange_full').hide();

  let i = this.id;
  $('.ce1').text('(Click for full hours)');
  $('.ce2').text('(Click for rates)');
  if (top15[i].admission === 0){
    $('.ce2').text('');
  }
  if (top15[i].hours === ''){
    $('.ce1').text('');
  }
  
  $('.dropdwn').css('style', 'display: none');
  $('.maincardimage').attr('src', top15[i].imgsrc);
  $('.maincardheading').html('<h2>' + top15[i].name + '</h2>');
  $('.description').html('<p>' + top15[i].desc + '</p><div class="address"><strong>Address: </strong>' + top15[i].addr + '</div>');
  let hours = $('.hours' + i).text();
  $('#hours').html(hours);
  $('.hours_full').html(top15[i].hours);
  $('.taurl').attr('href', top15[i].taurl);
  $('.taurl').attr('target', '_blank');
  $('.maincardreviews').html('<script src="https://apps.elfsight.com/p/platform.js" defer></script><div class="' + top15[i].reviewsrc + '"></div>');
  $('.container').slideDown(300);
  $('.clickexpand').show();

  if (top15[i].hours === ''){
    $('.ce1').hide();   
  };

  // AJAX to fetch exchange rates API
  $(function(){
    $.ajax({
      type: 'GET',
      url: 'https://openexchangerates.org/api/latest.json?app_id=11539c96263d4a6391c9e6d211ef3811',
      success: function(data) {
      console.log('Exchange data fetched successfully.');
      let eur = top15[i].admission;
      
      let eur_rate = data.rates.EUR;
      let gbp_rate = data.rates.GBP;  
      let jpy_rate = data.rates.JPY;  
      let cny_rate = data.rates.CNY;  
      
      let usd = Math.round((eur/eur_rate + 0.00001) * 100) / 100;
      let gbp = Math.round((usd*gbp_rate + 0.00001) * 100) / 100;
      let jpy = Math.round((usd*jpy_rate + 0.00001) * 100) / 100;
      let cny = Math.round((usd*cny_rate + 0.00001) * 100) / 100;
        if (eur === 0){
          $('.exchange_full').html('');
          $('#euro').html('No entrance fee');
          $('.ce2').hide();
        }
        else {
          $('.exchange_full').html('<strong>USD</strong> ' + usd +
                               '<br><strong>GBP</strong> ' + gbp +
                               '<br><strong>JPY</strong> ' + jpy +
                               '<br><strong>CNY</strong> ' + cny
                               );
          $('#euro').html('Entrance from:<br>EUR ' + eur);
        }
      }
    });
  });

  // Scrolls up to the new content
  let element = document.getElementById('loadbuttons');
  element.scrollIntoView({behavior: "smooth"});
});

// Set the last clicked button to red
$('#b1').click(function(){
  $('#b1').css({
    'color': '#C14957'
  })
  $('#b2').css({
    'color': 'black'
  })
  $('#b3').css({
    'color': 'black'
  })
});
$('#b2').click(function(){
  $('#b1').css({
    'color': 'black'
  })
  $('#b2').css({
    'color': '#C14957'
  })
  $('#b3').css({
    'color': 'black'
  })
});
$('#b3').click(function(){
  $('#b1').css({
    'color': 'black'
  })
  $('#b2').css({
    'color': 'black'
  })
  $('#b3').css({
    'color': '#C14957'
  })
});


// Close button for container
$('.fa-times').click(function(){
  $('.container').slideUp(300);
});

// Toggles visibility for hours and exchange rates
$('.ce1').click(function(){
  $('.hours_full').slideToggle(200);
  $('.ce1').slideToggle(200);
});
$('.ce2').click(function(){
  $('.exchange_full').slideToggle(200);
  $('.ce2').slideToggle(200);
});

// Resize map div to fit window
setInterval(function(){
  let h = window.innerHeight*0.80;	
	$('iframe').attr('style', 'height: ' + h + 'px');
}, 1);

//Adjust page margin according to viewport width
setInterval(function(){
  let width = window.innerWidth;
  if (width > 1200){
    let margin = (width-1200)/29; 
    $('.background').css('margin-left', margin + '%');
    $('.background').css('margin-right', margin + '%');
  }
  else {
    $('.background').css('margin', 0);
  };
}, 1);

// Changes SRC for iframe element
$('.loadbutton').click(function(){
  let data = this.getAttribute("data-src");
  $('iframe').attr('src', data);
});


// Script for opening hours
let dayOfWeek = (new Date).getDay();

const openinghours = [ 
  // Empty first line to line up the numbers
  0,

  // Attraction 1
  [
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00"],

  // Attraction 2  
  [
    "Closed today",
    "Open today 24 hours",
    "Open today 24 hours",
    "Open today 24 hours",
    "Open today 24 hours",
    "Open today 24 hours",
    "Open today 24 hours"],

  // Attraction 3
  [
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00",
    "Open today from 9:30 to 17:00"],

  // Attraction 4  
  [
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open"],

  // Attraction 5
  [
    "Open today from 14:30 to 18:00",
    "Open today from 11:00 to 15:30",
    "Open today from 11:00 to 17:00",
    "Open today from 11:00 to 17:00",
    "Open today from 11:00 to 17:00",
    "Open today from 11:00 to 17:00",
    "Open today from 11:00 to 17:00"],

  // Attraction 6  
  [
    "Open today from 8:00 to 22:00",
    "Open today from 8:00 to 22:00",
    "Open today from 8:00 to 22:00",
    "Open today from 8:00 to 22:00",
    "Open today from 8:00 to 22:00",
    "Open today from 8:00 to 22:00",
    "Open today from 8:00 to 22:00"],

  // Attraction 7
  [
    "Open today from 15:00 to 19:30",
    "Open today from 11:00 to 18:00",
    "Open today from 11:00 to 18:00",
    "Open today from 11:00 to 18:00",
    "Open today from 11:00 to 18:00",
    "Open today from 11:00 to 18:00",
    "Open today from 11:00 to 18:00"],

  // Attraction 8  
  [
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open"],

  // Attraction 9
  [
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open",
    "Always open"],

  // Attraction 10  
  [
    "Open today from 10:00 to 17:15",
    "Open today from 10:00 to 17:15",
    "Open today from 10:00 to 17:15",
    "Open today from 10:00 to 17:15",
    "Open today from 10:00 to 17:15",
    "Open today from 10:00 to 17:15",
    "Open today from 10:00 to 17:15"],

  // Attraction 11
  [
    "Open today from 10:00 to 16:45",
    "Open today from 10:00 to 20:15",
    "Open today from 10:00 to 20:15",
    "Open today from 10:00 to 20:15",
    "Open today from 10:00 to 20:15",
    "Open today from 10:00 to 20:15",
    "Open today from 10:00 to 20:15"],

  // Attraction 12 
  [
    "Open today from 9:00 to 14:00 and from 17:00 to 21:00",
    "Open today from 9:00 to 14:00 and from 17:00 to 21:00",
    "Open today from 9:00 to 14:00 and from 17:00 to 21:00",
    "Open today from 9:00 to 14:00 and from 17:00 to 21:00",
    "Open today from 9:00 to 14:00 and from 17:00 to 21:00",
    "Open today from 9:00 to 14:00 and from 17:00 to 21:00",
    "Open today from 9:00 to 14:00 and from 17:00 to 21:00"],

  // Attraction 13
  [
    "Open today from 9:30 to 22:30",
    "Open today from 9:30 to 22:30",
    "Open today from 9:30 to 22:30",
    "Open today from 9:30 to 22:30",
    "Open today from 9:30 to 22:30",
    "Open today from 9:30 to 23:30",
    "Open today from 9:30 to 23:30"],

  // Attraction 14 
  [
    "Open today from 9:00 to 18:00",
    "Open today from 9:00 to 18:00",
    "Open today from 9:00 to 18:00",
    "Open today from 9:00 to 18:00",
    "Open today from 9:00 to 18:00",
    "Open today from 9:00 to 18:00",
    "Open today from 9:00 to 18:00"],

  // Attraction 15
  [
    "Open today from 9:30 to 19:00",
    "Open today from 9:30 to 19:00",
    "Open today from 9:30 to 19:00",
    "Open today from 9:30 to 19:00",
    "Open today from 9:30 to 19:00",
    "Open today from 9:30 to 19:00",
    "Open today from 9:30 to 19:00"]
];

  // Set html of class 'hoursX' to the correct opening hours
  for (i = 1; i < top15.length; i++) {
  document.getElementsByClassName('hours' + i)[0].innerHTML = openinghours[i][dayOfWeek];
  }

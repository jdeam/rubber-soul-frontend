const loremIpsum = require('lorem-ipsum');
const loremConfig = { count: 1, units: 'paragraphs' };
const path = require('path');
const fs = require('fs');

let shoes = [
  {
    model: 'Skwama',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10s_by_skwama_blackyellow_1_7.jpg',
    color: 'yellow',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Genius',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10r_re_genius_1_8.jpg',
    color: 'red',
    price: 195.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'no-edge'],
    reviews: []
  },
  {
    model: 'Cobra Eco',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20o_804705_cobraeco_falconbrownapplegreen_1.jpg',
    color: 'brown',
    price: 140.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['slipper', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Testarossa',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/5/255_testarossa_1_7.jpg',
    color: 'Red',
    price: 180.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned'],
    reviews: []
  },
  {
    model: 'Mythos Eco',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20d_801801_mythoseco_taupe_1_1.jpg',
    color: 'Brown',
    price: 155.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Solution',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/9/199_wy_solution_whiteyellow_1_7.jpg',
    color: 'Yellow',
    price: 180.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'TC Pro',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/8/6/861_sage_tcpro_1_7.jpg',
    color: 'Green',
    price: 185.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff'],
    reviews: []
  },
  {
    model: 'Futura',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10e_blue_futura_blue_1_6.jpg',
    color: 'Blue',
    price: 185.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'no-edge'],
    reviews: []
  },
  {
    model: 'Otaki',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10t_bf_otaki_blueflame_1_8.jpg',
    color: 'Blue',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Maverink',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20c_304702_maverink_flamesulphur_1_1.jpg',
    color: 'Orange',
    price: 120.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Oxygym',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10n_900702_oxygym_carbonsulphur_1_3.jpg',
    color: 'Orange',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Finale',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10v_bo_finale_brownorange_v2_1_1.jpg',
    color: 'Orange',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat'],
    reviews: []
  },
  {
    model: 'Kataki',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20a_606702_kataki_oceansulphur_1_1.jpg',
    color: 'Blue',
    price: 170.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned'],
    reviews: []
  },
  {
    model: 'Miura VS',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/5/5/555_yellow_miuravs_1_7.jpg',
    color: 'Yellow',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Tarantulace',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10f_304304_tarantulace_flame_1.jpg',
    color: 'Red',
    price: 80.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Tarantula',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10c_kiwi_tarantula_kiwigrey_1_9.jpg',
    color: 'Green',
    price: 90.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Miura',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/9/7/971_yel_miura_1_7.jpg',
    color: 'Yellow',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned'],
    reviews: []
  },
  {
    model: 'Mythos',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/3/230_terra_mythos_1_9.jpg',
    color: 'Orange',
    price: 145.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Katana Lace',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/8/0/800_yellow_katanalace_1_8.jpg',
    color: 'Yellow',
    price: 185.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat'],
    reviews: []
  },
  {
    model: 'Miura XX',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10z_999702_miuraxx_blacksulphur_1_22.jpg',
    color: 'Yellow',
    price: 200.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Futura Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20f_704000_futurawomens_jadegreenwhite_1.jpg',
    color: 'Green',
    price: 185.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'no-edge', 'women\'s'],
    reviews: []
  },
  {
    model: 'Miura Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/9/299_nc_miurawomens_1_6.jpg',
    color: 'White',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Solution Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10j_wp_solutionwomens_pink_1_6.jpg',
    color: 'Pink',
    price: 180.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Otaki Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10u_sc_otakiwomens_sulphurcoral_1_6.jpg',
    color: 'Yellow',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'women\'s'],
    reviews: []
  },
  {
    model: 'Mythos Eco Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20e_703703_mythosecowomens_greenbay_1_1.jpg',
    color: 'Green',
    price: 155.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Finale Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10w_gc_finalewomens_greycoral_1_7.jpg',
    color: 'Gray',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Skwama Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20i_705613_skwamawomens_applegreencobaltblue_1.jpg',
    color: 'Green',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Kataki Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20b_609301_katakiwomens_mintcoral_1_3.jpg',
    color: 'Green',
    price: 170.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Oxygym Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10o_wc_oxygymwomens_1_6.jpg',
    color: 'Red',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Miura VS Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/8/6/865_bl_miuravswomens_blue_1_6.jpg',
    color: 'Blue',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'stiff', 'women\'s'],
    reviews: []
  },
  {
    model: 'Tarantulace Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10q_turq_tarantulacewomens_1_6.jpg',
    color: 'Blue',
    price: 80.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Tarantula Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/10k_301301_tarantulawomens_coral_1_1.jpg',
    color: 'Red',
    price: 90.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Mythos Women\'s',
    brand: 'La Sportiva',
    imgURL: 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/3/234_green_mythoswomens_pistachio_1_6.jpg',
    color: 'Green',
    price: 145.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Quantum VCS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw28f19cd9/images/5582_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Green',
    price: 185.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Quantum',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwf03c41e2/images/5246_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Blue',
    price: 185.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Team VXI',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw3be8355a/images/5110_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Green',
    price: 185.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Team 5.10',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw93d6fb25/images/5001_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Black',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Anasazi Pro WMNS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw942474b8/images/5578_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Pink',
    price: 170.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Anasazi Pro',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw9bc4cb1f/images/5577_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Yellow',
    price: 170.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Anasazi LV WMNS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwd7aebe29/images/5010_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Blue',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Hiangle WMNS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwc2e6e8c4/images/5186_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Pink',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Anasazi VCS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwbdeeaae7/images/5401_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Orange',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Hiangle',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwb083f48f/images/5394_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Blue',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Verdon VCS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwe167839e/images/5241_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'White',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Anasazi Lace',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw4ad38c9e/images/5106_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Pink',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff'],
    reviews: []
  },
  {
    model: 'Moccasym',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw605b3f2b/images/5012_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Red',
    price: 125.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['slipper', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Gambit VCS WMNS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw0faa9c8e/images/5513_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Blue',
    price: 120.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Gambit VCS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw864f1faa/images/5382_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Green',
    price: 120.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Gambit Lace',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw49d1cd6c/images/5381_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Green',
    price: 120.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Wall Master',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dw6f7c31c2/images/5277_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Red',
    price: 100.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Rogue VCS WMNS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwd123b2b9/images/5099_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Purple',
    price: 100.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Rogue VCS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwe686f903/images/5102_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Blue',
    price: 100.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Rogue VCS',
    brand: 'Five Ten',
    imgURL: 'http://www.adidasoutdoor.com/dw/image/v2/AAVD_PRD/on/demandware.static/-/Sites-adidasOutdoor-master/default/dwe686f903/images/5102_SLC_eCom.jpg?sw=400&sh=400&sm=fit&sfrm=jpg',
    color: 'Blue',
    price: 100.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Oracle',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0331.jpg',
    color: 'Red',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned'],
    reviews: []
  },
  {
    model: 'The General',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0332.jpg',
    color: 'Blue',
    price: 170.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff'],
    reviews: []
  },
  {
    model: 'Agro',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0245.jpg',
    color: 'Red',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Shakra',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0292.jpg',
    color: 'Yellow',
    price: 160.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Shaman',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0244.jpg',
    color: 'Blue',
    price: 160.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Supra',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0291.jpg',
    color: 'Green',
    price: 145.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'X1',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0333.jpg',
    color: 'Blue',
    price: 140.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Ashima',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0278.jpg',
    color: 'Red',
    price: 120.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Kira',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0248.jpg',
    color: 'Blue',
    price: 130.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Kronos',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0247.jpg',
    color: 'Black',
    price: 130.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Addict',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0183.jpg',
    color: 'Yellow',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['slipper', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Defy Black',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0317.jpg',
    color: 'Black',
    price: 89.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Elektra',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0290.jpg',
    color: 'Blue',
    price: 89.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Nighthawk',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0334.jpg',
    color: 'Black',
    price: 79.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat'],
    reviews: []
  },
  {
    model: 'Skyhawk',
    brand: 'Evolv',
    imgURL: 'https://evolvsports.com/shop/images/products/preview/evl0335.jpg',
    color: 'White',
    price: 79.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Furia',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/FURIA.png',
    color: 'Black',
    price: 180.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Boostic',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/Boostic.png',
    color: 'Blue',
    price: 180.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Booster',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/BOOSTER-S.png',
    color: 'Blue',
    price: 180.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Instinct VS',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/InstinctVS.png',
    color: 'Orange',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Vapor',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/vapor.png',
    color: 'Yellow',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned'],
    reviews: []
  },
  {
    model: 'Vapor V',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources//images/VaporV-M-S17.png',
    color: 'Yellow',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Vapor V Women\'s',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources//images/VaporV-W-S17.png',
    color: 'Blue',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Instinct S',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/InstinctS.png',
    color: 'Orange',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['slipper', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Stix',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/Stix.png',
    color: 'White',
    price: 160.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['slipper', 'downturned'],
    reviews: []
  },
  {
    model: 'Techno X',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/70099_001_original-2.jpeg',
    color: 'Orange',
    price: 155.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff'],
    reviews: []
  },
  {
    model: 'Techno X Women\'s',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/70099_002_original.png',
    color: 'Orange',
    price: 155.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff', 'women\'s'],
    reviews: []
  },
  {
    model: 'Helix',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/helix%20mens.png',
    color: 'Blue',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat'],
    reviews: []
  },
  {
    model: 'Chimera',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources//images/CHIMERA-YELLOW-BLACK-VIVID-BLUE_EST-777050-29.jpeg',
    color: 'Yellow',
    price: 210.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Drago',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/DRAGO_web-2.png',
    color: 'Yellow',
    price: 200.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Force V',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources//images/ForceV_M-S17-EST-1.png',
    color: 'Gray',
    price: 135.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Force V Women\'s',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources//images/ForceV-W-S17-EST-1.png',
    color: 'Blue',
    price: 135.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Helix Women\'s',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/helix%20womens.png',
    color: 'Orange',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Origin Women\'s',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources//images/Origin-W-S17-EST-1.png',
    color: 'Blue',
    price: 95.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Instinct VSR',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources//images/InstinctVSR_S17-EST-1.png',
    color: 'Blue',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Instinct',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/Instinct-1.png',
    color: 'Orange',
    price: 175.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Origin',
    brand: 'Scarpa',
    imgURL: 'https://www.scarpa.com/resources/images/ORIGIn.png',
    color: 'Blue',
    price: 95.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Redline',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Redline_1000x.jpg?v=1478284532',
    color: 'Red',
    price: 169.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Drone LV',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Drone_LV_1000x.jpg?v=1502340796',
    color: 'Green',
    price: 129.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Drone HV',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Drone_HV_1000x.jpg?v=1502729001',
    color: 'Blue',
    price: 129.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Lotus',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Lotus_1000x.jpg?v=1501879478',
    color: 'Purple',
    price: 119.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Shark 2.0',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Shark_1000x.jpg?v=1501879567',
    color: 'Red',
    price: 119.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Lyra',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Lyra2_1000x.jpg?v=1501879488',
    color: 'Blue',
    price: 105.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'M5',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/M52_1000x.jpg?v=1501879499',
    color: 'White',
    price: 105.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Weaver',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Weaver_1000x.jpg?v=1510333864',
    color: 'Orange',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Remora',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Remora_2_1000x.jpg?v=1501879556',
    color: 'Blue',
    price: 93.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['slipper', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Flash 2018',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Flash_2018_1000x.jpg?v=1510333517',
    color: 'White',
    price: 89.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Pulse Negative',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Pulse_Negative2_1000x.jpg?v=1501879521',
    color: 'Red',
    price: 89.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Pulse Positive',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Pulse_Positive2_1000x.jpg?v=1501879533',
    color: 'Blue',
    price: 89.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Agama',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Agama_Yellow2_1000x.jpg?v=1502341326',
    color: 'Yellow',
    price: 83.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Drifter',
    brand: 'Mad Rock',
    imgURL: 'https://cdn.shopify.com/s/files/1/0272/5951/products/Drifter_Azul2_1000x.jpg?v=1506114440',
    color: 'Gray',
    price: 83.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Advance - Lace',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/178/large/photo01.jpg?7002347',
    color: 'Red',
    price: 79.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Narsha Orange (Wide Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/40/large/photo01.jpg?4009032',
    color: 'Orange',
    price: 179.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Narsha Blue (Narrow Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/39/large/photo01.jpg?2730380',
    color: 'Blue',
    price: 179.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'stiff'],
    reviews: []
  },
  {
    model: 'Mantra Orange (Narrow Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/37/large/photo01.jpg?4009927',
    color: 'Orange',
    price: 145.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Mantra Green (Wide Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/36/large/photo01.jpg?4011022',
    color: 'Green',
    price: 145.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Libra (Narrow Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/198/large/photo01.jpg?4012169',
    color: 'White',
    price: 110.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Endeavor Sierra Gold (Narrow Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/32/large/photo01.jpg?4015752',
    color: 'Orange',
    price: 98.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Endeavor Moss (Wide Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/31/large/photo01.jpg?4309072',
    color: 'Green',
    price: 98.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft'],
    reviews: []
  },
  {
    model: 'Endeavor Lavender (Narrow Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/199/large/photo01.jpg?4309635',
    color: 'Purple',
    price: 98.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Endeavor Crimson (Narrow Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/197/large/photo01.jpg?4310315',
    color: 'Red',
    price: 98.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'soft', 'women\'s'],
    reviews: []
  },
  {
    model: 'Altura Orange (Regular Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/28/large/photo01.jpg?4311065',
    color: 'Orange',
    price: 155.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff'],
    reviews: []
  },
  {
    model: 'Altura Green (Wide Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/27/large/photo01.jpg?4311951',
    color: 'Green',
    price: 155.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff'],
    reviews: []
  },
  {
    model: 'Acro Orange (Wide Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/24/large/photo01.jpg?4313198',
    color: 'Orange',
    price: 154.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Acro Blue (Narrow Fit)',
    brand: 'Butora',
    imgURL: 'http://cdn1.leadcommerce.com/files/c/aG1ob3V0ZG9vcnMuY29t/assets/images/products/23/large/photo01.jpg?4314495',
    color: 'Blue',
    price: 154.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'soft'],
    reviews: []
  },
  {
    model: 'Mundaka',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/mundaka/tenaya--escalada--galeria--mundaka.jpg',
    color: 'Green',
    price: 180.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Iati',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/iati/tenaya--escalada--galeria--iati.jpg',
    color: 'Red',
    price: 170.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Tarifa',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/tarifa/tenaya--escalada--galeria--tarifa.jpg',
    color: 'White',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'downturned'],
    reviews: []
  },
  {
    model: 'Oasi',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/oasi/tenaya--escalada--galeria--oasi.jpg',
    color: 'White',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned'],
    reviews: []
  },
  {
    model: 'Oasi Woman',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/oasi-woman/tenaya--escalada--galeria--oasi-woman.jpg',
    color: 'Blue',
    price: 165.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'women\'s'],
    reviews: []
  },
  {
    model: 'Ra',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/ra/tenaya--escalada--galeria--ra.jpg',
    color: 'Orange',
    price: 140.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Masai',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/masai/tenaya--escalada--galeria--masai.jpg',
    color: 'Yellow',
    price: 140.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat'],
    reviews: []
  },
  {
    model: 'Inti',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/inti/tenaya--escalada--galeria--inti.jpg',
    color: 'Blue',
    price: 130.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Tatanka',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/inti/tenaya--escalada--galeria--inti.jpg',
    color: 'Orange',
    price: 150.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat'],
    reviews: []
  },
  {
    model: 'Aqua+',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/aqua/tenaya--escalada--galeria--aqua.jpg',
    color: 'Blue',
    price: 140.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Tanta',
    brand: 'Tenaya',
    imgURL: 'https://tenaya.net/img/productos/climbing/tanta/tenaya--escalada--galeria--tanta.jpg',
    color: 'Blue',
    price: 99.00,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Momentum Lace',
    brand: 'Black Diamond',
    imgURL: 'https://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dwfc11f9b7/products/S18_Product_Images/Equipment/BD_Mens_MomentumLace_Midnight_Profile%20copy.jpg?sw=472',
    color: 'Blue',
    price: 79.95,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat'],
    reviews: []
  },
  {
    model: 'Momentum Lace - Women\'s',
    brand: 'Black Diamond',
    imgURL: 'https://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dw48d88c30/products/S18_Product_Images/Equipment/BD_Womens_MomentumLace_Ash_3QTR%20copy.jpg?sw=472',
    color: 'Gray',
    price: 79.95,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Momentum',
    brand: 'Black Diamond',
    imgURL: 'https://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dw16cbbc84/products/S18_Product_Images/Equipment/570101_CRRY_Mens_Momentum_Curry_Main.jpg?sw=472',
    color: 'Yellow',
    price: 89.95,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat'],
    reviews: []
  },
  {
    model: 'Momentum - Women\'s',
    brand: 'Black Diamond',
    imgURL: 'https://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dw6cbb8ab2/products/shoes/570106_MERL_MomentumShoe_Wt_3QTR_web.jpg?sw=472',
    color: 'Purple',
    price: 89.95,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'flat', 'women\'s'],
    reviews: []
  },
  {
    model: 'Aspect',
    brand: 'Black Diamond',
    imgURL: 'http://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dwd32de28e/products/shoes/F17%20shoes/P_BD570111_AspectShoeMedial_web.jpg?sw=472',
    color: 'White',
    price: 139.95,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['lace-up', 'flat', 'stiff'],
    reviews: []
  },
  {
    model: 'Shadow',
    brand: 'Black Diamond',
    imgURL: 'http://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dwce9cf23f/products/shoes/F17%20shoes/570112_BLAK_ShadowBlk_3QTR_web.jpg?sw=472',
    color: 'Black',
    price: 179.95,
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    tags: ['velcro', 'downturned', 'soft'],
    reviews: []
  },
];

shoes = shoes.map(shoe => {
  shoe.description = loremIpsum(loremConfig);
  shoe.sizes = shoe.sizes.map(size => {
    return { [size]: Math.floor(Math.random()*4) }
  });
  return shoe;
});

const filePath = path.join(__dirname, 'shoeData.json')
fs.writeFileSync(filePath, JSON.stringify(shoes));

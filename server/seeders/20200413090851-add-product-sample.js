'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'sendok',
      image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/9/2614418/2614418_0cc61f2f-4063-485e-9e12-154ee5113d9a_700_700.jpg',
      price: 5000,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'garpu',
      image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/9/2614418/2614418_2af5f5bb-77af-488e-a903-26e482d47081_700_700.jpg',
      price: 4000,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'sumpit',
      image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/6/9/397030/397030_c0583464-3d66-4b99-81cc-329b877b94cb_2048_0.jpg',
      price: 7000,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'piring',
      image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/20/22748487/22748487_594f6876-8925-47af-aa6e-c717a64cb5f1_2048_2048.jpg',
      price: 13000,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'nampan',
      image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/10/437816884/437816884_340a0783-2e8f-484d-b916-ef41939ba278_1512_1512.jpg',
      price: 26000,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'kuali',
      image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/30/849977/849977_260bca77-d1af-4853-87e3-f2e79b31cce6_700_700.jpg',
      price: 24000,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'panci',
      image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/7/22/849977/849977_2a12a10b-0ce9-4d5e-8345-c7f9db1929eb.jpg',
      price: 30000,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};

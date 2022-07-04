const filterList = [
  {
      group: 'brand',
      operator: '==',
      groupLabel: 'Marcas',
      groupArray: [
          {
              label: 'Nike',
              name: 'nike',
          },
          {
              label: 'Adidas',
              name: 'adidas',
          },
          {
              label: 'Reebok',
              name: 'reebok',
          },
          {
              label: 'Salomon',
              name: 'salomon',
          },
          {
              label: 'Puma',
              name: 'puma',
          }
      ]
  },
  {
      group: 'mount',
      operator: 'array-contains',
      groupLabel: 'Productos',
      groupArray: [
          {
              label: 'Zapatillas',
              name: 'ef',
          },
          {
              label: 'Remeras',
              name: 'efs',
          },
          {
              label: 'Botines',
              name: 'rf',
          },
          {
              label: 'Camperas',
              name: 'x',
          }
      ]
  }



]

export default filterList
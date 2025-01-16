import { defineStore } from 'pinia'  
import retazeImage from '../components/img/retaze-kategoria.jpeg';
import stlpoveImage from '../components/img/stlpove-kategoria.jpeg'

export const useCategoryStore = defineStore('category', {
  state: () => ({    
    categories: [     
      {
        name: 'Stĺpove osvetlenie',
        description:
          'Objavte široký výber stĺpového osvetlenia.',
        imageSrc: stlpoveImage,
        to: '/stlpove'
      },
      {
        name: 'Reťaze',
        description:
          'LED reťaze.',
        imageSrc: retazeImage,
        to: '/retaze'
      }
    ]
  })
})

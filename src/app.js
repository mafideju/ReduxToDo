'use strict'

import React from 'react'

const App = () => (
  <div>
    <input type='text' />
    <ul>
      <li style={{ textDecoration: 'line-through' }}>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
    <div>
      <a href='#'>Todos</a> | <a href='#'>Finalizados</a> | <a href='#'>Para Fazer</a>
    </div>
  </div>
)

export default App

import React from 'react'

const themeContext = React.createContext({
  isDarkThemeActive: false,
  onChangeTheme: () => {},
  carList: [],
  onClickAddVideo: () => {},

})

export default themeContext
